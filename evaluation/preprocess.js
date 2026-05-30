/**
 * preprocess.js
 *
 * Text preprocessing pipeline for evaluation engine.
 *
 * Responsibilities:
 * 1. Lowercase the text
 * 2. Remove punctuation (keep sentence-breaking periods separately)
 * 3. Remove extra whitespace
 * 4. Expand common contractions
 * 5. Remove filler/noise words that add no behavioral signal
 * 6. Return a clean string ready for WinkNLP extraction
 *
 * NOTE: Does NOT use any AI/ML — purely string manipulation rules.
 */

// Common contractions → expanded forms
const CONTRACTIONS = {
  "won't":     'will not',
  "can't":     'cannot',
  "don't":     'do not',
  "doesn't":   'does not',
  "didn't":    'did not',
  "isn't":     'is not',
  "aren't":    'are not',
  "wasn't":    'was not',
  "weren't":   'were not',
  "hasn't":    'has not',
  "haven't":   'have not',
  "hadn't":    'had not',
  "wouldn't":  'would not',
  "shouldn't": 'should not',
  "couldn't":  'could not',
  "it's":      'it is',
  "i'm":       'i am',
  "i'd":       'i would',
  "i'll":      'i will',
  "i've":      'i have',
  "they're":   'they are',
  "they've":   'they have',
  "they'll":   'they will',
  "we're":     'we are',
  "we've":     'we have',
  "we'll":     'we will',
  "you're":    'you are',
  "you've":    'you have',
  "you'll":    'you will',
  "there's":   'there is',
  "that's":    'that is',
  "let's":     'let us',
  "what's":    'what is',
  "who's":     'who is',
};

/**
 * expandContractions
 * Replaces contracted forms with full forms.
 *
 * @param {string} text
 * @returns {string}
 */
function expandContractions(text) {
  let result = text;
  for (const [contraction, expanded] of Object.entries(CONTRACTIONS)) {
    // Use word boundary-aware regex; case-insensitive
    const regex = new RegExp(`\\b${contraction.replace("'", "\\'")}\\b`, 'gi');
    result = result.replace(regex, expanded);
  }
  return result;
}

/**
 * removePunctuation
 * Removes punctuation but preserves spaces.
 * Keeps hyphens in compound words (e.g. "risk-aware").
 *
 * @param {string} text
 * @returns {string}
 */
function removePunctuation(text) {
  // Remove characters that are not alphanumeric, space, or hyphen
  return text.replace(/[^\w\s\-]/g, ' ');
}

/**
 * collapseWhitespace
 * Normalizes all whitespace runs to single spaces, trims edges.
 *
 * @param {string} text
 * @returns {string}
 */
function collapseWhitespace(text) {
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * normalizeHyphens
 * Converts hyphenated compound terms to single tokens by removing hyphens.
 * e.g. "risk-aware" → "risk aware"
 * This allows individual keyword matching to still work.
 *
 * @param {string} text
 * @returns {string}
 */
function normalizeHyphens(text) {
  return text.replace(/-/g, ' ');
}

/**
 * preprocess
 * Main preprocessing pipeline.
 * Returns cleaned, normalized text suitable for WinkNLP extraction.
 *
 * @param {string} rawText - Raw answer string from user submission
 * @returns {string} - Cleaned, lowercased, normalized text
 */
function preprocess(rawText) {
  if (!rawText || typeof rawText !== 'string') {
    return '';
  }

  let text = rawText;

  // Step 1: Lowercase
  text = text.toLowerCase();

  // Step 2: Expand contractions
  text = expandContractions(text);

  // Step 3: Normalize hyphens before punctuation removal
  text = normalizeHyphens(text);

  // Step 4: Remove punctuation
  text = removePunctuation(text);

  // Step 5: Collapse whitespace
  text = collapseWhitespace(text);

  return text;
}

/**
 * preprocessBatch
 * Preprocesses an array of answer strings.
 *
 * @param {string[]} answers
 * @returns {string[]}
 */
function preprocessBatch(answers) {
  if (!Array.isArray(answers)) return [];
  return answers.map(a => preprocess(a));
}

/**
 * extractSentences
 * Splits raw text into sentences using period/question mark/exclamation as delimiters.
 * Used for sentence-level analysis before WinkNLP processing.
 *
 * @param {string} rawText
 * @returns {string[]}
 */
function extractSentences(rawText) {
  if (!rawText) return [];
  // Split on sentence-ending punctuation followed by whitespace or end of string
  return rawText
    .split(/[.!?]+\s*/)
    .map(s => s.trim())
    .filter(s => s.length > 2); // Discard single chars / empty strings
}

module.exports = {
  preprocess,
  preprocessBatch,
  extractSentences,
  expandContractions,
  removePunctuation,
  collapseWhitespace
};