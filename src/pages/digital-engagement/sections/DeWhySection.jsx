import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHY_BLOCKS, WHY_SECTION } from "../digitalEngagementData";

gsap.registerPlugin(ScrollTrigger);

const STEP_ICONS = {
  story: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M7 4h10a2 2 0 0 1 2 2v14l-4-2.5L11 20l-4-2.5V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 8h6M9 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  content: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="m4 12 8-7 8 7v7a1 1 0 0 1-1 1h-4v-5H9v5H5a1 1 0 0 1-1-1v-7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  brand: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M8 7h8M8 12h8M8 17h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  growth: (
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

/**
 * Converts a set of anchor points into a single continuous cubic-bezier
 * path using a Catmull-Rom spline. Unlike computing each zigzag segment's
 * control points in isolation, this keeps the tangent continuous across
 * every joint, so the line reads as one smooth stroke instead of a chain
 * of independently-bent segments.
 */
function catmullRomPath(points) {
  if (points.length < 2) return "";
  if (points.length === 2) {
    const [p0, p1] = points;
    return `M ${p0.x} ${p0.y} L ${p1.x} ${p1.y}`;
  }

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }

  return d;
}

function buildConnectorPath(cards, container) {
  if (!cards.length || !container) return "";

  const containerRect = container.getBoundingClientRect();

  const anchors = Array.from(cards).map((card, index) => {
    const rect = card.getBoundingClientRect();
    const y = rect.top + rect.height / 2 - containerRect.top;

    const x =
      index % 2 === 0
        ? rect.right - containerRect.left + 14
        : rect.left - containerRect.left - 14;

    return { x, y };
  });

  return catmullRomPath(anchors);
}

export default function DeWhySection() {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);
  const pathRef = useRef(null);
  const haloPathRef = useRef(null);
  const svgRef = useRef(null);
  const headRef = useRef(null);
  const headGlowRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stepsWrap = stepsRef.current;
    const path = pathRef.current;
    const halo = haloPathRef.current;
    const svg = svgRef.current;
    const head = headRef.current;
    const headGlow = headGlowRef.current;
    if (!section || !stepsWrap || !path || !halo || !svg) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let scrollTween = null;
    let resizeTimer = null;
    let resizeObserver = null;
    let pathLength = 0;

    const setHeadOpacity = (progress) => {
      if (!head || !headGlow) return;
      const fadeZone = 0.035;
      let opacity = 1;
      if (progress < fadeZone) opacity = progress / fadeZone;
      else if (progress > 1 - fadeZone) opacity = (1 - progress) / fadeZone;
      opacity = Math.max(0, Math.min(1, opacity));
      head.style.opacity = String(opacity);
      headGlow.style.opacity = String(opacity * 0.9);
    };

    const updateHeadPosition = (progress) => {
      if (!head || !headGlow || !pathLength) return;
      const point = path.getPointAtLength(progress * pathLength);
      head.setAttribute("cx", String(point.x));
      head.setAttribute("cy", String(point.y));
      headGlow.setAttribute("cx", String(point.x));
      headGlow.setAttribute("cy", String(point.y));
      setHeadOpacity(progress);
    };

    const applyProgress = (progress) => {
      const offset = pathLength * (1 - progress);
      path.style.strokeDashoffset = String(offset);
      halo.style.strokeDashoffset = String(offset);
      updateHeadPosition(progress);
    };

    const updatePath = () => {
      const cards = stepsWrap.querySelectorAll(".de-why-step");
      if (!cards.length) return;

      const width = stepsWrap.offsetWidth;
      const height = stepsWrap.offsetHeight;
      if (!width || !height) return;

      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.setAttribute("width", String(width));
      svg.setAttribute("height", String(height));

      const nextPath = buildConnectorPath(cards, stepsWrap);
      path.setAttribute("d", nextPath);
      halo.setAttribute("d", nextPath);

      pathLength = path.getTotalLength() || 1;
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;
      halo.style.strokeDasharray = `${pathLength}`;
      halo.style.strokeDashoffset = `${pathLength}`;

      scrollTween?.scrollTrigger?.kill();
      scrollTween?.kill();

      if (prefersReducedMotion) {
        path.style.strokeDashoffset = "0";
        halo.style.strokeDashoffset = "0";
        if (head) head.style.opacity = "0";
        if (headGlow) headGlow.style.opacity = "0";
        return;
      }

      const progressProxy = { value: 0 };
      scrollTween = gsap.to(progressProxy, {
        value: 1,
        ease: "none",
        scrollTrigger: {
          trigger: stepsWrap,
          start: "top 72%",
          end: "bottom 88%",
          scrub: 0.9,
          invalidateOnRefresh: true,
        },
        onUpdate: () => applyProgress(progressProxy.value),
      });
    };

    const scheduleUpdate = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(updatePath);
      });
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        scheduleUpdate();
        ScrollTrigger.refresh();
      }, 100);
    };

    scheduleUpdate();

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => scheduleUpdate());
      resizeObserver.observe(stepsWrap);
      stepsWrap.querySelectorAll(".de-why-step").forEach((card) => {
        resizeObserver.observe(card);
      });
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
      resizeObserver?.disconnect();
      scrollTween?.scrollTrigger?.kill();
      scrollTween?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="de-why relative overflow-hidden bg-[#07070b] py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 14%, rgba(56,189,248,0.18), transparent 28%), radial-gradient(circle at 88% 18%, rgba(192,38,211,0.16), transparent 30%), radial-gradient(circle at 18% 88%, rgba(249,115,22,0.14), transparent 28%), radial-gradient(circle at 82% 84%, rgba(34,197,94,0.14), transparent 30%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <div className="de-why-header mb-16 md:mb-20 text-center">
          <h2 className="de-why-title text-[34px] sm:text-[44px] md:text-[56px] font-black leading-[1.02] tracking-[-0.04em] text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.12)]">
            <span className="block">{WHY_SECTION.titleLine1}</span>
            <span className="de-why-title-accent mt-1 block text-[38px] sm:text-[48px] md:text-[60px] font-bold">
              {WHY_SECTION.titleLine2}
            </span>
          </h2>

          <p className="de-why-subtitle mx-auto mt-5 max-w-2xl text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
            {WHY_SECTION.subtitle}
          </p>
        </div>

        <div ref={stepsRef} className="de-why-steps relative min-h-[200px]">
          <svg
            ref={svgRef}
            className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="deWhyPathGradient"
                gradientUnits="objectBoundingBox"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#c026d3" />
                <stop offset="35%" stopColor="#38bdf8" />
                <stop offset="68%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>

              <filter id="deWhyPathGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="3.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="deWhyPathHalo" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="9" />
              </filter>

              <filter id="deWhyHeadGlow" x="-200%" y="-200%" width="500%" height="500%">
                <feGaussianBlur stdDeviation="6" />
              </filter>

              <radialGradient id="deWhyHeadFill" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Soft wide halo — sits underneath, gives the line a glowing-beam feel */}
            <path
              ref={haloPathRef}
              className="de-why-path-halo"
              fill="none"
              stroke="url(#deWhyPathGradient)"
              strokeWidth="9"
              strokeLinecap="round"
              opacity="0.45"
              filter="url(#deWhyPathHalo)"
            />

            {/* Crisp core line */}
            <path
              ref={pathRef}
              className="de-why-path"
              fill="none"
              stroke="url(#deWhyPathGradient)"
              strokeWidth="2.25"
              strokeLinecap="round"
              filter="url(#deWhyPathGlow)"
            />

            {/* Traveling light — rides the tip of the line as it draws in on scroll */}
            <circle
              ref={headGlowRef}
              className="de-why-head-glow"
              r="9"
              fill="#ffffff"
              filter="url(#deWhyHeadGlow)"
              opacity="0"
            />
            <circle
              ref={headRef}
              className="de-why-head"
              r="3.4"
              fill="url(#deWhyHeadFill)"
              opacity="0"
            />
          </svg>

          <div className="relative z-10 space-y-10 md:space-y-14 lg:space-y-16">
            {WHY_BLOCKS.map((block, index) => (
              <div
                key={block.titleHighlight}
                className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <article
                  className="de-why-step de-why-block relative w-full max-w-[92%] overflow-hidden rounded-[22px] p-[1px] sm:max-w-[420px]"
                  style={{
                    background: `linear-gradient(135deg, ${block.color}66 0%, rgba(255,255,255,0.12) 50%, ${block.glow}44 100%)`,
                  }}
                >
                  <div
                    className="relative rounded-[21px] border border-white/15 bg-[#0d0d12]/55 p-5 backdrop-blur-xl sm:p-6 md:p-7"
                    style={{
                      boxShadow: `0 0 40px ${block.glow}22, inset 0 1px 0 rgba(255,255,255,0.14), inset 0 0 24px ${block.glow}08`,
                    }}
                  >
                    <div
                      className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white/[0.05]"
                      style={{
                        color: block.color,
                        borderColor: `${block.color}55`,
                        boxShadow: `0 0 22px ${block.glow}40`,
                      }}
                    >
                      {STEP_ICONS[block.icon]}
                    </div>

                    <h3 className="de-why-card-title mb-3 text-[18px] font-bold uppercase leading-tight tracking-[0.14em] sm:text-[20px]">
                      <span
                        className="de-why-card-title-main text-white"
                        style={{
                          textShadow:
                            "0 0 16px rgba(255,255,255,0.45), 0 0 32px rgba(255,255,255,0.12)",
                        }}
                      >
                        {block.titleBefore}
                      </span>{" "}
                      <span
                        className="de-why-card-highlight"
                        style={{
                          color: block.color,
                          textShadow: `0 0 20px ${block.glow}, 0 0 40px ${block.glow}66`,
                        }}
                      >
                        {block.titleHighlight}
                      </span>
                    </h3>

                    <p
                      className="de-why-card-text text-[12px] font-medium leading-[1.85] sm:text-[13px] md:text-[14px]"
                      style={{
                        color: "rgba(255,255,255,0.94)",
                        textShadow: `0 0 14px ${block.glow}44, 0 0 10px rgba(255,255,255,0.22), 0 1px 1px rgba(0,0,0,0.35)`,
                      }}
                    >
                      {block.text}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .de-why-title-accent {
          color: #e44f39;
          text-shadow: 0 0 24px rgba(228, 79, 57, 0.35);
        }

        .de-why-subtitle {
          background: linear-gradient(90deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.55) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: none;
          filter: drop-shadow(0 0 14px rgba(255,255,255,0.12));
        }

        .de-why-card-title-main,
        .de-why-card-highlight,
        .de-why-card-text {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .de-why-card-text {
          letter-spacing: 0.02em;
        }

        .de-why-path,
        .de-why-path-halo {
          will-change: stroke-dashoffset;
        }

        .de-why-head,
        .de-why-head-glow {
          will-change: opacity, cx, cy;
        }

        .de-why-head-glow {
          animation: deWhyHeadPulse 1.8s ease-in-out infinite;
        }

        @keyframes deWhyHeadPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }

        @media (prefers-reduced-motion: reduce) {
          .de-why-head-glow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}