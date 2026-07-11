import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DistortedPixelsCanvas from "../../../components/digital-engagement/DistortedPixelsCanvas";
import Button from "../../../components/ui/Button";
import { HERO, BRAND } from "../digitalEngagementData";

export default function DeHero() {
  return (
    <section className="de-hero relative h-[100svh] min-h-[100svh] w-full overflow-hidden bg-[#eeeeee]">
      <DistortedPixelsCanvas
        image={HERO.image}
        alt=""
        className="de-hero-canvas z-0"
      />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/50 via-black/10 to-black/20" />

      <div className="de-hero-content pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-5 pb-5 pt-[4.75rem] sm:px-6 sm:pb-0 sm:pt-[72px] text-center">
        <div className="w-full max-w-6xl mx-auto">
          <p className="de-hero-eyebrow mx-auto mb-4 max-w-[19rem] text-[10px] leading-[1.65] tracking-[0.14em] text-white/70 uppercase sm:mb-6 sm:max-w-none sm:text-xs sm:leading-normal sm:tracking-[0.3em] md:text-sm">
            {HERO.eyebrow}
          </p>

          <h1 className="text-[2.35rem] font-black leading-[1.06] tracking-[-0.04em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-[56px] sm:leading-[0.92] sm:tracking-[-0.05em] md:text-7xl lg:text-8xl px-1 sm:px-2">
            {HERO.lines.map((line, index) => (
              <span key={line} className="block de-hero-line overflow-hidden">
                {index === HERO.accentLine ? (
                  <span style={{ color: BRAND }}>{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <div className="de-hero-highlights mt-5 sm:mt-6 md:mt-7 w-full flex flex-col items-center gap-2 sm:gap-2 md:gap-2.5">
            <div className="flex w-full flex-wrap items-center justify-center gap-1.5 sm:hidden">
              {HERO.highlightRows.flat().map((item) => (
                <span
                  key={item}
                  className="de-hero-pill group relative inline-flex items-center overflow-hidden rounded-full px-[1px] py-[1px] shadow-[0_0_16px_rgba(255,255,255,0.06)]"
                >
                  <span
                    className="absolute inset-0 rounded-full opacity-80"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 45%, rgba(228,79,57,0.35) 100%)",
                    }}
                  />
                  <span className="relative inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/[0.08] px-2.5 py-1 backdrop-blur-xl">
                    <span
                      className="h-1 w-1 shrink-0 rounded-full shadow-[0_0_6px_rgba(228,79,57,0.9)]"
                      style={{ backgroundColor: BRAND }}
                    />
                    <span className="de-hero-pill-text text-[8px] font-semibold uppercase tracking-[0.12em] text-white">
                      {item}
                    </span>
                  </span>
                </span>
              ))}
            </div>

            <div className="hidden w-full flex-col items-center gap-2 sm:flex md:gap-2.5">
            {HERO.highlightRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex w-full flex-wrap items-center justify-center gap-1.5 md:gap-2"
              >
                {row.map((item) => (
                  <span
                    key={item}
                    className="de-hero-pill group relative inline-flex items-center overflow-hidden rounded-full px-[1px] py-[1px] shadow-[0_0_16px_rgba(255,255,255,0.06)]"
                  >
                    <span
                      className="absolute inset-0 rounded-full opacity-80"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 45%, rgba(228,79,57,0.35) 100%)",
                      }}
                    />
                    <span className="relative inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/[0.08] px-2.5 py-1 md:px-3 md:py-1.5 backdrop-blur-xl">
                      <span
                        className="h-1 w-1 shrink-0 rounded-full shadow-[0_0_6px_rgba(228,79,57,0.9)]"
                        style={{ backgroundColor: BRAND }}
                      />
                      <span className="de-hero-pill-text text-[8px] sm:text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                        {item}
                      </span>
                    </span>
                  </span>
                ))}
              </div>
            ))}
            </div>

            <p className="de-hero-tagline mx-auto mt-2 max-w-[17rem] text-[8px] leading-[1.55] font-medium uppercase tracking-[0.12em] text-white/70 sm:mt-1 sm:max-w-none sm:text-[9px] sm:tracking-[0.2em] md:text-[10px]">
              <span className="bg-gradient-to-r from-white/90 via-white/70 to-[#ffb4a8]/90 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]">
                {HERO.highlightTagline}
              </span>
            </p>
          </div>

          <div className="de-hero-cta mt-4 sm:mt-7 pointer-events-auto flex flex-col items-center gap-5">
            <Link to={HERO.ctaTo} className="inline-flex max-w-full">
              <Button className="w-auto max-w-full justify-center px-4 py-2.5 text-[10px] leading-none tracking-[0.11em] gap-2 sm:px-8 sm:py-4 sm:text-sm sm:tracking-widest sm:gap-3 font-semibold uppercase whitespace-nowrap [&>span:last-child]:h-1.5 [&>span:last-child]:w-1.5 sm:[&>span:last-child]:h-2 sm:[&>span:last-child]:w-2">
                {HERO.ctaLabel}
              </Button>
            </Link>

            <Link to={HERO.ctaTo} className="de-scroll-hint hidden sm:flex flex-col items-center gap-2">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-[0.65rem] sm:text-xs tracking-widest text-gray-400 font-semibold">
                  SCROLL DOWN
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#e44f39] sm:w-6 sm:h-6"
                  >
                    <path
                      d="M12 5V19M12 19L5 12M12 19L19 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </Link>
          </div>

          <style>{`
            .de-hero-pill::before {
              content: "";
              position: absolute;
              inset: 0;
              border-radius: 9999px;
              background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.28) 0%,
                rgba(255, 255, 255, 0) 55%
              );
              pointer-events: none;
            }

            .de-hero-pill-text {
              text-shadow:
                0 0 12px rgba(255, 255, 255, 0.45),
                0 0 28px rgba(228, 79, 57, 0.18);
            }

            .de-hero-pill:hover .de-hero-pill-text {
              text-shadow:
                0 0 16px rgba(255, 255, 255, 0.7),
                0 0 36px rgba(228, 79, 57, 0.35);
            }
          `}</style>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  );
}
