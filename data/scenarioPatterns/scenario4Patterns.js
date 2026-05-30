/**
 * SCENARIO 4 PATTERNS
 * Title: Ride-Sharing Booking Synchronization Conflicts
 * Code: IECBP26104
 *
 * Context: A woman books rides through two apps simultaneously; App A shows confirmation
 * on her screen, App B sends confirmation to the driver only — creating a synchronization
 * conflict. The fault lies primarily with the system, not the user or driver.
 *
 * Evaluation focuses on:
 * - Systems thinking and technical root-cause analysis
 * - Understanding of data synchronization and consistency
 * - Multi-stakeholder impact analysis (customer, driver, platform)
 * - Operational risk awareness of platform reliability
 * - Structured diagnosis vs. blame-assignment thinking
 */

// ─────────────────────────────────────────────
// BEHAVIOR KEYWORD GROUPS (scenario-specific)
// ─────────────────────────────────────────────
const behaviorKeywords = {

  // Prioritization / Triage of system issues
  prioritization: [
    'priority', 'critical', 'first', 'most important', 'immediate',
    'main issue', 'core problem', 'root cause', 'primary', 'key',
    'urgent', 'main risk', 'focus', 'address first'
  ],

  // Systems / Technical Awareness
  systemsAwareness: [
    'synchronization', 'sync', 'consistency', 'state', 'backend',
    'real-time', 'database', 'transaction', 'validation', 'confirmation',
    'race condition', 'conflict', 'inconsistent', 'duplicate',
    'premature', 'latency', 'delay', 'processing', 'api', 'data',
    'system behavior', 'architecture', 'distributed', 'atomic'
  ],

  // Multi-Stakeholder Thinking
  stakeholderThinking: [
    'customer', 'driver', 'platform', 'app', 'user', 'both parties',
    'all parties', 'affected', 'perspective', 'inconvenience',
    'different experience', 'both sides', 'stakeholder', 'impact'
  ],

  // Risk Awareness (platform reliability)
  riskAwareness: [
    'trust', 'reliability', 'platform trust', 'reputation',
    'double booking', 'confusion', 'conflict', 'frustration',
    'revenue loss', 'churn', 'abandon', 'failure', 'consequences',
    'scalability', 'repeated', 'systemic risk', 'erode', 'collapse'
  ],

  // Structured Thinking / Diagnosis
  structuredThinking: [
    'first', 'then', 'sequence', 'order', 'step', 'analyze',
    'diagnose', 'trace', 'identify', 'root cause', 'process',
    'systematic', 'flow', 'sequence of events', 'what happened',
    'why', 'how', 'approach', 'investigate'
  ],

  // Coordination / Resolution Thinking
  coordination: [
    'resolve', 'fix', 'prevent', 'solution', 'coordinate',
    'communicate', 'notify', 'alert', 'update', 'verify',
    'confirm', 'validate', 'reconcile', 'synchronize', 'consistent'
  ],

  // Adaptability / Improvement Mindset
  adaptability: [
    'improve', 'prevent', 'redesign', 'mitigate', 'safeguard',
    'mechanism', 'protocol', 'fallback', 'retry', 'rollback',
    'single source of truth', 'validation step', 'lock', 'atomic transaction'
  ],

  // Conditional / Multi-Factor Thinking
  conditionalThinking: [
    'if', 'when', 'while', 'both', 'however', 'although',
    'depends', 'consider', 'assuming', 'on the other hand',
    'not just', 'beyond', 'context', 'multiple', 'factor'
  ]
};

// ─────────────────────────────────────────────
// STRONG ANSWER PATTERNS
// ─────────────────────────────────────────────
const strongPatterns = {
  systemRootCauseIdentification: {
    description: 'Answer identifies the system-level root cause: premature confirmation before transaction validation',
    requiredBehaviors: ['systemsAwareness', 'structuredThinking'],
    keywords: ['sync', 'premature', 'validation', 'transaction', 'inconsistent', 'confirmation',
               'backend', 'race condition', 'simultaneous', 'before completion'],
    minKeywordHits: 2,
    signals: ['understanding', 'awareness']
  },

  multiStakeholderAnalysis: {
    description: 'Answer addresses how the conflict affects both customer and driver differently',
    requiredBehaviors: ['stakeholderThinking', 'conditionalThinking'],
    keywords: ['customer', 'driver', 'both', 'different', 'perspective', 'each party',
               'affected differently', 'inconvenience', 'confusion for both'],
    minKeywordHits: 2,
    signals: ['awareness', 'understanding']
  },

  platformTrustRisk: {
    description: 'Answer recognizes the long-term risk to platform reliability and user trust',
    requiredBehaviors: ['riskAwareness', 'systemsAwareness'],
    keywords: ['trust', 'reliability', 'platform', 'repeated failure', 'reputation',
               'consequence', 'erosion', 'user confidence', 'abandon'],
    minKeywordHits: 2,
    signals: ['awareness', 'decision']
  },

  solutionOrPrevention: {
    description: 'Answer proposes a concrete technical or operational fix to prevent recurrence',
    requiredBehaviors: ['adaptability', 'coordination'],
    keywords: ['atomic', 'lock', 'single source', 'validate before', 'prevent duplicate',
               'rollback', 'consistent state', 'synchronize', 'unified confirmation',
               'prevent', 'fix', 'mechanism'],
    minKeywordHits: 2,
    signals: ['decision', 'clarity']
  },

  correctSequenceUnderstanding: {
    description: 'Answer correctly traces the sequence of events from booking to conflict',
    requiredBehaviors: ['structuredThinking', 'systemsAwareness'],
    keywords: ['sequence', 'order', 'first', 'then', 'booking initiated', 'processed',
               'driver notified', 'customer unaware', 'state mismatch'],
    minKeywordHits: 2,
    signals: ['understanding', 'clarity']
  }
};

// ─────────────────────────────────────────────
// WEAK ANSWER PATTERNS
// ─────────────────────────────────────────────
const weakPatterns = {
  blamesCustomer: {
    description: 'Blames the customer for booking two apps simultaneously',
    indicators: ['customer fault', 'should not book two', 'her mistake', 'customer error', 'user error'],
    penaltySignals: ['understanding', 'awareness']
  },
  blamesDriver: {
    description: 'Blames the driver without recognizing system fault',
    indicators: ['driver fault', 'driver should have', 'driver mistake'],
    penaltySignals: ['understanding']
  },
  noSystemThinking: {
    description: 'Answer does not engage with the technical/system nature of the problem',
    missingBehaviors: ['systemsAwareness'],
    penaltySignals: ['understanding', 'decision']
  },
  vagueResolution: {
    description: 'Suggests vague fixes without addressing synchronization root cause',
    indicators: ['just fix the app', 'better communication', 'notify users', 'improve app'],
    penaltySignals: ['clarity', 'decision']
  }
};

// ─────────────────────────────────────────────
// SIGNAL MAPPINGS
// ─────────────────────────────────────────────
const signalMappings = {
  prioritization:       { understanding: 0.2, awareness: 0.2, decision: 0.4, clarity: 0.2 },
  systemsAwareness:     { understanding: 0.5, awareness: 0.3, decision: 0.1, clarity: 0.1 },
  stakeholderThinking:  { understanding: 0.2, awareness: 0.4, decision: 0.2, clarity: 0.2 },
  riskAwareness:        { understanding: 0.2, awareness: 0.5, decision: 0.2, clarity: 0.1 },
  structuredThinking:   { understanding: 0.2, awareness: 0.1, decision: 0.2, clarity: 0.5 },
  coordination:         { understanding: 0.1, awareness: 0.2, decision: 0.5, clarity: 0.2 },
  adaptability:         { understanding: 0.1, awareness: 0.2, decision: 0.5, clarity: 0.2 },
  conditionalThinking:  { understanding: 0.3, awareness: 0.2, decision: 0.3, clarity: 0.2 }
};

// ─────────────────────────────────────────────
// QUESTION CONFIGS
// ─────────────────────────────────────────────
const questionConfigs = {
  q1: {
    id: 'q1',
    type: 'yesNo',
    topic: 'Was the customer initially aware of both ride confirmations?',
    weights: { understanding: 0.30, awareness: 0.25, decision: 0.25, clarity: 0.20 },
    correctAnswer: 'no',
    // Correct: No — only App A showed confirmation; App B's state was invisible to customer
    acceptableAnswers: ['no'],
    // Strong reasoning: explains WHY — App B failed to display booking to customer,
    // system showed inconsistent state, customer had no way to know
    expectedBehaviors: ['systemsAwareness', 'stakeholderThinking'],
    strongReasoningKeywords: ['only app a', 'did not show', 'invisible', 'no confirmation displayed',
                               'app b failed', 'inconsistent', 'different state', 'could not see']
  },

  q2: {
    id: 'q2',
    type: 'mcq',
    topic: 'Consequence of triggering driver notifications before full transaction validation',
    weights: { understanding: 0.30, awareness: 0.25, decision: 0.30, clarity: 0.15 },
    correctAnswer: 'B',
    options: {
      'Faster customer response time with improved accuracy': 0,
      'Duplicate or conflicting ride assignments due to premature confirmation': 5,
      'Reduced need for backend synchronization processes': 0,
      'Automatic elimination of booking errors through early alerts': 0
    }
  },

  q3: {
    id: 'q3',
    type: 'dragRank',
    topic: 'Correct sequence of events in the ride-sharing conflict',
    weights: { understanding: 0.35, awareness: 0.20, decision: 0.25, clarity: 0.20 },
    idealRanking: [
      'Customer initiates ride booking on two apps',
      'System processes requests from both apps simultaneously',
      'App A displays booking confirmation',
      'Driver receives booking confirmation from App B',
      'Customer notices mismatch in booking status'
    ],
    // Correct: e → b → d → c → a
    rankingWeights: [0.25, 0.25, 0.20, 0.15, 0.15]
  },

  q4: {
    id: 'q4',
    type: 'mcq',
    topic: 'Biggest operational risk of repeated synchronization failures',
    weights: { understanding: 0.25, awareness: 0.30, decision: 0.30, clarity: 0.15 },
    correctAnswer: 'B',
    options: {
      'Drivers may stop using navigation': 0,
      'Platform trust and reliability collapse': 5,
      'Phone storage increases': 0,
      'Customer location accuracy improves': 0
    }
  },

  q5: {
    id: 'q5',
    type: 'shortText',
    topic: 'Why customers should not be fully blamed and why confusion arose for both parties',
    weights: { understanding: 0.30, awareness: 0.30, decision: 0.20, clarity: 0.20 },
    expectedBehaviors: ['systemsAwareness', 'stakeholderThinking', 'riskAwareness'],
    strongIndicators: ['system responsibility', 'platform should handle', 'inconsistent state',
                       'both received different', 'not customer fault', 'simultaneous requests',
                       'booking state mismatch', 'app design failure', 'system should prevent'],
    weakIndicators: ['customer confused', 'driver did not know', 'two apps is problem']
  },

  q6: {
    id: 'q6',
    type: 'shortText',
    topic: 'Priorities as both customer and system architect in this conflict',
    weights: { understanding: 0.25, awareness: 0.25, decision: 0.35, clarity: 0.15 },
    expectedBehaviors: ['stakeholderThinking', 'systemsAwareness', 'adaptability'],
    strongIndicators: ['verify booking', 'not share otp', 'confirm details', 'as customer',
                       'real-time consistency', 'single source of truth', 'prevent duplicate',
                       'atomic transaction', 'synchronize', 'as architect', 'two perspectives'],
    weakIndicators: ['cancel one ride', 'call customer service', 'fix the app']
  },

  q7: {
    id: 'q7',
    type: 'shortText',
    topic: 'Compare App A and App B responses in the conflict',
    weights: { understanding: 0.30, awareness: 0.25, decision: 0.25, clarity: 0.20 },
    expectedBehaviors: ['systemsAwareness', 'stakeholderThinking', 'structuredThinking'],
    strongIndicators: ['app a shows customer', 'app b shows driver', 'inconsistent state',
                       'split confirmation', 'different recipients', 'unified experience broken',
                       'one-sided notification', 'asymmetric confirmation', 'state divergence'],
    weakIndicators: ['app a worked', 'app b did not work', 'different results']
  },

  q8: {
    id: 'q8',
    type: 'shortText',
    topic: 'Who faces more inconvenience — driver or customer?',
    weights: { understanding: 0.25, awareness: 0.30, decision: 0.25, clarity: 0.20 },
    expectedBehaviors: ['stakeholderThinking', 'conditionalThinking', 'riskAwareness'],
    strongIndicators: ['both affected', 'customer more', 'unclear booking', 'double charge risk',
                       'driver loses time', 'driver wrong trip', 'customer confusion higher',
                       'financial risk customer', 'time cost driver', 'different types of loss'],
    weakIndicators: ['driver is worse', 'customer is worse', 'both confused']
  },

  q9: {
    id: 'q9',
    type: 'audioText',
    topic: 'What the driver-customer audio exchange reveals about the system',
    weights: { understanding: 0.30, awareness: 0.35, decision: 0.20, clarity: 0.15 },
    expectedBehaviors: ['systemsAwareness', 'stakeholderThinking', 'structuredThinking'],
    strongIndicators: ['inconsistent state', 'driver confirmed before customer', 'sync delay',
                       'backend latency', 'one side updated before other', 'real-time failure',
                       'notification before validation', 'state mismatch'],
    weakIndicators: ['driver got booking', 'customer did not see', 'app shows different things']
  },

  q10: {
    id: 'q10',
    type: 'videoText',
    topic: 'Challenges when App B is still processing while App A confirmed',
    weights: { understanding: 0.25, awareness: 0.30, decision: 0.25, clarity: 0.20 },
    expectedBehaviors: ['systemsAwareness', 'riskAwareness', 'stakeholderThinking'],
    strongIndicators: ['duplicate request', 'race condition', 'both apps pending',
                       'customer stuck waiting', 'double booking risk', 'conflict',
                       'unclear availability', 'decision paralysis', 'system state unknown',
                       'redundant confirmation', 'wasted resources'],
    weakIndicators: ['wait longer', 'app slow', 'user confused', 'two bookings']
  }
};

// ─────────────────────────────────────────────
// EXPECTED REASONING FLOW
// ─────────────────────────────────────────────
const expectedReasoningFlow = [
  'Identify that the root cause is a system-level synchronization failure, not user error',
  'Understand that premature confirmation before transaction validation creates conflict',
  'Recognize that both customer and driver experience different, incompatible system states',
  'Analyze how this affects platform trust and reliability at scale',
  'Propose solutions centered on atomic transactions, consistent state, and validated confirmation',
  'Distinguish the different inconvenience types faced by customer vs. driver'
];

// ─────────────────────────────────────────────
// FEEDBACK TEMPLATES
// ─────────────────────────────────────────────
const feedbackTemplates = {
  excellent: 'You demonstrated strong systems thinking, correctly identifying the root cause as a synchronization and validation failure rather than user error. Your answers showed multi-stakeholder awareness, clear understanding of booking state conflicts, and the ability to propose concrete technical prevention strategies.',
  selected: 'You showed good understanding of the booking conflict and identified the system as the primary cause. Some answers could have been more technically precise — particularly around what causes duplicate confirmations and how state consistency should be maintained.',
  moderate: 'You understood that both parties were confused and that the app was partly responsible, but your analysis stayed mostly at a behavioral level. Stronger answers require engaging with the technical root cause: synchronization, state validation, and premature confirmation.',
  rejected: 'Your responses tended to blame the customer or driver without recognizing the system-level failure. This scenario requires understanding of how apps process simultaneous requests, maintain consistent state, and why premature confirmation creates conflicts across all parties.'
};

module.exports = {
  scenarioId: 4,
  scenarioCode: 'IECBP26104',
  title: 'Ride-Sharing Booking Synchronization Conflicts',
  behaviorKeywords,
  strongPatterns,
  weakPatterns,
  signalMappings,
  questionConfigs,
  expectedReasoningFlow,
  feedbackTemplates
};