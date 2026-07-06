import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FiArrowRight, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { PORTFOLIO_CLIENTS } from "../../data/portfolioCaseStudies";

const TOP_PROJECTS = PORTFOLIO_CLIENTS.slice(0, 3);

/** Drawer card previews — curated hero shots from public/portfolio/ */
const DRAWER_PREVIEW_IMAGES = {
  "silver-stitch": "/portfolio/silver_port.jpeg",
  anuraag: "/portfolio/anuraag_port.jpeg",
  zenmen: "/portfolio/zenmen_port.jpeg",
  zari: "/portfolio/zari_1.png",
};

function getDrawerPreviewImage(project) {
  return DRAWER_PREVIEW_IMAGES[project.id] ?? project.images[0];
}

function portfolioImageSrc(path) {
  if (!path?.startsWith("/portfolio/")) return path;
  const file = path.slice("/portfolio/".length);
  return `/portfolio/${encodeURIComponent(file)}`;
}

const SOCIAL_MEDIA_PROJECTS = [
  {
    id: "royal-touch",
    name: "Royal Touch",
    type: "Social Media Management",
    tags: ["Social Media", "Branding"],
    image: "/portfolio/royal_touch.jpeg",
    link: "/digital-engagement",
  },
  {
    id: "sitaravastram",
    name: "Sitaravastram",
    type: "Social Media & Content",
    tags: ["Social Media", "Reels"],
    image: "/portfolio/sitaravastram.jpeg",
    link: "/digital-engagement",
  },
  {
    id: "kaur-studio",
    name: "Kaur Studio",
    type: "Social Media Management",
    tags: ["Social Media", "Growth"],
    image: "/portfolio/kaur_studio_social.jpeg",
    link: "/digital-engagement",
  },
  {
    id: "swim-n-gym",
    name: "Swim n Gym",
    type: "Social Media Management",
    tags: ["Social Media", "Fitness"],
    image: "/portfolio/swim'n'gym.png",
    link: "/digital-engagement",
  },
  {
    id: "enlightenment-yoga",
    name: "Enlightenment with Yoga",
    type: "Social Media & Wellness",
    tags: ["Social Media", "Wellness"],
    image: "/portfolio/enightnment with yoga.png",
    link: "/digital-engagement",
  },
  {
    id: "ivva",
    name: "IVVA",
    type: "Social Media Management",
    tags: ["Social Media", "Branding"],
    image: "/portfolio/ivva.jpeg",
    link: "/digital-engagement",
  },
  {
    id: "orvella",
    name: "Orvella",
    type: "Social Media & Content",
    tags: ["Social Media", "Reels"],
    image: "/portfolio/orvella.jpeg",
    link: "/digital-engagement",
  },
];

/** Fine-tune circular logo crop — some source files are square with extra padding/text */
const SOCIAL_LOGO_DISPLAY = {
  "royal-touch": {
    bg: "#f3ece4",
    imgClass: "object-cover object-[center_28%] scale-[1.72]",
  },
  sitaravastram: {
    bg: "#0b1528",
    imgClass: "object-cover object-center scale-[1.14]",
  },
  ivva: {
    bg: "#d8d4cc",
    imgClass: "object-cover object-center scale-[1.18]",
  },
};

function getSocialLogoDisplay(id) {
  return (
    SOCIAL_LOGO_DISPLAY[id] ?? {
      bg: "#0a0a0a",
      imgClass: "object-cover object-center scale-105",
    }
  );
}

const TABS = [
  { id: "social-media", label: "Social Media" },
  { id: "web-dev", label: "Web Dev" },
];

const TAGLINES = [
  "Vsachi Tech Portfolio",
  "Premium Client Work",
  "UI/UX · Engineering",
  "Case Studies",
  "Conversion Focused",
  "Full Stack Delivery",
  "Web · E-commerce",
  "Trusted Builds",
  "Our Work",
  "Design · Develop · Deliver",
  "Client Websites",
  "Modern Digital Products",
];

function BackgroundMarquee({ activeTab }) {
  const strip = useMemo(() => {
    const names =
      activeTab === "social-media"
        ? SOCIAL_MEDIA_PROJECTS.map((p) => p.name)
        : PORTFOLIO_CLIENTS.map((p) => p.name);
    const phrases = [
      "Our Portfolio",
      "Vsachi Tech",
      ...names,
      ...TAGLINES.slice(0, 4),
    ];
    return [...phrases, ...phrases];
  }, [activeTab]);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-[0.07]"
      aria-hidden
    >
      <motion.div
        className="flex flex-col items-center w-full will-change-transform"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
      >
        {strip.map((phrase, i) => (
          <span
            key={`${phrase}-${i}`}
            className="block text-white font-bold tracking-tighter leading-none text-center portfolio-drawer-serif italic text-[5rem] sm:text-[6.5rem] py-12 px-4 whitespace-nowrap"
          >
            {phrase}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function DrawerProjectCard({ item, index, onClose, variant = "web-dev" }) {
  const isSocial = variant === "social-media";
  const imageSrc = portfolioImageSrc(
    variant === "web-dev" ? getDrawerPreviewImage(item) : item.image,
  );
  const href =
    variant === "web-dev" ? `/our-work/${item.id}` : item.link;
  const ctaLabel =
    variant === "web-dev" ? "View case study" : "View work";
  const socialLogo = isSocial ? getSocialLogoDisplay(item.id) : null;

  return (
    <motion.div
      className={isSocial ? "shrink-0" : "min-h-0 h-full"}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.08 + index * 0.08, duration: 0.4 }}
    >
      <Link
        to={href}
        onClick={onClose}
        className={`group flex gap-4 p-4 rounded-2xl border border-white/10 bg-[#1a1a1a]/45 backdrop-blur-[2px] hover:border-[#e44f39]/50 hover:bg-[#1f1f1f]/55 transition-all duration-300 ${
          isSocial ? "min-h-[118px]" : "h-full"
        }`}
      >
        {isSocial ? (
          <div
            className="relative shrink-0 h-[86px] w-[86px] aspect-square rounded-full overflow-hidden border border-white/10"
            style={{ backgroundColor: socialLogo.bg }}
          >
            <img
              src={imageSrc}
              alt={item.name}
              className={`absolute inset-0 h-full w-full ${socialLogo.imgClass}`}
            />
          </div>
        ) : (
          <div className="shrink-0 h-full w-[38%] max-w-[148px] min-w-[100px] rounded-xl overflow-hidden border border-white/10">
            <img
              src={imageSrc}
              alt={item.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        )}
        <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-[#e44f39]/15 text-[#e44f39] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-[#e44f39] transition-colors line-clamp-2 leading-snug">
            {item.name}
          </h3>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
            {item.type}
          </p>
          <span className="mt-auto pt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#e44f39] opacity-0 group-hover:opacity-100 transition-opacity">
            {ctaLabel}
            <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function PortfolioDrawer({ open, onClose }) {
  const [activeTab, setActiveTab] = useState("social-media");

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) setActiveTab("social-media");
  }, [open]);

  const isWebDev = activeTab === "web-dev";
  const activeProjects = isWebDev ? TOP_PROJECTS : SOCIAL_MEDIA_PROJECTS;
  const footerLink = isWebDev ? "/our-work" : "/digital-engagement";
  const footerLabel = isWebDev ? "Show more projects" : "Explore digital engagement";
  const footerMeta = isWebDev
    ? `${PORTFOLIO_CLIENTS.length} client builds · full case studies`
    : `${SOCIAL_MEDIA_PROJECTS.length} social clients · reels & growth`;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close portfolio drawer"
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Portfolio preview"
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-[520px] shadow-2xl overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
          >
            <div className="relative flex flex-col h-full w-full bg-[#141414] border-l border-white/10 overflow-hidden">
              <BackgroundMarquee activeTab={activeTab} />

              <div className="relative z-10 flex flex-col h-full min-h-0">
                <div className="flex items-start justify-between gap-4 p-[28px] border-b border-white/10 shrink-0 bg-[#141414]/40 backdrop-blur-[2px]">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#e44f39] mb-2">
                      Featured work
                    </p>
                    <h2 className="portfolio-drawer-serif text-2xl sm:text-[1.65rem] font-medium italic text-white tracking-[-0.02em] leading-tight">
                      Portfolio
                    </h2>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                      {isWebDev
                        ? "Premium client websites — UI/UX led, conversion focused."
                        : "Social media management — reels, content, and audience growth."}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="shrink-0 p-2.5 rounded-full border border-white/15 text-white/80 hover:bg-white/10 hover:text-white transition"
                    aria-label="Close"
                  >
                    <FiX size={20} />
                  </button>
                </div>

                <div className="px-[28px] pt-4 pb-3 shrink-0">
                  <div className="flex gap-2 p-1 rounded-full bg-white/[0.06] border border-white/10">
                    {TABS.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 rounded-full py-2 px-3 text-xs font-semibold uppercase tracking-wide transition-colors ${
                          activeTab === tab.id
                            ? "bg-[#e44f39] text-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  className={`flex-1 min-h-0 px-[28px] py-4 portfolio-drawer-scroll ${
                    isWebDev ? "overflow-hidden" : "overflow-y-auto"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      className={
                        isWebDev
                          ? "h-full grid grid-rows-3 gap-3"
                          : "flex flex-col gap-3 pb-2"
                      }
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      {activeProjects.map((project, i) => (
                        <DrawerProjectCard
                          key={project.id}
                          item={project}
                          index={i}
                          onClose={onClose}
                          variant={activeTab}
                        />
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="p-[28px] border-t border-white/10 bg-[#0f0f0f]/45 backdrop-blur-[2px] shrink-0">
                  <Link
                    to={footerLink}
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 w-full rounded-full py-3 px-6 bg-[#e44f39] text-white font-semibold text-sm uppercase tracking-wide hover:bg-[#ff6b55] transition-colors"
                  >
                    {footerLabel}
                    <FiArrowRight />
                  </Link>
                  <p className="mt-2.5 text-center text-[10px] text-gray-500">
                    {footerMeta}
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>

          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&display=swap');
            .portfolio-drawer-serif {
              font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
            }
            .portfolio-drawer-scroll {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .portfolio-drawer-scroll::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}
