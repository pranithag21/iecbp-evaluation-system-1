/**
 * questionWeights.js
 *
 * Central registry of signal weights for every question across all 6 scenarios.
 *
 * Weights define how each answer's score contributes to the four evaluation signals:
 *   - understanding  : conceptual grasp of the scenario domain
 *   - awareness      : recognition of risks, patterns, hidden factors
 *   - decision       : quality of choices, prioritization, action logic
 *   - clarity        : structured, articulate, reasoned communication
 *
 * Each question's weights must sum to 1.00.
 * These values are sourced directly from each scenario's questionConfigs
 * but are consolidated here for centralized access by the evaluation engine.
 */

const questionWeights = {

  // ───────────────────────────────────────────────────────────────────────
  // SCENARIO 1 — Emergency Decision Overload in Healthcare Systems
  // ───────────────────────────────────────────────────────────────────────
  1: {
    q1:  { understanding: 0.20, awareness: 0.25, decision: 0.40, clarity: 0.15 },
    q2:  { understanding: 0.25, awareness: 0.20, decision: 0.40, clarity: 0.15 },
    q3:  { understanding: 0.30, awareness: 0.40, decision: 0.15, clarity: 0.15 },
    q4:  { understanding: 0.20, awareness: 0.25, decision: 0.40, clarity: 0.15 },
    q5:  { understanding: 0.25, awareness: 0.35, decision: 0.25, clarity: 0.15 },
    q6:  { understanding: 0.20, awareness: 0.25, decision: 0.35, clarity: 0.20 },
    q7:  { understanding: 0.25, awareness: 0.35, decision: 0.20, clarity: 0.20 },
    q8:  { understanding: 0.20, awareness: 0.35, decision: 0.25, clarity: 0.20 },
    q9:  { understanding: 0.20, awareness: 0.20, decision: 0.45, clarity: 0.15 },
    q10: { understanding: 0.30, awareness: 0.30, decision: 0.20, clarity: 0.20 }
  },

  // ───────────────────────────────────────────────────────────────────────
  // SCENARIO 2 — The Gap Between Social Media Popularity and Customer Loyalty
  // ───────────────────────────────────────────────────────────────────────
  2: {
    q1:  { understanding: 0.30, awareness: 0.25, decision: 0.30, clarity: 0.15 },
    q2:  { understanding: 0.35, awareness: 0.30, decision: 0.20, clarity: 0.15 },
    q3:  { understanding: 0.30, awareness: 0.25, decision: 0.25, clarity: 0.20 },
    q4:  { understanding: 0.25, awareness: 0.30, decision: 0.30, clarity: 0.15 },
    q5:  { understanding: 0.25, awareness: 0.30, decision: 0.25, clarity: 0.20 },
    q6:  { understanding: 0.30, awareness: 0.25, decision: 0.30, clarity: 0.15 },
    q7:  { understanding: 0.30, awareness: 0.25, decision: 0.30, clarity: 0.15 },
    q8:  { understanding: 0.20, awareness: 0.25, decision: 0.25, clarity: 0.30 },
    q9:  { understanding: 0.20, awareness: 0.25, decision: 0.40, clarity: 0.15 },
    q10: { understanding: 0.35, awareness: 0.25, decision: 0.25, clarity: 0.15 }
  },

  // ───────────────────────────────────────────────────────────────────────
  // SCENARIO 3 — The Growing Impact of Uncontrolled Financial Decisions
  // ───────────────────────────────────────────────────────────────────────
  3: {
    q1:  { understanding: 0.25, awareness: 0.25, decision: 0.35, clarity: 0.15 },
    q2:  { understanding: 0.25, awareness: 0.25, decision: 0.30, clarity: 0.20 },
    q3:  { understanding: 0.35, awareness: 0.35, decision: 0.15, clarity: 0.15 },
    q4:  { understanding: 0.25, awareness: 0.40, decision: 0.20, clarity: 0.15 },
    q5:  { understanding: 0.20, awareness: 0.25, decision: 0.40, clarity: 0.15 },
    q6:  { understanding: 0.20, awareness: 0.35, decision: 0.25, clarity: 0.20 },
    q7:  { understanding: 0.20, awareness: 0.25, decision: 0.30, clarity: 0.25 },
    q8:  { understanding: 0.35, awareness: 0.30, decision: 0.20, clarity: 0.15 },
    q9:  { understanding: 0.20, awareness: 0.25, decision: 0.40, clarity: 0.15 },
    q10: { understanding: 0.30, awareness: 0.30, decision: 0.20, clarity: 0.20 }
  },

  // ───────────────────────────────────────────────────────────────────────
  // SCENARIO 4 — Ride-Sharing Booking Synchronization Conflicts
  // ───────────────────────────────────────────────────────────────────────
  4: {
    q1:  { understanding: 0.30, awareness: 0.25, decision: 0.25, clarity: 0.20 },
    q2:  { understanding: 0.30, awareness: 0.25, decision: 0.30, clarity: 0.15 },
    q3:  { understanding: 0.35, awareness: 0.20, decision: 0.25, clarity: 0.20 },
    q4:  { understanding: 0.25, awareness: 0.30, decision: 0.30, clarity: 0.15 },
    q5:  { understanding: 0.30, awareness: 0.30, decision: 0.20, clarity: 0.20 },
    q6:  { understanding: 0.25, awareness: 0.25, decision: 0.35, clarity: 0.15 },
    q7:  { understanding: 0.30, awareness: 0.25, decision: 0.25, clarity: 0.20 },
    q8:  { understanding: 0.25, awareness: 0.30, decision: 0.25, clarity: 0.20 },
    q9:  { understanding: 0.30, awareness: 0.35, decision: 0.20, clarity: 0.15 },
    q10: { understanding: 0.25, awareness: 0.30, decision: 0.25, clarity: 0.20 }
  },

  // ───────────────────────────────────────────────────────────────────────
  // SCENARIO 5 — Disconnect Between Customer Data and Real Satisfaction
  // ───────────────────────────────────────────────────────────────────────
  5: {
    q1:  { understanding: 0.35, awareness: 0.30, decision: 0.20, clarity: 0.15 },
    q2:  { understanding: 0.35, awareness: 0.25, decision: 0.25, clarity: 0.15 },
    q3:  { understanding: 0.25, awareness: 0.25, decision: 0.35, clarity: 0.15 },
    q4:  { understanding: 0.40, awareness: 0.30, decision: 0.15, clarity: 0.15 },
    q5:  { understanding: 0.30, awareness: 0.30, decision: 0.25, clarity: 0.15 },
    q6:  { understanding: 0.35, awareness: 0.30, decision: 0.20, clarity: 0.15 },
    q7:  { understanding: 0.30, awareness: 0.25, decision: 0.30, clarity: 0.15 },
    q8:  { understanding: 0.35, awareness: 0.35, decision: 0.15, clarity: 0.15 },
    q9:  { understanding: 0.30, awareness: 0.35, decision: 0.20, clarity: 0.15 },
    q10: { understanding: 0.35, awareness: 0.30, decision: 0.20, clarity: 0.15 }
  },

  // ───────────────────────────────────────────────────────────────────────
  // SCENARIO 6 — Unintended Consequences of Flexible WFH Policies
  // ───────────────────────────────────────────────────────────────────────
  6: {
    q1:  { understanding: 0.25, awareness: 0.25, decision: 0.25, clarity: 0.25 },
    q2:  { understanding: 0.25, awareness: 0.30, decision: 0.30, clarity: 0.15 },
    q3:  { understanding: 0.25, awareness: 0.20, decision: 0.35, clarity: 0.20 },
    q4:  { understanding: 0.20, awareness: 0.25, decision: 0.35, clarity: 0.20 },
    q5:  { understanding: 0.20, awareness: 0.25, decision: 0.35, clarity: 0.20 },
    q6:  { understanding: 0.20, awareness: 0.35, decision: 0.25, clarity: 0.20 },
    q7:  { understanding: 0.20, awareness: 0.20, decision: 0.40, clarity: 0.20 },
    q8:  { understanding: 0.25, awareness: 0.25, decision: 0.30, clarity: 0.20 },
    q9:  { understanding: 0.20, awareness: 0.30, decision: 0.30, clarity: 0.20 },
    q10: { understanding: 0.20, awareness: 0.25, decision: 0.30, clarity: 0.25 }
  }
};

/**
 * getWeightsForQuestion
 * Returns the signal weight object for a specific scenario question.
 *
 * @param {number} scenarioId - 1–6
 * @param {string} questionId - 'q1'–'q10'
 * @returns {{ understanding, awareness, decision, clarity }}
 */
function getWeightsForQuestion(scenarioId, questionId) {
  const scenarioWeights = questionWeights[scenarioId];
  if (!scenarioWeights) {
    throw new Error(`No weights found for scenarioId: ${scenarioId}`);
  }
  const weights = scenarioWeights[questionId];
  if (!weights) {
    throw new Error(`No weights found for ${questionId} in scenario ${scenarioId}`);
  }
  return weights;
}

/**
 * getAllWeightsForScenario
 * Returns all 10 question weights for a scenario.
 *
 * @param {number} scenarioId
 * @returns {{ q1: {...}, q2: {...}, ... }}
 */
function getAllWeightsForScenario(scenarioId) {
  const weights = questionWeights[scenarioId];
  if (!weights) {
    throw new Error(`No weights found for scenarioId: ${scenarioId}`);
  }
  return weights;
}

module.exports = {
  questionWeights,
  getWeightsForQuestion,
  getAllWeightsForScenario
};