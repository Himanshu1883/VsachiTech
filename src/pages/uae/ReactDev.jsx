import React from "react";
import {
  FaReact,
  FaCheckCircle,
  FaRocket,
  FaCode,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaDollarSign,
  FaMobile,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiWebpack,
  SiVite,
  SiJest,
  SiCypress,
  SiGraphql,
  SiApollographql,
  SiReactquery,
  SiReacthookform,
  SiFramer,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiGithub,
  SiEslint,
  SiPrettier,
} from "react-icons/si";
import usePageTitle from "../../components/hooks/usePageTitle";

const ReactDev = () => {
  usePageTitle("Hire Expert React Developers | UAE & GCC Ready");

  return (
    <section className="bg-gradient-to-b from-[#f8f5f0] to-white text-gray-900 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Subtle UAE-inspired floating elements: gold falcons & palms instead of just React icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          {[
            { top: "12%", left: "8%", size: "text-6xl", icon: " falcon", delay: "0s" },
            { top: "28%", left: "88%", size: "text-5xl", icon: "palm", delay: "1.2s" },
            { top: "55%", left: "6%", size: "text-4xl", icon: "React", delay: "2.4s" },
            { top: "68%", left: "92%", size: "text-6xl", icon: "React", delay: "3.2s" },
            { top: "18%", left: "48%", size: "text-7xl", icon: "React", delay: "1.8s" },
            { top: "82%", left: "32%", size: "text-5xl", icon: "falcon", delay: "2.8s" },
          ].map((item, i) => (
            <div
              key={i}
              className={`absolute ${item.size} text-[#d4af37]/40 animate-spin-slow`}
              style={{
                top: item.top,
                left: item.left,
                animationDelay: item.delay,
                animationDuration: "24s",
              }}
            >
              {item.icon === "falcon" ? "🦅" : item.icon === "palm" ? "🌴" : <FaReact />}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 pt-32 pb-20">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Hire <span className="text-[#d4af37]">World-Class React Developers</span>
              <br />
              <span className="text-4xl">UAE • GCC • Vision 2031 Ready</span>
            </h1>

            <p className="text-gray-700 text-xl max-w-xl mb-10">
              Deliver enterprise-grade, high-performance React applications with expert engineers 
              specializing in Next.js, TypeScript, and scalable UI architecture — aligned with UAE innovation hubs.
            </p>

            <div className="flex gap-5">
              <Link to={"/contact#project-form"}>
                <button className="px-10 py-5 bg-[#0a1f44] text-white rounded-xl hover:bg-[#d4af37] hover:text-[#0a1f44] transition font-semibold text-lg shadow-lg">
                  Hire Elite React Talent Now
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image — you can replace with more premium/UAE-relevant image */}
          <div className="relative">
            <img
              src="/react-team-luxury.webp" // ← suggest changing to more premium/tech Dubai style image
              alt="Expert React Development Team – Dubai Ready"
              className="rounded-3xl shadow-2xl border-2 border-[#d4af37]/30"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS / STATS SECTION ================= */}
      <section className="relative py-28 text-white overflow-hidden bg-[#001f3f]">
        {/* Subtle sand/pattern overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#f5f0e1]/5 via-transparent to-[#0a1f44]/90 bg-no-repeat bg-center bg-cover opacity-60 mix-blend-overlay"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              "Up to 65% Cost Efficiency",
              "Instant Onboarding – UAE Timezone",
              "12+ Years Delivering Excellence",
              "48-Hour Shortlist Guarantee",
              "Full NDA & IP Protection",
              "95%+ Long-term Retention",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur-lg border border-[#d4af37]/20 rounded-2xl px-8 py-10 text-center text-lg font-semibold hover:border-[#d4af37] hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                {item}
              </div>
            ))}
          </div>

          <h2 className="text-center text-4xl md:text-5xl font-bold mb-10 max-w-4xl mx-auto leading-tight">
            Build Next-Gen React Solutions with{" "}
            <span className="text-[#d4af37]">UAE-Aligned Experts</span>
          </h2>

          <div className="flex justify-center">
            <Link to={"/contact#project-form"}>
              <button className="px-12 py-5 rounded-full bg-[#d4af37] text-[#0a1f44] text-xl font-bold hover:bg-white hover:text-[#0a1f44] transition-all shadow-xl hover:shadow-2xl">
                Request Top Developer Profiles
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TECH MARQUEE ================= */}
      {/* Keep as is, or update title: */}
      <ReactMarqueeSection title="UAE-Ready Full React Ecosystem" />

      {/* ================= TECH STACK GRID ================= */}
      <section className="py-24 bg-gradient-to-b from-[#f8f5f0] to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-[#d4af37]">React Mastery</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Next.js 14+ App Router & Server Components",
              "Enterprise TypeScript & Type Safety",
              "Redux Toolkit • Zustand • TanStack Query",
              "Tailwind CSS • Shadcn/ui • Motion",
              "Performance Tuning & Core Web Vitals",
              "Jest • Cypress • Playwright E2E",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-5 p-7 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl hover:border-[#d4af37]/50 border border-gray-200 transition"
              >
                <FaCheckCircle className="text-[#d4af37] text-2xl flex-shrink-0" />
                <span className="font-semibold text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The rest of sections follow similar pattern: */}
      {/* 
        - Replace #e44f39 → #d4af37 (gold)
        - Dark sections: bg-[#001f3f] or bg-gradient-to-br from-[#0a1f44] to-[#001020]
        - Text: text-white or text-gray-200 on dark
        - Buttons: bg-[#d4af37] text-[#0a1f44], hover:bg-white
        - Accents: border-[#d4af37]/30 , shadow with gold tint
        - Update texts slightly more luxury/business-oriented:
          - "Lightning-fast → Enterprise-grade & scalable"
          - Add "UAE/GCC timezone", "Vision 2031 aligned", "innovation-driven"
      */}

      {/* Example FINAL CTA update */}
      <section className="py-28 bg-gradient-to-br from-[#0a1f44] to-[#001020] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ready to Launch Your Vision in the UAE?
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Access pre-vetted senior React talent — start your project in 48 hours with GCC-aligned delivery.
          </p>
          <Link to="/contact#project-form">
            <button className="px-12 py-6 bg-[#d4af37] text-[#0a1f44] rounded-full text-xl font-bold hover:bg-white transition-all shadow-2xl hover:shadow-gold-xl">
              Secure Your React Team Today
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
};

/* Update marquee title prop if you want */
function ReactMarqueeSection({ title = "Complete React Tech Stack" }) {
  // ... keep original code, just change h2 to use title prop
  // and maybe add gold color to heading
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8f5f0] overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {title} – <span className="text-[#d4af37]">UAE Innovation Ready</span>
        </h2>
        {/* ... rest same */}
      </div>
      {/* ... marquee code unchanged */}
    </section>
  );
}

// TechCard remains same

export default ReactDev;