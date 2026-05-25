export const scenario3Questions = [
  {
    id: 1,
    number: 1,
    type: 'mcq',
    question:
      "The family had a stable financial plan, but over time unexpected repairs, medical bills, social obligations, and rising living costs slowly disrupted their savings and financial balance. Now they feel stressed and uncertain about where the situation started getting worse.\n\nIf you were part of this family, what would be your first instinct?",
    options: [
      {
        key: 'A',
        text: 'Sit down and trace back every expense to identify where the financial imbalance began',
      },
      {
        key: 'B',
        text: 'Immediately reduce lifestyle and discretionary spending to regain control over monthly expenses',
      },
      {
        key: 'C',
        text: 'Talk openly with the family about the emotional and financial pressure before making major decisions',
      },
      {
        key: 'D',
        text: 'Accept that some situations are unavoidable and gradually adjust the financial plan moving forward',
      },
    ],
  },
  {
    id: 2,
    number: 2,
    type: 'yes_no',
    question:
      "The family receives an invitation to a relative's wedding. Attending means spending money they had planned to save that month. Not attending could affect family relationships and social standing.\n\nThe family decides to attend and adjusts their savings target for the month.\n\nWas this the right decision?",
    reasoningPlaceholder: 'Answer Yes or No and explain your reasoning in 2–3 lines…',
  },
  {
    id: 3,
    number: 3,
    type: 'short_text',
    question:
      "The family's financial plan was originally built around their current income and monthly expenses. But over time, the cost of groceries, school fees, electricity, and basic necessities has quietly increased. Although the family has not changed its lifestyle, their savings continue shrinking month after month.\n\nNobody in the family has fully noticed the pattern yet.\n\nWhat financial pattern is developing here, and why can it become dangerous over time? Write your response in 3–4 lines.",
    placeholder: 'Describe the financial pattern developing and why it is dangerous over time…',
  },
  {
    id: 4,
    number: 4,
    type: 'audio',
    question:
      "Nobody in this family is irresponsible. Nobody is careless. But listen to what keeps happening.\n\nWhat behaviour is quietly making this family's financial situation worse — and why is it more dangerous than any single expense they made? Write in 3–4 lines.",
    placeholder: 'Describe the behaviour you identified and why it is more dangerous than individual expenses…',
    audioSrc: '/audios/scenario3-q4.mp3',
    transcript: [
      {
        speaker: 'Mother',
        color: '#60A5FA',
        line: "Should we sit down this weekend and go through the accounts?",
      },
      {
        speaker: 'Father',
        color: '#A78BFA',
        line: "Yeah... maybe next weekend, this week is busy.",
      },
      {
        speaker: 'Mother',
        color: '#60A5FA',
        line: "The savings account is looking low again.",
      },
      {
        speaker: 'Father',
        color: '#A78BFA',
        line: "It'll be fine, let's not stress about it now.",
      },
      {
        speaker: 'Mother',
        color: '#60A5FA',
        line: "I think we need to talk about money.",
      },
      {
        speaker: 'Father',
        color: '#A78BFA',
        line: "I know. I just... not tonight.",
      },
    ],
  },
  {
    id: 5,
    number: 5,
    type: 'multi_select',
    question:
      "You are part of this family. This month the savings account hit zero for the first time. No single expense caused it — it was everything together.\n\nYour family needs to decide what to do next month. What would you do?",
    maxSelections: 6,
    options: [
      { key: 'A', text: 'Sit down as a family and openly talk about where money is going', icon: '💬' },
      { key: 'B', text: 'Quietly adjust the budget without worrying the rest of the family', icon: '🤫' },
      { key: 'C', text: 'Identify which expenses were needs and which were choices', icon: '🔍' },
      { key: 'D', text: 'Borrow money to cover this month and recover next month', icon: '💳' },
      { key: 'E', text: 'Accept that some months will be like this and move forward', icon: '🔄' },
      { key: 'F', text: 'Find a way to increase income before cutting any expenses', icon: '📈' },
    ],
  },
  {
    id: 6,
    number: 6,
    type: 'short_text',
    question:
      "The family's income has not changed. Their lifestyle has not changed. But every month, a little more slips away — a repair here, a medical bill there, a social obligation they couldn't avoid.\n\nSix months from now, if nothing changes, what does this family's financial and emotional situation look like? Write in 3–4 lines.",
    placeholder: 'Describe what the family\'s financial and emotional situation will look like in six months…',
  },
  {
    id: 7,
    number: 7,
    type: 'video',
    question:
      "Watch this video carefully.\n\nThis family planned everything — expenses, savings, education, medical needs. Yet here they are, late at night, surrounded by bills, unable to figure out where it went wrong.\n\nIf you were sitting at that table with them right now, what is the first thing you would do — and why? Write in 3–4 lines.",
    placeholder: 'Describe what you would do first if you were sitting at that table, and why…',
    videoSrc: '/videos/scenario3-q7.mp4',
    videoNote:
      'Place your video file at: public/videos/scenario3-q7.mp4 — the player will automatically load it from there.',
  },
  {
    id: 8,
    number: 8,
    type: 'mcq',
    question:
      "This family did everything a financially responsible family should do — they planned, they budgeted, they prioritized. Yet they still ended up in financial stress.\n\nWhich of the following best explains how this happens to even the most careful families?",
    options: [
      {
        key: 'A',
        text: 'Financial plans fail because people are never truly disciplined enough to follow them',
      },
      {
        key: 'B',
        text: 'Life does not happen in categories — real expenses cross boundaries and quietly break even the most careful plans',
      },
      {
        key: 'C',
        text: 'A family\'s emotional decisions will always override their financial ones eventually',
      },
      {
        key: 'D',
        text: 'No financial plan can survive without a significantly higher income as a safety net',
      },
    ],
  },
  {
    id: 9,
    number: 9,
    type: 'drag_rank',
    question:
      "The family has finally decided to take control of their finances. They have a list of actions they want to take but can only focus on a few at a time.\n\nRank these from what you would do first to last — based on what will actually help this family recover and rebuild.",
    instruction: 'Drag and reorder — highest priority at the top.',
    items: [
      { id: 'talk', label: 'Have an honest family conversation about where money is going', icon: '💬' },
      { id: 'emergency', label: 'Build a separate emergency fund immediately', icon: '🛡️' },
      { id: 'review', label: 'Review every expense from the last 6 months', icon: '📋' },
      { id: 'social', label: 'Set a strict budget for social obligations', icon: '🎉' },
      { id: 'needs', label: 'Identify which expenses were needs versus emotional decisions', icon: '🔍' },
      { id: 'income', label: 'Find ways to increase monthly income', icon: '📈' },
      { id: 'pause', label: 'Pause all non-essential spending temporarily', icon: '⏸️' },
    ],
  },
  {
    id: 10,
    number: 10,
    type: 'short_text',
    question:
      "The family started the year with a solid plan. They ended it with financial stress, reduced savings, and emotional exhaustion — without ever making one obviously wrong decision.\n\nLooking at everything that happened — what is the one lesson this family learned the hardest way possible? Write in 3–4 lines.",
    placeholder: 'Write your final reflection on the hardest lesson this family learned…',
    isFinal: true,
  },
];

export const scenario3Meta = {
  id: 3,
  title: 'The Growing Impact of Uncontrolled Financial Decisions',
  category: 'Financial Decision-Making',
  level: 'Beginner',
  totalQuestions: 10,
  minutes: 45,
  icon: '💰',
  accent: '#4ADE80',
};