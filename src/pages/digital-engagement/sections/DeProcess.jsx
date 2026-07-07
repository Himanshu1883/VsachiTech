import { PROCESS_SECTION, PROCESS_STEPS } from "../digitalEngagementData";

const PROCESS_ICONS = {
  research: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 6h16M4 12h10M4 18h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="18" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  create: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 16l4-8 4 5 4-7 4 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M5 18h14M7 15l3-4 3 2 4-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7h3v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function CheckIcon({ color, glow }) {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border bg-white/[0.04]"
      style={{ borderColor: `${color}44`, boxShadow: `0 0 12px ${glow}33` }}
    >
      <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
        <path
          d="M3.5 8.2 6.4 11 12.5 5"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function DeProcess() {
  return (
    <section className="de-process relative overflow-hidden bg-[#060608] py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(56,189,248,0.12), transparent 32%), radial-gradient(circle at 85% 30%, rgba(168,85,247,0.1), transparent 30%), radial-gradient(circle at 50% 90%, rgba(249,115,22,0.08), transparent 35%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <div className="de-process-header mb-14 text-center md:mb-20">
          <h2 className="text-[30px] font-black leading-[1.08] tracking-[-0.03em] text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.1)] sm:text-[40px] md:text-[52px]">
            {PROCESS_SECTION.titleBefore}{" "}
            <span className="de-serif de-process-accent font-medium italic">
              {PROCESS_SECTION.titleAccent}
            </span>{" "}
            {PROCESS_SECTION.titleAfter}
          </h2>

          <p className="de-process-subtitle mx-auto mt-4 max-w-2xl text-[14px] sm:text-[15px] md:text-base">
            {PROCESS_SECTION.subtitle}
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {PROCESS_STEPS.map((step, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={step.number}
                className="de-process-card group relative overflow-hidden rounded-[28px] p-[1px]"
                style={{
                  background: `linear-gradient(135deg, ${step.color}66 0%, rgba(255,255,255,0.1) 50%, ${step.glow}44 100%)`,
                  boxShadow: `0 0 55px ${step.glow}14`,
                }}
              >
                <div className="grid min-h-[320px] overflow-hidden rounded-[27px] bg-[#08080c] lg:min-h-[380px] lg:grid-cols-2">
                  {/* Image column — 50% */}
                  <div
                    className={`de-process-image-col relative min-h-[240px] sm:min-h-[280px] lg:min-h-full ${
                      imageFirst ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.tag}
                      className="de-process-img absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div
                      className={`absolute inset-0 ${
                        imageFirst
                          ? "bg-gradient-to-r from-black/5 via-black/20 to-[#08080c]/95 lg:to-[#08080c]"
                          : "bg-gradient-to-l from-black/5 via-black/20 to-[#08080c]/95 lg:to-[#08080c]"
                      }`}
                    />
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${step.glow}28, transparent 70%)`,
                      }}
                    />
                  </div>

                  {/* Text column — 50% */}
                  <div
                    className={`de-process-text-col relative flex items-center border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 ${
                      imageFirst
                        ? "border-t lg:border-l lg:border-t-0"
                        : "border-t lg:border-r lg:border-t-0"
                    } ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
                    style={{
                      background: `linear-gradient(160deg, ${step.glow}10 0%, #08080c 38%, #0a0a10 100%)`,
                      boxShadow: `inset 0 0 40px ${step.glow}08`,
                    }}
                  >
                    <div className="relative w-full max-w-lg">
                      <div className="mb-6 flex items-center gap-3">
                        <div
                          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-white/[0.05]"
                          style={{
                            color: step.color,
                            borderColor: `${step.color}55`,
                            boxShadow: `0 0 24px ${step.glow}40`,
                          }}
                        >
                          {PROCESS_ICONS[step.icon]}
                        </div>
                        <span
                          className="de-process-tag rounded-full border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em]"
                          style={{
                            color: step.color,
                            borderColor: `${step.color}55`,
                            backgroundColor: `${step.glow}16`,
                            textShadow: `0 0 14px ${step.glow}88`,
                            boxShadow: `0 0 20px ${step.glow}22`,
                          }}
                        >
                          {step.tag}
                        </span>
                      </div>

                      <h3
                        className="de-process-headline mb-4 text-[22px] font-bold leading-[1.15] text-white sm:text-[26px] md:text-[30px]"
                        style={{
                          textShadow:
                            "0 0 18px rgba(255,255,255,0.28), 0 0 36px rgba(255,255,255,0.08)",
                        }}
                      >
                        {step.headline}
                      </h3>

                      <p
                        className="de-process-desc mb-6 text-[13px] leading-[1.85] sm:text-[14px] md:text-[15px]"
                        style={{
                          color: "rgba(255,255,255,0.9)",
                          textShadow: `0 0 12px ${step.glow}33, 0 0 8px rgba(255,255,255,0.15)`,
                        }}
                      >
                        {step.text}
                      </p>

                      <ul className="mb-8 space-y-3">
                        {step.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-center gap-3 text-[12px] font-medium sm:text-[13px]"
                            style={{
                              color: "rgba(255,255,255,0.88)",
                              textShadow: "0 0 10px rgba(255,255,255,0.12)",
                            }}
                          >
                            <CheckIcon color={step.color} glow={step.glow} />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        className="de-process-cta group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full p-[1px] transition-transform duration-300 hover:scale-[1.04]"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}88, rgba(255,255,255,0.2), ${step.glow}66)`,
                        }}
                      >
                        <span
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0d0d12]/80 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:text-[13px]"
                          style={{
                            boxShadow: `0 0 28px ${step.glow}28`,
                            textShadow: "0 0 12px rgba(255,255,255,0.35)",
                          }}
                        >
                          {step.cta}
                          <span aria-hidden="true" className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                            ↗
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .de-process-accent {
          background: linear-gradient(90deg, #c084fc 0%, #f472b6 55%, #fb923c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 20px rgba(192, 132, 252, 0.28));
        }

        .de-process-subtitle {
          background: linear-gradient(90deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.5) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 12px rgba(255,255,255,0.1));
        }

        .de-process-headline,
        .de-process-desc,
        .de-process-tag {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );
}
