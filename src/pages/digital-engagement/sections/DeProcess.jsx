import { useState } from "react";
import Logo from "../../../components/ui/logo";
import { PROCESS_SECTION, PROCESS_STEPS } from "../digitalEngagementData";

const SMOOTH_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const DURATION = "1.25s";

function formatStepNumber(number) {
  return `.${number.replace(/^0/, "")}`;
}

function ProcessCard({ step, isActive, onActivate }) {
  const stepLabel = formatStepNumber(step.number);

  return (
    <article
      className={`de-process-card ${isActive ? "de-process-card--active" : ""} flex cursor-pointer flex-col overflow-hidden rounded-[28px] bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:p-7 lg:h-[500px] lg:min-w-0`}
      onMouseEnter={onActivate}
    >
      <h3 className="de-process-card-title shrink-0 text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0c121c] sm:text-[24px]">
        {step.title}
      </h3>

      <div className="relative mt-4 min-h-0 flex-1">
        <p className="de-process-card-text absolute inset-x-0 top-0 line-clamp-3 text-[14px] leading-relaxed text-[#4b5563] sm:text-[15px]">
          {step.text}
        </p>

        <div className="de-process-card-footer absolute inset-x-0 bottom-0 h-[220px]">
          <span className="de-process-card-number absolute bottom-0 right-0 text-[56px] font-bold leading-none tracking-[-0.05em] text-[#0c121c] sm:text-[64px]">
            {stepLabel}
          </span>

          <div className="de-process-card-media absolute inset-0 overflow-hidden rounded-[22px] bg-[#111111]">
            <img
              src={step.image}
              alt={step.title}
              className="de-process-card-image h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
            <span className="de-process-card-number-overlay absolute bottom-4 right-4 text-[56px] font-bold leading-none tracking-[-0.05em] text-white sm:text-[64px]">
              {stepLabel}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function DeProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="de-process relative overflow-hidden bg-[#eeedeb] py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(12,18,28,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[min(100%,1480px)] px-3 sm:px-4 md:px-5">
        <div className="de-process-header mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <div>
            <h2 className="text-[34px] font-bold leading-[1.02] tracking-[-0.04em] text-[#0c121c] sm:text-[42px] md:text-[48px] lg:text-[56px]">
              <span className="block">{PROCESS_SECTION.titleBefore}</span>
              <span className="mt-1 flex flex-wrap items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white shadow-sm sm:h-12 sm:w-12">
                  <Logo className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>
                <span>{PROCESS_SECTION.titleAccent}</span>
              </span>
              <span className="de-serif mt-1 block font-medium italic text-[#0c121c]">
                {PROCESS_SECTION.titleLineAccent}
              </span>
            </h2>
          </div>

          <p className="de-process-subtitle max-w-xl text-[15px] leading-relaxed text-[#4b5563] sm:text-[16px] lg:pt-2">
            {PROCESS_SECTION.subtitle}
          </p>
        </div>

        <div
          className="de-process-track grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:flex lg:items-stretch"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {PROCESS_STEPS.map((step, index) => (
            <ProcessCard
              key={step.number}
              step={step}
              isActive={activeIndex === index}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .de-process-subtitle {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .de-process-card-title {
          transition: transform ${DURATION} ${SMOOTH_EASE};
        }

        .de-process-card-text {
          opacity: 0;
          transform: translateY(12px);
          transition:
            opacity 1s ${SMOOTH_EASE},
            transform ${DURATION} ${SMOOTH_EASE};
        }

        .de-process-card-number {
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity 0.9s ${SMOOTH_EASE},
            transform 1.1s ${SMOOTH_EASE};
        }

        .de-process-card-media {
          opacity: 0;
          transform: scale(0.98) translateY(10px);
          transform-origin: center bottom;
          pointer-events: none;
          transition:
            opacity 1.05s ${SMOOTH_EASE},
            transform ${DURATION} ${SMOOTH_EASE};
        }

        .de-process-card-image {
          transition: transform 1.4s ${SMOOTH_EASE};
        }

        .de-process-card-number-overlay {
          opacity: 0;
          transform: translateY(12px);
          transition:
            opacity 0.95s ${SMOOTH_EASE},
            transform 1.1s ${SMOOTH_EASE};
        }

        @media (max-width: 1023px) {
          .de-process-card {
            cursor: default;
            min-height: 430px;
          }

          .de-process-card-text {
            opacity: 1;
            transform: translateY(0);
          }

          .de-process-card-number {
            opacity: 0;
            transform: translateY(8px);
          }

          .de-process-card-media {
            opacity: 1;
            transform: none;
            pointer-events: auto;
          }

          .de-process-card-number-overlay {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 1024px) {
          .de-process-card {
            flex: 1 1 0%;
            height: 500px;
            transition: flex ${DURATION} ${SMOOTH_EASE};
            will-change: flex;
          }

          .de-process-card--active {
            flex: 1.55 1 0%;
          }

          .de-process-card--active .de-process-card-title {
            transform: translateY(-2px);
          }

          .de-process-card--active .de-process-card-text {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.1s;
          }

          .de-process-card--active .de-process-card-number {
            opacity: 0;
            transform: translateY(14px);
            transition-delay: 0s;
          }

          .de-process-card--active .de-process-card-media {
            opacity: 1;
            transform: scale(1) translateY(0);
            pointer-events: auto;
            transition-delay: 0.16s;
          }

          .de-process-card--active .de-process-card-image {
            transform: scale(1.02);
          }

          .de-process-card--active .de-process-card-number-overlay {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.26s;
          }

          .de-process-card:not(.de-process-card--active) .de-process-card-text,
          .de-process-card:not(.de-process-card--active) .de-process-card-media,
          .de-process-card:not(.de-process-card--active) .de-process-card-number-overlay {
            transition-delay: 0s;
          }
        }
      `}</style>
    </section>
  );
}
