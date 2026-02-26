export const dummyProducts = [
  { id: 1, slug: "vivobarefoot-primus-lite", name: "Primus Lite III", brand: "Vivobarefoot", price: 150, image: "🏃", tags: ["running","road","minimalist"], drop: 0, width: "medium", use: "running", level: "intermediate", rating: 4.8 },
  { id: 2, slug: "xero-prio", name: "Prio", brand: "Xero Shoes", price: 89, image: "⚡", tags: ["everyday","gym","beginner"], drop: 0, width: "wide", use: "everyday", level: "beginner", rating: 4.6 },
  { id: 3, slug: "lems-primal-2", name: "Primal 2", brand: "Lems", price: 120, image: "🌿", tags: ["casual","wide","everyday"], drop: 0, width: "wide", use: "casual", level: "beginner", rating: 4.5 },
  { id: 4, slug: "altra-lone-peak-7", name: "Lone Peak 7", brand: "Altra", price: 140, image: "🏔️", tags: ["trail","hiking","versatile"], drop: 0, width: "wide", use: "trail", level: "intermediate", rating: 4.7 },
  { id: 5, slug: "luna-sandals-mono", name: "Mono 2.0", brand: "Luna Sandals", price: 95, image: "🌞", tags: ["sandal","summer","trail"], drop: 0, width: "wide", use: "trail", level: "beginner", rating: 4.4 },
  { id: 6, slug: "softstar-dash", name: "DASH RunAmoc", brand: "Softstar", price: 155, image: "🦶", tags: ["running","handmade","wide"], drop: 0, width: "wide", use: "running", level: "beginner", rating: 4.9 },
  { id: 7, slug: "freet-tundra", name: "Tundra", brand: "Freet", price: 110, image: "❄️", tags: ["casual","everyday","wide"], drop: 0, width: "extra-wide", use: "casual", level: "beginner", rating: 4.3 },
  { id: 8, slug: "vivobarefoot-tracker-fg", name: "Tracker FG II", brand: "Vivobarefoot", price: 210, image: "🦌", tags: ["hiking","trail","leather"], drop: 0, width: "medium", use: "hiking", level: "advanced", rating: 4.7 },
  { id: 9, slug: "bedrock-cairn", name: "Cairn Adventure Sandal", brand: "Bedrock", price: 100, image: "🪨", tags: ["sandal","trail","water"], drop: 0, width: "wide", use: "trail", level: "intermediate", rating: 4.5 },
  { id: 10, slug: "groundies-aktiv", name: "Aktiv", brand: "Groundies", price: 135, image: "🏙️", tags: ["casual","dress","everyday"], drop: 0, width: "wide", use: "casual", level: "beginner", rating: 4.4 },
];

export const dummyArticles = [
  { slug: "what-is-barefoot-footwear", title: "What Is Barefoot Footwear? A Complete Guide", excerpt: "Everything you need to know about zero-drop, wide toe box, and minimal cushioning.", date: "2025-01-15", readTime: "8 min", category: "Education" },
  { slug: "transition-guide-barefoot", title: "How to Transition to Barefoot Shoes Without Injury", excerpt: "A step-by-step 12-week transition plan for switching from conventional footwear.", date: "2025-02-02", readTime: "12 min", category: "Guide" },
  { slug: "best-barefoot-running-shoes-2025", title: "Best Barefoot Running Shoes of 2025", excerpt: "Our top picks for road, trail, and track — tested over hundreds of miles.", date: "2025-02-20", readTime: "10 min", category: "Reviews" },
  { slug: "wide-toe-box-explained", title: "Why Your Feet Need Room to Spread", excerpt: "The science behind toe splay and how narrow shoes damage your foot health.", date: "2025-01-28", readTime: "6 min", category: "Education" },
  { slug: "barefoot-vs-zero-drop", title: "Barefoot vs Zero-Drop: What's the Difference?", excerpt: "These terms are related but not the same. We break down the key distinctions.", date: "2025-03-01", readTime: "5 min", category: "Education" },
  { slug: "kids-barefoot-shoes", title: "The Case for Barefoot Shoes for Children", excerpt: "Why starting kids in minimal footwear matters more than most parents realize.", date: "2025-02-10", readTime: "7 min", category: "Guide" },
  { slug: "plantar-fasciitis-barefoot", title: "Can Barefoot Shoes Help with Plantar Fasciitis?", excerpt: "A look at the evidence, the risks, and how to approach it safely.", date: "2025-01-20", readTime: "9 min", category: "Health" },
];

export const dummyQuiz = [
  {
    id: "use",
    question: "What will you primarily use these shoes for?",
    emoji: "🎯",
    options: [
      { value: "running", label: "Running", emoji: "🏃" },
      { value: "trail", label: "Trail / Hiking", emoji: "🏔️" },
      { value: "everyday", label: "Everyday / Casual", emoji: "👟" },
      { value: "gym", label: "Gym / Training", emoji: "💪" },
    ],
  },
  {
    id: "level",
    question: "How experienced are you with barefoot footwear?",
    emoji: "📊",
    options: [
      { value: "beginner", label: "Total beginner", emoji: "🌱" },
      { value: "intermediate", label: "Some experience", emoji: "🌿" },
      { value: "advanced", label: "Seasoned minimalist", emoji: "🌳" },
    ],
  },
  {
    id: "width",
    question: "How would you describe your foot width?",
    emoji: "📐",
    options: [
      { value: "medium", label: "Average width", emoji: "👌" },
      { value: "wide", label: "Wider than normal", emoji: "🦶" },
      { value: "extra-wide", label: "Very wide / bunions", emoji: "🦷" },
    ],
  },
];
