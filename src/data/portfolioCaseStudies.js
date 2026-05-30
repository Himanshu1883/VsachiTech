/**
 * Single source of truth for portfolio preview cards + case-study sections.
 * Silver Stitch is always listed first (priority showcase).
 */
export const PORTFOLIO_CLIENTS = [
  {
    id: "silver-stitch",
    name: "Silver Stitch",
    type: "Designer Blouse E-commerce",
    tags: ["UI/UX", "Full Stack"],
    images: [
      "/portfolio/silver_stich_1.png",
      "/portfolio/silver_stich_2.png",
      "/portfolio/silver_stich_3.png",
      "/portfolio/silver_stich_4.png",
      "/portfolio/silver_stitch_5.png",
    ],
    liveUrl: "https://silver-stitch-delta.vercel.app/",
    industry: "Handcrafted designer blouses & boutique fashion",
    summary:
      "Full-stack fashion boutique platform — custom designs, embroidery collections, tailored measurements, and checkout with a premium, image-led shopping experience.",
    problem: [
      "Boutique needed ecommerce beyond Instagram posts for collections and custom blouse orders.",
      "Measurement and custom-design workflows are complex for typical template shops.",
      "Brand required a polished UI that reflects handcrafted, luxury positioning.",
    ],
    solution: [
      "Built React + TypeScript frontend with shadcn/ui and motion-rich product storytelling.",
      "Implemented collections, embroidery detail pages, measurement forms, and contact flows.",
      "Paired with Express + MongoDB backend for auth, catalog, payments, and media.",
    ],
    features: [
      {
        title: "Collections & embroidery",
        desc: "Category browsing with slug-based detail pages for each design.",
      },
      {
        title: "Custom design",
        desc: "Guided flow for bespoke blouse requests and approvals.",
      },
      {
        title: "Measurement forms",
        desc: "Structured sizing capture for tailored fits.",
      },
      {
        title: "Cart & checkout",
        desc: "Razorpay-integrated purchase path with order handling.",
      },
      {
        title: "Google OAuth",
        desc: "Streamlined sign-in for returning customers.",
      },
      {
        title: "Admin-ready backend",
        desc: "Express API with Cloudinary media and email notifications.",
      },
    ],
    uiux: [
      {
        title: "Fashion-forward visuals",
        desc: "Swiper/carousel hero and image-led product cards.",
      },
      {
        title: "Accessible components",
        desc: "Radix-based shadcn patterns for forms and dialogs.",
      },
      {
        title: "Motion & delight",
        desc: "Framer Motion and GSAP for premium micro-interactions.",
      },
      {
        title: "Tested quality",
        desc: "Vitest, Testing Library, and Playwright in the toolchain.",
      },
    ],
    techStack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "React Query",
      "Express",
      "MongoDB",
      "Razorpay",
      "Cloudinary",
      "Vercel",
    ],
    outcomes: [
      "End-to-end online discovery and purchase for designer blouses.",
      "Operational workflows for custom fit and embroidery inquiries.",
      "Scalable full-stack foundation for catalog growth.",
    ],
  },
  {
    id: "anuraag",
    name: "Anuraag Kaushik",
    type: "Luxury Makeup Portfolio",
    tags: ["UI/UX", "Web"],
    images: [
      "/portfolio/anuraag_1.png",
      "/portfolio/anuraag_2.png",
      "/portfolio/anuraag_3.png",
      "/portfolio/anuraag_4.png",
      "/portfolio/anuraag_5.png",
    ],
    liveUrl: "https://anuraagkaushik.in/",
    industry: "Luxury bridal & occasion makeup",
    summary:
      "A photography-first portfolio for a luxury makeup artist — built to showcase signature looks, service tiers, and drive bookings across Delhi and destination weddings.",
    problem: [
      "Brand relied on Instagram DMs with no structured way to explain packages or pricing.",
      "High-intent bridal clients needed trust, process clarity, and a premium first impression online.",
      "Content had to work equally well on mobile, in portraits, and under event lighting.",
    ],
    solution: [
      "Designed a soft glam visual system aligned with Anuraag’s on-camera finish.",
      "Structured service pages with Delhi vs outside-Delhi pricing and clear booking CTAs.",
      "Integrated reel-style motion and portfolio collage to mirror social discovery habits.",
    ],
    features: [
      {
        title: "Service packages",
        desc: "Bridal, reception, and engagement tiers with transparent pricing bands.",
      },
      {
        title: "Instagram reels",
        desc: "Embedded motion content for technique and behind-the-scenes trust.",
      },
      {
        title: "Signature style narrative",
        desc: "Editorial copy blocks explaining skin-first, camera-ready philosophy.",
      },
      {
        title: "Booking flow",
        desc: "Prominent CTAs to convert visitors into consultation requests.",
      },
      {
        title: "Portfolio gallery",
        desc: "Curated lookbook layout optimized for large imagery.",
      },
      {
        title: "Mobile-first layout",
        desc: "Responsive typography and spacing for on-the-go brides.",
      },
    ],
    uiux: [
      {
        title: "Photography-led hierarchy",
        desc: "Large visuals first; copy supports without competing with imagery.",
      },
      {
        title: "Romantic color system",
        desc: "Warm neutrals and accent gold/red tones matching brand glam.",
      },
      {
        title: "Readable pricing blocks",
        desc: "Scannable packages reduce back-and-forth before inquiry.",
      },
      {
        title: "Subtle motion",
        desc: "Framer Motion transitions add polish without distracting from faces.",
      },
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI",
      "Vercel",
    ],
    outcomes: [
      "Clearer path from discovery to booking inquiry.",
      "Premium positioning aligned with luxury bridal market.",
      "Unified brand story across services and social proof.",
    ],
  },
  {
    id: "zenmen",
    name: "Zenmen",
    type: "Bespoke Menswear Experience",
    tags: ["UI/UX", "E-commerce"],
    images: [
      "/portfolio/zenmen_1.png",
      "/portfolio/zenmen_2.png",
      "/portfolio/zenmen_3.png",
      "/portfolio/zenmen_4.png",
      "/portfolio/zenmen_5.png",
    ],
    liveUrl: "https://ze-nmen-psi.vercel.app/",
    industry: "Premium bespoke tailoring (Lajpat Nagar, Delhi)",
    summary:
      "A luxury digital storefront for bespoke menswear — editorial product discovery, curated collections, accessories, and appointment-led conversion for a high-touch tailoring house.",
    problem: [
      "Offline atelier excellence did not translate online; the brand needed a premium web presence.",
      "Product catalog and bespoke journey were hard to communicate in a single static brochure.",
      "Customers expected filters, lookbooks, reviews, and easy appointment booking.",
    ],
    solution: [
      "Built an editorial ecommerce experience with category-led navigation and hero lookbooks.",
      "Mapped the four-step ZENMEN journey from consultation to delivery.",
      "Surfaced Google reviews and atelier details to reinforce Lajpat Nagar trust.",
    ],
    features: [
      {
        title: "Shop by category",
        desc: "Designer suits, Indo-western, formals, and accessories in distinct lanes.",
      },
      {
        title: "Curated collection",
        desc: "Filterable ready-to-wear pieces with premium product detail views.",
      },
      {
        title: "Featured products",
        desc: "Rotating highlights for seasonal and hero silhouettes.",
      },
      {
        title: "Bespoke journey",
        desc: "Four-step experience explaining consultation through delivery.",
      },
      {
        title: "Reviews & social proof",
        desc: "Google-verified testimonials carousel for conversion trust.",
      },
      {
        title: "Appointments",
        desc: "Visit atelier, store hours, and contact paths for private fittings.",
      },
    ],
    uiux: [
      {
        title: "Luxury editorial layout",
        desc: "Generous whitespace, strong type scale, restrained color palette.",
      },
      {
        title: "Product discovery",
        desc: "Card grids and filters tuned for high-SKU browsing on mobile.",
      },
      {
        title: "Motion with purpose",
        desc: "Carousels and scroll cues guide without overwhelming craftsmanship.",
      },
      {
        title: "Conversion architecture",
        desc: "Appointment CTAs placed after trust and collection exploration.",
      },
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Vercel",
    ],
    outcomes: [
      "Premium brand perception matched to in-store experience.",
      "Structured path from browse to appointment or purchase intent.",
      "Scalable catalog presentation for growing collections.",
    ],
  },
  {
    id: "zari",
    name: "Fancy Zari Emporium",
    type: "Wholesale Trims & Zari",
    tags: ["UI/UX", "B2B Web"],
    images: [
      "/portfolio/zari_1.png",
      "/portfolio/zari_2.png",
      "/portfolio/zari_3.png",
      "/portfolio/zari_4.png",
      "/portfolio/zari_5.png",
    ],
    liveUrl: "https://fancy-zari-emporium.vercel.app/",
    industry: "Wholesale laces, gota, kinari & export trims (Lajpat Nagar)",
    summary:
      "A B2B-ready catalog and lead-generation site for a decades-trusted trims wholesaler — combining product discovery, custom orders, FAQs, and export credibility.",
    problem: [
      "Wholesale buyers still relied on walk-ins and phone orders with limited digital catalog access.",
      "Bulk MOQ, export, and payment questions repeated — needed self-serve answers.",
      "Festive campaigns and trust signals had to coexist without cluttering navigation.",
    ],
    solution: [
      "Delivered a modern Vite + React storefront with category browsing and custom design requests.",
      "Added Instagram reel showcase, testimonials, and detailed FAQ for operations.",
      "Designed promo marquee and trust bands for wholesale + export positioning.",
    ],
    features: [
      {
        title: "Product catalog",
        desc: "Browse laces, gota, kinari, and combos with wholesale positioning.",
      },
      {
        title: "Custom design",
        desc: "Dedicated flow for bespoke trim requests and approvals.",
      },
      {
        title: "Instagram showcase",
        desc: "Workshop reels embedded for craft authenticity.",
      },
      {
        title: "FAQ & policies",
        desc: "MOQ, pan-India delivery, Razorpay/COD, and export guidance.",
      },
      {
        title: "Testimonials",
        desc: "Boutique and exporter quotes for B2B trust.",
      },
      {
        title: "Contact & WhatsApp",
        desc: "Fast paths for bulk order conversations.",
      },
    ],
    uiux: [
      {
        title: "B2B trust layout",
        desc: "Clear USPs: wholesale rates, export quality, 30+ years experience.",
      },
      {
        title: "Festive promo ticker",
        desc: "Campaign marquee without breaking primary navigation.",
      },
      {
        title: "Mobile catalog",
        desc: "Thumb-friendly browsing for buyers on the shop floor.",
      },
      {
        title: "shadcn + Radix system",
        desc: "Accessible components for dialogs, tabs, and forms.",
      },
    ],
    techStack: [
      "React 19",
      "Vite",
      "TypeScript",
      "TanStack Router",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS 4",
      "Radix UI",
      "Zod",
      "Vercel",
    ],
    outcomes: [
      "Digital catalog reduces repetitive inquiry calls.",
      "Stronger export and wholesale credibility online.",
      "Self-serve FAQ lowers pre-sales friction for bulk buyers.",
    ],
  },
];

export function getProjectById(id) {
  return PORTFOLIO_CLIENTS.find((project) => project.id === id) ?? null;
}

export function getRelatedProjects(currentId, limit = 3) {
  return PORTFOLIO_CLIENTS.filter((p) => p.id !== currentId).slice(0, limit);
}
