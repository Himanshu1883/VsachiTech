import DistortedPixelsCanvas from "../../../components/digital-engagement/DistortedPixelsCanvas";
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

      <div className="de-hero-content pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-5 md:px-6 pt-[72px] text-center">
        <div className="max-w-6xl mx-auto">
          <p className="de-hero-eyebrow uppercase tracking-[0.3em] text-xs md:text-sm text-white/70 mb-6">
            {HERO.eyebrow}
          </p>

          <h1 className="text-[42px] sm:text-[56px] md:text-7xl lg:text-8xl font-black tracking-[-0.05em] leading-[0.92] text-white px-2 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
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

          <div className="de-hero-highlights mt-6 md:mt-7 w-full flex flex-col items-center gap-2 md:gap-2.5">
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

            <p className="de-hero-tagline mt-1 text-[8px] sm:text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
              <span className="bg-gradient-to-r from-white/90 via-white/70 to-[#ffb4a8]/90 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]">
                {HERO.highlightTagline}
              </span>
            </p>
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

      <div className="de-scroll-hint absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-8 w-5 justify-center rounded-full border-2 border-white/70">
            <span className="mt-1 h-2 w-1 animate-bounce rounded-full bg-white/80" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
