/**
 * SCENARIO 3 PATTERNS
 * Title: The Growing Impact of Uncontrolled Financial Decisions
 * Code: IECBP26103
 *
 * Context: A family with a solid financial plan slowly loses stability due to
 * cumulative small expenses, emotional spending, avoidance behavior, and
 * cost inflation — none individually catastrophic, but collectively damaging.
 *
 * Evaluation focuses on:
 * - Pattern recognition in financial deterioration
 * - Emotional vs. rational decision-making awareness
 * - Proactive vs. avoidance behavior detection
 * - Structured recovery planning
 * - Understanding cumulative/compounding effects
 */

// ─────────────────────────────────────────────
// BEHAVIOR KEYWORD GROUPS (scenario-specific)
// ─────────────────────────────────────────────
const behaviorKeywords = {

  // Prioritization in financial decisions
  prioritization: [
    'priority', 'need', 'necessity', 'essential', 'discretionary',
    'want', 'choice', 'must-have', 'optional', 'rank', 'first',
    'critical expense', 'urgent', 'important', 'identify'
  ],

  // Financial Awareness
  financialAwareness: [
    'savings', 'budget', 'expense', 'income', 'deficit', 'surplus',
    'track', 'monitor', 'review', 'audit', 'balance', 'spending',
    'financial plan', 'cash flow', 'shortfall', 'drain', 'erosion',
    'pattern', 'trend', 'slowly', 'gradually', 'inflation', 'rising cost'
  ],

  // Avoidance / Delay Behavior Detection
  avoidanceBehavior: [
    'avoid', 'delay', 'postpone', 'ignore', 'not now', 'later',
    'procrastinate', 'denial', 'dismiss', 'avoid discussion', 'brush aside',
    'not tonight', 'next week', 'not talk about', 'silence', 'defer'
  ],

  // Structured Thinking / Planning
  structuredThinking: [
    'first', 'then', 'step', 'analyze', 'review', 'plan', 'approach',
    'strategy', 'systematically', 'process', 'identify', 'list',
    'categorize', 'separate', 'track', 'record', 'organize', 'assess'
  ],

  // Emotional / Behavioral Awareness
  emotionalAwareness: [
    'stress', 'anxiety', 'emotional', 'pressure', 'relationship',
    'family', 'tension', 'communication', 'honest', 'open',
    'discuss', 'together', 'vulnerable', 'support', 'trust',
    'social obligation', 'guilt', 'fear', 'avoidance'
  ],

  // Risk Awareness (financial)
  riskAwareness: [
    'compound', 'accumulate', 'worsen', 'escalate', 'spiral', 'dangerous',
    'long-term', 'consequences', 'fragile', 'vulnerable', 'unsustainable',
    'debt', 'borrow', 'default', 'crisis', 'emergency fund', 'no savings',
    'unprepared', 'invisible damage', 'hidden risk', 'compounding'
  ],

  // Adaptability / Course Correction
  adaptability: [
    'adjust', 'change', 'reduce', 'cut', 'restructure', 'revise',
    'alternative', 'new approach', 'respond', 'fix', 'address',
    'recover', 'rebuild', 'start over', 'course correct', 'pivot'
  ],

  // Conditional / Multi-factor Thinking
  conditionalThinking: [
    'if', 'unless', 'depending', 'while', 'however', 'although',
    'both', 'balance', 'not just', 'more than', 'context',
    'situation', 'scenario', 'based on', 'consider', 'factor'
  ]
};

// ─────────────────────────────────────────────
// STRONG ANSWER PATTERNS
// ─────────────────────────────────────────────
const strongPatterns = {
  cumulativePatternRecognition: {
    description: 'Answer identifies that small, gradual expenses accumulate into large financial damage',
    requiredBehaviors: ['financialAwareness', 'riskAwareness'],
    keywords: ['accumulate', 'compound', 'gradually', 'pattern', 'slow', 'erosion', 'invisible',
               'unnoticed', 'creeping', 'drift', 'month by month'],
    minKeywordHits: 2,
    signals: ['understanding', 'awareness']
  },

  avoidanceDangerRecognition: {
    description: 'Answer identifies avoidance/delay behavior as more dangerous than individual expenses',
    requiredBehaviors: ['avoidanceBehavior', 'emotionalAwareness'],
    keywords: ['avoid', 'delay', 'procrastinate', 'not talking', 'denial', 'defer', 'dismiss',
               'ignore', 'danger', 'more dangerous', 'pattern of avoidance'],
    minKeywordHits: 2,
    signals: ['awareness', 'understanding']
  },

  needVsWantDistinction: {
    description: 'Answer clearly separates emotional/discretionary spending from essential needs',
    requiredBehaviors: ['prioritization', 'financialAwareness'],
    keywords: ['need', 'want', 'necessity', 'choice', 'discretionary', 'essential', 'emotional decision',
               'social obligation', 'separate', 'categorize'],
    minKeywordHits: 2,
    signals: ['decision', 'understanding']
  },

  structuredRecoveryPlan: {
    description: 'Answer proposes a step-by-step or organized approach to financial recovery',
    requiredBehaviors: ['structuredThinking', 'adaptability'],
    keywords: ['first', 'review', 'track', 'identify', 'categorize', 'plan', 'budget',
               'emergency fund', 'step', 'approach', 'strategy', 'reduce'],
    minKeywordHits: 3,
    signals: ['decision', 'clarity']
  },

  familyCommunicationInsight: {
    description: 'Answer recognizes that open family communication is key to financial health',
    requiredBehaviors: ['emotionalAwareness', 'structuredThinking'],
    keywords: ['discuss', 'family', 'together', 'open', 'honest', 'communicate', 'talk',
               'share', 'involve', 'transparent', 'conversation'],
    minKeywordHits: 2,
    signals: ['awareness', 'clarity']
  }
};

// ─────────────────────────────────────────────
// WEAK ANSWER PATTERNS
// ─────────────────────────────────────────────
const weakPatterns = {
  blameSingleExpense: {
    description: 'Blames one specific expense rather than recognizing cumulative pattern',
    indicators: ['wedding was wrong', 'should not have gone', 'one mistake', 'that one time'],
    penaltySignals: ['understanding']
  },
  borrowingAsFirstSolution: {
    description: 'Jumps to borrowing or external financing without addressing root cause',
    indicators: ['borrow money', 'take a loan', 'credit card', 'borrow to cover'],
    penaltySignals: ['decision', 'awareness']
  },
  incomeOnlyFocus: {
    description: 'Focuses only on increasing income without addressing spending patterns',
    indicators: ['earn more', 'get a raise', 'second job', 'increase salary', 'find more income'],
    missingBehaviors: ['financialAwareness'],
    penaltySignals: ['understanding']
  },
  genericResponse: {
    description: 'Vague response without identifying specific financial behaviors or patterns',
    maxKeywordHits: 1,
    penaltySignals: ['clarity', 'understanding']
  }
};

// ─────────────────────────────────────────────
// SIGNAL MAPPINGS
// ─────────────────────────────────────────────
const signalMappings = {
  prioritization:       { understanding: 0.2, awareness: 0.2, decision: 0.4, clarity: 0.2 },
  financialAwareness:   { understanding: 0.4, awareness: 0.3, decision: 0.2, clarity: 0.1 },
  avoidanceBehavior:    { understanding: 0.2, awareness: 0.5, decision: 0.2, clarity: 0.1 },
  structuredThinking:   { understanding: 0.1, awareness: 0.1, decision: 0.3, clarity: 0.5 },
  emotionalAwareness:   { understanding: 0.2, awareness: 0.4, decision: 0.2, clarity: 0.2 },
  riskAwareness:        { understanding: 0.2, awareness: 0.5, decision: 0.2, clarity: 0.1 },
  adaptability:         { understanding: 0.1, awareness: 0.2, decision: 0.5, clarity: 0.2 },
  conditionalThinking:  { understanding: 0.3, awareness: 0.2, decision: 0.3, clarity: 0.2 }
};

// ─────────────────────────────────────────────
// QUESTION CONFIGS
// ─────────────────────────────────────────────
const questionConfigs = {
  q1: {
    id: 'q1',
    type: 'mcq',
    topic: 'First instinct when a solid financial plan breaks down gradually',
    weights: { understanding: 0.25, awareness: 0.25, decision: 0.35, clarity: 0.15 },
    correctAnswer: 'A', // Trace back expenses to identify where imbalance began
    options: {
      'Sit down and trace back every expense to identify where the financial imbalance began': 5,
      'Immediately reduce lifestyle and discretionary spending to regain control over monthly expenses': 3,
      'Talk openly with the family about the emotional and financial pressure before making major decisions': 3,
      'Accept that some situations are unavoidable and gradually adjust the financial plan moving forward': 1
    },
    // Note: A is primary (root-cause), B and C have partial merit
    partialCredit: true
  },

  q2: {
    id: 'q2',
    type: 'yesNo',
    topic: 'Was attending the wedding and adjusting savings the right decision?',
    weights: { understanding: 0.25, awareness: 0.25, decision: 0.30, clarity: 0.20 },
    acceptableAnswers: ['yes', 'no'],
    // Both valid — key is reasoning quality:
    // Strong "Yes": acknowledges tradeoff, social obligation has real value,
    //               but should have planned ahead / created buffer
    // Strong "No": one deviation begins a pattern; should have found alternative
    expectedBehaviors: ['conditionalThinking', 'financialAwareness', 'emotionalAwareness'],
    strongReasoningKeywords: ['tradeoff', 'balance', 'obligation', 'relationship',
                               'pattern', 'buffer', 'plan ahead', 'exception',
                               'consequence', 'one-time', 'habit']
  },

  q3: {
    id: 'q3',
    type: 'shortText',
    topic: 'What financial pattern is developing as costs rise unnoticed',
    weights: { understanding: 0.35, awareness: 0.35, decision: 0.15, clarity: 0.15 },
    expectedBehaviors: ['financialAwareness', 'riskAwareness', 'conditionalThinking'],
    strongIndicators: ['inflation', 'cost creep', 'savings gap', 'spending outpacing income',
                       'erosion', 'unnoticed', 'slowly', 'silent', 'invisible', 'gradual',
                       'purchasing power', 'fixed income', 'increasing cost', 'accumulate'],
    weakIndicators: ['spending too much', 'costs are rising', 'savings going down']
  },

  q4: {
    id: 'q4',
    type: 'audioText',
    topic: 'What behavior in the audio makes the financial situation worse',
    weights: { understanding: 0.25, awareness: 0.40, decision: 0.20, clarity: 0.15 },
    expectedBehaviors: ['avoidanceBehavior', 'emotionalAwareness', 'riskAwareness'],
    strongIndicators: ['avoidance', 'delay', 'postpone', 'procrastination', 'not discussing',
                       'denial', 'pattern of avoidance', 'dangerous', 'more harmful than spending',
                       'compounding', 'no communication', 'deferring'],
    weakIndicators: ['they do not talk', 'busy', 'stressed', 'hard to discuss money']
  },

  q5: {
    id: 'q5',
    type: 'multiSelect',
    topic: 'What to do when savings hit zero for the first time',
    weights: { understanding: 0.20, awareness: 0.25, decision: 0.40, clarity: 0.15 },
    correctAnswers: [
      'Sit down as a family and openly talk about where money is going',
      'Identify which expenses were needs and which were choices'
    ],
    // Partial credit options (reasonable but not ideal as primary):
    partialCreditAnswers: [
      'Find a way to increase income before cutting any expenses',
      'Accept that some months will be like this and move forward'
    ],
    // Penalty options:
    poorAnswers: [
      'Borrow money to cover this month and recover next month',
      'Quietly adjust the budget without worrying the rest of the family'
    ],
    allOptions: [
      'Sit down as a family and openly talk about where money is going',
      'Quietly adjust the budget without worrying the rest of the family',
      'Identify which expenses were needs and which were choices',
      'Borrow money to cover this month and recover next month',
      'Accept that some months will be like this and move forward',
      'Find a way to increase income before cutting any expenses'
    ],
    partialCredit: true
  },

  q6: {
    id: 'q6',
    type: 'shortText',
    topic: 'What the family\'s situation looks like in six months if nothing changes',
    weights: { understanding: 0.20, awareness: 0.35, decision: 0.25, clarity: 0.20 },
    expectedBehaviors: ['riskAwareness', 'financialAwareness', 'conditionalThinking'],
    strongIndicators: ['debt', 'borrowing', 'no safety net', 'emergency unprepared',
                       'emotional strain', 'relationship tension', 'worsening',
                       'compounding', 'deeper deficit', 'no buffer', 'crisis',
                       'stress', 'spiral', 'financial collapse'],
    weakIndicators: ['will struggle', 'bad situation', 'more debt', 'very difficult']
  },

  q7: {
    id: 'q7',
    type: 'videoText',
    topic: 'First action when sitting with an exhausted family surrounded by bills',
    weights: { understanding: 0.20, awareness: 0.25, decision: 0.30, clarity: 0.25 },
    expectedBehaviors: ['emotionalAwareness', 'structuredThinking', 'financialAwareness'],
    strongIndicators: ['acknowledge', 'empathy', 'first listen', 'not judge', 'open conversation',
                       'list everything', 'categorize', 'review together', 'without blame',
                       'understand before solving', 'emotional space', 'together'],
    weakIndicators: ['look at the bills', 'start budgeting', 'find solution', 'check accounts']
  },

  q8: {
    id: 'q8',
    type: 'mcq',
    topic: 'Why careful families still end up in financial stress',
    weights: { understanding: 0.35, awareness: 0.30, decision: 0.20, clarity: 0.15 },
    correctAnswer: 'B',
    options: {
      'Financial plans fail because people are never truly disciplined enough to follow them': 0,
      'Life does not happen in categories — real expenses cross boundaries and quietly break even the most careful plans': 5,
      'A family\'s emotional decisions will always override their financial ones eventually': 1,
      'No financial plan can survive without a significantly higher income as a safety net': 0
    }
  },

  q9: {
    id: 'q9',
    type: 'dragRank',
    topic: 'Priority order of actions to recover and rebuild financial stability',
    weights: { understanding: 0.20, awareness: 0.25, decision: 0.40, clarity: 0.15 },
    idealRanking: [
      'Have an honest family conversation about where money is going',
      'Review every expense from the last 6 months',
      'Identify which expenses were needs versus emotional decisions',
      'Pause all non-essential spending temporarily',
      'Build a separate emergency fund immediately',
      'Set a strict budget for social obligations',
      'Find ways to increase monthly income'
    ],
    rankingWeights: [0.30, 0.20, 0.20, 0.15, 0.08, 0.04, 0.03]
  },

  q10: {
    id: 'q10',
    type: 'shortText',
    topic: 'The hardest lesson from financial stress without one obviously wrong decision',
    weights: { understanding: 0.30, awareness: 0.30, decision: 0.20, clarity: 0.20 },
    expectedBehaviors: ['financialAwareness', 'riskAwareness', 'emotionalAwareness'],
    strongIndicators: ['small decisions matter', 'accumulate', 'no single cause', 'pattern',
                       'invisible damage', 'awareness early', 'communication', 'monitor',
                       'review regularly', 'compounding effect', 'even careful plans need watching',
                       'nothing is automatic', 'vigilance', 'proactive'],
    weakIndicators: ['should have saved more', 'should not have spent', 'be careful with money']
  }
};

// ─────────────────────────────────────────────
// EXPECTED REASONING FLOW
// ─────────────────────────────────────────────
const expectedReasoningFlow = [
  'Recognize that small, repeated financial deviations accumulate into major instability',
  'Identify avoidance/delay behavior as a compounding risk beyond individual expenses',
  'Distinguish between emotional/social spending and essential financial needs',
  'Propose structured, collaborative family review rather than individual action',
  'Understand the long-term consequence of drifting without course correction',
  'Recognize that even well-planned finances require active monitoring and communication'
];

// ─────────────────────────────────────────────
// FEEDBACK TEMPLATES
// ─────────────────────────────────────────────
const feedbackTemplates = {
  excellent: 'You demonstrated deep understanding of how small, gradual financial deviations accumulate into serious instability. You identified behavioral patterns like avoidance, correctly separated emotional from rational decision-making, and proposed structured, collaborative recovery approaches.',
  selected: 'Your responses showed good financial awareness and the ability to recognize cumulative patterns. Some answers could have explored the emotional and behavioral dimensions more — especially the role of avoidance and family communication in financial deterioration.',
  moderate: 'You identified some key themes like rising costs and savings erosion, but often missed the deeper behavioral patterns — particularly the danger of avoidance, delayed communication, and how small choices compound over time.',
  rejected: 'Your responses focused on surface-level financial advice without recognizing the cumulative, behavioral nature of this family\'s situation. Stronger answers require identifying patterns, emotional dynamics, and structured recovery thinking.'
};

module.exports = {
  scenarioId: 3,
  scenarioCode: 'IECBP26103',
  title: 'The Growing Impact of Uncontrolled Financial Decisions',
  behaviorKeywords,
  strongPatterns,
  weakPatterns,
  signalMappings,
  questionConfigs,
  expectedReasoningFlow,
  feedbackTemplates
};