import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import useSEO from "../components/hooks/useSEO";
import { PORTFOLIO_CLIENTS } from "../data/portfolioCaseStudies";

const ACCENT = "#10b981";
const ACCENT_LIGHT = "#34d399";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function FadeIn({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Tag ref={ref} className={className}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={delay}
      >
        {children}
      </motion.div>
    </Tag>
  );
}

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.45 + 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${p.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-60"
    />
  );
}

function LoadingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060a0e]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <motion.div
        className="h-12 w-12 rounded-2xl border-2 border-emerald-500/30 border-t-emerald-400"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
      />
      <motion.p
        className="mt-6 text-sm font-medium tracking-[0.35em] uppercase text-emerald-400/80 portfolio1-font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Loading work
      </motion.p>
    </motion.div>
  );
}

function GlassCard({ children, className = "", hover = true }) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)] hover:border-emerald-500/25"
          : ""
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
      }}
    >
      {children}
    </div>
  );
}

function LaptopMockup({ src, alt, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-[20px]"
      aria-label={`Preview ${alt}`}
    >
      <div className="relative mx-auto max-w-2xl">
        <div className="rounded-t-[18px] border border-white/15 bg-gradient-to-b from-[#1a1f26] to-[#0f1318] px-3 pt-3 pb-2 shadow-2xl">
          <div className="mb-2 flex gap-1.5 px-1">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-black">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mx-auto h-3 w-[88%] rounded-b-lg bg-gradient-to-b from-[#2a3038] to-[#1a1f26] border-x border-b border-white/10" />
        <div className="absolute inset-0 rounded-[20px] ring-1 ring-inset ring-emerald-500/0 group-hover:ring-emerald-500/30 transition-all duration-300" />
      </div>
    </button>
  );
}

function MetricPill({ label, value }) {
  return (
    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.07] px-4 py-3 text-center min-w-[88px]">
      <div className="text-xl sm:text-2xl font-bold text-emerald-400 portfolio1-font-heading">
        {value}
      </div>
      <div className="mt-0.5 text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">
        {label}
      </div>
    </div>
  );
}

function PremiumNav({ menuOpen, setMenuOpen }) {
  const links = [
    { href: "#featured", label: "Featured" },
    { href: "#projects", label: "Projects" },
    { href: "#case-studies", label: "Case studies" },
    { href: "#contact-cta", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#060a0e]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[100rem] items-center justify-between px-4 sm:px-6 py-4">
        <Link
          to="/"
          className="text-sm sm:text-base font-semibold text-white portfolio1-font-heading tracking-tight"
        >
          Vsachi<span className="text-emerald-400">Tech</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Portfolio sections">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-[#04120c] shadow-lg shadow-emerald-500/20 hover:brightness-110 active:scale-[0.98] transition-all duration-200"
          >
            Start project
            <FiArrowRight />
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/[0.06] bg-[#060a0e]/95"
            aria-label="Mobile portfolio navigation"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-base text-gray-300 hover:bg-white/5 hover:text-emerald-400 transition"
                >
                  {l.label}
                </a>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3.5 text-base font-semibold text-[#04120c]"
              >
                Start project
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function ProjectShowcaseCard({ project, index, onOpenGallery, onHover }) {
  const metrics = useMemo(
    () => [
      { label: "Screens", value: project.images.length },
      { label: "Features", value: project.features.length },
      { label: "Stack", value: project.techStack.length },
    ],
    [project],
  );

  return (
    <FadeIn delay={index * 0.1}>
      <GlassCard className="overflow-hidden p-5 sm:p-7 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={index % 2 === 1 ? "lg:order-2" : ""}>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-300/90"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/90 mb-2">
              {project.industry}
            </p>
            <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white portfolio1-font-heading leading-[1.1]">
              {project.name}
            </h3>
            <p className="mt-2 text-lg text-emerald-300/70 font-medium">{project.type}</p>
            <p className="mt-5 max-w-xl text-gray-400 leading-[1.85] text-base sm:text-[17px]">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {metrics.map((m) => (
                <MetricPill key={m.label} {...m} />
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to={`/our-work/${project.id}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-semibold text-[#04120c] shadow-lg shadow-emerald-500/25 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                View case study
                <FiArrowRight />
              </Link>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white hover:border-emerald-500/40 hover:text-emerald-300 transition-all"
              >
                Live site
                <FiExternalLink className="text-xs" />
              </a>
            </div>
          </div>

          <div
            className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
            onMouseEnter={() => onHover(project.images[1] || project.images[0])}
            onMouseLeave={() => onHover(project.images[0])}
          >
            <LaptopMockup
              src={project.images[0]}
              alt={`${project.name} preview`}
              onClick={() => onOpenGallery(project.id, 0)}
            />
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {project.images.slice(0, 4).map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => onOpenGallery(project.id, idx)}
                  onMouseEnter={() => onHover(img)}
                  className="shrink-0 rounded-xl overflow-hidden border border-white/10 opacity-70 hover:opacity-100 hover:border-emerald-500/50 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <img
                    src={img}
                    alt={`${project.name} thumb ${idx + 1}`}
                    className="w-20 h-14 sm:w-24 sm:h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </FadeIn>
  );
}

function PremiumFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#05080b] py-16 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-[100rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <p className="text-xl font-bold text-white portfolio1-font-heading">
              Vsachi<span className="text-emerald-400">Tech</span>
            </p>
            <p className="mt-4 max-w-sm text-gray-500 leading-relaxed text-sm sm:text-base">
              Premium UI/UX and full-stack engineering for brands that want to stand out online.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500 mb-4">Explore</p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/our-work" className="hover:text-emerald-400 transition">
                  Original portfolio
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-emerald-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500 mb-4">Connect</p>
            <a
              href="mailto:hello@vsachitech.com"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition"
            >
              <FiMail />
              hello@vsachitech.com
            </a>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Vsachi Tech. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <FiGithub className="text-emerald-500/60" />
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio1() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeClientId, setActiveClientId] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [hoverPreview, setHoverPreview] = useState(null);

  useSEO({
    title: "Premium Portfolio | Vsachi Tech",
    description:
      "A premium showcase of Vsachi Tech client work — luxury ecommerce, portfolios, and B2B platforms with modern UI/UX.",
    canonical: "https://vsachitech.com/portfolio1",
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const selectedClient = useMemo(
    () => PORTFOLIO_CLIENTS.find((c) => c.id === activeClientId) || null,
    [activeClientId],
  );

  const featuredProject = PORTFOLIO_CLIENTS[carouselIndex];

  const openClientModal = useCallback((clientId, imageIndex = 0) => {
    setActiveClientId(clientId);
    setActiveImageIndex(imageIndex);
  }, []);

  const closeModal = () => {
    setActiveClientId(null);
    setActiveImageIndex(0);
  };

  const goPrev = () => {
    if (!selectedClient) return;
    const total = selectedClient.images.length;
    setActiveImageIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    if (!selectedClient) return;
    const total = selectedClient.images.length;
    setActiveImageIndex((prev) => (prev + 1) % total);
  };

  const carouselPrev = () =>
    setCarouselIndex((i) => (i - 1 + PORTFOLIO_CLIENTS.length) % PORTFOLIO_CLIENTS.length);
  const carouselNext = () =>
    setCarouselIndex((i) => (i + 1) % PORTFOLIO_CLIENTS.length);

  const totalScreens = PORTFOLIO_CLIENTS.reduce((n, c) => n + c.images.length, 0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap');
        .portfolio1-font-body { font-family: 'Inter', system-ui, sans-serif; }
        .portfolio1-font-heading { font-family: 'Poppins', system-ui, sans-serif; }
        .portfolio1-gradient-border {
          position: relative;
          background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(20,184,166,0.05));
        }
        .portfolio1-gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(16,185,129,0.5), rgba(20,184,166,0.1), rgba(255,255,255,0.05));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .portfolio1-grid-bg {
          background-image:
            linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      <AnimatePresence>{loading && <LoadingScreen onDone={() => setLoading(false)} />}</AnimatePresence>

      <div className="portfolio1-font-body relative min-h-screen overflow-x-hidden bg-[#060a0e] text-white selection:bg-emerald-500/30">
        <ParticleBackground />

        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 portfolio1-grid-bg opacity-40 z-0"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-200px] top-[15%] h-[480px] w-[480px] rounded-full blur-[140px] z-0"
          style={{ background: `${ACCENT}18` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-200px] top-[55%] h-[520px] w-[520px] rounded-full blur-[150px] z-0"
          style={{ background: `${ACCENT_LIGHT}10` }}
        />

        <div className="relative z-10">
          <PremiumNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          {/* Hero */}
          <section className="px-4 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-28">
            <div className="mx-auto max-w-[100rem]">
              <FadeIn>
                <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-emerald-400/90 mb-6">
                  Premium client work
                </p>
                <h1 className="max-w-5xl text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold tracking-tight leading-[1.02] portfolio1-font-heading">
                  Digital products
                  <span className="block mt-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                    built to impress
                  </span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg sm:text-xl text-gray-400 leading-[1.8]">
                  Explore bespoke websites we engineered for fashion, beauty, and wholesale brands —
                  with premium UI, measurable outcomes, and production-ready code.
                </p>
              </FadeIn>

              <FadeIn delay={2} className="mt-12">
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-semibold text-[#04120c] shadow-xl shadow-emerald-500/25 hover:brightness-110 active:scale-[0.98] transition-all min-h-[52px]"
                  >
                    Start your project
                    <FiArrowRight />
                  </Link>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur px-8 py-4 text-base font-semibold text-white hover:border-emerald-500/40 min-h-[52px] transition-all"
                  >
                    View projects
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={3} className="mt-16 sm:mt-20">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { v: PORTFOLIO_CLIENTS.length, l: "Clients" },
                    { v: totalScreens, l: "Screens" },
                    { v: "100%", l: "Responsive" },
                    { v: "4", l: "Industries" },
                  ].map((stat) => (
                    <GlassCard key={stat.l} className="p-5 sm:p-6 text-center" hover={false}>
                      <div className="text-2xl sm:text-3xl font-bold text-emerald-400 portfolio1-font-heading">
                        {stat.v}
                      </div>
                      <div className="mt-1 text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                        {stat.l}
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Featured carousel */}
          <section id="featured" className="px-4 sm:px-6 pb-24 sm:pb-32 scroll-mt-24">
            <div className="mx-auto max-w-[100rem]">
              <FadeIn>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/80 mb-3">
                      Spotlight
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight portfolio1-font-heading">
                      Featured project
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={carouselPrev}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 hover:border-emerald-500/40 hover:text-emerald-400 transition"
                      aria-label="Previous project"
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={carouselNext}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 hover:border-emerald-500/40 hover:text-emerald-400 transition"
                      aria-label="Next project"
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </FadeIn>

              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredProject.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="portfolio1-gradient-border rounded-[20px] overflow-hidden">
                    <GlassCard hover={false} className="rounded-[20px] border-0 p-6 sm:p-10 lg:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                          <p className="text-emerald-400 text-sm font-medium mb-2">
                            {featuredProject.type}
                          </p>
                          <h3 className="text-3xl sm:text-4xl font-bold portfolio1-font-heading">
                            {featuredProject.name}
                          </h3>
                          <p className="mt-5 text-gray-400 leading-[1.85] text-base sm:text-lg max-w-lg">
                            {featuredProject.summary}
                          </p>
                          <ul className="mt-6 space-y-2">
                            {featuredProject.outcomes.slice(0, 2).map((o) => (
                              <li
                                key={o}
                                className="flex items-start gap-2 text-sm text-emerald-300/80"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                                {o}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-8 flex flex-wrap gap-3">
                            <button
                              type="button"
                              onClick={() => openClientModal(featuredProject.id, 0)}
                              className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-[#04120c] hover:brightness-110 transition"
                            >
                              Open gallery
                            </button>
                            <a
                              href={featuredProject.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold hover:border-emerald-500/40 transition"
                            >
                              Visit live
                              <FiExternalLink className="text-xs" />
                            </a>
                          </div>
                        </div>
                        <LaptopMockup
                          src={hoverPreview || featuredProject.images[0]}
                          alt={featuredProject.name}
                          onClick={() => openClientModal(featuredProject.id, 0)}
                        />
                      </div>
                      <div className="mt-8 flex justify-center gap-2">
                        {PORTFOLIO_CLIENTS.map((p, i) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setCarouselIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              i === carouselIndex
                                ? "w-8 bg-emerald-400"
                                : "w-2 bg-white/20 hover:bg-white/40"
                            }`}
                            aria-label={`Show ${p.name}`}
                          />
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* All projects */}
          <section id="projects" className="px-4 sm:px-6 pb-24 sm:pb-32 scroll-mt-24">
            <div className="mx-auto max-w-[100rem]">
              <FadeIn className="mb-14 sm:mb-20">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/80 mb-3">
                  Portfolio
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight portfolio1-font-heading max-w-3xl leading-[1.08]">
                  Projects that deliver real business results
                </h2>
                <p className="mt-6 max-w-2xl text-gray-400 text-base sm:text-lg leading-[1.85]">
                  Large previews, live metrics, and deep case studies — scroll to explore each build.
                </p>
                <nav className="mt-8 flex flex-wrap gap-2" aria-label="Jump to project">
                  {PORTFOLIO_CLIENTS.map((c) => (
                    <a
                      key={c.id}
                      href={`#${c.id}`}
                      className="text-sm px-4 py-2 rounded-full border border-white/10 text-gray-400 hover:border-emerald-500/40 hover:text-emerald-300 transition min-h-[40px] inline-flex items-center"
                    >
                      {c.name.split(" ")[0]}
                    </a>
                  ))}
                </nav>
              </FadeIn>

              <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
                {PORTFOLIO_CLIENTS.map((project, i) => (
                  <div key={project.id} id={project.id} className="scroll-mt-28">
                    <ProjectShowcaseCard
                      project={project}
                      index={i}
                      onOpenGallery={openClientModal}
                      onHover={setHoverPreview}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case studies summary */}
          <section id="case-studies" className="px-4 sm:px-6 pb-24 sm:pb-32 scroll-mt-24">
            <div className="mx-auto max-w-[100rem]">
              <FadeIn className="mb-12 sm:mb-16">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/80 mb-3">
                  Deep dives
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold portfolio1-font-heading">
                  How we built each product
                </h2>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {PORTFOLIO_CLIENTS.map((project, i) => (
                  <FadeIn key={project.id} delay={i}>
                    <GlassCard className="p-6 sm:p-8 h-full flex flex-col">
                      <p className="text-xs uppercase tracking-wider text-emerald-400/80">
                        {project.industry}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold portfolio1-font-heading">
                        {project.name}
                      </h3>
                      <p className="mt-4 text-gray-400 leading-[1.8] text-sm sm:text-base flex-1">
                        {project.problem[0]}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-gray-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/our-work/${project.id}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition"
                      >
                        Read full case study
                        <FiArrowRight />
                      </Link>
                    </GlassCard>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="contact-cta" className="px-4 sm:px-6 pb-24 sm:pb-32 scroll-mt-24">
            <div className="mx-auto max-w-[100rem]">
              <FadeIn>
                <div className="portfolio1-gradient-border rounded-[20px]">
                  <div className="rounded-[20px] bg-gradient-to-br from-emerald-500/[0.08] via-transparent to-teal-500/[0.05] p-10 sm:p-14 lg:p-16">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                      <div className="max-w-2xl">
                        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/80">
                          Ready to start?
                        </p>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold portfolio1-font-heading leading-tight">
                          Let&apos;s build a website your customers trust
                        </h2>
                        <p className="mt-5 text-gray-400 text-base sm:text-lg leading-[1.85]">
                          We combine premium UI/UX with modern development to create fast, memorable
                          experiences for real businesses.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-semibold text-[#04120c] shadow-xl shadow-emerald-500/20 hover:brightness-110 active:scale-[0.98] transition-all min-h-[52px]"
                        >
                          Start project
                        </Link>
                        <Link
                          to="/what-we-do/web-development"
                          className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-8 py-4 text-base font-semibold hover:border-emerald-500/40 min-h-[52px] transition-all"
                        >
                          Web development
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          <PremiumFooter />
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedClient && (
            <motion.div
              className="fixed inset-0 z-50 flex items-start justify-center pt-[5vh] sm:pt-[8vh] px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                aria-label="Close preview"
              />
              <motion.div
                className="relative w-full max-w-5xl rounded-[20px] overflow-hidden border border-white/10 bg-[#0a0f14]/95 backdrop-blur-xl shadow-2xl"
                initial={{ y: 20, scale: 0.97, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: 20, scale: 0.97, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-emerald-400">
                      {selectedClient.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {selectedClient.type} · {activeImageIndex + 1}/{selectedClient.images.length}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="px-3 py-2 rounded-xl border border-white/10 hover:border-emerald-500/40 transition text-sm"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="px-3 py-2 rounded-xl border border-white/10 hover:border-emerald-500/40 transition text-sm"
                    >
                      Next
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="p-2 rounded-xl border border-white/10 hover:border-emerald-500/40 transition"
                      aria-label="Close"
                    >
                      <FiX />
                    </button>
                  </div>
                </div>
                <div className="max-h-[70vh] overflow-auto">
                  <img
                    src={selectedClient.images[activeImageIndex]}
                    alt={`${selectedClient.name} screenshot ${activeImageIndex + 1}`}
                    className="w-full h-auto"
                  />
                </div>
                <div className="px-4 py-4 border-t border-white/10 flex gap-2 overflow-x-auto">
                  {selectedClient.images.map((img, idx) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`shrink-0 rounded-xl overflow-hidden border transition ${
                        idx === activeImageIndex
                          ? "border-emerald-400 opacity-100"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-24 h-16 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
