export const scenario5Questions = [
  {
    id: 1,
    number: 1,
    type: 'yes_no',
    question:
      'Do you think data-driven decision-making is enough to understand customers? Why or why not?\n\nTake a clear position and explain your reasoning.',
    reasoningPlaceholder: 'State Yes or No and explain why data-driven decisions alone may or may not be sufficient…',
  },
  {
    id: 2,
    number: 2,
    type: 'mcq',
    question:
      'A product team improves features continuously, yet customer frustration keeps increasing silently. What hidden issue is most likely happening?',
    options: [
      {
        key: 'A',
        text: 'Companies are optimizing features instead of solving actual pain points',
      },
      {
        key: 'B',
        text: 'Customers dislike updates naturally',
      },
      {
        key: 'C',
        text: 'Servers are overloaded',
      },
      {
        key: 'D',
        text: 'Feedback systems are disabled',
      },
    ],
  },
  {
    id: 3,
    number: 3,
    type: 'short_text',
    question:
      'You are a CEO. Your team says "data shows everything is fine," but customers disagree.\n\nWhat is your decision and how would you approach closing the gap between what the data says and what customers are actually experiencing? Write in 3–4 lines.',
    placeholder: 'Describe your decision and approach as CEO in this situation…',
  },
  {
    id: 4,
    number: 4,
    type: 'short_text',
    question:
      'Situation: A feature is heavily used according to data, but customers say it is confusing.\n\nHow can this contradiction be explained? Write your analysis in 3–4 lines.',
    placeholder: 'Explain how high usage and customer confusion can exist for the same feature simultaneously…',
  },
  {
    id: 5,
    number: 5,
    type: 'multi_select',
    question:
      'Which of the following could cause a gap between analytics and real customer satisfaction?\n\nSelect all that apply.',
    maxSelections: 4,
    options: [
      { key: 'A', text: 'Over-reliance on dashboards without qualitative research', icon: '📊' },
      { key: 'B', text: 'Lack of user interviews and direct customer conversations', icon: '🎙️' },
      { key: 'C', text: 'Real-time emotional tracking tools being used effectively', icon: '❤️' },
      { key: 'D', text: 'Ignoring or deprioritizing incoming customer complaints', icon: '🚫' },
    ],
  },
  {
    id: 6,
    number: 6,
    type: 'short_text',
    question:
      'What is the biggest lesson from this scenario about the relationship between customer data collection and real customer satisfaction?\n\nWrite your response in 3–4 lines.',
    placeholder: 'Describe the biggest lesson this scenario reveals about data and real customer satisfaction…',
  },
  {
    id: 7,
    number: 7,
    type: 'mcq',
    question:
      'What hidden issue is most likely present in companies that collect large amounts of customer data but still fail to improve customer satisfaction?',
    options: [
      {
        key: 'A',
        text: 'Companies optimize metrics instead of actual customer experiences',
      },
      {
        key: 'B',
        text: 'Products lack internet access',
      },
      {
        key: 'C',
        text: 'Users stop using smartphones',
      },
      {
        key: 'D',
        text: 'Databases lose all records daily',
      },
    ],
  },
  {
    id: 8,
    number: 8,
    type: 'short_text',
    question:
      'Why do customers still feel misunderstood even after companies collect huge amounts of feedback and analytics data, and why can high engagement metrics still be misleading?\n\nWrite your analysis in 3–4 lines.',
    placeholder: 'Explain why customers feel misunderstood and why engagement metrics can be misleading…',
  },
  {
    id: 9,
    number: 9,
    type: 'audio',
    question:
      'What disconnect is shown in this conversation between the customer and the support agent?\n\nWrite your analysis in 3–4 lines.',
    placeholder: 'Describe the disconnect you identified between what the customer needs and what the company is doing…',
    audioSrc: '/audios/scenario5-q9.mp3',
    transcript: [
      {
        speaker: 'Customer',
        color: '#60A5FA',
        line: "I already reported this issue many times, but the updates never solve my actual problem.",
      },
      {
        speaker: 'Support Agent',
        color: '#A78BFA',
        line: "We are continuously improving features based on feedback data.",
      },
    ],
  },
  {
    id: 10,
    number: 10,
    type: 'video',
    question:
      'Why do dashboards show positive results but customers feel unhappy?\n\nAfter watching the video, write your analysis in 3–4 lines.',
    placeholder: 'Explain why dashboards show positive results while customers still feel unhappy…',
    videoSrc: '/videos/scenario5-q10.mp4',
    videoNote:
      'Place your video file at: public/videos/scenario5-q10.mp4 — the player will automatically load it from there.',
    isFinal: true,
  },
];

export const scenario5Meta = {
  id: 5,
  title: 'The Disconnect Between Customer Data Collection and Real Customer Satisfaction',
  category: 'Customer Experience & Product Analytics',
  level: 'Intermediate',
  totalQuestions: 10,
  minutes: 45,
  icon: '📊',
  accent: '#3B82F6',
};