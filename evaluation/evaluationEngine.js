// evaluation/evaluationEngine.js

/**
 * evaluationEngine.js
 *
 * Main orchestration engine for IECBP Evaluation System.
 *
 * Flow:
 * 1. Load scenario pattern config
 * 2. Preprocess answer
 * 3. Extract tokens using WinkNLP
 * 4. Detect behaviors
 * 5. Detect strong/weak patterns
 * 6. Score question
 * 7. Apply question weights
 * 8. Aggregate final signals
 * 9. Generate feedback
 *
 * Fully rule-based.
 * No AI/ML used.
 */

const { preprocess } = require('./preprocess');
const { buildTokenSet } = require('./winkExtractor');

const {
  detectBehaviors,
  mapBehaviorsToSignals
} = require('./behaviorMappings');

const {
  detectStrongPatterns,
  detectWeakPatterns,
  getPatternAnalysis
} = require('./strongWeakPatterns');

const { scoreQuestion } = require('./scorers');

const {
  getWeightsForQuestion
} = require('../data/questionWeights');

const generateFeedback = require('./feedbackGenerator');

// Scenario pattern imports
const scenario1Patterns = require('../data/scenarioPatterns/scenario1Patterns');
const scenario2Patterns = require('../data/scenarioPatterns/scenario2Patterns');
const scenario3Patterns = require('../data/scenarioPatterns/scenario3Patterns');
const scenario4Patterns = require('../data/scenarioPatterns/scenario4Patterns');
const scenario5Patterns = require('../data/scenarioPatterns/scenario5Patterns');
const scenario6Patterns = require('../data/scenarioPatterns/scenario6Patterns');

const scenarioConfigs = {
  1: scenario1Patterns,
  2: scenario2Patterns,
  3: scenario3Patterns,
  4: scenario4Patterns,
  5: scenario5Patterns,
  6: scenario6Patterns
};

/**
 * normalizeSignal
 * Converts accumulated signal into 0–100 scale
 */
function normalizeSignal(value, totalQuestions) {
  const normalized = (value / totalQuestions) * 100;
  return Math.min(Math.max(normalized, 0), 100);
}

/**
 * evaluateSubmission
 *
 * @param {number} scenarioId
 * @param {Array} answers
 *
 * answers format:
 * [
 *   {
 *     questionId: 'q1',
 *     answer: 'some answer'
 *   }
 * ]
 */
async function evaluateSubmission(scenarioId, answers = []) {

  const scenarioConfig = scenarioConfigs[scenarioId];

  if (!scenarioConfig) {
    throw new Error(`Invalid scenarioId: ${scenarioId}`);
  }

  const {
    behaviorKeywords,
    signalMappings,
    strongPatterns,
    weakPatterns,
    questionConfigs
  } = scenarioConfig;

  // Final accumulated signals
  let finalSignals = {
    understanding: 0,
    awareness: 0,
    decision: 0,
    clarity: 0
  };

  const evaluatedQuestions = [];

  // ─────────────────────────────────────────────
  // Process each answer
  // ─────────────────────────────────────────────

  for (const item of answers) {

    const questionId = item.questionId;
    const rawAnswer  = item.answer;

    const questionConfig = questionConfigs[questionId];

    if (!questionConfig) continue;

    // STEP 1 — preprocess
    const cleanedText =
      typeof rawAnswer === 'string'
        ? preprocess(rawAnswer)
        : preprocess(JSON.stringify(rawAnswer));

    // STEP 2 — extract tokens
    const tokenSet = buildTokenSet(cleanedText);

    // STEP 3 — detect behaviors
    const behaviorMap = detectBehaviors(
      tokenSet.allTerms,
      behaviorKeywords
    );

    // STEP 4 — map behaviors → signals
    const behaviorSignals = mapBehaviorsToSignals(
      behaviorMap,
      signalMappings
    );

    // STEP 5 — strong/weak patterns
    const strongMatches = detectStrongPatterns(
      tokenSet.allTerms,
      behaviorMap,
      strongPatterns
    );

    const weakMatches = detectWeakPatterns(
      tokenSet.allTerms,
      behaviorMap,
      weakPatterns,
      tokenSet.allTerms.length
    );

    // STEP 6 — pattern analysis
    const patternAnalysis = getPatternAnalysis(
      strongMatches,
      weakMatches
    );

    // Include matches for scorer
    patternAnalysis.strongMatches = strongMatches;
    patternAnalysis.weakMatches   = weakMatches;

    // STEP 7 — question scoring
    const scoring = scoreQuestion({
      questionConfig,
      userAnswer: rawAnswer,
      tokenSet,
      behaviorMap,
      patternAnalysis,
      strongPatterns
    });

    // STEP 8 — apply question weights
    const weights = getWeightsForQuestion(
      scenarioId,
      questionId
    );

    finalSignals.understanding +=
      scoring.rawScore * weights.understanding;

    finalSignals.awareness +=
      scoring.rawScore * weights.awareness;

    finalSignals.decision +=
      scoring.rawScore * weights.decision;

    finalSignals.clarity +=
      scoring.rawScore * weights.clarity;

    // Store detailed question evaluation
    evaluatedQuestions.push({
      questionId,

      rawAnswer,

      cleanedText,

      extractedTerms: tokenSet.allTerms,

      detectedBehaviors:
        Object.entries(behaviorMap)
          .filter(([, val]) => val.detected)
          .map(([key]) => key),

      strongPatterns:
        strongMatches.map(p => p.pattern),

      weakPatterns:
        weakMatches.map(p => p.pattern),

      score: scoring.rawScore,

      breakdown: scoring.breakdown,

      weightedSignals: {
        understanding:
          scoring.rawScore * weights.understanding,

        awareness:
          scoring.rawScore * weights.awareness,

        decision:
          scoring.rawScore * weights.decision,

        clarity:
          scoring.rawScore * weights.clarity
      }
    });
  }

  // ─────────────────────────────────────────────
  // Normalize signals
  // ─────────────────────────────────────────────

  const totalQuestions = answers.length || 1;

  const normalizedSignals = {
    understanding:
      normalizeSignal(finalSignals.understanding, totalQuestions),

    awareness:
      normalizeSignal(finalSignals.awareness, totalQuestions),

    decision:
      normalizeSignal(finalSignals.decision, totalQuestions),

    clarity:
      normalizeSignal(finalSignals.clarity, totalQuestions)
  };

  // Overall score
  const overallScore =
    (
      normalizedSignals.understanding +
      normalizedSignals.awareness +
      normalizedSignals.decision +
      normalizedSignals.clarity
    ) / 4;

  // Generate feedback
  const feedback = generateFeedback({
    signals: normalizedSignals,
    evaluatedQuestions
  });

  // Final result
  return {
    scenarioId,

    overallScore:
      parseFloat(overallScore.toFixed(2)),

    signals: {
      understanding:
        parseFloat(normalizedSignals.understanding.toFixed(2)),

      awareness:
        parseFloat(normalizedSignals.awareness.toFixed(2)),

      decision:
        parseFloat(normalizedSignals.decision.toFixed(2)),

      clarity:
        parseFloat(normalizedSignals.clarity.toFixed(2))
    },

    feedback,

    evaluatedQuestions,

    evaluatedAt: new Date()
  };
}

module.exports = {
  evaluateSubmission
};