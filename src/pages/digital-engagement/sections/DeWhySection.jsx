import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { WHY_BLOCKS, WHY_SECTION } from "../digitalEngagementData";
import { portfolioImageSrc } from "../../../data/socialMediaClients";

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

/** Short category labels for the side annotations, keyed off the existing icon names. */
const STEP_LABELS = {
  story: "Storytelling",
  content: "Content Systems",
  brand: "Brand Identity",
  growth: "Growth Engine",
};

/** Same four hues used by the scroll-synced connector line, reused for the edge-rail dots. */
const RAIL_DOT_COLORS = ["#c026d3", "#38bdf8", "#fb923c", "#4ade80"];

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

/**
 * Builds the connector path through each card, then — if a CTA element is
 * given — extends it two anchors further: one pulling the line toward the
 * button's horizontal center, and a final one at the button's top edge.
 * Sharing the same x on those last two points is what makes the line
 * straighten out vertically right before it "plugs into" the button,
 * instead of arriving at an angle.
 */
function buildConnectorPath(cards, container, ctaEl) {
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

  if (ctaEl) {
    const ctaRect = ctaEl.getBoundingClientRect();
    const ctaX = ctaRect.left + ctaRect.width / 2 - containerRect.left;
    const ctaY = ctaRect.top - containerRect.top - 6;
    const last = anchors[anchors.length - 1];

    if (last) {
      const midY = last.y + (ctaY - last.y) * 0.55;
      anchors.push({ x: ctaX, y: midY });
      anchors.push({ x: ctaX, y: ctaY });
    }
  }

  return catmullRomPath(anchors);
}

/**
 * Fills the empty side of each zigzag row with a large outlined step number
 * (in the block's own accent color) and a short category label — so the
 * row reads as a considered two-sided layout instead of a card with dead
 * space beside it. Desktop/tablet only; mobile cards already run ~92% wide.
 */
function SideAnnotation({ index, block, side }) {
  const label = STEP_LABELS[block.icon] ?? block.icon;
  const isRightSide = side === "right";

  return (
    <div
      className={`relative hidden md:flex flex-1 min-w-0 flex-col justify-center ${
        isRightSide ? "items-start pl-2 lg:pl-6" : "items-end pr-2 lg:pr-6 text-right"
      }`}
      aria-hidden="true"
    >
      <span
        className="de-why-ghost-number select-none font-black leading-none"
        style={{
          fontSize: "clamp(72px, 9vw, 180px)",
          WebkitTextStroke: `1.5px ${block.color}66`,
          color: "transparent",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        className={`mt-1 flex items-center gap-3 ${isRightSide ? "" : "flex-row-reverse"}`}
      >
        <span
          className="h-px w-10 lg:w-14"
          style={{ backgroundColor: block.color, opacity: 0.5 }}
        />
        <span
          className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.3em]"
          style={{ color: block.color }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

/**
 * Decorative vertical rail for the outer section margins (visible only on
 * very wide viewports where real gutter exists outside the max-w-6xl
 * container). Reuses the connector line's four accent colors for the dots
 * so the margins read as an extension of the center motif.
 */
function SideRail({ side, label }) {
  const isLeft = side === "left";
  const dotTopPositions = [12, 32, 68, 88];

  return (
    <div
      className={`de-why-rail pointer-events-none absolute inset-y-0 z-10 hidden xl:block ${
        isLeft ? "left-6 2xl:left-12" : "right-6 2xl:right-12"
      } w-px`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-y-16 left-1/2 w-px -translate-x-1/2"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.16) 12%, rgba(255,255,255,0.16) 88%, transparent)",
        }}
      />

      {dotTopPositions.map((top, i) => (
        <span
          key={top}
          className="de-why-rail-dot absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
          style={{
            top: `${top}%`,
            backgroundColor: RAIL_DOT_COLORS[i % RAIL_DOT_COLORS.length],
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}

      <span
        className="absolute left-1/2 top-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.4em] text-white/30"
        style={{
          writingMode: "vertical-rl",
          transform: isLeft
            ? "translate(-50%, -50%) rotate(180deg)"
            : "translate(-50%, -50%)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function DeWhySection() {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);
  const pathRef = useRef(null);
  const haloPathRef = useRef(null);
  const svgRef = useRef(null);
  const headRef = useRef(null);
  const headGlowRef = useRef(null);
  const ctaRef = useRef(null);

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
      const fadeZone = 0.03;
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

      const nextPath = buildConnectorPath(cards, stepsWrap, ctaRef.current);
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
      if (ctaRef.current) resizeObserver.observe(ctaRef.current);
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
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          src={portfolioImageSrc(WHY_SECTION.backgroundVideo)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-black/75"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/55 via-black/35 to-black/65"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-[3] opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 14%, rgba(56,189,248,0.18), transparent 28%), radial-gradient(circle at 88% 18%, rgba(192,38,211,0.16), transparent 30%), radial-gradient(circle at 18% 88%, rgba(249,115,22,0.14), transparent 28%), radial-gradient(circle at 82% 84%, rgba(34,197,94,0.14), transparent 30%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-[3] opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
        }}
      />

      <SideRail side="left" label="Digital Engagement Engine" />
      <SideRail side="right" label={`${WHY_BLOCKS.length} Core Pillars`} />

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
            {WHY_BLOCKS.map((block, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={block.titleHighlight}
                  className="flex items-center md:gap-8 lg:gap-14"
                >
                  {!isEven && (
                    <SideAnnotation index={index} block={block} side="left" />
                  )}

                  <div
                    className={`w-full max-w-[92%] sm:max-w-[420px] md:w-auto md:max-w-[440px] md:shrink-0 ${
                      isEven ? "mr-auto md:mr-0" : "ml-auto md:ml-0"
                    }`}
                  >
                    <article
                      className="de-why-step de-why-block relative w-full overflow-hidden rounded-[22px] p-[1px]"
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

                  {isEven && (
                    <SideAnnotation index={index} block={block} side="right" />
                  )}
                </div>
              );
            })}
          </div>

          {/* The connector line's final destination — swap the route to your real CTA target */}
          <div className="relative z-10 mt-16 flex justify-center md:mt-20">
            <Link
              ref={ctaRef}
              to="/contact"
              className="de-why-cta group inline-flex items-center gap-2.5 rounded-full border border-[#4ade80]/40 bg-[#0d0d12] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#4ade80]/70"
            >
              Get your free draft
              <FiArrowRight className="h-4 w-4 -rotate-45 text-[#4ade80] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
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

        .de-why-rail-dot {
          animation: deWhyRailPulse 3.2s ease-in-out infinite;
        }

        .de-why-cta {
          box-shadow: 0 0 26px rgba(74, 222, 128, 0.22), inset 0 1px 0 rgba(255,255,255,0.06);
          animation: deWhyCtaPulse 3.6s ease-in-out infinite;
        }

        @keyframes deWhyHeadPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }

        @keyframes deWhyRailPulse {
          0%, 100% { opacity: 0.35; transform: translate(-50%, 0) scale(1); }
          50% { opacity: 0.9; transform: translate(-50%, 0) scale(1.5); }
        }

        @keyframes deWhyCtaPulse {
          0%, 100% { box-shadow: 0 0 26px rgba(74, 222, 128, 0.22), inset 0 1px 0 rgba(255,255,255,0.06); }
          50% { box-shadow: 0 0 38px rgba(74, 222, 128, 0.4), inset 0 1px 0 rgba(255,255,255,0.06); }
        }

        @media (prefers-reduced-motion: reduce) {
          .de-why-head-glow,
          .de-why-rail-dot,
          .de-why-cta {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}