import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS, STATS_SECTION } from "../digitalEngagementData";

gsap.registerPlugin(ScrollTrigger);

function formatNumber(current, target) {
  const decimals = (String(target).split(".")[1] || "").length;
  if (decimals > 0) return current.toFixed(decimals);
  return Math.round(current).toLocaleString("en-US");
}

export default function DeStats() {
  const sectionRef = useRef(null);
  const headerLineRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        section.querySelectorAll(".de-stat-number").forEach((numEl) => {
          const numeric = numEl.dataset.numeric;
          const suffix = numEl.dataset.suffix || "";
          if (numeric) numEl.textContent = formatNumber(parseFloat(numeric), numeric) + suffix;
        });
        section.querySelectorAll(".de-stat-line").forEach((line) => {
          line.style.transform = "scaleX(1)";
        });
        if (headerLineRef.current) headerLineRef.current.style.transform = "scaleX(1)";
        return;
      }

      if (headerLineRef.current) {
        gsap.fromTo(
          headerLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power3.out",
            transformOrigin: "left center",
            scrollTrigger: { trigger: section, start: "top 78%" },
          },
        );
      }

      const cards = section.querySelectorAll(".de-stat-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 87%" },
          },
        );

        const numEl = card.querySelector(".de-stat-number");
        const line = card.querySelector(".de-stat-line");
        const numeric = numEl?.dataset.numeric;
        const suffix = numEl?.dataset.suffix || "";

        if (numEl && numeric) {
          const target = parseFloat(numeric);
          const counter = { val: 0 };
          gsap.to(counter, {
            val: target,
            duration: 1.7,
            delay: i * 0.1 + 0.15,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 87%" },
            onUpdate: () => {
              numEl.textContent = formatNumber(counter.val, numeric) + suffix;
            },
          });
        }

        if (line) {
          gsap.fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.9,
              delay: i * 0.1 + 0.05,
              ease: "power3.out",
              transformOrigin: "left center",
              scrollTrigger: { trigger: card, start: "top 87%" },
            },
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="de-stats relative bg-[#f7f7f5] py-28 px-6 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 20%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 20%, black 40%, transparent 85%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(228,79,57,0.08), transparent 32%), radial-gradient(circle at 85% 8%, rgba(15,23,42,0.05), transparent 30%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="de-stats-header text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-[#e44f39] mb-5">
            {STATS_SECTION.eyebrow}
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] text-[#0f172a]">
            {STATS_SECTION.titleBefore}
            <br />
            <span className="font-bold text-[#e44f39]">{STATS_SECTION.titleHighlight}</span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
            {STATS_SECTION.subtitle}
          </p>

          <div className="mt-10 flex justify-center">
            <span
              ref={headerLineRef}
              className="block h-[2px] w-24 bg-[#e44f39] origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STATS.map((item, i) => (
            <article
              key={item.title}
              className="de-stat-card group relative bg-white rounded-[35px] p-10 shadow-sm border border-gray-100 hover:-translate-y-2 hover:border-[#e44f39]/30 hover:shadow-2xl transition-[transform,box-shadow,border-color] duration-500"
              style={{ opacity: 0 }}
            >
              <div
                className="pointer-events-none absolute -top-6 -left-6 h-40 w-40 rounded-full bg-[#e44f39]/[0.07] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              <span className="relative z-10 block font-mono text-[11px] tracking-[0.25em] text-gray-400 mb-6">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3
                className="de-stat-number relative z-10 text-5xl font-black text-[#e44f39] mb-3 tabular-nums transition-transform duration-500 group-hover:scale-[1.04] origin-left"
                data-numeric={item.numeric ?? ""}
                data-suffix={item.suffix}
              >
                {item.value}
              </h3>

              <span
                className="de-stat-line relative z-10 block h-[2px] w-14 bg-[#e44f39]/70 origin-left mb-6"
                style={{ transform: "scaleX(0)" }}
              />

              <h4 className="relative z-10 text-2xl font-bold text-[#111] mb-4">
                {item.title}
              </h4>

              <p className="relative z-10 text-gray-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .de-stat-card {
          will-change: transform, opacity;
        }

        .de-stat-line,
        .de-stats-header span {
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .de-stat-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
