export const scenario2Questions = [
  {
    id: 1,
    number: 1,
    type: 'mcq',
    question:
      "The company's latest analytics report shows 4.2 million followers and a 9% engagement rate across platforms. Yet only 6% of customers make a repeat purchase. The CEO turns to the team and asks — \"We are everywhere online. So why aren't people coming back?\"\n\nWhich option best explains the core issue?",
    options: [
      {
        key: 'A',
        text: 'The company needs more influencer collaborations to stay visible',
      },
      {
        key: 'B',
        text: 'High engagement is building attention but not trust or reason to return',
      },
      {
        key: 'C',
        text: 'A 6% repeat purchase rate is normal during rapid follower growth',
      },
      {
        key: 'D',
        text: 'The company should offer discounts to push repeat purchases',
      },
    ],
  },
  {
    id: 2,
    number: 2,
    type: 'short_text',
    question:
      'The company is now one of the most recognized brands online among young customers. Yet when a research team asks 100 of their followers — "Would you recommend this brand to a close friend?" — 73 say no.\n\nWhat does this gap between recognition and recommendation tell you? Write in 3–4 lines.',
    placeholder: 'Explain what the gap between recognition and recommendation reveals…',
  },
  {
    id: 3,
    number: 3,
    type: 'yes_no',
    question:
      "One of the company's most engaged followers has watched every campaign, shared every reel, and even defended the brand in comment sections since the very first influencer post. Two years in — she has never made a purchase.\n\nWould you consider him/her a loyal customer?",
    reasoningPlaceholder: 'Answer Yes or No and explain your reasoning in 2–3 lines…',
  },
  {
    id: 4,
    number: 4,
    type: 'multi_select',
    question:
      "This influencer campaign became one of the company's most engaged social media posts this month. The team is celebrating and planning to double down on similar campaigns.\n\nLook at the image carefully. Select all the signs that suggest the company's popularity is not translating into real customer loyalty.",
    imageSrc: '/images/scenario2-q4.png',
    imageCaption: 'Instagram post — 180K likes, mixed comment section',
    maxSelections: 6,
    options: [
      { key: 'A', text: "Customers are questioning the product's actual quality", icon: '🔍' },
      { key: 'B', text: 'People are engaging with the celebrity, not the brand', icon: '🌟' },
      { key: 'C', text: 'Shipping and support complaints are visible but ignored', icon: '📦' },
      { key: 'D', text: 'Comments show curiosity but no evidence of repeat buyers', icon: '💬' },
      { key: 'E', text: 'The brand is only responding to positive comments', icon: '✉️' },
      { key: 'F', text: 'Customers feel the product is overpriced for what it delivers', icon: '💸' },
    ],
  },
  {
    id: 5,
    number: 5,
    type: 'short_text',
    question:
      'A loyal customer who has purchased from the company three times sends a message saying — "I used to feel special buying from you. Now it feels like you only care about going viral."\n\nThe company sees this message but decides not to respond — they have a campaign going live in an hour.\n\nWhat do you think this decision costs the company in the long run? Write in 3–4 lines.',
    placeholder: 'Describe the long-term cost of ignoring this loyal customer…',
  },
  {
    id: 6,
    number: 6,
    type: 'short_text',
    question:
      "The company's CEO and Head of Marketing are reviewing the quarterly business performance.\n\nCEO: \"We have 5 million followers, our last campaign trended for a week, and every influencer collaboration gains massive attention. But our sales growth is flat and customers aren't coming back. I don't understand.\"\n\nHead of Marketing: \"The brand is stronger than ever. People clearly love us online.\"\n\nYou are part of this discussion. How would you respond to this situation?",
    placeholder: 'Write your response as a participant in this discussion…',
  },
  {
    id: 7,
    number: 7,
    type: 'mcq',
    question:
      "The company has been growing its follower count every single month. But internally, the customer support team reports that most incoming complaints are from first-time buyers who feel the product didn't match the campaign they saw.\n\nWhat does this pattern most likely indicate?",
    options: [
      {
        key: 'A',
        text: 'The influencer campaigns are attracting the wrong audience',
      },
      {
        key: 'B',
        text: 'The company has built visibility without building trust or delivering on its promise',
      },
      {
        key: 'C',
        text: 'First-time buyers always need time to adjust their expectations',
      },
      {
        key: 'D',
        text: 'The company needs better influencer briefs to set realistic expectations',
      },
    ],
  },
  {
    id: 8,
    number: 8,
    type: 'audio',
    question:
      'You are responsible for responding to this customer.\n\nIn 3–4 lines, write exactly what you would say — not a template, not a scripted apology. Respond as someone who genuinely understands the customer\'s disappointment and the gap between the brand image and the actual experience.',
    placeholder: 'Write your genuine, personal response to this customer…',
    audioSrc: '/audios/scenario2-q8.mp3',
    transcript: [
      {
        speaker: 'Customer',
        color: '#60A5FA',
        line: "Hi, I've been following your brand for like 6 months — I loved every campaign, the celebrities, the whole vibe. I finally ordered last week and honestly I was so excited.",
      },
      {
        speaker: 'Customer',
        color: '#60A5FA',
        line: "But when it arrived... I don't know, it just didn't feel like what I saw online. The quality wasn't what I expected and nobody has responded to my email yet.",
      },
      {
        speaker: 'Customer',
        color: '#60A5FA',
        line: "I still love what the brand stands for, I just wish the actual experience matched it. Anyway, just wanted to share that.",
      },
    ],
  },
  {
    id: 9,
    number: 9,
    type: 'drag_rank',
    question:
      "The company has finally realized that viral campaigns alone are not enough to build long-term customer loyalty. Rank the following actions from highest to lowest priority based on what should be prioritized first to effectively close the gap between online popularity and genuine customer loyalty.",
    instruction: 'Drag and reorder — highest priority at the top.',
    items: [
      { id: 'post_purchase', label: 'Invest in post-purchase customer experience', icon: '🎁' },
      { id: 'celebrity', label: 'Launch another celebrity collaboration', icon: '⭐' },
      { id: 'understand', label: 'Understand why existing customers are not returning', icon: '🔍' },
      { id: 'community', label: 'Build a community around real customer stories', icon: '🤝' },
      { id: 'frequency', label: 'Increase social media posting frequency', icon: '📱' },
      { id: 'product', label: 'Improve the product to match what campaigns promise', icon: '✅' },
      { id: 'micro', label: 'Partner with micro-influencers instead of celebrities', icon: '🎯' },
    ],
  },
  {
    id: 10,
    number: 10,
    type: 'short_text',
    question:
      'A competing brand in the same industry has half the followers, runs no celebrity collaborations, and spends far less on marketing. Yet their repeat purchase rate is four times higher, and customers actively recommend the brand to others.\n\nWhat do you think this competitor understands about customer loyalty that this company is missing?\n\nWrite your response in 3–4 lines.',
    placeholder: 'Write your final reflection on what genuine customer loyalty requires…',
    isFinal: true,
  },
];

export const scenario2Meta = {
  id: 2,
  title: 'The Gap Between Social Media Popularity and Customer Loyalty',
  category: 'Marketing & Consumer Psychology',
  level: 'Intermediate',
  totalQuestions: 10,
  minutes: 45,
  icon: '📣',
  accent: '#3B82F6',
};