/**
 * winkExtractor.js
 *
 * Uses WinkNLP to extract tokens, lemmas, and meaningful keyword phrases
 * from preprocessed answer text.
 *
 * WinkNLP is used ONLY for:
 *   - Tokenization
 *   - Lemmatization (root form extraction)
 *   - Sentence boundary detection
 *   - Stop word identification
 *
 * No AI, ML, embeddings, or external model inference is performed here.
 *
 * Install: npm install wink-nlp wink-eng-lite-web-model
 */

const winkNLP  = require('wink-nlp');
const model    = require('wink-eng-lite-web-model');
const its      = require('wink-nlp/src/its.js');
const as       = require('wink-nlp/src/as.js');

// Initialize WinkNLP with the lightweight English model
const nlp = winkNLP(model);

/**
 * extractTokens
 * Returns an array of normalized, lowercased tokens from the input text.
 * Filters out tokens that are purely numeric or single-character.
 *
 * @param {string} processedText - Preprocessed (lowercase, no punctuation) text
 * @returns {string[]} - Array of token strings
 */
function extractTokens(processedText) {
  if (!processedText) return [];

  const doc    = nlp.readDoc(processedText);
  const tokens = doc.tokens().out(its.normal);

  return tokens
    .filter(t => t && t.length > 1)   // Remove single chars
    .filter(t => !/^\d+$/.test(t));    // Remove pure numbers
}

/**
 * extractLemmas
 * Returns the lemmatized (root form) of each significant token.
 * e.g. "coordinating" → "coordinate", "prioritized" → "prioritize"
 *
 * @param {string} processedText
 * @returns {string[]}
 */
function extractLemmas(processedText) {
  if (!processedText) return [];

  const doc    = nlp.readDoc(processedText);
  const lemmas = doc.tokens().out(its.lemma);

  return lemmas
    .filter(l => l && l.length > 1)
    .filter(l => !/^\d+$/.test(l));
}

/**
 * extractMeaningfulTokens
 * Returns tokens filtered to remove stop words (the, a, is, was, etc.)
 * Uses WinkNLP's built-in stop-word list.
 *
 * These are the "signal-bearing" words that drive behavioral mapping.
 *
 * @param {string} processedText
 * @returns {string[]}
 */
function extractMeaningfulTokens(processedText) {
  if (!processedText) return [];

  const doc    = nlp.readDoc(processedText);
  const tokens = doc.tokens();

  const meaningful = [];
  tokens.each(token => {
    // Only include tokens that are not stop words and are words (not punctuation)
    const norm = token.out(its.normal);
    const pos  = token.out(its.pos); // Part of speech
    // Keep: nouns, verbs, adjectives, adverbs — discard function words
    const keepPOS = ['NOUN', 'VERB', 'ADJ', 'ADV', 'PROPN'];
    if (norm && norm.length > 1 && keepPOS.includes(pos)) {
      meaningful.push(norm);
    }
  });

  return meaningful;
}

/**
 * extractBigrams
 * Returns adjacent two-word pairs from tokens.
 * Used to detect multi-word behavioral phrases like "risk awareness", "coordinate departments"
 *
 * @param {string[]} tokens
 * @returns {string[]} - Array of "word1 word2" strings
 */
function extractBigrams(tokens) {
  const bigrams = [];
  for (let i = 0; i < tokens.length - 1; i++) {
    bigrams.push(`${tokens[i]} ${tokens[i + 1]}`);
  }
  return bigrams;
}

/**
 * extractNGrams
 * Returns n-gram phrases (2 and 3-word) from a token array.
 * Used for multi-word keyword phrase matching.
 *
 * @param {string[]} tokens
 * @param {number} n - n-gram length (2 or 3)
 * @returns {string[]}
 */
function extractNGrams(tokens, n = 2) {
  const ngrams = [];
  for (let i = 0; i <= tokens.length - n; i++) {
    ngrams.push(tokens.slice(i, i + n).join(' '));
  }
  return ngrams;
}

/**
 * buildTokenSet
 * Full extraction pipeline for a given preprocessed answer.
 * Returns an object with all extracted token forms for downstream behavioral mapping.
 *
 * @param {string} processedText - Output from preprocess()
 * @returns {{
 *   tokens: string[],
 *   lemmas: string[],
 *   meaningful: string[],
 *   bigrams: string[],
 *   trigrams: string[],
 *   allTerms: string[]   // union of tokens + lemmas + bigrams for matching
 * }}
 */
function buildTokenSet(processedText) {
  if (!processedText) {
    return { tokens: [], lemmas: [], meaningful: [], bigrams: [], trigrams: [], allTerms: [] };
  }

  const tokens    = extractTokens(processedText);
  const lemmas    = extractLemmas(processedText);
  const meaningful = extractMeaningfulTokens(processedText);

  // Build n-grams from tokens
  const bigrams  = extractNGrams(tokens, 2);
  const trigrams = extractNGrams(tokens, 3);

  // allTerms is used for keyword matching — union of all forms
  const allTerms = [...new Set([
    ...tokens,
    ...lemmas,
    ...meaningful,
    ...bigrams,
    ...trigrams
  ])];

  return {
    tokens,
    lemmas,
    meaningful,
    bigrams,
    trigrams,
    allTerms
  };
}

/**
 * countKeywordHits
 * Counts how many keywords from a given list appear in the extracted term set.
 *
 * @param {string[]} keywords - List of keywords/phrases to search for
 * @param {string[]} allTerms - Full token set from buildTokenSet
 * @returns {number} - Count of unique keyword matches
 */
function countKeywordHits(keywords, allTerms) {
  if (!keywords || !allTerms) return 0;

  let hits = 0;
  for (const keyword of keywords) {
    const kw = keyword.toLowerCase().trim();
    // Check if any term in the answer contains or matches this keyword
    const matched = allTerms.some(term =>
      term === kw || term.includes(kw) || kw.includes(term)
    );
    if (matched) hits++;
  }
  return hits;
}

/**
 * findMatchedKeywords
 * Returns the actual matched keywords (for transparency/explainability).
 *
 * @param {string[]} keywords
 * @param {string[]} allTerms
 * @returns {string[]} - Keywords that were found
 */
function findMatchedKeywords(keywords, allTerms) {
  if (!keywords || !allTerms) return [];

  return keywords.filter(keyword => {
    const kw = keyword.toLowerCase().trim();
    return allTerms.some(term =>
      term === kw || term.includes(kw) || kw.includes(term)
    );
  });
}

module.exports = {
  extractTokens,
  extractLemmas,
  extractMeaningfulTokens,
  extractBigrams,
  extractNGrams,
  buildTokenSet,
  countKeywordHits,
  findMatchedKeywords
};