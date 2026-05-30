/**
 * strongWeakPatterns.js
 *
 * Detects whether an answer demonstrates STRONG or WEAK reasoning patterns
 * based on keyword presence, behavioral coverage, and structural signals.
 *
 * Strong patterns boost scores; weak patterns apply score penalties.
 * All logic is rule-based and explainable — no ML inference.
 */

const { countKeywordHits, findMatchedKeywords } = require('./winkExtractor');
const { hasRequiredBehaviors, getMissingBehaviors } = require('./behaviorMappings');

/**
 * detectStrongPatterns
 * Checks which strong reasoning patterns are present in the answer.
 *
 * @param {string[]} allTerms        - Token set from buildTokenSet().allTerms
 * @param {Object}   behaviorMap     - Output of detectBehaviors()
 * @param {Object}   strongPatterns  - Scenario's strongPatterns config
 * @returns {Array}  - Array of matched strong pattern objects with metadata
 */
function detectStrongPatterns(allTerms, behaviorMap, strongPatterns) {
  const matched = [];

  for (const [patternName, config] of Object.entries(strongPatterns)) {
    const behaviorsSatisfied = hasRequiredBehaviors(
      behaviorMap,
      config.requiredBehaviors || []
    );

    const keywordHits = countKeywordHits(config.keywords || [], allTerms);
    const keywordsMatched = findMatchedKeywords(config.keywords || [], allTerms);
    const minHits = config.minKeywordHits || 1;

    const isMatched = behaviorsSatisfied && keywordHits >= minHits;

    if (isMatched) {
      matched.push({
        pattern:         patternName,
        description:     config.description,
        keywordsMatched,
        keywordHits,
        signals:         config.signals || []
      });
    }
  }

  return matched;
}

/**
 * detectWeakPatterns
 * Checks which weak reasoning patterns are present in the answer.
 *
 * @param {string[]} allTerms       - Token set
 * @param {Object}   behaviorMap    - Detected behaviors
 * @param {Object}   weakPatterns   - Scenario's weakPatterns config
 * @param {number}   totalKeywordHits - Total keyword count in the answer
 * @returns {Array}  - Array of matched weak patterns with penalty signals
 */
function detectWeakPatterns(allTerms, behaviorMap, weakPatterns, totalKeywordHits) {
  const matched = [];

  for (const [patternName, config] of Object.entries(weakPatterns)) {
    let isMatched = false;

    // Check 1: Presence of weak indicator keywords
    if (config.indicators && config.indicators.length > 0) {
      const hits = countKeywordHits(config.indicators, allTerms);
      if (hits >= 1) isMatched = true;
    }

    // Check 2: Missing required behaviors
    if (config.missingBehaviors && config.missingBehaviors.length > 0) {
      const missing = getMissingBehaviors(behaviorMap, config.missingBehaviors);
      if (missing.length === config.missingBehaviors.length) isMatched = true;
    }

    // Check 3: Too few total keyword hits (shallow/vague response)
    if (config.maxKeywordHits !== undefined) {
      if (totalKeywordHits <= config.maxKeywordHits) isMatched = true;
    }

    if (isMatched) {
      matched.push({
        pattern:        patternName,
        description:    config.description,
        penaltySignals: config.penaltySignals || []
      });
    }
  }

  return matched;
}

/**
 * computePatternScore
 * Converts strong/weak pattern results into a 0–5 raw pattern score.
 *
 * Logic:
 * - Base score: 1.0 (for any response)
 * - Each strong pattern adds points scaled by how many were possible
 * - Each weak pattern subtracts from the score
 * - Minimum: 0.5; Maximum: 5.0
 *
 * @param {Array}  strongMatches  - Output of detectStrongPatterns()
 * @param {Array}  weakMatches    - Output of detectWeakPatterns()
 * @param {Object} strongPatterns - Full strong patterns config (to compute max possible)
 * @returns {number} - Raw pattern score 0–5
 */
function computePatternScore(strongMatches, weakMatches, strongPatterns) {
  const totalPossible   = Object.keys(strongPatterns).length || 1;
  const strongCount     = strongMatches.length;
  const weakCount       = weakMatches.length;

  // Strong patterns contribute up to +4.0 on top of base 1.0
  const strongBonus  = (strongCount / totalPossible) * 4.0;

  // Each weak pattern deducts 0.5 (up to max deduction of 2.0)
  const weakPenalty  = Math.min(weakCount * 0.5, 2.0);

  const raw = 1.0 + strongBonus - weakPenalty;

  // Clamp to valid range
  return Math.min(Math.max(raw, 0.5), 5.0);
}

/**
 * getPatternAnalysis
 * Returns a consolidated pattern analysis object for use in feedback generation.
 *
 * @param {Array}  strongMatches
 * @param {Array}  weakMatches
 * @returns {Object}
 */
function getPatternAnalysis(strongMatches, weakMatches) {
  return {
    strongPatternCount:   strongMatches.length,
    weakPatternCount:     weakMatches.length,
    strongDescriptions:   strongMatches.map(m => m.description),
    weakDescriptions:     weakMatches.map(m => m.description),
    strongSignals:        [...new Set(strongMatches.flatMap(m => m.signals))],
    weakPenaltySignals:   [...new Set(weakMatches.flatMap(m => m.penaltySignals))],
    isStrong:             strongMatches.length >= 2 && weakMatches.length === 0,
    isWeak:               strongMatches.length === 0 && weakMatches.length >= 1
  };
}

module.exports = {
  detectStrongPatterns,
  detectWeakPatterns,
  computePatternScore,
  getPatternAnalysis
};