/**
 * SCENARIO 2 PATTERNS
 * Title: The Gap Between Social Media Popularity and Customer Loyalty
 * Code: IECBP26102
 *
 * Context: A brand has massive social media presence but poor repeat purchase rates.
 * Evaluates whether candidates understand the distinction between attention/visibility
 * and genuine trust/loyalty.
 *
 * Evaluation focuses on:
 * - Distinguishing engagement from loyalty
 * - Understanding trust-building vs. visibility
 * - Customer experience awareness
 * - Strategic thinking on brand sustainability
 * - Root-cause analysis of business problems
 */

// ─────────────────────────────────────────────
// BEHAVIOR KEYWORD GROUPS (scenario-specific)
// ─────────────────────────────────────────────
const behaviorKeywords = {

  // Prioritization of business decisions
  prioritization: [
    'priority', 'focus', 'first', 'critical', 'essential', 'core',
    'primary', 'key', 'main', 'most important', 'immediate',
    'long-term', 'short-term', 'sustainable', 'strategic'
  ],

  // Trust and loyalty awareness
  trustAwareness: [
    'trust', 'loyalty', 'loyal', 'genuine', 'authentic', 'credibility',
    'relationship', 'repeat', 'retention', 'returning', 'returning customer',
    'recommendation', 'advocate', 'word-of-mouth', 'referral', 'commitment',
    'real', 'genuine connection', 'emotional connection'
  ],

  // Distinction between engagement and loyalty
  engagementDistinction: [
    'engagement', 'followers', 'likes', 'views', 'viral', 'visibility',
    'attention', 'reach', 'impression', 'superficial', 'surface',
    'vanity metric', 'metric', 'disconnect', 'gap', 'difference',
    'popularity', 'brand awareness', 'recognition', 'not the same'
  ],

  // Customer experience awareness
  customerExperience: [
    'experience', 'product quality', 'expectation', 'promise', 'delivery',
    'satisfaction', 'disappointed', 'mismatch', 'gap', 'complaint',
    'support', 'response', 'feedback', 'ignored', 'unresolved',
    'post-purchase', 'after-sale', 'consistency', 'match'
  ],

  // Strategic / structured thinking
  structuredThinking: [
    'first', 'then', 'next', 'step', 'approach', 'strategy', 'plan',
    'systematically', 'process', 'analyze', 'review', 'assess',
    'identify', 'understand', 'diagnose', 'root cause', 'underlying'
  ],

  // Risk awareness (business consequences)
  riskAwareness: [
    'risk', 'long-term damage', 'unsustainable', 'consequence', 'cost',
    'lose', 'churn', 'decline', 'erode', 'impact', 'harm',
    'trust erosion', 'reputation damage', 'backlash', 'crisis',
    'temporary', 'short-lived', 'fading', 'hollow'
  ],

  // Adaptability / course correction
  adaptability: [
    'change', 'shift', 'pivot', 'reconsider', 'adjust', 'improve',
    'fix', 'address', 'solve', 'tackle', 'course correct',
    'alternative', 'different approach', 'learn from', 'respond to'
  ],

  // Conditional / nuanced thinking
  conditionalThinking: [
    'however', 'although', 'but', 'despite', 'even though', 'while',
    'on the other hand', 'if', 'depends', 'both', 'balance',
    'not just', 'beyond', 'more than', 'underlying', 'deeper'
  ]
};

// ─────────────────────────────────────────────
// STRONG ANSWER PATTERNS
// ─────────────────────────────────────────────
const strongPatterns = {
  trustVsEngagement: {
    description: 'Answer clearly distinguishes between social media engagement and real customer loyalty/trust',
    requiredBehaviors: ['trustAwareness', 'engagementDistinction'],
    keywords: ['trust', 'loyalty', 'engagement', 'followers', 'attention', 'disconnect', 'gap'],
    minKeywordHits: 2,
    signals: ['understanding', 'awareness']
  },

  rootCauseIdentification: {
    description: 'Answer identifies the root cause as brand promise gap or experience mismatch',
    requiredBehaviors: ['customerExperience', 'structuredThinking'],
    keywords: ['expectation', 'mismatch', 'promise', 'product quality', 'experience', 'gap', 'disappointment'],
    minKeywordHits: 2,
    signals: ['understanding', 'decision']
  },

  customerEmotionalInsight: {
    description: 'Answer recognizes the emotional or relational dimension of customer loyalty',
    requiredBehaviors: ['trustAwareness', 'customerExperience'],
    keywords: ['trust', 'authentic', 'genuine', 'relationship', 'emotional', 'feel', 'care', 'valued'],
    minKeywordHits: 2,
    signals: ['awareness', 'clarity']
  },

  longTermConsequenceThinking: {
    description: 'Answer recognizes that popularity without loyalty creates long-term business risk',
    requiredBehaviors: ['riskAwareness', 'conditionalThinking'],
    keywords: ['long-term', 'sustainable', 'erode', 'consequence', 'unsustainable', 'risk', 'decline'],
    minKeywordHits: 1,
    signals: ['awareness', 'decision']
  },

  actionablePrioritization: {
    description: 'Answer proposes concrete, prioritized actions to close the loyalty gap',
    requiredBehaviors: ['prioritization', 'adaptability'],
    keywords: ['prioritize', 'focus', 'improve', 'fix', 'address', 'invest', 'strategy'],
    minKeywordHits: 2,
    signals: ['decision', 'clarity']
  }
};

// ─────────────────────────────────────────────
// WEAK ANSWER PATTERNS
// ─────────────────────────────────────────────
const weakPatterns = {
  surfaceLevelSolution: {
    description: 'Suggests more marketing/influencers as the fix without addressing root cause',
    indicators: ['more influencers', 'more campaigns', 'more posting', 'go viral', 'more content'],
    penaltySignals: ['understanding', 'decision']
  },
  confusesEngagementWithLoyalty: {
    description: 'Treats high likes/followers as evidence of customer loyalty',
    indicators: ['followers show loyalty', 'engagement means loyal', 'views equal customers'],
    penaltySignals: ['understanding', 'awareness']
  },
  noRootCause: {
    description: 'Answer does not identify why customers are not returning',
    missingBehaviors: ['customerExperience', 'trustAwareness'],
    penaltySignals: ['understanding']
  },
  genericResponse: {
    description: 'Answer uses only vague phrases without scenario-specific reasoning',
    maxKeywordHits: 1,
    penaltySignals: ['clarity', 'understanding']
  }
};

// ─────────────────────────────────────────────
// SIGNAL MAPPINGS
// ─────────────────────────────────────────────
const signalMappings = {
  prioritization:         { understanding: 0.2, awareness: 0.2, decision: 0.4, clarity: 0.2 },
  trustAwareness:         { understanding: 0.3, awareness: 0.4, decision: 0.2, clarity: 0.1 },
  engagementDistinction:  { understanding: 0.4, awareness: 0.3, decision: 0.2, clarity: 0.1 },
  customerExperience:     { understanding: 0.3, awareness: 0.3, decision: 0.2, clarity: 0.2 },
  structuredThinking:     { understanding: 0.1, awareness: 0.1, decision: 0.3, clarity: 0.5 },
  riskAwareness:          { understanding: 0.2, awareness: 0.5, decision: 0.2, clarity: 0.1 },
  adaptability:           { understanding: 0.1, awareness: 0.2, decision: 0.5, clarity: 0.2 },
  conditionalThinking:    { understanding: 0.3, awareness: 0.2, decision: 0.3, clarity: 0.2 }
};

// ─────────────────────────────────────────────
// QUESTION CONFIGS
// ─────────────────────────────────────────────
const questionConfigs = {
  q1: {
    id: 'q1',
    type: 'mcq',
    topic: 'Why high engagement does not equal repeat purchases',
    weights: { understanding: 0.30, awareness: 0.25, decision: 0.30, clarity: 0.15 },
    correctAnswer: 'B', // High engagement builds attention but not trust
    options: {
      'The company needs more influencer collaborations to stay visible': 0,
      'High engagement is building attention but not trust or reason to return': 5,
      'A 6% repeat purchase rate is normal during rapid follower growth': 1,
      'The company should offer discounts to push repeat purchases': 1
    }
  },

  q2: {
    id: 'q2',
    type: 'shortText',
    topic: 'What the gap between recognition and recommendation reveals',
    weights: { understanding: 0.35, awareness: 0.30, decision: 0.20, clarity: 0.15 },
    expectedBehaviors: ['trustAwareness', 'engagementDistinction', 'customerExperience'],
    strongIndicators: ['trust', 'recognition', 'recommend', 'experience', 'gap', 'authentic',
                       'believe', 'stand behind', 'relationship', 'deeper', 'not just aware'],
    weakIndicators: ['need more advertising', 'people know them but not loyal', 'simple gap']
  },

  q3: {
    id: 'q3',
    type: 'yesNo',
    topic: 'Is an engaged follower who never purchased a loyal customer?',
    weights: { understanding: 0.30, awareness: 0.25, decision: 0.25, clarity: 0.20 },
    acceptableAnswers: ['yes', 'no'],
    // "No" strong: loyalty = purchasing behavior + trust + repeat engagement with product
    // "Yes" weak if: equates following/sharing with loyalty
    expectedBehaviors: ['trustAwareness', 'engagementDistinction', 'conditionalThinking'],
    strongReasoningKeywords: ['purchase', 'transaction', 'economic', 'trust', 'product',
                               'different', 'advocate', 'commitment', 'real loyalty']
  },

  q4: {
    id: 'q4',
    type: 'multiSelect',
    topic: 'Signs that popularity is not translating to loyalty from Instagram post',
    weights: { understanding: 0.25, awareness: 0.30, decision: 0.30, clarity: 0.15 },
    correctAnswers: [
      'Customers are questioning the product\'s actual quality',
      'People are engaging with the celebrity, not the brand',
      'Shipping and support complaints are visible but ignored',
      'Comments show curiosity but no evidence of repeat buyers',
      'The brand is only responding to positive comments',
      'Customers feel the product is overpriced for what it delivers'
    ], // All 6 are correct
    allOptions: [
      'Customers are questioning the product\'s actual quality',
      'People are engaging with the celebrity, not the brand',
      'Shipping and support complaints are visible but ignored',
      'Comments show curiosity but no evidence of repeat buyers',
      'The brand is only responding to positive comments',
      'Customers feel the product is overpriced for what it delivers'
    ],
    partialCredit: true,
    // Score = (correct selections / total correct) * 5
    maxScore: 5
  },

  q5: {
    id: 'q5',
    type: 'shortText',
    topic: 'Long-term cost of ignoring a loyal customer message to run a campaign',
    weights: { understanding: 0.25, awareness: 0.30, decision: 0.25, clarity: 0.20 },
    expectedBehaviors: ['riskAwareness', 'trustAwareness', 'customerExperience'],
    strongIndicators: ['trust erosion', 'lose loyal', 'cost', 'word of mouth', 'negative',
                       'repeat customer', 'churn', 'reputation', 'signal', 'priority',
                       'relationship damage', 'long-term harm', 'advocacy lost'],
    weakIndicators: ['bad for business', 'customer upset', 'they may leave']
  },

  q6: {
    id: 'q6',
    type: 'shortText',
    topic: 'Responding to CEO vs Head of Marketing about flat sales despite massive followers',
    weights: { understanding: 0.30, awareness: 0.25, decision: 0.30, clarity: 0.15 },
    expectedBehaviors: ['engagementDistinction', 'trustAwareness', 'adaptability'],
    strongIndicators: ['engagement is not loyalty', 'trust', 'experience', 'product',
                       'returning customers', 'root cause', 'gap', 'promise',
                       'visibility is not enough', 'attention does not equal purchase'],
    weakIndicators: ['need more content', 'keep growing followers', 'just need time']
  },

  q7: {
    id: 'q7',
    type: 'mcq',
    topic: 'What the pattern of complaints from first-time buyers indicates',
    weights: { understanding: 0.30, awareness: 0.25, decision: 0.30, clarity: 0.15 },
    correctAnswer: 'B', // Built visibility without building trust or delivering on promise
    options: {
      'The influencer campaigns are attracting the wrong audience': 2,
      'The company has built visibility without building trust or delivering on its promise': 5,
      'First-time buyers always need time to adjust their expectations': 0,
      'The company needs better influencer briefs to set realistic expectations': 1
    }
  },

  q8: {
    id: 'q8',
    type: 'audioText',
    topic: 'Responding genuinely to a customer disappointed by brand vs product experience gap',
    weights: { understanding: 0.20, awareness: 0.25, decision: 0.25, clarity: 0.30 },
    expectedBehaviors: ['customerExperience', 'trustAwareness', 'adaptability'],
    // Strong: acknowledges the expectation gap, shows genuine empathy,
    // takes ownership of brand vs product disconnect, commits to resolution
    strongIndicators: ['understand', 'experience', 'gap', 'disappoint', 'expectation',
                       'genuine', 'resolve', 'listen', 'acknowledge', 'sorry', 'matter',
                       'commitment', 'address', 'responsibility'],
    weakIndicators: ['we will look into it', 'contact support', 'sorry for inconvenience', 'template']
  },

  q9: {
    id: 'q9',
    type: 'dragRank',
    topic: 'Priority ranking of actions to close popularity vs loyalty gap',
    weights: { understanding: 0.20, awareness: 0.25, decision: 0.40, clarity: 0.15 },
    idealRanking: [
      'Understand why existing customers are not returning',
      'Invest in post-purchase customer experience',
      'Improve the product to match what campaigns promise',
      'Build a community around real customer stories',
      'Partner with micro-influencers instead of celebrities',
      'Launch another celebrity collaboration',
      'Increase social media posting frequency'
    ],
    rankingWeights: [0.30, 0.25, 0.20, 0.10, 0.08, 0.04, 0.03]
  },

  q10: {
    id: 'q10',
    type: 'shortText',
    topic: 'What the competitor with fewer followers understands about loyalty',
    weights: { understanding: 0.35, awareness: 0.25, decision: 0.25, clarity: 0.15 },
    expectedBehaviors: ['trustAwareness', 'customerExperience', 'conditionalThinking'],
    strongIndicators: ['product quality', 'real value', 'trust', 'consistent', 'experience',
                       'customer-first', 'genuine', 'relationship', 'word of mouth',
                       'follow through', 'promise delivery', 'reputation', 'not marketing'],
    weakIndicators: ['better product', 'cheaper', 'more loyal customers', 'less competition']
  }
};

// ─────────────────────────────────────────────
// EXPECTED REASONING FLOW
// ─────────────────────────────────────────────
const expectedReasoningFlow = [
  'Recognize that social media engagement and customer loyalty are distinct concepts',
  'Identify the gap between brand promise and actual product/experience delivery',
  'Understand that trust is built through consistent experience, not visibility',
  'Recognize long-term business risk when loyalty is not prioritized',
  'Propose root-cause-focused actions over additional marketing spend',
  'Demonstrate empathy and understanding of customer emotional expectations'
];

// ─────────────────────────────────────────────
// FEEDBACK TEMPLATES
// ─────────────────────────────────────────────
const feedbackTemplates = {
  excellent: 'You clearly understood the difference between social media visibility and genuine customer loyalty. Your responses showed strong awareness of trust-building, experience gaps, and long-term brand risk — demonstrating strategic and customer-centered thinking.',
  selected: 'You showed good understanding of the loyalty vs. engagement gap and identified key issues. Some responses could have gone deeper into root causes or the long-term consequences of ignoring customer experience.',
  moderate: 'Your responses addressed basic themes of loyalty and marketing, but often stayed at a surface level. Deeper analysis of why customers do not return — beyond just "need more trust" — would strengthen your reasoning.',
  rejected: 'Your responses did not clearly distinguish between social media popularity and real customer loyalty. Many answers focused on increasing marketing rather than addressing the underlying trust and experience gaps.'
};

module.exports = {
  scenarioId: 2,
  scenarioCode: 'IECBP26102',
  title: 'The Gap Between Social Media Popularity and Customer Loyalty',
  behaviorKeywords,
  strongPatterns,
  weakPatterns,
  signalMappings,
  questionConfigs,
  expectedReasoningFlow,
  feedbackTemplates
};