/**
 * SCENARIO 6 PATTERNS
 * Title: The Unintended Consequences of Flexible Work-From-Home Policies
 * Code: IECBP26106
 *
 * Context: A company introduced WFH policies to improve happiness and work-life balance.
 * Initially successful, over time it caused productivity drops, communication delays,
 * and weaker team collaboration — unintended consequences the company did not anticipate.
 *
 * Evaluation focuses on:
 * - Understanding unintended consequences of well-intentioned decisions
 * - Balance between employee wellbeing and organizational productivity
 * - Coordination and communication system thinking
 * - Accountability and role clarity in remote settings
 * - Structured problem-solving for hybrid work challenges
 */

// ─────────────────────────────────────────────
// BEHAVIOR KEYWORD GROUPS (scenario-specific)
// ─────────────────────────────────────────────
const behaviorKeywords = {

  // Prioritization / Balance Thinking
  prioritization: [
    'balance', 'both', 'neither', 'priority', 'tradeoff', 'weigh',
    'first', 'primary', 'main', 'key issue', 'core challenge',
    'happiness and productivity', 'neither alone', 'sustainable'
  ],

  // Coordination / Communication Awareness
  coordination: [
    'communication', 'coordination', 'real-time', 'sync', 'meeting',
    'collaboration', 'team', 'align', 'update', 'response time',
    'structured', 'channel', 'tool', 'tracking', 'check-in',
    'accountability', 'clarity', 'assign', 'delegate', 'confirm'
  ],

  // Risk Awareness (WFH unintended consequences)
  riskAwareness: [
    'unintended', 'consequence', 'tradeoff', 'unexpected', 'hidden cost',
    'productivity decline', 'collaboration weakens', 'delay', 'isolation',
    'oversight loss', 'accountability gap', 'communication breakdown',
    'long-term risk', 'performance', 'drift', 'invisible problem'
  ],

  // Structured Thinking / Problem Solving
  structuredThinking: [
    'first', 'then', 'step', 'approach', 'plan', 'strategy',
    'identify', 'analyze', 'diagnose', 'address', 'systematic',
    'sequence', 'order', 'process', 'implement', 'track', 'measure'
  ],

  // Operational Awareness (remote work systems)
  operationalAwareness: [
    'hybrid', 'system', 'structure', 'protocol', 'workflow',
    'task management', 'deadline', 'responsibility', 'role',
    'expectation', 'schedule', 'availability', 'response window',
    'tool', 'platform', 'visibility', 'progress', 'oversight'
  ],

  // Adaptability
  adaptability: [
    'adjust', 'hybrid', 'combine', 'balance', 'flexible but structured',
    'evolve', 'improve', 'redesign', 'fix', 'address', 'pivot',
    'new approach', 'modify', 'test', 'iterate', 'change'
  ],

  // Conditional / Nuanced Thinking
  conditionalThinking: [
    'however', 'although', 'but', 'while', 'depends', 'if',
    'both', 'on the other hand', 'not just', 'balance between',
    'context', 'situation', 'role type', 'job type', 'team size'
  ],

  // Role Clarity / Accountability
  accountabilityThinking: [
    'clear role', 'assign', 'responsibility', 'ownership', 'accountability',
    'who is responsible', 'track', 'verify', 'confirm', 'follow up',
    'unclear', 'ambiguity', 'confusion', 'overlap', 'gap in roles'
  ]
};

// ─────────────────────────────────────────────
// STRONG ANSWER PATTERNS
// ─────────────────────────────────────────────
const strongPatterns = {
  unintendedConsequenceAwareness: {
    description: 'Answer recognizes that solving one problem (happiness) created new problems (productivity, collaboration)',
    requiredBehaviors: ['riskAwareness', 'conditionalThinking'],
    keywords: ['unintended', 'consequence', 'tradeoff', 'new problem', 'unexpected',
               'solved one created another', 'while improving happiness', 'but reduced'],
    minKeywordHits: 2,
    signals: ['understanding', 'awareness']
  },

  happinessProductivityBalance: {
    description: 'Answer argues for balancing employee wellbeing with organizational productivity',
    requiredBehaviors: ['prioritization', 'conditionalThinking'],
    keywords: ['balance', 'both', 'neither alone', 'happiness and productivity',
               'retention and performance', 'sustainable', 'one without other'],
    minKeywordHits: 2,
    signals: ['decision', 'awareness']
  },

  communicationSystemSolution: {
    description: 'Answer proposes structured communication systems: channels, sync meetings, response windows',
    requiredBehaviors: ['coordination', 'structuredThinking'],
    keywords: ['structured channel', 'real-time tool', 'response time', 'sync meeting',
               'weekly check-in', 'communication protocol', 'set expectations', 'async rules'],
    minKeywordHits: 2,
    signals: ['decision', 'clarity']
  },

  roleAccountabilityInsight: {
    description: 'Answer identifies unclear role assignment as a core failure in remote settings',
    requiredBehaviors: ['accountabilityThinking', 'operationalAwareness'],
    keywords: ['unclear role', 'who is responsible', 'confusion', 'assign clearly',
               'accountability gap', 'tracking', 'ownership', 'no visibility'],
    minKeywordHits: 2,
    signals: ['awareness', 'decision']
  },

  hybridModelProposal: {
    description: 'Answer proposes a hybrid model balancing flexibility with structure',
    requiredBehaviors: ['adaptability', 'operationalAwareness'],
    keywords: ['hybrid', 'structure with flexibility', 'structured flexibility', 'combine',
               'not full wfh', 'office days', 'balance remote and in-person'],
    minKeywordHits: 1,
    signals: ['decision', 'clarity']
  }
};

// ─────────────────────────────────────────────
// WEAK ANSWER PATTERNS
// ─────────────────────────────────────────────
const weakPatterns = {
  alwaysFavorWFH: {
    description: 'Unconditionally supports WFH without acknowledging productivity/collaboration tradeoffs',
    indicators: ['wfh is always better', 'employees are happier', 'no need for office',
                 'productivity is not a problem', 'flexibility is the answer'],
    penaltySignals: ['awareness', 'decision']
  },
  alwaysAgainstWFH: {
    description: 'Dismisses WFH entirely without recognizing genuine benefits or nuance',
    indicators: ['wfh does not work', 'people should be in office', 'return to office',
                 'wfh is the problem'],
    penaltySignals: ['understanding']
  },
  noStructuredFix: {
    description: 'Identifies the problem but proposes no structured solution',
    missingBehaviors: ['structuredThinking', 'coordination'],
    penaltySignals: ['decision', 'clarity']
  },
  genericManagement: {
    description: 'Offers only generic management advice without scenario-specific thinking',
    maxKeywordHits: 1,
    penaltySignals: ['clarity', 'understanding']
  }
};

// ─────────────────────────────────────────────
// SIGNAL MAPPINGS
// ─────────────────────────────────────────────
const signalMappings = {
  prioritization:         { understanding: 0.2, awareness: 0.2, decision: 0.4, clarity: 0.2 },
  coordination:           { understanding: 0.1, awareness: 0.2, decision: 0.4, clarity: 0.3 },
  riskAwareness:          { understanding: 0.2, awareness: 0.5, decision: 0.2, clarity: 0.1 },
  structuredThinking:     { understanding: 0.1, awareness: 0.1, decision: 0.3, clarity: 0.5 },
  operationalAwareness:   { understanding: 0.3, awareness: 0.3, decision: 0.3, clarity: 0.1 },
  adaptability:           { understanding: 0.1, awareness: 0.2, decision: 0.5, clarity: 0.2 },
  conditionalThinking:    { understanding: 0.3, awareness: 0.2, decision: 0.3, clarity: 0.2 },
  accountabilityThinking: { understanding: 0.2, awareness: 0.3, decision: 0.3, clarity: 0.2 }
};

// ─────────────────────────────────────────────
// QUESTION CONFIGS
// ─────────────────────────────────────────────
const questionConfigs = {
  q1: {
    id: 'q1',
    type: 'yesNo',
    topic: 'Did WFH improve employee happiness initially?',
    weights: { understanding: 0.25, awareness: 0.25, decision: 0.25, clarity: 0.25 },
    correctAnswer: 'yes',
    acceptableAnswers: ['yes'],
    expectedBehaviors: ['conditionalThinking', 'riskAwareness'],
    // Strong: Yes + explains why (flexibility, reduced commute, comfort) AND
    // notes it also had tradeoffs over time (productivity, collaboration)
    strongReasoningKeywords: ['flexibility', 'comfort', 'reduced commute', 'satisfaction',
                               'initially', 'but later', 'tradeoff', 'short term', 'unintended']
  },

  q2: {
    id: 'q2',
    type: 'mcq',
    topic: 'Which factor most directly caused reduced collaboration?',
    weights: { understanding: 0.25, awareness: 0.30, decision: 0.30, clarity: 0.15 },
    correctAnswer: 'B',
    options: {
      'Office infrastructure': 0,
      'Lack of real-time interaction': 5,
      'Employee skills': 0,
      'Increased meetings': 0
    }
  },

  q3: {
    id: 'q3',
    type: 'dragRank',
    topic: 'Correct sequence to fix communication delays in WFH setup',
    weights: { understanding: 0.25, awareness: 0.20, decision: 0.35, clarity: 0.20 },
    // Correct: b → d → a → c
    // implement structured channels → deploy real-time tools → set response expectations → organize syncs
    idealRanking: [
      'Implement structured communication channels',
      'Use real-time messaging tools',
      'Set response-time expectations',
      'Organize daily/weekly sync meetings'
    ],
    rankingWeights: [0.30, 0.25, 0.25, 0.20]
  },

  q4: {
    id: 'q4',
    type: 'yesNo',
    topic: 'Should companies prioritize employee happiness over productivity?',
    weights: { understanding: 0.20, awareness: 0.25, decision: 0.35, clarity: 0.20 },
    acceptableAnswers: ['yes', 'no'],
    // Best answer: Neither fully — balance both; happiness improves retention, productivity ensures sustainability
    expectedBehaviors: ['prioritization', 'conditionalThinking', 'riskAwareness'],
    strongReasoningKeywords: ['balance', 'both', 'neither', 'tradeoff', 'retention',
                               'sustainability', 'one without other', 'long-term',
                               'combined approach', 'mutual']
  },

  q5: {
    id: 'q5',
    type: 'shortText',
    topic: 'How companies can avoid failure in WFH systems',
    weights: { understanding: 0.20, awareness: 0.25, decision: 0.35, clarity: 0.20 },
    expectedBehaviors: ['adaptability', 'coordination', 'operationalAwareness'],
    strongIndicators: ['hybrid model', 'structured communication', 'clear roles',
                       'regular check-in', 'accountability', 'tracking', 'expectations',
                       'balance flexibility with structure', 'defined channels', 'oversight'],
    weakIndicators: ['communicate more', 'have meetings', 'be flexible', 'trust employees']
  },

  q6: {
    id: 'q6',
    type: 'shortText',
    topic: 'Future risk for company performance from WFH policy without correction',
    weights: { understanding: 0.20, awareness: 0.35, decision: 0.25, clarity: 0.20 },
    expectedBehaviors: ['riskAwareness', 'conditionalThinking', 'operationalAwareness'],
    strongIndicators: ['declining efficiency', 'missed deadlines', 'slower decisions',
                       'reduced innovation', 'weaker collaboration', 'team drift',
                       'competitiveness risk', 'performance decline', 'long-term harm',
                       'talent retention problems', 'organizational fragmentation'],
    weakIndicators: ['productivity will drop', 'bad for company', 'team will suffer']
  },

  q7: {
    id: 'q7',
    type: 'shortText',
    topic: 'What to do if employees work independently but miss deadlines',
    weights: { understanding: 0.20, awareness: 0.20, decision: 0.40, clarity: 0.20 },
    expectedBehaviors: ['accountabilityThinking', 'structuredThinking', 'coordination'],
    strongIndicators: ['task tracking', 'clarify responsibilities', 'realistic deadlines',
                       'regular check-in', 'accountability', 'confirm understanding',
                       'visibility', 'progress monitoring', 'follow-up', 'milestone'],
    weakIndicators: ['remind them', 'talk to them', 'be stricter', 'set deadlines']
  },

  q8: {
    id: 'q8',
    type: 'audioText',
    topic: 'Problem, responsibility, and fix for role confusion causing delay',
    weights: { understanding: 0.25, awareness: 0.25, decision: 0.30, clarity: 0.20 },
    expectedBehaviors: ['accountabilityThinking', 'coordination', 'structuredThinking'],
    // Audio: Team A thought B had it, B thought A had it → unclear assignment
    strongIndicators: ['unclear assignment', 'role ambiguity', 'team lead responsible',
                       'explicitly assign', 'confirm understanding', 'tracking tool',
                       'document tasks', 'clear ownership', 'verify receipt'],
    weakIndicators: ['they should communicate', 'better teamwork', 'talk to each other']
  },

  q9: {
    id: 'q9',
    type: 'videoText',
    topic: 'Problems in video and how to fix delayed communication in remote setting',
    weights: { understanding: 0.20, awareness: 0.30, decision: 0.30, clarity: 0.20 },
    expectedBehaviors: ['coordination', 'operationalAwareness', 'adaptability'],
    // Video: manager requests urgent approval, no response for hours, late reply
    strongIndicators: ['delayed response', 'no urgency indicator', 'asynchronous failure',
                       'real-time tool needed', 'urgent escalation path', 'response expectation',
                       'notification', 'acknowledgment required', 'communication protocol'],
    weakIndicators: ['check messages more', 'be available', 'respond faster', 'use phone']
  },

  q10: {
    id: 'q10',
    type: 'mcq',
    topic: 'Employees perform better with complete location flexibility (opinion scale)',
    weights: { understanding: 0.20, awareness: 0.25, decision: 0.30, clarity: 0.25 },
    // This is a Likert-scale question — score based on reasoning quality
    // Ideal answer: Neutral (depends on job type, communication structure, individual)
    correctAnswer: 'Neutral',
    options: {
      'Strongly Agree': 1,
      'Agree': 2,
      'Neutral': 5,
      'Disagree': 2,
      'Strongly Disagree': 1
    },
    // Neutral scores highest — recognizes nuance. Strong scoring if reasoning includes:
    // job type dependence, communication structure, individual personality, role clarity
    reasoningBonus: ['depends on job type', 'structure matters', 'communication system',
                     'individual', 'not universal', 'some roles yes some no', 'nuanced']
  }
};

// ─────────────────────────────────────────────
// EXPECTED REASONING FLOW
// ─────────────────────────────────────────────
const expectedReasoningFlow = [
  'Recognize that WFH did improve happiness initially — but created new unintended consequences',
  'Identify lack of real-time interaction as the primary collaboration failure mechanism',
  'Understand that happiness and productivity must be balanced, not traded off',
  'Propose structured communication systems with clear channels and response expectations',
  'Identify role ambiguity and accountability gaps as core remote work operational risks',
  'Advocate for hybrid or structured models rather than complete flexibility or rigid office mandates'
];

// ─────────────────────────────────────────────
// FEEDBACK TEMPLATES
// ─────────────────────────────────────────────
const feedbackTemplates = {
  excellent: 'You demonstrated nuanced thinking about the tradeoffs of WFH policies, recognizing unintended consequences, balancing happiness with productivity, and proposing structured solutions. Your answers showed clear understanding of communication system design, accountability gaps, and the limitations of full flexibility.',
  selected: 'Your responses showed good awareness of the WFH tradeoffs and most key issues. Some answers could have proposed more structured, specific solutions — especially around communication systems, role clarity, and how to maintain accountability in remote settings.',
  moderate: 'You identified some problems with the WFH scenario but often gave general answers. Stronger responses require recognizing specific operational failures (role ambiguity, communication delays, accountability gaps) and proposing concrete structured solutions.',
  rejected: 'Your responses were too general or one-sided about WFH. This scenario requires nuanced analysis of why well-intentioned policies create unintended consequences, and how to design structured systems that preserve both flexibility and operational effectiveness.'
};

module.exports = {
  scenarioId: 6,
  scenarioCode: 'IECBP26106',
  title: 'The Unintended Consequences of Flexible Work-From-Home Policies',
  behaviorKeywords,
  strongPatterns,
  weakPatterns,
  signalMappings,
  questionConfigs,
  expectedReasoningFlow,
  feedbackTemplates
};