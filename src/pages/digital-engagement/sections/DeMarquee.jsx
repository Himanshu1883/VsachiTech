import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from "../digitalEngagementData";

const MARQUEE_COLORS = [
  "text-[#e44f39] hover:text-[#d9422d]",
  "text-gray-500 hover:text-gray-600",
  "text-[#0c121c] hover:text-black",
];

function MarqueeRow({ items, direction = "forward", speed = 40 }) {
  const doubled = [...items, ...items];

  return (
    <div className="de-marquee group overflow-hidden w-full">
      <div
        className="de-marquee-track inline-flex items-center gap-12 md:gap-[70px] min-w-max will-change-transform group-hover:[animation-play-state:paused]"
        data-direction={direction}
        style={{ "--marquee-duration": `${speed}s` }}
      >
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`de-marquee-item inline-block font-black uppercase tracking-[-0.04em] leading-none text-[clamp(42px,7vw,110px)] transition-[color,transform] duration-300 hover:scale-[1.045] ${
              MARQUEE_COLORS[index % MARQUEE_COLORS.length]
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function DeMarquee() {
  return (
    <section className="de-marquee-section relative overflow-hidden bg-[#f4f3f1] py-10 md:py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(12,18,28,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-5">
        <MarqueeRow items={MARQUEE_ROW_1} direction="forward" speed={44} />
        <MarqueeRow items={MARQUEE_ROW_2} direction="reverse" speed={34} />
      </div>

      <style>{`
        .de-marquee {
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
        }

        .de-marquee-track[data-direction="forward"] {
          animation: de-marquee-forward var(--marquee-duration, 40s) linear infinite;
        }

        .de-marquee-track[data-direction="reverse"] {
          animation: de-marquee-reverse var(--marquee-duration, 34s) linear infinite;
        }

        @keyframes de-marquee-forward {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes de-marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .de-marquee-track[data-direction="forward"],
          .de-marquee-track[data-direction="reverse"] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}