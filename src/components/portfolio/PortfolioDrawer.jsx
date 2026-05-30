import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { FiArrowRight, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { PORTFOLIO_CLIENTS } from "../../data/portfolioCaseStudies";

const TOP_PROJECTS = PORTFOLIO_CLIENTS.slice(0, 3);

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

function BackgroundMarquee() {
  const techStack = useMemo(
    () => [...new Set(PORTFOLIO_CLIENTS.flatMap((p) => p.techStack))],
    [],
  );

  const lineOne = useMemo(() => {
    const names = PORTFOLIO_CLIENTS.map((p) => p.name);
    return [...names, ...TAGLINES.slice(0, 6)].join(" · ");
  }, []);

  const lineTwo = useMemo(() => {
    return [...TAGLINES.slice(6), ...techStack].join(" · ");
  }, [techStack]);

  const marqueeText =
    "text-white text-[3.5rem] sm:text-[4.5rem] font-bold tracking-tighter mx-10 whitespace-nowrap portfolio-drawer-serif italic leading-none";

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      <div className="absolute top-[18%] left-0 right-0 overflow-hidden opacity-[0.09]">
        <motion.div
          className="flex whitespace-nowrap w-max"
          animate={{ x: [0, -2800] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          {[...Array(5)].map((_, i) => (
            <span key={`a-${i}`} className={marqueeText}>
              {lineOne}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-[52%] left-0 right-0 overflow-hidden opacity-[0.07]">
        <motion.div
          className="flex whitespace-nowrap w-max"
          animate={{ x: [-2800, 0] }}
          transition={{ repeat: Infinity, duration: 58, ease: "linear" }}
        >
          {[...Array(5)].map((_, i) => (
            <span key={`b-${i}`} className={marqueeText}>
              {lineTwo}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-[0.11]">
        <motion.div
          className="flex whitespace-nowrap w-max"
          animate={{ x: [0, -3200] }}
          transition={{ repeat: Infinity, duration: 65, ease: "linear" }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={`c-${i}`}
              className="text-white text-[4rem] sm:text-[5rem] font-bold tracking-tighter mx-12 whitespace-nowrap portfolio-drawer-serif italic leading-none"
            >
              Our Portfolio
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function PortfolioDrawer({ open, onClose }) {
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
              <BackgroundMarquee />

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
                      Premium client websites — UI/UX led, conversion focused.
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

                <div className="flex-1 min-h-0 px-[28px] py-4 portfolio-drawer-scroll overflow-hidden">
                  <div className="h-full grid grid-rows-3 gap-3">
                    {TOP_PROJECTS.map((project, i) => (
                      <motion.div
                        key={project.id}
                        className="min-h-0 h-full"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + i * 0.08, duration: 0.4 }}
                      >
                        <Link
                          to={`/our-work/${project.id}`}
                          onClick={onClose}
                          className="group flex h-full gap-4 p-4 rounded-2xl border border-white/10 bg-[#1a1a1a]/45 backdrop-blur-[2px] hover:border-[#e44f39]/50 hover:bg-[#1f1f1f]/55 transition-all duration-300"
                        >
                          <div className="shrink-0 h-full w-[38%] max-w-[148px] min-w-[100px] rounded-xl overflow-hidden border border-white/10">
                            <img
                              src={project.images[0]}
                              alt={project.name}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                          </div>
                          <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
                            <div className="flex flex-wrap gap-1.5 mb-2">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] px-2 py-0.5 rounded-full bg-[#e44f39]/15 text-[#e44f39] font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <h3 className="text-base font-bold text-white group-hover:text-[#e44f39] transition-colors line-clamp-2 leading-snug">
                              {project.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                              {project.type}
                            </p>
                            <span className="mt-auto pt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#e44f39] opacity-0 group-hover:opacity-100 transition-opacity">
                              View case study
                              <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-[28px] border-t border-white/10 bg-[#0f0f0f]/45 backdrop-blur-[2px] shrink-0">
                  <Link
                    to="/our-work"
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 w-full rounded-full py-3 px-6 bg-[#e44f39] text-white font-semibold text-sm uppercase tracking-wide hover:bg-[#ff6b55] transition-colors"
                  >
                    Show more projects
                    <FiArrowRight />
                  </Link>
                  <p className="mt-2.5 text-center text-[10px] text-gray-500">
                    {PORTFOLIO_CLIENTS.length} client builds · full case studies
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
