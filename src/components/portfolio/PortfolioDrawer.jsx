import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FiArrowRight, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { pauseLenis, resumeLenis } from "../../utils/lenisController";
import { PORTFOLIO_CLIENTS } from "../../data/portfolioCaseStudies";
import {
  UNIQUE_SOCIAL_CLIENTS,
  SOCIAL_PROFILE_HANDLES,
  SOCIAL_INSTAGRAM_URLS,
  SOCIAL_FACEBOOK_URLS,
  getSocialLogoDisplay,
  portfolioImageSrc,
} from "../../data/socialMediaClients";

const SOCIAL_PLATFORMS = {
  instagram: {
    icon: FaInstagram,
    color: "#E4405F",
    label: "Instagram",
  },
  facebook: {
    icon: FaFacebook,
    color: "#1877F2",
    label: "Facebook",
  },
};

const SOCIAL_CLIENT_QUOTES = [
  "Reels that doubled our reach in 90 days.",
  "Content that finally matches our brand voice.",
  "Our Instagram finally feels premium.",
  "Campaigns that convert followers into leads.",
  "Consistent posting without the daily stress.",
  "Storytelling that built real community trust.",
  "Growth we could measure week over week.",
  "Creative direction our audience loves.",
  "A social presence we're proud to share.",
  "Engagement that outperformed every quarter.",
];

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function buildClientSocials(client) {
  const profileHandle = SOCIAL_PROFILE_HANDLES[client.logoKey];
  const slug = profileHandle ?? slugify(client.name);
  const instagramUrl =
    SOCIAL_INSTAGRAM_URLS[client.logoKey] ??
    `https://www.instagram.com/${slug}/`;
  const facebookUrl = SOCIAL_FACEBOOK_URLS[client.logoKey];

  const socials = [
    {
      platform: "instagram",
      handle: `@${slug}`,
      url: instagramUrl,
    },
  ];

  if (facebookUrl) {
    socials.push({
      platform: "facebook",
      handle: "Facebook",
      url: facebookUrl,
    });
  }

  return socials;
}

function enrichSocialClient(client, index) {
  return {
    ...client,
    quote: SOCIAL_CLIENT_QUOTES[index % SOCIAL_CLIENT_QUOTES.length],
    socials: buildClientSocials(client),
  };
}

const TOP_PROJECTS = PORTFOLIO_CLIENTS.slice(0, 3);

const DRAWER_PREVIEW_IMAGES = {
  "silver-stitch": "/portfolio/silver_port.jpeg",
  anuraag: "/portfolio/anuraag_port.jpeg",
  zenmen: "/portfolio/zenmen_port.jpeg",
  zari: "/portfolio/zari_1.png",
};

function getDrawerPreviewImage(project) {
  return DRAWER_PREVIEW_IMAGES[project.id] ?? project.images[0];
}

const SOCIAL_MEDIA_CLIENTS = UNIQUE_SOCIAL_CLIENTS.map(enrichSocialClient);

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

function BackgroundMarquee({ activeTab, socialClients }) {
  const strip = useMemo(() => {
    const names =
      activeTab === "social-media"
        ? socialClients.map((p) => p.name)
        : PORTFOLIO_CLIENTS.map((p) => p.name);
    const phrases = [
      "Our Portfolio",
      "Vsachi Tech",
      ...names.slice(0, 8),
      ...TAGLINES.slice(0, 4),
    ];
    return [...phrases, ...phrases];
  }, [activeTab, socialClients]);

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

function DrawerWebDevCard({ item, index, onClose }) {
  const imageSrc = portfolioImageSrc(getDrawerPreviewImage(item));

  return (
    <motion.div
      className="min-h-0 h-full"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.08 + index * 0.08, duration: 0.4 }}
    >
      <Link
        to={`/our-work/${item.id}`}
        onClick={onClose}
        className="group flex h-full gap-4 p-4 rounded-2xl border border-white/10 bg-[#1a1a1a]/45 backdrop-blur-[2px] hover:border-[#e44f39]/50 hover:bg-[#1f1f1f]/55 transition-all duration-300"
      >
        <div className="shrink-0 h-full w-[38%] max-w-[148px] min-w-[100px] rounded-xl overflow-hidden border border-white/10">
          <img
            src={imageSrc}
            alt={item.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
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
          <h3 className="text-base font-extrabold text-white group-hover:text-[#ff6b55] transition-colors line-clamp-2 leading-snug">
            {item.name}
          </h3>
          <p className="text-xs font-semibold text-gray-300 mt-1 line-clamp-2 leading-relaxed">
            {item.type}
          </p>
          <span className="mt-auto pt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#e44f39] opacity-0 group-hover:opacity-100 transition-opacity">
            View case study
            <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function SocialHandleTile({ social, index, compact = false }) {
  const platform = SOCIAL_PLATFORMS[social.platform];
  const Icon = platform.icon;

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.04 + index * 0.07,
        duration: 0.28,
        ease: "easeOut",
      }}
      onClick={(e) => e.stopPropagation()}
      className={`flex min-w-0 flex-col items-center text-center transition-colors group/social w-full hover:opacity-90 ${
        compact ? "gap-1 px-1 py-1" : "gap-1.5 rounded-xl px-2 py-2"
      }`}
      title={`${platform.label} · ${social.handle}`}
      aria-label={`${platform.label} ${social.handle}`}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-full ${
          compact ? "h-7 w-7" : "h-8 w-8"
        }`}
        style={{ color: platform.color }}
      >
        <Icon className={compact ? "text-[15px]" : "text-[17px]"} aria-hidden />
      </span>
      {!compact && (
        <span
          className="block text-[9px] font-bold uppercase tracking-wide leading-none"
          style={{ color: platform.color }}
        >
          {platform.label}
        </span>
      )}
      <span
        className={`block w-full font-semibold text-white/95 group-hover/social:text-[#ffe8e4] transition-colors ${
          compact
            ? "text-[9px] leading-[1.15] line-clamp-2 break-words"
            : "text-[10px] leading-snug line-clamp-2 break-words"
        }`}
      >
        {social.handle}
      </span>
    </motion.a>
  );
}

function SocialHandlesGrid({ socials }) {
  const compact = socials.length >= 3;
  const layoutClass =
    socials.length === 1
      ? "flex justify-center"
      : socials.length === 2
        ? "grid grid-cols-2 gap-2"
        : "grid grid-cols-3 gap-1.5";

  return (
    <div className={`w-full max-w-[220px] mx-auto ${layoutClass}`}>
      {socials.map((social, index) => (
        <div
          key={social.platform}
          className={socials.length === 1 ? "w-[52%] min-w-0" : "min-w-0"}
        >
          <SocialHandleTile social={social} index={index} compact={compact} />
        </div>
      ))}
    </div>
  );
}

function pickCelebrationIds(clients, priorityCount = 3) {
  return new Set(clients.slice(0, priorityCount).map((client) => client.id));
}

const CELEBRATION_BURST_MS = 5200;
const CELEBRATION_INTERVAL_MIN_MS = 6000;
const CELEBRATION_INTERVAL_MAX_MS = 14000;

function SocialIconBurst({ socials, active, burstKey }) {
  const particles = useMemo(() => {
    if (!active || socials.length === 0) return [];

    const total = Math.max(8, socials.length * 4);
    return Array.from({ length: total }, (_, i) => {
      const social = socials[i % socials.length];
      return {
        id: `${burstKey}-${i}`,
        social,
        left: 8 + Math.random() * 84,
        delay: Math.random() * 1.6,
        duration: 1.6 + Math.random() * 1.1,
        size: 13 + Math.random() * 9,
        drift: -12 + Math.random() * 24,
      };
    });
  }, [active, socials, burstKey]);

  if (!active || particles.length === 0) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl"
      aria-hidden
    >
      {particles.map((particle) => {
        const platform = SOCIAL_PLATFORMS[particle.social.platform];
        const Icon = platform.icon;

        return (
          <motion.span
            key={particle.id}
            className="absolute bottom-2"
            style={{
              left: `${particle.left}%`,
              color: platform.color,
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.45))",
            }}
            initial={{ y: 24, x: 0, opacity: 0, scale: 0.35 }}
            animate={{
              y: -190,
              x: particle.drift,
              opacity: [0, 0.95, 0.85, 0],
              scale: [0.35, 1.05, 0.95, 0.55],
              rotate: [0, particle.drift > 0 ? 14 : -14, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: 2,
              repeatDelay: 0.35,
              ease: "easeOut",
            }}
          >
            <Icon style={{ fontSize: particle.size }} />
          </motion.span>
        );
      })}
    </div>
  );
}

function SocialClientTile({ client, index, celebrate, celebrationKey }) {
  const [revealed, setRevealed] = useState(false);
  const logo = getSocialLogoDisplay(client.logoKey);
  const imageSrc = portfolioImageSrc(client.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.03 + index * 0.025, duration: 0.35 }}
      className="relative h-[238px] w-full"
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onClick={() => setRevealed((prev) => !prev)}
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-2xl border transition-colors duration-300 ${
          revealed
            ? "border-[#e44f39]/55"
            : "border-transparent hover:border-white/20"
        }`}
        style={{ perspective: "1000px" }}
      >
        <SocialIconBurst
          socials={client.socials}
          active={celebrate && !revealed}
          burstKey={celebrationKey}
        />
        <AnimatePresence mode="wait" initial={false}>
          {!revealed ? (
            <motion.div
              key="front"
              initial={{ opacity: 0, rotateY: -72, scale: 0.96 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: 72, scale: 0.96 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col items-center justify-center overflow-hidden px-2 py-3 text-center"
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            >
              <div
                className="relative aspect-square w-[92%] max-w-[124px] shrink-0 rounded-full overflow-hidden border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
                style={{ backgroundColor: logo.bg }}
              >
                <img
                  src={imageSrc}
                  alt={client.name}
                  className={`absolute inset-0 h-full w-full ${logo.imgClass}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="mt-2.5 w-full px-0.5 text-[11px] font-extrabold text-[#e44f39] leading-tight line-clamp-2 tracking-tight sm:text-[12px]">
                {client.name}
              </h3>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ opacity: 0, rotateY: 72, scale: 0.96 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -72, scale: 0.96 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full items-center justify-center overflow-hidden px-2 py-3 text-center"
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            >
              <div className="flex w-full max-w-[210px] flex-col items-center gap-3">
                <div className="w-full">
                  <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#ff6b55]">
                    Client voice
                  </p>
                  <p className="mx-auto line-clamp-2 text-[10px] font-semibold leading-snug text-white/95 sm:text-[11px]">
                    &ldquo;{client.quote}&rdquo;
                  </p>
                </div>

                <SocialHandlesGrid socials={client.socials} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function SocialMediaGrid({ clients, celebrationIds, celebrationKey }) {
  return (
    <div className="flex flex-col gap-4 pb-2">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-gray-200">
          Brand partners
        </p>
        <span className="text-[11px] font-extrabold text-[#ff6b55] tabular-nums">
          {clients.length} brands
        </span>
      </div>

      {/* Category filters (All, Fashion, Beauty, etc.) — hidden for now
      <SocialCategoryFilters
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
      */}

      <div className="grid grid-cols-3 gap-2 items-stretch">
        {clients.map((client, i) => (
          <SocialClientTile
            key={client.id}
            client={client}
            index={i}
            celebrate={celebrationIds.has(client.id)}
            celebrationKey={celebrationKey}
          />
        ))}
      </div>
    </div>
  );
}

export default function PortfolioDrawer({ open, onClose }) {
  const [activeTab, setActiveTab] = useState("social-media");
  const [celebrationIds, setCelebrationIds] = useState(() => new Set());
  const [celebrationKey, setCelebrationKey] = useState(0);
  const activeTabRef = useRef(activeTab);

  activeTabRef.current = activeTab;

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    pauseLenis();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      resumeLenis();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) setActiveTab("social-media");
  }, [open]);

  useEffect(() => {
    if (!open) {
      setCelebrationIds(new Set());
      return;
    }

    let burstClearTimer;
    let nextBurstTimer;
    let cancelled = false;

    const runBurst = () => {
      if (cancelled || activeTabRef.current !== "social-media") return;

      setCelebrationIds(pickCelebrationIds(SOCIAL_MEDIA_CLIENTS, 3));
      setCelebrationKey((key) => key + 1);

      window.clearTimeout(burstClearTimer);
      burstClearTimer = window.setTimeout(() => {
        if (!cancelled) setCelebrationIds(new Set());
      }, CELEBRATION_BURST_MS);
    };

    const scheduleNextBurst = () => {
      const delay =
        CELEBRATION_INTERVAL_MIN_MS +
        Math.random() * (CELEBRATION_INTERVAL_MAX_MS - CELEBRATION_INTERVAL_MIN_MS);

      nextBurstTimer = window.setTimeout(() => {
        if (cancelled) return;
        runBurst();
        scheduleNextBurst();
      }, delay);
    };

    runBurst();
    scheduleNextBurst();

    return () => {
      cancelled = true;
      window.clearTimeout(burstClearTimer);
      window.clearTimeout(nextBurstTimer);
    };
  }, [open]);

  const isWebDev = activeTab === "web-dev";
  const footerLink = isWebDev ? "/our-work" : "/digital-engagement";
  const footerLabel = isWebDev ? "Show more projects" : "Explore digital engagement";
  const footerMeta = isWebDev
    ? `${PORTFOLIO_CLIENTS.length} client builds · full case studies`
    : `${SOCIAL_MEDIA_CLIENTS.length} brand partners · reels & campaigns`;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close portfolio drawer"
            className="fixed inset-0 z-[140] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Portfolio preview"
            data-lenis-prevent
            className="fixed top-0 right-0 z-[150] h-full w-full max-w-[520px] shadow-2xl overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
          >
            <div className="relative flex flex-col h-full w-full bg-[#141414] border-l border-white/10 overflow-hidden">
              <BackgroundMarquee
                activeTab={activeTab}
                socialClients={SOCIAL_MEDIA_CLIENTS}
              />

              <div className="relative z-10 flex flex-col h-full min-h-0">
                <div className="flex items-start justify-between gap-4 p-[28px] border-b border-white/10 shrink-0 bg-[#141414]/40 backdrop-blur-[2px]">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#ff6b55] mb-2">
                      Featured work
                    </p>
                    <h2 className="portfolio-drawer-serif text-2xl sm:text-[1.65rem] font-semibold italic text-white tracking-[-0.02em] leading-tight">
                      Portfolio
                    </h2>
                    <p className="mt-2 text-sm font-medium text-gray-200 leading-relaxed">
                      {isWebDev
                        ? "Premium client websites — UI/UX led, conversion focused."
                        : `${SOCIAL_MEDIA_CLIENTS.length} brands we've grown — reels, content & campaigns.`}
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
                        className={`flex-1 rounded-full py-2 px-3 text-xs font-bold uppercase tracking-wide transition-colors ${
                          activeTab === tab.id
                            ? "bg-[#e44f39] text-white"
                            : "text-gray-200 hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  data-lenis-prevent
                  className={`flex-1 min-h-0 px-[28px] py-4 portfolio-drawer-scroll ${
                    isWebDev ? "overflow-hidden" : "overflow-y-auto overscroll-contain"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      className={isWebDev ? "h-full grid grid-rows-3 gap-3" : ""}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      {isWebDev ? (
                        TOP_PROJECTS.map((project, i) => (
                          <DrawerWebDevCard
                            key={project.id}
                            item={project}
                            index={i}
                            onClose={onClose}
                          />
                        ))
                      ) : (
                        <SocialMediaGrid
                          clients={SOCIAL_MEDIA_CLIENTS}
                          celebrationIds={celebrationIds}
                          celebrationKey={celebrationKey}
                        />
                      )}
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
                  <p className="mt-2.5 text-center text-[11px] font-semibold text-gray-300">
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
