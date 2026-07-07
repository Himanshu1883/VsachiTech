export const BRAND = "#e44f39";
export const BRAND_ALT = "#de6b58";

export const HERO = {
  eyebrow: "(HOME - DIGITAL ENGAGEMENT)",
  lines: ["Build Powerful", "Digital Engagement", "Experiences"],
  accentLine: 2,
  highlightRows: [
    ["Social Media Management", "Cinematic Editing", "Content Systems"],
    ["Branding", "Audience-Focused Growth"],
  ],
  highlightTagline: "Designed for modern businesses.",
  image: "/distorted-hero2.jpg",
  marquee: "DIGITAL ENGAGEMENT",
};

export const MARQUEE_ROW_1 = [
  "VIDEO EDITING",
  "SHORT FORM CONTENT",
  "SOCIAL MEDIA",
  "REELS & SHORTS",
  "CONTENT CREATION",
  "BRAND STORYTELLING",
];

export const MARQUEE_ROW_2 = [
  "TRENDING CONTENT",
  "DIGITAL GROWTH",
  "AUDIENCE ENGAGEMENT",
  "CREATIVE STRATEGY",
  "VISUAL IDENTITY",
  "CONTENT SYSTEMS",
];

export const WHY_SECTION = {
  titleLine1: "It's that simple,",
  titleLine2: "in 4 pillars",
  subtitle:
    "This is how brands build powerful digital engagement with cinematic content, consistent identity, and growth-focused strategy.",
};

export const WHY_BLOCKS = [
  {
    titleBefore: "Creative",
    titleHighlight: "Storytelling",
    text: "We build engaging visual stories that connect brands with audiences emotionally.",
    icon: "story",
    color: "#e879f9",
    glow: "#c026d3",
  },
  {
    titleBefore: "Short Form",
    titleHighlight: "Content",
    text: "High-performing reels, TikToks, YouTube Shorts, and social-first video production.",
    icon: "content",
    color: "#38bdf8",
    glow: "#0ea5e9",
  },
  {
    titleBefore: "Brand",
    titleHighlight: "Consistency",
    text: "Unified visual systems across all platforms to strengthen recognition and trust.",
    icon: "brand",
    color: "#fb923c",
    glow: "#f97316",
  },
  {
    titleBefore: "Growth",
    titleHighlight: "Strategy",
    text: "Performance-focused content systems designed for engagement and reach.",
    icon: "growth",
    color: "#4ade80",
    glow: "#22c55e",
  },
];

export const SLIDER_IMAGES = [
  "/digital_engag1.jpg",
  "/digital_engag2.jpg",
  "/digital_engag3.jpg",
  "/digital_engag4.jpg",
];

export const PROCESS_SECTION = {
  titleBefore: "How should your",
  titleAccent: "digital engagement",
  titleAfter: "grow?",
  subtitle: "Our proven four-step process from audience insight to scalable performance.",
};

export const PROCESS_STEPS = [
  {
    number: "01",
    tag: "RESEARCH",
    headline: "To understand exactly what resonates.",
    text: "Understanding audience behaviour, trends, and platform psychology.",
    bullets: ["Audience & trend analysis", "Platform psychology insights"],
    cta: "Start with research",
    image: "/marketing_research.jpg",
    color: "#38bdf8",
    glow: "#0ea5e9",
    icon: "research",
  },
  {
    number: "02",
    tag: "STRATEGY",
    headline: "Systems that align with your brand goals.",
    text: "Building scalable engagement systems aligned with brand goals.",
    bullets: ["Content roadmap & calendars", "Channel-specific growth plans"],
    cta: "Build your strategy",
    image: "/marketing_strategy.jpg",
    color: "#c084fc",
    glow: "#a855f7",
    icon: "strategy",
  },
  {
    number: "03",
    tag: "CREATE",
    headline: "Cinematic content that captures attention.",
    text: "Producing cinematic edits, visuals, reels, and premium assets.",
    bullets: ["Reels, shorts & long-form edits", "Premium visual storytelling"],
    cta: "Start creating",
    image: "/marketing_create.jpg",
    color: "#4ade80",
    glow: "#22c55e",
    icon: "create",
  },
  {
    number: "04",
    tag: "SCALE",
    headline: "Performance that compounds over time.",
    text: "Optimizing content performance and audience retention consistently.",
    bullets: ["Engagement & retention tracking", "Continuous content optimization"],
    cta: "Scale your reach",
    image: "/marketing_scale.jpg",
    color: "#fb923c",
    glow: "#f97316",
    icon: "scale",
  },
];

export const STATS = [
  {
    value: "120+",
    numeric: 120,
    suffix: "+",
    title: "Projects Delivered",
    desc: "Creating high-performing content systems.",
  },
  {
    value: "95%",
    numeric: 95,
    suffix: "%",
    title: "Audience Retention",
    desc: "Designed for engagement and conversion.",
  },
  {
    value: "24/7",
    numeric: null,
    suffix: "",
    title: "Creative Support",
    desc: "Continuous optimization and strategy.",
  },
];

export const ENGINE_SECTION = {
  titleBefore: "Our five",
  titleHighlight: "deliverables",
  subtitle:
    "Every engagement is built to grow your brand through cinematic content and scalable systems.",
};

export const ENGINE_ITEMS = [
  {
    textBefore: "High-impact social media",
    textHighlight: "campaigns",
    icon: "campaign",
    color: "#fb923c",
    glow: "#f97316",
  },
  {
    textBefore: "Cinematic brand",
    textHighlight: "storytelling",
    icon: "story",
    color: "#c084fc",
    glow: "#a855f7",
  },
  {
    textBefore: "Performance-focused content",
    textHighlight: "systems",
    icon: "systems",
    color: "#f472b6",
    glow: "#ec4899",
  },
  {
    textBefore: "Short-form video editing &",
    textHighlight: "strategy",
    icon: "video",
    color: "#38bdf8",
    glow: "#0ea5e9",
  },
  {
    textBefore: "Creative direction for modern",
    textHighlight: "brands",
    icon: "direction",
    color: "#4ade80",
    glow: "#22c55e",
  },
];

/** Flat string list kept for components that still map simple deliverable labels. */
export const DELIVERABLES = ENGINE_ITEMS.map(
  ({ textBefore, textHighlight }) => `${textBefore} ${textHighlight}`,
);

export const CTA_TAGS = ["Social Growth", "Content", "Strategy"];
