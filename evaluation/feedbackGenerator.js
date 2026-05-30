// evaluation/feedbackGenerator.js

/**
 * feedbackGenerator.js
 *
 * Generates human-readable feedback
 * based on signal scores and detected patterns.
 *
 * Fully rule-based.
 * No AI usage.
 */

/**
 * classifySignalLevel
 */
function classifySignalLevel(score) {

  if (score >= 80) {
    return 'strong';
  }

  if (score >= 60) {
    return 'moderate';
  }

  return 'weak';
}

/**
 * generateSignalFeedback
 */
function generateSignalFeedback(signalName, score) {

  const level = classifySignalLevel(score);

  const feedbackMap = {

    understanding: {
      strong:
        'Excellent conceptual understanding demonstrated across the scenario.',

      moderate:
        'Good understanding shown, but some responses lacked deeper reasoning.',

      weak:
        'Responses indicate limited understanding of the core scenario concepts.'
    },

    awareness: {
      strong:
        'Strong awareness of risks, hidden factors, and consequences.',

      moderate:
        'Some awareness was demonstrated, but important factors were occasionally missed.',

      weak:
        'Responses showed limited awareness of risks or surrounding conditions.'
    },

    decision: {
      strong:
        'Decision-making was structured, logical, and prioritized effectively.',

      moderate:
        'Some reasonable decisions were made, but prioritization could improve.',

      weak:
        'Decision-making lacked clarity, prioritization, or justification.'
    },

    clarity: {
      strong:
        'Responses were clear, structured, and easy to follow.',

      moderate:
        'Communication was understandable but occasionally lacked structure.',

      weak:
        'Responses lacked clarity or organized reasoning.'
    }
  };

  return feedbackMap[signalName][level];
}

/**
 * generateStrengths
 */
function generateStrengths(evaluatedQuestions) {

  const strengths = [];

  evaluatedQuestions.forEach(q => {

    if (
      q.strongPatterns &&
      q.strongPatterns.length > 0
    ) {
      strengths.push(
        `Question ${q.questionId}: Demonstrated strong reasoning patterns`
      );
    }

    if (
      q.detectedBehaviors &&
      q.detectedBehaviors.includes('prioritization')
    ) {
      strengths.push(
        `Question ${q.questionId}: Good prioritization awareness`
      );
    }

    if (
      q.detectedBehaviors &&
      q.detectedBehaviors.includes('riskAwareness')
    ) {
      strengths.push(
        `Question ${q.questionId}: Strong risk awareness detected`
      );
    }
  });

  return [...new Set(strengths)].slice(0, 5);
}

/**
 * generateImprovements
 */
function generateImprovements(evaluatedQuestions) {

  const improvements = [];

  evaluatedQuestions.forEach(q => {

    if (
      q.weakPatterns &&
      q.weakPatterns.length > 0
    ) {
      improvements.push(
        `Question ${q.questionId}: Response needs deeper reasoning and stronger justification`
      );
    }

    if (
      q.score < 2.5
    ) {
      improvements.push(
        `Question ${q.questionId}: Improve clarity and explanation quality`
      );
    }

    if (
      q.detectedBehaviors &&
      !q.detectedBehaviors.includes('structuredThinking')
    ) {
      improvements.push(
        `Question ${q.questionId}: Add more structured reasoning`
      );
    }
  });

  return [...new Set(improvements)].slice(0, 5);
}

/**
 * generateOverallSummary
 */
function generateOverallSummary(signals, overallScore) {

  if (overallScore >= 80) {
    return 'The participant demonstrated strong behavioral reasoning, structured thinking, and effective decision-making across the scenario.';
  }

  if (overallScore >= 60) {
    return 'The participant demonstrated moderate reasoning ability with room for improvement in consistency and depth.';
  }

  return 'The participant requires improvement in reasoning structure, awareness, and decision-making quality.';
}

/**
 * Main generator
 */
function generateFeedback({
  signals,
  evaluatedQuestions
}) {

  const overallScore =
    (
      signals.understanding +
      signals.awareness +
      signals.decision +
      signals.clarity
    ) / 4;

  return {

    overallSummary:
      generateOverallSummary(signals, overallScore),

    signalFeedback: {

      understanding:
        generateSignalFeedback(
          'understanding',
          signals.understanding
        ),

      awareness:
        generateSignalFeedback(
          'awareness',
          signals.awareness
        ),

      decision:
        generateSignalFeedback(
          'decision',
          signals.decision
        ),

      clarity:
        generateSignalFeedback(
          'clarity',
          signals.clarity
        )
    },

    strengths:
      generateStrengths(evaluatedQuestions),

    improvements:
      generateImprovements(evaluatedQuestions)
  };
}

module.exports = generateFeedback;