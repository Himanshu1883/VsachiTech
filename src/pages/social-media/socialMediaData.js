export const BRAND = "#e44f39";

export const SM_FLIP = {
  mainImage: "/create.jpg",
  introOverlay: {
    eyebrow: "Vsachi Social Media",
    titleLines: ["CINEMATIC", "CONTENT"],
    accentLine: "THAT STOPS THE SCROLL",
    subtitle:
      "Premium reels, brand films, and social systems crafted for brands that want to look iconic and grow fast.",
    tags: ["Reels", "Brand Films", "UGC", "Strategy"],
    watermark: "SOCIAL",
    sideNote: "Create · Publish · Scale",
    rightRail: ["REELS", "FILMS", "GROWTH"],
  },
  sectionRails: {
    center: {
      left: ["VSACHI", "SOCIAL"],
      right: ["STOP", "SCROLL"],
    },
    column: {
      left: ["STRATEGY", "CREATE"],
      right: ["SCALE", "IMPACT"],
    },
    lines: {
      left: ["HOOKS", "THAT", "HIT"],
      right: ["VISUALS", "THAT", "STAY"],
    },
    sides: {
      left: ["BRAND", "VOICE"],
      right: ["REAL", "RESULTS"],
    },
    centerTall: {
      left: ["EVERY", "FRAME"],
      right: ["COUNTS", "MORE"],
    },
    grid: {
      left: ["CONTENT", "SYSTEMS"],
      right: ["MOMENTUM", "REACH"],
    },
  },
  heroTitle: {
    lines: ["Vsachi", "Social"],
  },
  linesSection: [
    { before: "Cinematic", step: true, after: "Reels" },
    { before: "Crafted with", image: "/digital_engag1.jpg", after: "strategy" },
    { before: "with", image: "/digital_engag2.jpg", after: "results" },
  ],
  sideText: {
    lead: "Welcome to Vsachi Social",
    body: "We believe in crafting more than posts — we create connections. Connections to culture, to your audience, and to the moments that matter. Our content is born from strategy first: hooks that stop the scroll, visuals that feel premium, and stories that turn followers into loyal communities.",
  },
  centerText:
    "We honor every frame with intentional creative direction — partnering with brands to ensure consistency, taste, and momentum at every step. No random posting, no off-brand trends — just honest, thoughtful social storytelling rooted in performance and timeless brand presence.",
  outroTitle: "Ready to grow your brand?",
  cta: {
    primary: { label: "Explore digital engagement", href: "/digital-engagement" },
    secondary: { label: "Start a project", href: "/contact" },
  },
  columnImages: [
    "/marketing_research.jpg",
    "/marketing_strategy.jpg",
    null,
    "/marketing_create.jpg",
    "/marketing_scale.jpg",
  ],
  gridImages: [
    "/digital_engag3.jpg",
    null,
    "/digital_engag4.jpg",
    "/vsachi_info_poster.jpg",
    "/marketing_research.jpg",
    "/marketing_strategy.jpg",
    "/marketing_create.jpg",
    "/marketing_scale.jpg",
    "/digital_engag1.jpg",
  ],
};

export const SM_HERO = {
  eyebrow: "Social Media Studio",
  titleBefore: "More than content —",
  titleAccent: "a feast for the eyes",
  subtitle:
    "Scroll to see how we turn social presence into cinematic brand storytelling that stops the scroll and grows the brand.",
  screen: {
    line1: "What if your",
    accent1: "social media",
    line2: "was",
    accent2: "perfect",
    line3: "?",
  },
  video: "/vsachi_info.mp4",
  poster: "/vsachi_info_poster.jpg",
  backgroundImage: "/create.jpg",
  sideLeft: {
    watermark: "CREATE",
    eyebrow: "What we craft",
    title: "Content that feels cinematic",
    body: "From first frame to final caption — every asset is built to look premium and perform.",
    tags: ["Reels", "Carousels", "Stories", "Brand Films", "UGC", "Thumbnails"],
    services: [
      { label: "Creative direction", body: "Moodboards, hooks & visual systems" },
      { label: "Production", body: "Shoot, edit & motion polish" },
      { label: "Publishing", body: "Calendar, captions & cadence" },
    ],
    highlight: {
      label: "Creative direction",
      body: "Every frame planned to stop the scroll and stay on-brand.",
    },
  },
  sideRight: {
    watermark: "GROW",
    eyebrow: "Why brands stay",
    title: "Growth with taste",
    body: "Beautiful content is only half the job — we build systems that compound reach and trust.",
    stats: [
      { value: "500+", label: "Creatives delivered" },
      { value: "50+", label: "Brands scaled" },
      { value: "3.2x", label: "Avg. engagement lift" },
      { value: "24/7", label: "Content rhythm" },
    ],
    platforms: ["Instagram", "YouTube", "Facebook", "Shorts"],
    highlight: {
      label: "Performance-first",
      body: "Cinematic quality with metrics that actually move the needle.",
    },
  },
};

export const SM_WORK = {
  hero: {
    image: "/create.jpg",
    line1: "Just",
    accent: "scroll ",
    line2: "it.",
  },
  footer: {
    image: "/marketing_create.jpg",
    line1: "YOU",
    accent: "scrollED ",
    line2: "it.",
  },
  items: [
    {
      id: "content",
      image: "/Social_Media/ronny_main_image.jpeg",
      titleLines: [
        { text: "CONTENT" },
        { text: "SAVED YOU", accent: "SAVED ", accentClass: "color-1" },
      ],
      subtitles: [
        "Reels & Stories",
        "Hooks & Edits",
        "Brand Films",
        "UGC Content",
        "Social Systems",
      ],
      strip: [
        { type: "image", src: "/Social_Media/ronny_salon_image.jpeg" },
        {
          type: "video",
          src: "/Social_Media/ronney_chettri.mp4",
          poster: "/Social_Media/ronny_main_image.jpeg",
        },
        { type: "image", src: "/Social_Media/ronney_chettri_2.jpeg" },
      ],
    },
    {
      id: "touch",
      image: "/Social_Media/oravella_main_image.jpeg",
      titleLines: [
        { text: "TOUCH" },
        { text: "CHANGES YOU", accent: "CHANGES ", accentClass: "color-2" },
      ],
      subtitles: [
        "Touch and Heal",
        "Kind and True",
        "Hand and Heart",
        "Care and Light",
        "Joy and Peace",
      ],
      strip: [
        { type: "image", src: "/Social_Media/oravella_image.jpeg" },
        {
          type: "video",
          src: "/Social_Media/orevella_video.mp4",
          poster: "/Social_Media/oravella_main_image.jpeg",
        },
        {
          type: "video",
          src: "/Social_Media/oravella_media%20(2).mp4",
          poster: "/Social_Media/oravella_main_image.jpeg",
        },
      ],
    },
    {
      id: "books",
      image: "/Social_Media/enlightenment_.yoga_main_image.jpeg",
      titleLines: [
        { text: "BRAND" },
        { text: "INSPIRES YOU", accent: "INSPIRES ", accentClass: "color-3" },
      ],
      subtitles: [
        "Book and Life",
        "Ink and Page",
        "Read and Rise",
        "Verse and Voice",
        "Page and Mind",
      ],
      strip: [
        { type: "image", src: "/Social_Media/yoga_image.jpg" },
        {
          type: "video",
          src: "/Social_Media/enlightenment_.yoga_video.mp4",
          poster: "/Social_Media/enlightenment_.yoga_main_image.jpeg",
        },
        { type: "image", src: "/Social_Media/enlightenment_.yoga_image.jpg" },
      ],
    },
  ],
};

export const SM_FAQ = {
  heading: "SOCIAL MEDIA QUESTIONS",
  items: [
    {
      id: "services",
      title: "SERVICES",
      description: "End-to-end social media built to look cinematic and perform.",
      fullDescription:
        "We handle strategy, creative direction, reels, carousels, stories, brand films, UGC-style content, thumbnails, and publishing calendars. Every asset is planned to stop the scroll and grow your brand with consistency and taste.",
      color: "text-black",
      image: "/marketing_create.jpg",
    },
    {
      id: "timeline",
      title: "RESULTS",
      description: "Momentum starts early and compounds with rhythm.",
      fullDescription:
        "Most brands see early traction within 4–8 weeks once strategy, hooks, and posting cadence are in place. Stronger growth compounds over 3–6 months with consistent creative, data-led optimization, and a clear content system.",
      color: "text-black",
      image: "/marketing_scale.jpg",
    },
    {
      id: "platforms",
      title: "PLATFORMS",
      description: "One brand voice, tailored for every channel.",
      fullDescription:
        "We create for Instagram, YouTube, Facebook, Shorts, and more — adapting aspect ratios, hooks, and captions per platform while keeping your brand voice cohesive everywhere your audience shows up.",
      color: "text-black",
      image: "/digital_engag1.jpg",
    },
    {
      id: "brand",
      title: "BRAND",
      description: "Your guidelines respected, your presence elevated.",
      fullDescription:
        "We align with your fonts, colors, tone of voice, and visual systems — or help refine them so your social presence feels premium, cohesive, and unmistakably yours across every touchpoint.",
      color: "text-black",
      image: "/create.jpg",
    },
  ],
};
