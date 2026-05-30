/**
 * behaviorMappings.js
 *
 * Maps extracted tokens and keyword hits to behavioral indicator categories.
 *
 * This module is the bridge between:
 *   WinkNLP token extraction  →  Behavioral signal detection
 *
 * Core behaviors detected across all scenarios:
 *   - prioritization
 *   - coordination
 *   - riskAwareness
 *   - structuredThinking
 *   - operationalAwareness
 *   - adaptability
 *   - conditionalThinking
 *
 * Additional scenario-specific behaviors (e.g. trustAwareness, systemsAwareness)
 * are loaded from the respective scenarioPatterns file and handled here generically.
 *
 * Behavioral scoring is fully rule-based and explainable.
 */

const { countKeywordHits, findMatchedKeywords } = require('./winkExtractor');

/**
 * detectBehaviors
 * For a given tokenSet and a behavior keyword group map,
 * detects which behaviors are present and how strongly.
 *
 * Returns a behaviorMap: { behaviorName: { hits, matchedKeywords, detected } }
 *
 * @param {string[]} allTerms       - Full token set from buildTokenSet().allTerms
 * @param {Object}  behaviorKeywords - Scenario's behaviorKeywords object
 * @returns {Object}                 - { [behaviorName]: { hits, matchedKeywords, detected } }
 */
function detectBehaviors(allTerms, behaviorKeywords) {
  const behaviorMap = {};

  for (const [behavior, keywords] of Object.entries(behaviorKeywords)) {
    const hits           = countKeywordHits(keywords, allTerms);
    const matchedKeywords = findMatchedKeywords(keywords, allTerms);

    behaviorMap[behavior] = {
      hits,
      matchedKeywords,
      // A behavior is "detected" if at least 1 keyword was matched
      detected: hits >= 1
    };
  }

  return behaviorMap;
}

/**
 * mapBehaviorsToSignals
 * Converts detected behaviors into signal score contributions
 * using the scenario's signalMappings.
 *
 * For each detected behavior, multiplies hit strength by signal contribution weight.
 * Normalizes final signals to a 0–1 range.
 *
 * @param {Object} behaviorMap     - Output of detectBehaviors()
 * @param {Object} signalMappings  - Scenario's signalMappings (behavior → signal weights)
 * @returns {{ understanding, awareness, decision, clarity }} - Raw signal accumulations
 */
function mapBehaviorsToSignals(behaviorMap, signalMappings) {
  const signals = {
    understanding: 0,
    awareness:     0,
    decision:      0,
    clarity:       0
  };

  let totalContributions = 0;

  for (const [behavior, result] of Object.entries(behaviorMap)) {
    if (!result.detected) continue;

    const mapping = signalMappings[behavior];
    if (!mapping) continue;

    // Contribution weight is proportional to keyword hit count (max 3 for saturation)
    const strength = Math.min(result.hits, 3) / 3; // Normalize to 0–1

    signals.understanding += (mapping.understanding || 0) * strength;
    signals.awareness     += (mapping.awareness     || 0) * strength;
    signals.decision      += (mapping.decision      || 0) * strength;
    signals.clarity       += (mapping.clarity       || 0) * strength;

    totalContributions++;
  }

  // If no behaviors detected, return zeros
  if (totalContributions === 0) {
    return signals;
  }

  // Normalize signal values to a 0–1 range by dividing by max possible accumulation
  // (Each signal contribution sums up to 1.0 per behavior at max strength)
  const maxPossible = totalContributions;
  signals.understanding = Math.min(signals.understanding / maxPossible, 1);
  signals.awareness     = Math.min(signals.awareness     / maxPossible, 1);
  signals.decision      = Math.min(signals.decision      / maxPossible, 1);
  signals.clarity       = Math.min(signals.clarity       / maxPossible, 1);

  return signals;
}

/**
 * getBehaviorSummary
 * Returns a human-readable summary of which behaviors were detected.
 * Used for feedback generation and explainability.
 *
 * @param {Object} behaviorMap
 * @returns {string[]} - List of detected behavior names
 */
function getBehaviorSummary(behaviorMap) {
  return Object.entries(behaviorMap)
    .filter(([, result]) => result.detected)
    .map(([behavior]) => behavior);
}

/**
 * getMissingBehaviors
 * Returns behaviors that were expected but not detected.
 * Used for weak pattern detection and feedback.
 *
 * @param {Object}   behaviorMap
 * @param {string[]} expectedBehaviors - List of behavior names required for a strong answer
 * @returns {string[]}
 */
function getMissingBehaviors(behaviorMap, expectedBehaviors) {
  return expectedBehaviors.filter(behavior => {
    const result = behaviorMap[behavior];
    return !result || !result.detected;
  });
}

/**
 * hasRequiredBehaviors
 * Checks whether all required behaviors for a strong pattern are present.
 *
 * @param {Object}   behaviorMap
 * @param {string[]} requiredBehaviors
 * @returns {boolean}
 */
function hasRequiredBehaviors(behaviorMap, requiredBehaviors) {
  return requiredBehaviors.every(behavior => {
    const result = behaviorMap[behavior];
    return result && result.detected;
  });
}

/**
 * computeBehaviorDensity
 * Returns the proportion of expected behaviors that were detected.
 * A score of 1.0 = all expected behaviors present; 0.0 = none detected.
 *
 * @param {Object}   behaviorMap
 * @param {string[]} expectedBehaviors
 * @returns {number} - 0.0 to 1.0
 */
function computeBehaviorDensity(behaviorMap, expectedBehaviors) {
  if (!expectedBehaviors || expectedBehaviors.length === 0) return 0;
  const detected = expectedBehaviors.filter(b => behaviorMap[b]?.detected).length;
  return detected / expectedBehaviors.length;
}

module.exports = {
  detectBehaviors,
  mapBehaviorsToSignals,
  getBehaviorSummary,
  getMissingBehaviors,
  hasRequiredBehaviors,
  computeBehaviorDensity
};