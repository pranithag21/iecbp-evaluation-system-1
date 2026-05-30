/**
 * scorers.js
 *
 * Per-question-type scoring functions.
 *
 * Each scorer receives:
 *   - The user's answer (string, array, or object depending on type)
 *   - The question config (from scenarioPatterns questionConfigs)
 *   - Extracted behavioral data (tokenSet, behaviorMap, patternAnalysis)
 *
 * Each scorer returns:
 *   { rawScore (0–5), signalContributions, breakdown }
 *
 * Question types handled:
 *   mcq          - Multiple choice (exact match, optional partial credit)
 *   dragRank     - Sequence comparison scoring
 *   multiSelect  - Partial credit for correct selections
 *   shortText    - Behavior-based scoring for descriptive answers
 *   audioText    - Same as shortText (transcript/observation evaluated as text)
 *   videoText    - Same as shortText
 *   yesNo        - Binary answer + reasoning quality scoring
 */

const { countKeywordHits, findMatchedKeywords } = require('./winkExtractor');
const { computeBehaviorDensity }                = require('./behaviorMappings');
const { computePatternScore }                   = require('./strongWeakPatterns');

// ─────────────────────────────────────────────────────────────────────────────
// MCQ SCORER
// Exact match or partial credit based on option score map.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * scoreMCQ
 * @param {string} userAnswer      - User's selected option letter/text
 * @param {Object} questionConfig  - Must contain: correctAnswer, options
 * @returns {{ rawScore, breakdown }}
 */
function scoreMCQ(userAnswer, questionConfig) {
  const { options, correctAnswer, partialCredit } = questionConfig;

  if (!userAnswer || !options) {
    return { rawScore: 0, breakdown: { reason: 'No answer provided or missing config' } };
  }

  // Normalize answer: trim and uppercase for letter-based MCQs
  const normalized = userAnswer.toString().trim().toUpperCase();

  // If options is a score map {A: 5, B: 3, ...}
  if (typeof Object.values(options)[0] === 'number') {
    const score = options[normalized] ?? options[userAnswer.trim()] ?? 0;
    return {
      rawScore: score,
      breakdown: {
        selected:      userAnswer,
        correctAnswer,
        score,
        isCorrect:     normalized === correctAnswer?.toUpperCase()
      }
    };
  }

  // If options is a text-keyed score map {"Option text": score}
  const matchedKey = Object.keys(options).find(key =>
    key.trim().toUpperCase() === userAnswer.trim().toUpperCase() ||
    key.includes(userAnswer.trim())
  );

  const score = matchedKey ? options[matchedKey] : 0;

  return {
    rawScore: score,
    breakdown: {
      selected:  userAnswer,
      correctAnswer,
      score,
      isCorrect: score === 5
    }
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// DRAG-RANK SCORER
// Compares user's ranking sequence against the ideal ranking.
// Awards full points for perfect match, partial for partially correct order.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * scoreDragRank
 * @param {string[]} userRanking   - User's ordered list of items
 * @param {Object}   questionConfig - Must contain: idealRanking, rankingWeights
 * @returns {{ rawScore, breakdown }}
 */
function scoreDragRank(userRanking, questionConfig) {
  const { idealRanking, rankingWeights } = questionConfig;

  if (!userRanking || !Array.isArray(userRanking) || userRanking.length === 0) {
    return { rawScore: 0, breakdown: { reason: 'No ranking provided' } };
  }
  if (!idealRanking || !rankingWeights) {
    return { rawScore: 0, breakdown: { reason: 'Missing ideal ranking config' } };
  }

  let weightedScore = 0;
  const positionResults = [];

  idealRanking.forEach((idealItem, idealPos) => {
    // Find where the user placed this item
    const userPos = userRanking.findIndex(item =>
      item.trim().toLowerCase() === idealItem.trim().toLowerCase() ||
      item.trim().toLowerCase().includes(idealItem.trim().toLowerCase().substring(0, 10))
    );

    const posWeight = rankingWeights[idealPos] || 0;

    if (userPos === -1) {
      // Item not ranked at all
      positionResults.push({ item: idealItem, idealPos, userPos: 'missing', credit: 0 });
    } else {
      // Credit based on proximity to ideal position
      const distance   = Math.abs(userPos - idealPos);
      const n          = idealRanking.length;
      // Full credit if exact; decreasing credit for each position off
      const posCredit  = Math.max(0, 1 - (distance / n));

      weightedScore += posWeight * posCredit;
      positionResults.push({ item: idealItem, idealPos, userPos, credit: posCredit.toFixed(2) });
    }
  });

  // Scale to 0–5
  const rawScore = Math.min(weightedScore * 5, 5);

  return {
    rawScore: parseFloat(rawScore.toFixed(2)),
    breakdown: { positionResults, idealRanking, userRanking }
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// MULTI-SELECT SCORER
// Awards partial credit for correct selections; penalizes wrong selections.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * scoreMultiSelect
 * @param {string[]} userSelections  - Array of selected option strings
 * @param {Object}   questionConfig  - Must contain: correctAnswers, allOptions, partialCreditAnswers?, poorAnswers?
 * @returns {{ rawScore, breakdown }}
 */
function scoreMultiSelect(userSelections, questionConfig) {
  const {
    correctAnswers,
    allOptions,
    partialCreditAnswers = [],
    poorAnswers          = [],
    maxScore             = 5
  } = questionConfig;

  if (!userSelections || !Array.isArray(userSelections) || !correctAnswers) {
    return { rawScore: 0, breakdown: { reason: 'No selections or missing config' } };
  }

  const normalize = s => s.trim().toLowerCase();
  const userNorm  = userSelections.map(normalize);
  const corrNorm  = correctAnswers.map(normalize);
  const partNorm  = partialCreditAnswers.map(normalize);
  const poorNorm  = poorAnswers.map(normalize);

  // Count correct hits
  const correctHits = userNorm.filter(u => corrNorm.includes(u)).length;
  const partialHits = userNorm.filter(u => partNorm.includes(u)).length;
  const poorHits    = userNorm.filter(u => poorNorm.includes(u)).length;
  const wrongHits   = userNorm.filter(u =>
    !corrNorm.includes(u) && !partNorm.includes(u) && !poorNorm.includes(u)
  ).length;

  // Scoring formula:
  // Full credit per correct: maxScore / correctAnswers.length
  // Half credit per partial
  // Penalty per poor answer: -0.5
  // Penalty per wrong (not in any list): -0.25

  const perCorrect = maxScore / Math.max(corrNorm.length, 1);
  let score = 0;
  score += correctHits  * perCorrect;
  score += partialHits  * (perCorrect * 0.5);
  score -= poorHits     * 0.5;
  score -= wrongHits    * 0.25;

  const rawScore = Math.min(Math.max(score, 0), maxScore);

  return {
    rawScore: parseFloat(rawScore.toFixed(2)),
    breakdown: {
      userSelections,
      correctHits,
      partialHits,
      poorHits,
      wrongHits,
      scorePerCorrect: perCorrect
    }
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// SHORT TEXT SCORER (also used for audioText and videoText)
// Behavior-based scoring — evaluates reasoning quality, not exact content.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * scoreShortText
 * @param {string[]} allTerms        - Full token set from winkExtractor
 * @param {Object}   behaviorMap     - Detected behaviors
 * @param {Object}   patternAnalysis - Strong/weak pattern analysis
 * @param {Object}   questionConfig  - Must contain: expectedBehaviors, strongIndicators, weakIndicators
 * @param {Object}   strongPatterns  - Scenario's strongPatterns (for computePatternScore)
 * @returns {{ rawScore, breakdown }}
 */
function scoreShortText(allTerms, behaviorMap, patternAnalysis, questionConfig, strongPatterns) {
  const {
    expectedBehaviors  = [],
    strongIndicators   = [],
    weakIndicators     = []
  } = questionConfig;

  // Component 1: Behavior density (0–1) — how many expected behaviors detected
  const behaviorDensity = computeBehaviorDensity(behaviorMap, expectedBehaviors);

  // Component 2: Strong indicator keyword hits (0–1)
  const strongHits  = countKeywordHits(strongIndicators, allTerms);
  const maxStrong   = Math.max(strongIndicators.length, 1);
  const strongRatio = Math.min(strongHits / maxStrong, 1);

  // Component 3: Weak indicator presence (penalty)
  const weakHits   = countKeywordHits(weakIndicators, allTerms);
  const weakPenalty = weakHits > 0 ? 0.3 * Math.min(weakHits, 3) : 0;

  // Component 4: Pattern score (from strong/weak pattern engine)
  const patternScore = computePatternScore(
    patternAnalysis.strongMatches || [],
    patternAnalysis.weakMatches   || [],
    strongPatterns
  );

  // Weighted combination → scale to 0–5
  const combined =
    (behaviorDensity * 0.35) +
    (strongRatio     * 0.30) +
    (patternScore / 5 * 0.35) -
    (weakPenalty  * 0.20);

  const rawScore = Math.min(Math.max(combined * 5, 0.5), 5.0);

  return {
    rawScore: parseFloat(rawScore.toFixed(2)),
    breakdown: {
      behaviorDensity:    parseFloat(behaviorDensity.toFixed(2)),
      strongHits,
      strongRatio:        parseFloat(strongRatio.toFixed(2)),
      weakHits,
      weakPenalty:        parseFloat(weakPenalty.toFixed(2)),
      patternScore:       parseFloat(patternScore.toFixed(2)),
      detectedBehaviors:  Object.entries(behaviorMap)
                            .filter(([, v]) => v.detected)
                            .map(([k]) => k)
    }
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// YES/NO SCORER
// Evaluates correctness of yes/no answer + quality of reasoning text.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * scoreYesNo
 * @param {Object} userAnswer - { answer: 'yes'|'no', reasoning: string }
 * @param {Object} questionConfig - Must contain: acceptableAnswers, strongReasoningKeywords, expectedBehaviors
 * @param {string[]} allTerms - Token set from reasoning text
 * @param {Object}   behaviorMap - From reasoning text
 * @returns {{ rawScore, breakdown }}
 */
function scoreYesNo(userAnswer, questionConfig, allTerms, behaviorMap) {
  const {
    acceptableAnswers       = ['yes', 'no'],
    correctAnswer,
    strongReasoningKeywords = [],
    expectedBehaviors       = []
  } = questionConfig;

  const givenAnswer = (userAnswer?.answer || '').toString().trim().toLowerCase();
  const reasoning   = userAnswer?.reasoning || '';

  // Component 1: Answer correctness (0 or 2.5 points base)
  let answerScore = 0;
  if (correctAnswer) {
    // If a definitive correct answer exists
    answerScore = givenAnswer === correctAnswer.toLowerCase() ? 2.5 : 0;
  } else if (acceptableAnswers.map(a => a.toLowerCase()).includes(givenAnswer)) {
    // Both yes and no are acceptable — full base credit
    answerScore = 1.5;
  }

  // Component 2: Reasoning quality (0–2.5 additional points)
  const reasoningHits   = countKeywordHits(strongReasoningKeywords, allTerms);
  const maxReasoning    = Math.max(strongReasoningKeywords.length, 1);
  const reasoningScore  = Math.min((reasoningHits / maxReasoning) * 2.5, 2.5);

  // Component 3: Behavior presence in reasoning (0–0.5 additional)
  const behaviorDensity  = computeBehaviorDensity(behaviorMap, expectedBehaviors);
  const behaviorBonus    = behaviorDensity * 0.5;

  // Total
  const rawScore = Math.min(answerScore + reasoningScore + behaviorBonus, 5.0);

  return {
    rawScore: parseFloat(rawScore.toFixed(2)),
    breakdown: {
      givenAnswer,
      answerScore,
      reasoningScore: parseFloat(reasoningScore.toFixed(2)),
      reasoningHits,
      behaviorBonus:  parseFloat(behaviorBonus.toFixed(2))
    }
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// AUDIO TEXT SCORER — delegates to shortText
// ─────────────────────────────────────────────────────────────────────────────
function scoreAudioText(allTerms, behaviorMap, patternAnalysis, questionConfig, strongPatterns) {
  return scoreShortText(allTerms, behaviorMap, patternAnalysis, questionConfig, strongPatterns);
}

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO TEXT SCORER — delegates to shortText
// ─────────────────────────────────────────────────────────────────────────────
function scoreVideoText(allTerms, behaviorMap, patternAnalysis, questionConfig, strongPatterns) {
  return scoreShortText(allTerms, behaviorMap, patternAnalysis, questionConfig, strongPatterns);
}

// ─────────────────────────────────────────────────────────────────────────────
// UNIFIED DISPATCHER
// Routes to the correct scorer based on question type.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * scoreQuestion
 * Main dispatcher. Calls the appropriate scorer for the question type.
 *
 * @param {Object} params
 * @param {Object} params.questionConfig   - Full question config
 * @param {*}      params.userAnswer       - Raw user answer (type varies by question type)
 * @param {Object} params.tokenSet         - Output of buildTokenSet()
 * @param {Object} params.behaviorMap      - Output of detectBehaviors()
 * @param {Object} params.patternAnalysis  - Output of getPatternAnalysis()
 * @param {Object} params.strongPatterns   - Scenario's strongPatterns
 * @returns {{ rawScore, breakdown }}
 */
function scoreQuestion({
  questionConfig,
  userAnswer,
  tokenSet,
  behaviorMap,
  patternAnalysis,
  strongPatterns
}) {
  const type      = questionConfig.type;
  const allTerms  = tokenSet?.allTerms || [];

  switch (type) {
    case 'mcq':
      return scoreMCQ(userAnswer, questionConfig);

    case 'dragRank':
      return scoreDragRank(Array.isArray(userAnswer) ? userAnswer : [], questionConfig);

    case 'multiSelect':
      return scoreMultiSelect(Array.isArray(userAnswer) ? userAnswer : [], questionConfig);

    case 'shortText':
      return scoreShortText(allTerms, behaviorMap, patternAnalysis, questionConfig, strongPatterns);

    case 'audioText':
      return scoreAudioText(allTerms, behaviorMap, patternAnalysis, questionConfig, strongPatterns);

    case 'videoText':
      return scoreVideoText(allTerms, behaviorMap, patternAnalysis, questionConfig, strongPatterns);

    case 'yesNo':
      return scoreYesNo(
        typeof userAnswer === 'object' ? userAnswer : { answer: userAnswer, reasoning: '' },
        questionConfig,
        allTerms,
        behaviorMap
      );

    default:
      console.warn(`Unknown question type: ${type} — defaulting to shortText scorer`);
      return scoreShortText(allTerms, behaviorMap, patternAnalysis, questionConfig, strongPatterns);
  }
}

module.exports = {
  scoreMCQ,
  scoreDragRank,
  scoreMultiSelect,
  scoreShortText,
  scoreYesNo,
  scoreAudioText,
  scoreVideoText,
  scoreQuestion
};