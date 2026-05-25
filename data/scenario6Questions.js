export const scenario6Questions = [
  {
    id: 1,
    number: 1,
    type: 'yes_no',
    question:
      'Did the work-from-home policy improve employee happiness initially?\n\nAnswer Yes or No and explain your reasoning clearly.',
    reasoningPlaceholder:
      'Answer Yes or No and explain what caused the initial change in employee happiness…',
  },
  {
    id: 2,
    number: 2,
    type: 'mcq',
    question:
      'Which factor most directly caused reduced collaboration in a work-from-home setup? Why?',
    options: [
      { key: 'A', text: 'Office infrastructure limitations' },
      { key: 'B', text: 'Lack of real-time interaction between team members' },
      { key: 'C', text: 'Decline in employee skills over time' },
      { key: 'D', text: 'Increased number of formal meetings' },
    ],
  },
  {
    id: 3,
    number: 3,
    type: 'mcq',
    question:
      'What is the correct sequence to fix communication delays in a work-from-home setup?\n\na) Set response-time expectations\nb) Implement structured communication channels\nc) Organize daily/weekly sync meetings\nd) Use real-time messaging tools',
    options: [
      { key: 'A', text: 'b → d → a → c' },
      { key: 'B', text: 'd → b → c → a' },
      { key: 'C', text: 'a → d → b → c' },
      { key: 'D', text: 'c → a → b → d' },
    ],
  },
  {
    id: 4,
    number: 4,
    type: 'yes_no',
    question:
      'Should companies prioritize employee happiness over productivity when designing workplace policies?\n\nTake a clear position and explain your reasoning.',
    reasoningPlaceholder:
      'Answer Yes or No and explain how you would balance employee happiness and productivity…',
  },
  {
    id: 5,
    number: 5,
    type: 'short_text',
    question:
      'How can companies avoid failure when implementing work-from-home systems?\n\nWrite your response in 3–4 lines.',
    placeholder:
      'Describe the steps and strategies companies should take to avoid WFH system failures…',
  },
  {
    id: 6,
    number: 6,
    type: 'short_text',
    question:
      "If the company continues without making any changes to its work-from-home policy, what is the future risk for company performance?\n\nWrite your response in 3–4 lines.",
    placeholder:
      'Describe the long-term risks the company will face if nothing changes…',
  },
  {
    id: 7,
    number: 7,
    type: 'short_text',
    question:
      'What would you do if employees are working independently but consistently missing deadlines under a work-from-home setup?\n\nWrite your response in 3–4 lines.',
    placeholder:
      'Describe what actions you would take to address missed deadlines in a remote team…',
  },
  {
    id: 8,
    number: 8,
    type: 'audio',
    question:
      'What problem does this situation show, whose responsibility is it mainly, and what would you do to fix it?\n\nWrite your response in 3–4 lines.',
    placeholder:
      'Describe the problem shown, who is responsible, and how you would fix it…',
    audioSrc: '/audios/scenario6-q8.mp3',
    transcript: [
      {
        speaker: 'Team Member A',
        color: '#60A5FA',
        line: 'I thought you were handling the report.',
      },
      {
        speaker: 'Team Member B',
        color: '#A78BFA',
        line: 'No, I thought it was assigned to you.',
      },
      {
        speaker: 'Team Lead',
        color: '#34D399',
        line: 'This confusion is causing delay again.',
      },
    ],
  },
  {
    id: 9,
    number: 9,
    type: 'video',
    question:
      'What problems are shown in this video, and what would you do to fix them?\n\nWrite your response in 3–4 lines.',
    placeholder:
      'Describe the problems shown in the video and the steps you would take to fix them…',
    videoSrc: '/videos/scenario6-q9.mp4',
    videoNote:
      'Place your video file at: public/videos/scenario6-q9.mp4 — the player will automatically load it from there.',
  },
  {
    id: 10,
    number: 10,
    type: 'mcq',
    question:
      'Employees perform better with complete location flexibility.\n\nSelect the option that best represents your position.',
    options: [
      { key: 'A', text: 'Strongly Agree — complete flexibility always improves performance' },
      { key: 'B', text: 'Agree — flexibility generally leads to better output' },
      { key: 'C', text: 'Neutral — it depends on job type and communication structure' },
      { key: 'D', text: 'Disagree — structure and presence matter more than flexibility' },
    ],
    isFinal: true,
  },
];

export const scenario6Meta = {
  id: 6,
  title: 'The Unintended Consequences of Flexible Work-From-Home Policies',
  category: 'Workplace Collaboration & Productivity',
  level: 'Beginner',
  totalQuestions: 10,
  minutes: 45,
  icon: '🏠',
  accent: '#4ADE80',
};