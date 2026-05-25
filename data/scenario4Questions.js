export const scenario4Questions = [
  {
    id: 1,
    number: 1,
    type: 'yes_no',
    question:
      'Was the customer initially aware of both ride confirmations?\n\nShe believed only one ride existed because only App A displayed visible confirmation details, while App B failed to show the booking information properly.',
    reasoningPlaceholder: 'Answer Yes or No and explain your reasoning clearly…',
  },
  {
    id: 2,
    number: 2,
    type: 'mcq',
    question:
      'A ride-booking system triggers driver notifications and confirms rides before completing full transaction validation across all services. What could be a likely consequence of this system behavior?',
    options: [
      {
        key: 'A',
        text: 'Faster customer response time with improved accuracy',
      },
      {
        key: 'B',
        text: 'Duplicate or conflicting ride assignments due to premature confirmation',
      },
      {
        key: 'C',
        text: 'Reduced need for backend synchronization processes',
      },
      {
        key: 'D',
        text: 'Automatic elimination of booking errors through early alerts',
      },
    ],
  },
  {
    id: 3,
    number: 3,
    type: 'drag_rank',
    question:
      'Which of the following correctly represents the order of events in the ride-sharing conflict scenario?\n\nArrange these events in the correct chronological order — first event at the top.',
    instruction: 'Drag and reorder — earliest event at the top.',
    items: [
      { id: 'notice', label: 'Customer notices mismatch in booking status', icon: '👁️' },
      { id: 'process', label: 'System processes requests from both apps simultaneously', icon: '⚙️' },
      { id: 'driver_confirm', label: 'Driver receives booking confirmation from App B', icon: '🚗' },
      { id: 'app_a_confirm', label: 'App A displays booking confirmation', icon: '📱' },
      { id: 'initiate', label: 'Customer initiates ride booking on two apps', icon: '👆' },
    ],
  },
  {
    id: 4,
    number: 4,
    type: 'mcq',
    question:
      'What is the biggest operational risk if such synchronization failures happen repeatedly?',
    options: [
      {
        key: 'A',
        text: 'Drivers may stop using navigation',
      },
      {
        key: 'B',
        text: 'Platform trust and reliability collapse',
      },
      {
        key: 'C',
        text: 'Phone storage increases',
      },
      {
        key: 'D',
        text: 'Customer location accuracy improves',
      },
    ],
  },
  {
    id: 5,
    number: 5,
    type: 'short_text',
    question:
      "Why should customers not be completely blamed in this ride-booking conflict, and why did the situation become confusing for both the customer and driver?\n\nWrite your response in 3–4 lines.",
    placeholder: 'Explain why the customer should not be blamed and what caused the confusion for both parties…',
  },
  {
    id: 6,
    number: 6,
    type: 'short_text',
    question:
      "If you were both the customer and the system architect in this ride-booking conflict, what would be your main priorities?\n\nAddress both roles in your response — write in 3–4 lines.",
    placeholder: 'Describe your priorities as both the customer and the system architect…',
  },
  {
    id: 7,
    number: 7,
    type: 'short_text',
    question:
      'How do the booking confirmation responses differ between App A and App B?\n\nWrite your response in 3–4 lines.',
    placeholder: 'Explain the difference in how App A and App B handled the booking confirmation…',
  },
  {
    id: 8,
    number: 8,
    type: 'yes_no',
    question:
      'Who faces more inconvenience in this ride-booking conflict — the driver or the customer?\n\nTake a position and explain your reasoning clearly.',
    reasoningPlaceholder: 'State who faces more inconvenience and explain your reasoning in 2–3 lines…',
  },
  {
    id: 9,
    number: 9,
    type: 'audio',
    question:
      'What does this situation reveal about the ride-booking system?\n\nWrite your analysis in 3–4 lines.',
    placeholder: 'Describe what the conversation reveals about the ride-booking system…',
    audioSrc: '/audios/scenario4-q9.mp3',
    transcript: [
      {
        speaker: 'Driver',
        color: '#FB923C',
        line: "Madam, the app showed your ride request, so I accepted it immediately.",
      },
      {
        speaker: 'Customer',
        color: '#60A5FA',
        line: "But my screen never displayed any booking confirmation at all.",
      },
    ],
  },
  {
    id: 10,
    number: 10,
    type: 'multi_select',
    question:
      'What challenges might arise when App B is still processing while App A has already confirmed a ride?\n\nSelect all the challenges that could realistically occur in this situation.',
    imageSrc: '/images/scenario4-q10.png',
    imageCaption: 'App A confirmed — App B still processing',
    maxSelections: 5,
    options: [
      { key: 'A', text: 'Confusion for both the customer and driver about which booking is valid', icon: '😕' },
      { key: 'B', text: 'Delayed decision-making while waiting for App B to update', icon: '⏳' },
      { key: 'C', text: 'Uncertainty in ride availability causing duplicate booking attempts', icon: '🔄' },
      { key: 'D', text: 'Possible double charges billed to the customer', icon: '💳' },
      { key: 'E', text: 'Driver receiving incorrect trip assignments from inconsistent data', icon: '🗺️' },
    ],
  },
];

export const scenario4Meta = {
  id: 4,
  title: 'Ride-Sharing Booking Synchronization Conflicts',
  category: 'System Design & User Experience',
  level: 'Advanced',
  totalQuestions: 10,
  minutes: 45,
  icon: '🚗',
  accent: '#F97316',
};