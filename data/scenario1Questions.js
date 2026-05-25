export const scenario1Questions = [
  {
    id: 1,
    number: 1,
    type: 'short_text',
    question:
      'During a sudden emergency surge, a hospital has only two ICU beds available while multiple critical patients continue arriving. What would be your immediate priority to manage the situation effectively?',
    placeholder: 'Describe your immediate response strategy and reasoning…',
  },
  {
    id: 2,
    number: 2,
    type: 'mcq',
    question:
      'During a continuous emergency rush, communication delays between departments begin affecting patient handling and treatment coordination. At the same time, medical staff are already overloaded and critical cases continue increasing. In this situation, which approach would most effectively help stabilize hospital operations?',
    options: [
      {
        key: 'A',
        text: 'Prioritize faster patient movement between departments, even if communication accuracy slightly decreases',
      },
      {
        key: 'B',
        text: 'Temporarily centralize emergency decisions through a smaller coordination team to reduce confusion',
      },
      {
        key: 'C',
        text: 'Continue the existing workflow to avoid disrupting hospital operations further',
      },
      {
        key: 'D',
        text: 'Reduce attention toward non-critical communication until emergency pressure decreases',
      },
    ],
  },
  {
    id: 3,
    number: 3,
    type: 'short_text',
    question:
      'Even after increasing hospital staff and extending working hours, management notices that operational pressure and treatment delays continue increasing over time. What do you think could be one hidden factor contributing to this situation?',
    placeholder: 'Share your analysis of possible hidden contributing factors…',
  },
  {
    id: 4,
    number: 4,
    type: 'drag_rank',
    question:
      'During a high-pressure emergency situation in a hospital, arrange the following actions in the order you would prioritize them to maintain operational stability.',
    instruction: 'Drag and reorder the cards — highest priority at the top.',
    items: [
      { id: 'icu', label: 'Managing ICU bed allocation', icon: '🛏️' },
      { id: 'wait', label: 'Reducing patient waiting time', icon: '⏱️' },
      { id: 'comms', label: 'Coordinating communication between departments', icon: '📡' },
      { id: 'staff', label: 'Handling staff workload and exhaustion', icon: '👥' },
    ],
  },
  {
    id: 5,
    number: 5,
    type: 'audio',
    audioSrc: '/audios/scenario1-q5.mp3',
    question:
      "After listening to the conversation, what do you think is the most critical issue affecting the hospital's ability to manage the situation effectively?",
    placeholder: 'Describe the most critical issue you identified from the conversation…',
    transcript: [
      {
        speaker: 'Doctor',
        color: '#60A5FA',
        line: 'We already have three critical patients waiting and ICU occupancy is full. If we delay further, patient conditions may worsen.',
      },
      {
        speaker: 'Nurse',
        color: '#A78BFA',
        line: 'Staff from emergency and radiology are both requesting immediate support, but available doctors are already overloaded. Communication between departments is also getting delayed.',
      },
      {
        speaker: 'Doctor',
        color: '#60A5FA',
        line: 'At this rate, even routine coordination is becoming difficult. We need to stabilize operations before the situation escalates further.',
      },
    ],
  },
  {
    id: 6,
    number: 6,
    type: 'yes_no',
    question:
      'In emergency healthcare situations, do you think hospitals should sometimes make faster temporary decisions even when complete patient information is unavailable?',
    reasoningPlaceholder: 'Explain your reasoning in detail…',
  },
  {
    id: 7,
    number: 7,
    type: 'short_text',
    question:
      'Small operational delays inside hospitals may initially appear manageable during emergency situations. In your opinion, how can these small issues gradually develop into larger problems over time?',
    placeholder: 'Explain the cause-and-effect chain you observe…',
  },
  {
    id: 8,
    number: 8,
    type: 'video',
    question:
      "After observing the video, how can communication delays and coordination difficulties gradually affect the hospital's ability to manage emergency situations effectively over time?",
    placeholder: 'Share your analysis based on what you observed in the video…',
    videoSrc: '/videos/scenario1-q8.mp4',
    
  },
  {
    id: 9,
    number: 9,
    type: 'multi_select',
    question:
      'During a critical emergency situation, hospital management can immediately improve only TWO of the following areas due to limited resources. Select the two areas that would most effectively help stabilize hospital operations.',
    maxSelections: 2,
    options: [
      { key: 'A', text: 'ICU capacity management', icon: '🏥' },
      { key: 'B', text: 'Communication between departments', icon: '📡' },
      { key: 'C', text: 'Staff workload distribution', icon: '👥' },
      { key: 'D', text: 'Patient waiting time reduction', icon: '⏱️' },
      { key: 'E', text: 'Emergency patient transportation', icon: '🚑' },
    ],
  },
  {
    id: 10,
    number: 10,
    type: 'short_text',
    question:
      'In emergency healthcare environments, operational pressure often continues increasing even when hospitals attempt to improve staffing, coordination, and resource management. According to the scenario, why do you think maintaining effective decision-making becomes increasingly difficult over time?',
    placeholder: 'Write your final reflection on this scenario…',
    isFinal: true,
  },
];

export const scenario1Meta = {
  id: 1,
  title: 'Emergency Decision Overload in Healthcare Systems',
  category: 'Healthcare Operations',
  level: 'Advanced',
  totalQuestions: 10,
  minutes: 45,
  icon: '🏥',
  accent: '#F97316',
};