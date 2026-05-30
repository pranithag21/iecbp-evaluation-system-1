/**
 * SCENARIO 5 PATTERNS
 * Title: The Disconnect Between Customer Data Collection and Real Customer Satisfaction
 * Code: IECBP26105
 *
 * Context: Companies collect massive customer data and analytics, but customers still
 * feel misunderstood. Even improving features doesn't reduce frustration — because
 * data captures behavior, not emotion, context, or actual experience.
 *
 * Evaluation focuses on:
 * - Understanding the limits of quantitative data
 * - Distinguishing metrics from meaning
 * - Empathy and qualitative thinking
 * - Root-cause analysis of product-satisfaction gaps
 * - Strategic pivot from metrics-driven to experience-driven thinking
 */

// ─────────────────────────────────────────────
// BEHAVIOR KEYWORD GROUPS (scenario-specific)
// ─────────────────────────────────────────────
const behaviorKeywords = {

  // Data vs. Experience Distinction
  dataLimitations: [
    'data', 'analytics', 'metric', 'quantitative', 'dashboard',
    'engagement', 'clicks', 'usage', 'behavior', 'pattern',
    'does not capture', 'cannot measure', 'misses', 'incomplete',
    'limited', 'surface', 'activity', 'not emotion', 'not context'
  ],

  // Qualitative / Human Understanding
  humanUnderstanding: [
    'emotion', 'frustration', 'experience', 'feeling', 'context',
    'qualitative', 'empathy', 'interview', 'observation', 'conversation',
    'user interview', 'direct interaction', 'listen', 'understand',
    'pain point', 'actual need', 'real problem', 'underlying issue'
  ],

  // Operational / Product Awareness
  productAwareness: [
    'feature', 'optimize', 'improve', 'update', 'functionality',
    'usability', 'confusing', 'friction', 'workaround', 'bug',
    'pain point', 'problem', 'product-market fit', 'solve',
    'fix', 'redesign', 'user testing', 'feedback loop'
  ],

  // Risk Awareness (metrics-only approach)
  riskAwareness: [
    'misleading', 'false positive', 'vanity metric', 'lagging indicator',
    'blind spot', 'overfit', 'diverge', 'misaligned', 'surface success',
    'hidden dissatisfaction', 'silent churn', 'disengagement',
    'consequence', 'long-term damage', 'trust erosion'
  ],

  // Structured / Strategic Thinking
  structuredThinking: [
    'first', 'step', 'approach', 'strategy', 'plan', 'process',
    'systematic', 'identify', 'diagnose', 'root cause', 'underlying',
    'analyze', 'review', 'assess', 'investigate', 'cross-functional'
  ],

  // Coordination / Organizational Awareness
  coordination: [
    'team', 'cross-functional', 'product', 'engineering', 'customer support',
    'align', 'collaborate', 'involve', 'integrate', 'feedback loop',
    'close gap', 'bridge', 'connect', 'communicate', 'share insights'
  ],

  // Adaptability
  adaptability: [
    'shift', 'pivot', 'change approach', 'move beyond', 'evolve',
    'not just data', 'combine', 'mix', 'hybrid', 'add qualitative',
    'rethink', 'reframe', 'challenge assumptions', 'validate',
    'course correct', 'reconsider', 'expand'
  ],

  // Conditional / Multi-Factor Thinking
  conditionalThinking: [
    'however', 'although', 'but', 'even if', 'despite', 'while',
    'both', 'not enough alone', 'depends', 'context', 'on the other hand',
    'combination', 'alone is insufficient', 'more than', 'beyond'
  ]
};

// ─────────────────────────────────────────────
// STRONG ANSWER PATTERNS
// ─────────────────────────────────────────────
const strongPatterns = {
  dataEmotionGap: {
    description: 'Answer identifies that data captures behavior but misses emotion, context, and real experience',
    requiredBehaviors: ['dataLimitations', 'humanUnderstanding'],
    keywords: ['data captures behavior', 'not emotion', 'context missing', 'feeling',
               'frustration', 'numbers cannot measure', 'human experience'],
    minKeywordHits: 2,
    signals: ['understanding', 'awareness']
  },

  featureOptimizationTrap: {
    description: 'Answer identifies that companies optimize features instead of solving actual pain points',
    requiredBehaviors: ['productAwareness', 'dataLimitations'],
    keywords: ['optimize', 'feature', 'pain point', 'solve', 'actual problem', 'real issue',
               'metric success', 'experience failure', 'usage does not mean satisfaction'],
    minKeywordHits: 2,
    signals: ['understanding', 'decision']
  },

  metricMisguidance: {
    description: 'Answer recognizes that high usage or engagement metrics can mask dissatisfaction',
    requiredBehaviors: ['riskAwareness', 'dataLimitations'],
    keywords: ['misleading', 'vanity metric', 'usage without satisfaction', 'forced usage',
               'no alternative', 'confusing but still used', 'silent frustration', 'lagging'],
    minKeywordHits: 2,
    signals: ['awareness', 'understanding']
  },

  qualitativeShift: {
    description: 'Answer proposes adding qualitative methods: interviews, observation, direct interaction',
    requiredBehaviors: ['humanUnderstanding', 'adaptability'],
    keywords: ['interview', 'observation', 'direct', 'conversation', 'qualitative',
               'listen', 'empathy', 'user study', 'not just data', 'talk to customers'],
    minKeywordHits: 2,
    signals: ['decision', 'clarity']
  },

  ceoDecisionStrength: {
    description: 'CEO-perspective answer challenges data-only success narrative and pivots to experience',
    requiredBehaviors: ['structuredThinking', 'adaptability'],
    keywords: ['qualitative', 'cross-functional', 'challenge', 'shift focus', 'real satisfaction',
               'beyond metrics', 'customer experience', 'not just dashboard', 'rethink'],
    minKeywordHits: 2,
    signals: ['decision', 'awareness']
  }
};

// ─────────────────────────────────────────────
// WEAK ANSWER PATTERNS
// ─────────────────────────────────────────────
const weakPatterns = {
  moreDataSolution: {
    description: 'Suggests collecting more data as the solution without addressing its limitations',
    indicators: ['collect more data', 'better analytics', 'more tracking', 'more feedback forms'],
    penaltySignals: ['understanding', 'decision']
  },
  featureFixOnly: {
    description: 'Proposes only technical fixes without engaging emotional/experience dimension',
    indicators: ['add more features', 'update more', 'release faster', 'more functionality'],
    penaltySignals: ['understanding']
  },
  noQualitativeDimension: {
    description: 'Answer does not mention any form of direct human engagement or qualitative insight',
    missingBehaviors: ['humanUnderstanding'],
    penaltySignals: ['awareness', 'decision']
  },
  genericResponse: {
    description: 'Vague answer without engaging the data-vs-experience distinction',
    maxKeywordHits: 1,
    penaltySignals: ['clarity', 'understanding']
  }
};

// ─────────────────────────────────────────────
// SIGNAL MAPPINGS
// ─────────────────────────────────────────────
const signalMappings = {
  dataLimitations:      { understanding: 0.5, awareness: 0.3, decision: 0.1, clarity: 0.1 },
  humanUnderstanding:   { understanding: 0.3, awareness: 0.4, decision: 0.2, clarity: 0.1 },
  productAwareness:     { understanding: 0.3, awareness: 0.3, decision: 0.3, clarity: 0.1 },
  riskAwareness:        { understanding: 0.2, awareness: 0.5, decision: 0.2, clarity: 0.1 },
  structuredThinking:   { understanding: 0.1, awareness: 0.1, decision: 0.3, clarity: 0.5 },
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
    topic: 'Is data-driven decision-making enough to understand customers?',
    weights: { understanding: 0.35, awareness: 0.30, decision: 0.20, clarity: 0.15 },
    correctAnswer: 'no',
    acceptableAnswers: ['no'],
    expectedBehaviors: ['dataLimitations', 'humanUnderstanding', 'conditionalThinking'],
    strongReasoningKeywords: ['emotion', 'context', 'qualitative', 'direct interaction',
                               'not enough alone', 'behavioral only', 'missing experience',
                               'observation', 'frustration cannot be measured', 'human element']
  },

  q2: {
    id: 'q2',
    type: 'mcq',
    topic: 'Hidden issue when product keeps improving but customer frustration increases',
    weights: { understanding: 0.35, awareness: 0.25, decision: 0.25, clarity: 0.15 },
    correctAnswer: 'A',
    options: {
      'Companies are optimizing features instead of solving actual pain points': 5,
      'Customers dislike updates naturally': 0,
      'Servers are overloaded': 0,
      'Feedback systems are disabled': 0
    }
  },

  q3: {
    id: 'q3',
    type: 'shortText',
    topic: 'CEO decision when team says data is fine but customers disagree',
    weights: { understanding: 0.25, awareness: 0.25, decision: 0.35, clarity: 0.15 },
    expectedBehaviors: ['structuredThinking', 'humanUnderstanding', 'adaptability'],
    strongIndicators: ['qualitative', 'customer interview', 'cross-functional', 'challenge data',
                       'listen directly', 'prioritize experience', 'shift focus', 'real satisfaction',
                       'not just metrics', 'investigate', 'direct feedback'],
    weakIndicators: ['trust the data', 'collect more data', 'investigate why', 'improve features']
  },

  q4: {
    id: 'q4',
    type: 'shortText',
    topic: 'How a confusing feature can still show high usage in data',
    weights: { understanding: 0.40, awareness: 0.30, decision: 0.15, clarity: 0.15 },
    expectedBehaviors: ['dataLimitations', 'productAwareness', 'humanUnderstanding'],
    strongIndicators: ['forced usage', 'no alternative', 'necessity', 'must use despite confusion',
                       'usage not satisfaction', 'activity vs experience', 'effort hidden in clicks',
                       'workaround', 'frustration masked by data', 'engaged but suffering'],
    weakIndicators: ['people use it anyway', 'they do not understand it', 'feature is confusing']
  },

  q5: {
    id: 'q5',
    type: 'multiSelect',
    topic: 'What causes gap between analytics and real customer satisfaction',
    weights: { understanding: 0.30, awareness: 0.30, decision: 0.25, clarity: 0.15 },
    correctAnswers: [
      'Over-reliance on dashboards',
      'Lack of user interviews',
      'Ignoring customer complaints'
    ],
    allOptions: [
      'Over-reliance on dashboards',
      'Lack of user interviews',
      'Real-time emotional tracking',
      'Ignoring customer complaints'
    ],
    // "Real-time emotional tracking" is a distractor — does not cause the gap, potentially helps
    partialCredit: true
  },

  q6: {
    id: 'q6',
    type: 'shortText',
    topic: 'Biggest lesson from this scenario about data and customer understanding',
    weights: { understanding: 0.35, awareness: 0.30, decision: 0.20, clarity: 0.15 },
    expectedBehaviors: ['dataLimitations', 'humanUnderstanding', 'conditionalThinking'],
    strongIndicators: ['data collection easier than understanding', 'emotion', 'frustration',
                       'expectations', 'human experience', 'numbers insufficient',
                       'real satisfaction requires empathy', 'qualitative matters',
                       'metrics do not tell whole story'],
    weakIndicators: ['data is not enough', 'need to understand customers', 'listen more']
  },

  q7: {
    id: 'q7',
    type: 'mcq',
    topic: 'What hidden issue is most likely present',
    weights: { understanding: 0.30, awareness: 0.25, decision: 0.30, clarity: 0.15 },
    correctAnswer: 'A',
    options: {
      'Companies optimize metrics instead of actual experiences': 5,
      'Products lack internet access': 0,
      'Users stop using smartphones': 0,
      'Databases lose all records daily': 0
    }
  },

  q8: {
    id: 'q8',
    type: 'shortText',
    topic: 'Why customers feel misunderstood despite massive data collection',
    weights: { understanding: 0.35, awareness: 0.35, decision: 0.15, clarity: 0.15 },
    expectedBehaviors: ['dataLimitations', 'humanUnderstanding', 'riskAwareness'],
    strongIndicators: ['behavior vs emotion', 'measurable activity', 'real satisfaction unmeasurable',
                       'frustration not in analytics', 'experience gap', 'context invisible to data',
                       'engagement hides dissatisfaction', 'clicks not feelings'],
    weakIndicators: ['data does not help', 'they feel ignored', 'feedback not used']
  },

  q9: {
    id: 'q9',
    type: 'audioText',
    topic: 'What disconnect the support conversation reveals',
    weights: { understanding: 0.30, awareness: 0.35, decision: 0.20, clarity: 0.15 },
    expectedBehaviors: ['dataLimitations', 'humanUnderstanding', 'productAwareness'],
    strongIndicators: ['solving features not problems', 'real issue ignored', 'data says fixed',
                       'customer says not fixed', 'company updates without understanding',
                       'disconnected feedback loop', 'emotional vs functional', 'missing root cause'],
    weakIndicators: ['customer is frustrated', 'support did not help', 'they keep updating']
  },

  q10: {
    id: 'q10',
    type: 'videoText',
    topic: 'Why dashboards show positive results but customers feel unhappy',
    weights: { understanding: 0.35, awareness: 0.30, decision: 0.20, clarity: 0.15 },
    expectedBehaviors: ['dataLimitations', 'riskAwareness', 'humanUnderstanding'],
    strongIndicators: ['quantitative metrics', 'clicks usage not frustration', 'dashboard blind spot',
                       'emotional experience unmeasured', 'usability friction invisible',
                       'positive numbers hide dissatisfaction', 'lagging indicator',
                       'activity not experience', 'surface metrics'],
    weakIndicators: ['dashboards wrong', 'data inaccurate', 'customers not happy']
  }
};

// ─────────────────────────────────────────────
// EXPECTED REASONING FLOW
// ─────────────────────────────────────────────
const expectedReasoningFlow = [
  'Recognize that quantitative data captures behavior but misses emotion and context',
  'Understand that optimizing features is not the same as solving actual pain points',
  'Identify that high usage metrics can mask genuine frustration or forced usage',
  'Propose qualitative methods (interviews, observation) to complement analytics',
  'Recognize the risk of dashboard over-reliance creating blind spots',
  'Articulate that real customer satisfaction requires empathy, not just data'
];

// ─────────────────────────────────────────────
// FEEDBACK TEMPLATES
// ─────────────────────────────────────────────
const feedbackTemplates = {
  excellent: 'You demonstrated sharp analytical thinking about the limits of data-driven approaches. You consistently identified the gap between behavioral metrics and real customer experience, and proposed concrete qualitative methods to bridge it. Your answers showed empathy, systems thinking, and strategic awareness.',
  selected: 'You showed good understanding of why data alone is insufficient and recognized the importance of qualitative insight. Some answers could have been more precise about what data specifically misses — particularly the emotional, contextual, and experiential dimensions of customer satisfaction.',
  moderate: 'Your responses touched on the data-satisfaction gap but mostly stayed at a surface level. Stronger answers require distinguishing exactly what data captures (behavior) from what it cannot (emotion, frustration, context) and proposing specific qualitative alternatives.',
  rejected: 'Your responses did not engage with the core distinction between data collection and genuine customer understanding. Answers like "collect more data" or "improve features" miss the point — the scenario is about what data fundamentally cannot measure.'
};

module.exports = {
  scenarioId: 5,
  scenarioCode: 'IECBP26105',
  title: 'The Disconnect Between Customer Data Collection and Real Customer Satisfaction',
  behaviorKeywords,
  strongPatterns,
  weakPatterns,
  signalMappings,
  questionConfigs,
  expectedReasoningFlow,
  feedbackTemplates
};