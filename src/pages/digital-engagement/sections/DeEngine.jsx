import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../../../components/ui/logo";
import { ENGINE_ITEMS, ENGINE_SECTION, BRAND } from "../digitalEngagementData";

const ORBIT_COUNT = ENGINE_ITEMS.length;
const ORBIT_DURATION = 88;
const ORBIT_RADIUS_RATIO = 0.37;

/** Slot angle in degrees — evenly spaced, first card at 12 o'clock. */
function getOrbitAngle(index, total = ORBIT_COUNT) {
  return -90 + (360 / total) * index;
}

function getOrbitRadius(stageSize) {
  return stageSize * ORBIT_RADIUS_RATIO;
}

const ENGINE_ICONS = {
  campaign: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M7 4h3l2 3h5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="9.5" r="1" fill="currentColor" />
    </svg>
  ),
  story: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M5 5h14v14H5V5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 9h8M8 12h6M8 15h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  systems: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M5 18h14M7 14l3-4 3 2 4-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect
        x="4"
        y="6"
        width="13"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m17 10 4-2v8l-4-2v-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  direction: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 8v4l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function OrbitCard({ item }) {
  return (
    <article
      className="de-orbit-card relative w-[clamp(128px,17vw,168px)] rounded-2xl p-[1px]"
      style={{
        boxShadow: `0 0 28px ${item.glow}33, 0 18px 40px rgba(0,0,0,0.45)`,
        background: `linear-gradient(135deg, ${item.color}88, ${item.glow}22, rgba(255,255,255,0.08))`,
      }}
    >
      <div
        className="relative overflow-hidden rounded-[15px] bg-[#0a0a0f]/88 px-3.5 py-4 backdrop-blur-xl"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      >
        <div
          className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10"
          style={{
            color: item.color,
            boxShadow: `0 0 18px ${item.glow}55`,
            background: `linear-gradient(135deg, ${item.glow}22, transparent)`,
          }}
        >
          {ENGINE_ICONS[item.icon]}
        </div>

        <p className="text-left text-[11px] leading-[1.45] text-white/75 sm:text-[12px]">
          <span className="block">{item.textBefore}</span>
          <span
            className="de-orbit-highlight mt-0.5 block font-serif text-[13px] italic sm:text-[14px]"
            style={{
              color: item.color,
              textShadow: `0 0 22px ${item.glow}88`,
            }}
          >
            {item.textHighlight}
          </span>
        </p>
      </div>
    </article>
  );
}

export default function DeEngine() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const guideRef = useRef(null);
  const orbitRef = useRef({ progress: 0 });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const guide = guideRef.current;
    if (!section || !stage || !guide) return;

    const nodes = gsap.utils.toArray(section.querySelectorAll(".de-orbit-node"));
    if (!nodes.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const baseAngles = nodes.map((_, index) => (getOrbitAngle(index) * Math.PI) / 180);

    const setters = nodes.map((node) => ({
      x: gsap.quickSetter(node, "x", "px"),
      y: gsap.quickSetter(node, "y", "px"),
    }));

    gsap.set(nodes, {
      left: 0,
      top: 0,
      xPercent: -50,
      yPercent: -50,
      rotation: 0,
      force3D: true,
      transformOrigin: "50% 50%",
    });

    const layoutGuide = () => {
      const radius = getOrbitRadius(stage.offsetWidth);
      guide.style.width = `${radius * 2}px`;
      guide.style.height = `${radius * 2}px`;
      return radius;
    };

    let radius = layoutGuide();

    const updateOrbit = (progressRad) => {
      nodes.forEach((_, index) => {
        const angle = baseAngles[index] + progressRad;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        setters[index].x(x);
        setters[index].y(y);
      });
    };

    updateOrbit(0);

    if (prefersReducedMotion) return;

    gsap.config({ autoRound: false });

    const orbitTween = gsap.to(orbitRef.current, {
      progress: Math.PI * 2,
      duration: ORBIT_DURATION,
      ease: "none",
      repeat: -1,
      onUpdate: () => updateOrbit(orbitRef.current.progress),
    });

    let resizeRaf = null;
    const resizeObserver = new ResizeObserver(() => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        radius = layoutGuide();
        updateOrbit(orbitRef.current.progress);
      });
    });
    resizeObserver.observe(stage);

    return () => {
      orbitTween.kill();
      resizeObserver.disconnect();
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      gsap.config({ autoRound: true });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="de-engine relative overflow-hidden min-h-screen bg-[#07070b]"
    >
      <div className="de-engine-bg pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(168,85,247,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_70%,rgba(228,79,57,0.05),transparent_45%)]" />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6 sm:py-24">
        <header className="de-engine-header mb-10 max-w-3xl text-center sm:mb-14">
          <h2 className="font-black leading-[1.02] tracking-[-0.04em] text-white text-[34px] sm:text-[48px] md:text-[58px]">
            <span className="de-engine-title-line">{ENGINE_SECTION.titleBefore} </span>
            <span
              className="de-engine-title-line font-bold"
              style={{
                color: BRAND,
                textShadow: "0 0 28px rgba(228, 79, 57, 0.35)",
              }}
            >
              {ENGINE_SECTION.titleHighlight}
            </span>
          </h2>
          <p className="de-engine-subtitle mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-white/70 sm:text-[16px]">
            {ENGINE_SECTION.subtitle}
          </p>
        </header>

        <div className="de-engine-orbit relative mx-auto w-full max-w-[680px] px-2 sm:max-w-[760px]">
          <div
            ref={stageRef}
            className="de-engine-orbit-stage relative mx-auto aspect-square w-full"
          >
            <div
              ref={guideRef}
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.1]"
              style={{
                boxShadow: "inset 0 0 60px rgba(255,255,255,0.03)",
              }}
            />

            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div
                className="de-engine-core absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-[130px] sm:w-[130px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(168,85,247,0.28) 45%, rgba(249,115,22,0.2) 75%, transparent 100%)",
                }}
              />
              <div className="relative flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md sm:h-[80px] sm:w-[80px]">
                <Logo className="h-9 w-9 sm:h-11 sm:w-11" />
              </div>
            </div>

            <div className="de-orbit-pivot absolute left-1/2 top-1/2 h-0 w-0">
              <div className="de-orbit-layer absolute left-0 top-0">
                {ENGINE_ITEMS.map((item) => (
                  <div
                    key={item.textHighlight}
                    className="de-orbit-node absolute left-0 top-0"
                  >
                    <OrbitCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .de-engine-title-line,
        .de-engine-subtitle,
        .de-orbit-card {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .de-orbit-node {
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
