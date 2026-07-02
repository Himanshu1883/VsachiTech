import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import {
  getRelatedProjects,
} from "../../data/portfolioCaseStudies";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailView({ project }) {
  const rootRef = useRef(null);
  const related = getRelatedProjects(project.id, 3);

  const deliverables = [
    ...project.tags,
    ...project.features.slice(0, 4).map((f) => f.title),
    "Performance Optimisation",
    "Mobile Optimisation",
  ];

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".pd-back", { x: -16, opacity: 0, duration: 0.5 })
        .from(".pd-hero-eyebrow", { y: 24, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(".pd-hero-title", { y: 72, opacity: 0, duration: 0.9 }, "-=0.35")
        .from(".pd-hero-type", { y: 28, opacity: 0, duration: 0.55 }, "-=0.45")
        .from(".pd-hero-cta", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3");

      gsap.from(".pd-about-block", {
        scrollTrigger: {
          trigger: ".pd-about-block",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        y: 48,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
      });

      gsap.from(".pd-deliverable", {
        scrollTrigger: {
          trigger: ".pd-deliverables",
          start: "top 85%",
        },
        y: 22,
        opacity: 0,
        duration: 0.45,
        stagger: 0.05,
        ease: "power2.out",
      });

      gsap.utils.toArray(".pd-screen").forEach((section, i) => {
        const img = section.querySelector(".pd-screen-img");
        const label = section.querySelector(".pd-screen-label");

        gsap.from(label, {
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
          x: i % 2 === 0 ? -24 : 24,
          opacity: 0,
          duration: 0.65,
          ease: "power3.out",
        });

        gsap.from(img, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 80,
          opacity: 0,
          scale: 0.94,
          duration: 1,
          ease: "power3.out",
        });

        gsap.to(img, {
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
          y: -40,
          ease: "none",
        });
      });

      gsap.from(".pd-quote", {
        scrollTrigger: {
          trigger: ".pd-quote",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        scale: 0.96,
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".pd-detail-col", {
        scrollTrigger: {
          trigger: ".pd-details",
          start: "top 82%",
        },
        y: 36,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".pd-tech-badge", {
        scrollTrigger: {
          trigger: ".pd-tech",
          start: "top 88%",
        },
        y: 14,
        opacity: 0,
        duration: 0.4,
        stagger: 0.04,
        ease: "power2.out",
      });

      gsap.from(".pd-related-card", {
        scrollTrigger: {
          trigger: ".pd-related",
          start: "top 85%",
        },
        y: 32,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".pd-cta-block", {
        scrollTrigger: {
          trigger: ".pd-cta-block",
          start: "top 88%",
        },
        y: 28,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, [project.id]);

  return (
    <div
      ref={rootRef}
      className="relative bg-[#0b0b0b] text-white min-h-screen overflow-x-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 0%, rgba(222,107,88,0.15), transparent 55%)",
        }}
      />

      {/* Hero */}
      <header className="relative pt-10 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-12 max-w-[100rem] mx-auto">
        <Link
          to="/our-work"
          className="pd-back inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#de6b58] transition mb-10"
        >
          <FaArrowLeft className="text-xs" />
          Back to portfolio
        </Link>

        <p className="pd-hero-eyebrow text-xs uppercase tracking-[0.35em] text-[#de6b58] mb-4">
          {project.industry}
        </p>
        <h1 className="pd-hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.95] max-w-4xl">
          {project.name}
        </h1>
        <p className="pd-hero-type mt-4 text-lg sm:text-xl text-gray-400">
          {project.type}
        </p>

        <div className="pd-hero-cta mt-8 flex flex-wrap gap-3">
          {/* <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-[#de6b58] text-black font-semibold hover:brightness-110 transition"
          >
            Visit live site
            <FaExternalLinkAlt className="text-sm" />
          </a> */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 border border-white/20 text-white font-semibold hover:border-[#de6b58]/60 hover:text-[#de6b58] transition"
          >
            Start a project
          </Link>
        </div>
      </header>

      {/* About */}
      <section className="pd-about-block px-4 sm:px-8 lg:px-12 pb-16 max-w-[100rem] mx-auto">
        <p className="text-xs uppercase tracking-[0.28em] text-gray-500 mb-4">
          About the project
        </p>
        <p className="max-w-3xl text-base sm:text-lg text-gray-300/90 leading-[1.9]">
          {project.summary}
        </p>
      </section>

      {/* Deliverables */}
      <section className="pd-deliverables px-4 sm:px-8 lg:px-12 pb-20 max-w-[100rem] mx-auto border-b border-white/[0.06]">
        <ul className="flex flex-wrap gap-2 sm:gap-3">
          {deliverables.map((item) => (
            <li
              key={item}
              className="pd-deliverable text-xs sm:text-sm px-4 py-2 rounded-full border border-white/12 bg-white/[0.04] text-gray-300/90"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Scroll gallery — full viewport screens */}
      <div className="pd-screens">
        {project.images.map((src, idx) => (
          <section
            key={src}
            className="pd-screen relative min-h-[88vh] flex flex-col justify-center py-12 sm:py-16 px-4 sm:px-8 lg:px-12"
          >
            <div className="w-full max-w-[100rem] mx-auto">
              <p className="pd-screen-label text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                Screen {String(idx + 1).padStart(2, "0")} /{" "}
                {String(project.images.length).padStart(2, "0")}
              </p>
              <div className="pd-screen-img rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <img
                  src={src}
                  alt={`${project.name} screenshot ${idx + 1}`}
                  className="w-full h-auto block"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Pull quote */}
      <section className="pd-quote px-4 sm:px-8 lg:px-12 py-20 sm:py-28 max-w-[100rem] mx-auto border-y border-white/[0.06]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium italic leading-[1.25] tracking-[-0.02em] text-white/95 max-w-4xl">
          {project.outcomes[0] ||
            "A premium digital experience built for real business outcomes."}
        </h2>
      </section>

      {/* Challenge & solution */}
      <section className="pd-details px-4 sm:px-8 lg:px-12 py-20 max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="pd-detail-col">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              The challenge
            </h3>
            <ul className="space-y-3">
              {project.problem.map((item) => (
                <li
                  key={item}
                  className="text-sm sm:text-base text-gray-300/85 leading-[1.75] pl-4 border-l-2 border-[#de6b58]/50"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="pd-detail-col">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              What we delivered
            </h3>
            <ul className="space-y-3">
              {project.solution.map((item) => (
                <li
                  key={item}
                  className="text-sm sm:text-base text-gray-300/85 leading-[1.75] pl-4 border-l-2 border-white/20"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="pd-tech px-4 sm:px-8 lg:px-12 pb-20 max-w-[100rem] mx-auto">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">
          Tech stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="pd-tech-badge text-sm px-4 py-2 rounded-full border border-white/12 bg-white/[0.04] text-gray-200/90"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="pd-related px-4 sm:px-8 lg:px-12 py-16 sm:py-20 max-w-[100rem] mx-auto border-t border-white/[0.06]">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-[-0.03em]">
            Related projects
          </h2>
          <Link
            to="/our-work"
            className="text-sm text-[#de6b58] hover:underline shrink-0"
          >
            See all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {related.map((rel) => (
            <Link
              key={rel.id}
              to={`/our-work/${rel.id}`}
              className="pd-related-card group block rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-[#de6b58]/45 transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={rel.images[0]}
                  alt={rel.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-bold text-white group-hover:text-[#de6b58] transition-colors">
                  {rel.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{rel.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pd-cta-block px-4 sm:px-8 lg:px-12 pb-24 max-w-[100rem] mx-auto">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/[0.06] to-transparent p-10 sm:p-14 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gray-400">
            Starting a new project?
          </p>
          <h2 className="mt-4 text-2xl sm:text-4xl font-black tracking-[-0.03em]">
            Let&apos;s build something like {project.name.split(" ")[0]}.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-[#de6b58] text-black font-semibold hover:brightness-110 transition"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
