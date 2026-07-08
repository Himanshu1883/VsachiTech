import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CTA_SECTION, CTA_TAGS } from "../digitalEngagementData";

const PARTICLE_POSITIONS = [
  { left: "8%", top: "18%" },
  { left: "22%", top: "72%" },
  { left: "38%", top: "34%" },
  { left: "55%", top: "62%" },
  { left: "68%", top: "22%" },
  { left: "82%", top: "48%" },
  { left: "14%", top: "52%" },
  { left: "46%", top: "12%" },
  { left: "74%", top: "78%" },
  { left: "90%", top: "30%" },
];

export default function DeCta() {
  return (
    <section className="de-cta relative py-16 md:py-20 bg-[#f1efeb] overflow-hidden">
      <div
        className="de-cta-ring absolute top-[-250px] right-[-250px] w-[700px] h-[700px] rounded-full border-[30px] border-[#de6b58]/10 pointer-events-none"
        aria-hidden
      />
      <div
        className="de-cta-glow absolute top-[-100px] left-[-80px] w-[350px] h-[350px] rounded-full bg-[#de6b58]/10 blur-[120px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] rounded-full bg-[#de6b58]/10 blur-[130px] pointer-events-none"
        aria-hidden
      />

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {PARTICLE_POSITIONS.map((pos, index) => (
        <motion.div
          key={`${pos.left}-${pos.top}`}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: 3 + index * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 rounded-full bg-[#de6b58]/40 pointer-events-none"
          style={pos}
          aria-hidden
        />
      ))}

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="de-cta-content text-center">
          <p className="uppercase tracking-[0.3em] text-[#de6b58] text-[10px] font-medium mb-3">
            {CTA_SECTION.eyebrow}
          </p>

          <h2 className="font-black leading-[1] tracking-[-0.05em] text-[#111] text-[28px] sm:text-[38px] md:text-[52px]">
            {CTA_SECTION.titleBefore}
            <span className="text-[#de6b58] pl-2">{CTA_SECTION.titleHighlight}</span>
          </h2>

          <p className="mt-4 text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-[1.7]">
            {CTA_SECTION.subtitle}
          </p>

          <div className="flex justify-center flex-wrap gap-3 mt-6">
            {CTA_TAGS.map((tag, index) => (
              <motion.span
                key={tag}
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white text-[12px] text-[#444]"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center px-7 py-3 rounded-full bg-[#de6b58] text-white font-medium text-sm hover:scale-105 transition-all duration-500 shadow-lg"
            >
              {CTA_SECTION.primaryCta}
            </Link>

            <Link
              to="/our-work"
              className="inline-flex items-center px-7 py-3 rounded-full bg-white text-[#111] font-medium text-sm border border-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-500"
            >
              {CTA_SECTION.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
