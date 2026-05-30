/**
 * SCENARIO 1 PATTERNS
 * Title: Emergency Decision Overload in Healthcare Systems
 * Code: IECBP26101
 *
 * Context: Hospital emergency surge - ICU beds, staff overload, communication delays,
 * critical patient prioritization, operational stress management.
 *
 * Evaluation focuses on:
 * - Triage and prioritization logic
 * - Operational awareness under pressure
 * - Coordination and communication thinking
 * - Risk recognition and consequence thinking
 * - Structured multi-step reasoning
 */

// ─────────────────────────────────────────────
// BEHAVIOR KEYWORD GROUPS (scenario-specific)
// ─────────────────────────────────────────────
const behaviorKeywords = {

  // Prioritization behavior
  prioritization: [
    'priority', 'prioritize', 'prioritization', 'triage', 'critical', 'urgent',
    'first', 'immediate', 'severe', 'life-threatening', 'escalate', 'allocate',
    'icu', 'bed', 'capacity', 'high-risk', 'stable', 'unstable', 'assess',
    'most critical', 'least critical', 'ranking', 'order'
  ],

  // Coordination behavior
  coordination: [
    'coordinate', 'coordination', 'communicate', 'communication', 'team',
    'department', 'collaborate', 'centralize', 'delegate', 'assign',
    'notify', 'alert', 'update', 'report', 'handoff', 'transfer',
    'interdepartmental', 'cross-department', 'staff', 'nurse', 'doctor'
  ],

  // Risk Awareness behavior
  riskAwareness: [
    'risk', 'overload', 'delay', 'failure', 'worsen', 'deteriorate',
    'collapse', 'pressure', 'burnout', 'shortage', 'overwhelm', 'cascade',
    'consequence', 'escalation', 'breakdown', 'stress', 'bottleneck',
    'hidden', 'accumulate', 'systemic', 'compound', 'chronic'
  ],

  // Structured / Sequential Thinking
  structuredThinking: [
    'first', 'then', 'next', 'finally', 'step', 'sequence', 'order',
    'begin', 'start', 'after', 'before', 'simultaneously', 'phase',
    'approach', 'plan', 'strategy', 'process', 'systematic', 'structured'
  ],

  // Operational Awareness
  operationalAwareness: [
    'resource', 'capacity', 'workflow', 'operation', 'system', 'process',
    'efficiency', 'throughput', 'backlog', 'queue', 'distribution',
    'allocation', 'management', 'protocol', 'procedure', 'standard',
    'staffing', 'schedule', 'rotation', 'shift', 'coverage'
  ],

  // Adaptability
  adaptability: [
    'adjust', 'adapt', 'flexible', 'alternative', 'contingency',
    'temporary', 'workaround', 'modify', 'change', 'pivot', 'respond',
    'improvise', 'dynamic', 'reassign', 'redistribute', 'reallocate'
  ],

  // Conditional / Multi-Factor Thinking
  conditionalThinking: [
    'if', 'depending', 'unless', 'while', 'however', 'although',
    'consider', 'factor', 'based on', 'when', 'in case', 'assuming',
    'situation', 'context', 'condition', 'scenario', 'both', 'multiple'
  ]
};

// ─────────────────────────────────────────────
// STRONG ANSWER PATTERNS
// ─────────────────────────────────────────────
const strongPatterns = {
  // Multi-factor triage logic
  triagedPrioritization: {
    description: 'Answer shows clear triage logic: assigns priority by severity and condition',
    requiredBehaviors: ['prioritization', 'operationalAwareness'],
    keywords: ['triage', 'critical', 'severe', 'stable', 'allocate', 'icu', 'assess'],
    minKeywordHits: 2,
    signals: ['decision', 'understanding']
  },

  // Structured communication + coordination plan
  coordinatedResponse: {
    description: 'Answer proposes structured coordination between departments or roles',
    requiredBehaviors: ['coordination', 'structuredThinking'],
    keywords: ['coordinate', 'communicate', 'department', 'team', 'centralize', 'delegate'],
    minKeywordHits: 2,
    signals: ['decision', 'awareness']
  },

  // Recognizes hidden systemic pressure
  systemicRiskRecognition: {
    description: 'Answer identifies hidden, compounding, or systemic factors beyond surface issues',
    requiredBehaviors: ['riskAwareness', 'operationalAwareness'],
    keywords: ['hidden', 'accumulate', 'systemic', 'compound', 'chronic', 'bottleneck', 'cascade'],
    minKeywordHits: 1,
    signals: ['awareness', 'understanding']
  },

  // Consequence-aware thinking
  consequenceThinking: {
    description: 'Answer anticipates downstream consequences if issues go unaddressed',
    requiredBehaviors: ['riskAwareness', 'conditionalThinking'],
    keywords: ['worsen', 'escalate', 'collapse', 'consequence', 'deteriorate', 'failure', 'breakdown'],
    minKeywordHits: 1,
    signals: ['awareness', 'clarity']
  },

  // Adaptive, flexible approach
  adaptiveThinking: {
    description: 'Answer shows flexibility to adjust plans based on evolving conditions',
    requiredBehaviors: ['adaptability', 'conditionalThinking'],
    keywords: ['adjust', 'temporary', 'alternative', 'redistribute', 'flexible', 'contingency'],
    minKeywordHits: 1,
    signals: ['decision', 'clarity']
  }
};

// ─────────────────────────────────────────────
// WEAK ANSWER PATTERNS
// ─────────────────────────────────────────────
const weakPatterns = {
  vagueAction: {
    description: 'Answer is generic with no specific operational or coordination detail',
    indicators: ['help', 'solve', 'handle', 'manage', 'do something', 'take care', 'look into'],
    penaltySignals: ['clarity', 'decision']
  },
  noStructure: {
    description: 'Single-step or unordered response showing no planning logic',
    missingBehaviors: ['structuredThinking', 'prioritization'],
    penaltySignals: ['clarity']
  },
  noRiskAwareness: {
    description: 'Answer ignores risk, pressure, or downstream consequences entirely',
    missingBehaviors: ['riskAwareness'],
    penaltySignals: ['awareness']
  },
  shallowResponse: {
    description: 'Response too short or uses only one concept without reasoning',
    maxKeywordHits: 1,
    penaltySignals: ['understanding', 'clarity']
  }
};

// ─────────────────────────────────────────────
// SIGNAL MAPPINGS
// ─────────────────────────────────────────────
const signalMappings = {
  prioritization:       { understanding: 0.3, awareness: 0.2, decision: 0.4, clarity: 0.1 },
  coordination:         { understanding: 0.2, awareness: 0.3, decision: 0.3, clarity: 0.2 },
  riskAwareness:        { understanding: 0.2, awareness: 0.5, decision: 0.2, clarity: 0.1 },
  structuredThinking:   { understanding: 0.1, awareness: 0.1, decision: 0.3, clarity: 0.5 },
  operationalAwareness: { understanding: 0.4, awareness: 0.3, decision: 0.2, clarity: 0.1 },
  adaptability:         { understanding: 0.1, awareness: 0.2, decision: 0.5, clarity: 0.2 },
  conditionalThinking:  { understanding: 0.3, awareness: 0.2, decision: 0.3, clarity: 0.2 }
};

// ─────────────────────────────────────────────
// QUESTION CONFIGS
// Each question defines: type, weights, correct answer (if MCQ/rank), scoring notes
// ─────────────────────────────────────────────
const questionConfigs = {
  q1: {
    id: 'q1',
    type: 'shortText',
    topic: 'ICU triage priority during emergency surge',
    weights: { understanding: 0.20, awareness: 0.25, decision: 0.40, clarity: 0.15 },
    // Strong answer should mention: triage, critical patient assessment, ICU allocation,
    // communication with staff, coordinating transfer or stabilization
    expectedBehaviors: ['prioritization', 'coordination', 'operationalAwareness'],
    strongIndicators: ['triage', 'critical', 'icu', 'allocate', 'assess', 'coordinate', 'priority'],
    weakIndicators: ['help everyone', 'do my best', 'call someone']
  },

  q2: {
    id: 'q2',
    type: 'mcq',
    topic: 'Communication delays during emergency rush',
    weights: { understanding: 0.25, awareness: 0.20, decision: 0.40, clarity: 0.15 },
    correctAnswer: 'B',
    options: { A: 1, B: 5, C: 0, D: 0 },
    // B = centralize coordination = correct (reduces confusion, matches prioritization logic)
    // A = partial credit (movement but accuracy drops)
    correctReasoning: 'Centralizing emergency decisions reduces communication confusion under overload'
  },

  q3: {
    id: 'q3',
    type: 'shortText',
    topic: 'Hidden factor causing continued pressure despite more staff',
    weights: { understanding: 0.30, awareness: 0.40, decision: 0.15, clarity: 0.15 },
    // Strong answer: mentions systemic/hidden issues — burnout, communication gaps,
    // workflow design flaws, compounding stress, coordination overhead
    expectedBehaviors: ['riskAwareness', 'operationalAwareness', 'conditionalThinking'],
    strongIndicators: ['hidden', 'systemic', 'burnout', 'coordination', 'workflow', 'accumulate',
                       'compounding', 'communication gap', 'structural', 'overwhelm'],
    weakIndicators: ['need more staff', 'more money', 'not enough resources']
  },

  q4: {
    id: 'q4',
    type: 'dragRank',
    topic: 'Priority order of emergency hospital actions',
    weights: { understanding: 0.20, awareness: 0.25, decision: 0.40, clarity: 0.15 },
    // Ideal order: ICU bed allocation → Coordinating communication → Staff workload → Waiting time
    // Rationale: Critical resource first, then coordination, then people, then flow
    idealRanking: [
      'Managing ICU bed allocation',
      'Coordinating communication between departments',
      'Handling staff workload and exhaustion',
      'Reducing patient waiting time'
    ],
    rankingWeights: [0.40, 0.30, 0.20, 0.10] // Weight by position accuracy
  },

  q5: {
    id: 'q5',
    type: 'audioText',
    topic: 'Most critical issue from audio conversation about hospital crisis',
    weights: { understanding: 0.25, awareness: 0.35, decision: 0.25, clarity: 0.15 },
    // Strong answer identifies: coordination breakdown as root cause
    // (staff overlap, ICU full, communication delayed — all converging)
    expectedBehaviors: ['coordination', 'riskAwareness', 'operationalAwareness'],
    strongIndicators: ['coordination', 'communication', 'breakdown', 'overload',
                       'simultaneous', 'critical', 'delay', 'cascade', 'multiple'],
    weakIndicators: ['icu is full', 'doctors are busy', 'staff needed']
  },

  q6: {
    id: 'q6',
    type: 'yesNo',
    topic: 'Should hospitals make faster temporary decisions without complete info?',
    weights: { understanding: 0.20, awareness: 0.25, decision: 0.35, clarity: 0.20 },
    // Strong: Yes with reasoning — time-critical decisions require action with partial info,
    // must balance risk of delay vs risk of incomplete info, must review after
    acceptableAnswers: ['yes', 'no'], // Both acceptable
    // "Yes" strong if: mentions time-critical, temporary, review later, calculated risk
    // "No" strong if: mentions protocol, verification, safety
    expectedBehaviors: ['conditionalThinking', 'riskAwareness', 'adaptability'],
    strongReasoningKeywords: ['temporary', 'time-critical', 'calculated', 'review',
                               'protocol', 'risk', 'balance', 'emergency', 'safety']
  },

  q7: {
    id: 'q7',
    type: 'shortText',
    topic: 'How small operational delays escalate into larger problems',
    weights: { understanding: 0.25, awareness: 0.35, decision: 0.20, clarity: 0.20 },
    // Strong: cumulative effect, cascade, small delays compound,
    // missed coordination leads to bigger failures, systemic breakdown
    expectedBehaviors: ['riskAwareness', 'conditionalThinking', 'structuredThinking'],
    strongIndicators: ['accumulate', 'compound', 'cascade', 'chain reaction', 'escalate',
                       'gradually', 'worsen', 'systemic', 'missed', 'ripple'],
    weakIndicators: ['eventually get worse', 'problems pile up', 'gets difficult']
  },

  q8: {
    id: 'q8',
    type: 'videoText',
    topic: 'How communication delays affect hospital emergency management over time',
    weights: { understanding: 0.20, awareness: 0.35, decision: 0.25, clarity: 0.20 },
    expectedBehaviors: ['coordination', 'riskAwareness', 'operationalAwareness'],
    strongIndicators: ['communication delay', 'coordination failure', 'escalate',
                       'worsen', 'cascade', 'patient outcome', 'time-sensitive',
                       'staff confusion', 'bottleneck', 'breakdown'],
    weakIndicators: ['communication is bad', 'delays are harmful', 'staff confused']
  },

  q9: {
    id: 'q9',
    type: 'multiSelect',
    topic: 'Two most effective areas to improve in limited resources',
    weights: { understanding: 0.20, awareness: 0.20, decision: 0.45, clarity: 0.15 },
    // Correct: ICU capacity management + Communication between departments
    // These address both the resource bottleneck and the coordination failure
    correctAnswers: ['ICU capacity management', 'Communication between departments'],
    allOptions: [
      'ICU capacity management',
      'Communication between departments',
      'Staff workload distribution',
      'Patient waiting time reduction',
      'Emergency patient transportation'
    ],
    // Scoring: 5 for both correct, 2.5 for one correct, 0 for neither
    partialCredit: true
  },

  q10: {
    id: 'q10',
    type: 'shortText',
    topic: 'Why decision-making becomes harder over time in emergency environments',
    weights: { understanding: 0.30, awareness: 0.30, decision: 0.20, clarity: 0.20 },
    expectedBehaviors: ['riskAwareness', 'operationalAwareness', 'conditionalThinking'],
    strongIndicators: ['accumulated', 'compound', 'cognitive', 'overload', 'fatigue',
                       'systemic', 'unpredictable', 'uncertainty', 'pressure', 'chronic',
                       'burnout', 'complexity', 'simultaneous', 'incomplete information'],
    weakIndicators: ['too many patients', 'not enough staff', 'difficult situation']
  }
};

// ─────────────────────────────────────────────
// EXPECTED REASONING FLOW (for feedback generation)
// ─────────────────────────────────────────────
const expectedReasoningFlow = [
  'Recognize the immediate triage and resource allocation challenge',
  'Identify coordination and communication as critical operational levers',
  'Understand that hidden systemic factors amplify visible problems',
  'Anticipate how small delays cascade into larger operational failures',
  'Propose structured, multi-factor responses over single-action solutions',
  'Balance speed of decision with completeness of information under pressure'
];

// ─────────────────────────────────────────────
// FEEDBACK TEMPLATES (used by feedbackGenerator)
// ─────────────────────────────────────────────
const feedbackTemplates = {
  excellent: 'Your responses demonstrated strong triage logic, operational awareness, and the ability to identify systemic risk factors in a healthcare emergency. You showed structured thinking and recognized how coordination failures compound over time.',
  selected: 'Your responses showed good awareness of emergency healthcare challenges. You identified key priorities and coordination needs, though some answers could have gone deeper into systemic or hidden factors.',
  moderate: 'Your responses touched on important themes like prioritization and communication, but lacked depth in recognizing hidden or compounding risk factors. Structured reasoning and consequence thinking could be strengthened.',
  rejected: 'Your responses were too general or lacked specific operational reasoning. Emergency decision-making requires triage logic, coordination awareness, and the ability to recognize systemic risks beyond surface-level actions.'
};

module.exports = {
  scenarioId: 1,
  scenarioCode: 'IECBP26101',
  title: 'Emergency Decision Overload in Healthcare Systems',
  behaviorKeywords,
  strongPatterns,
  weakPatterns,
  signalMappings,
  questionConfigs,
  expectedReasoningFlow,
  feedbackTemplates
};