import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FiArrowDown, FiExternalLink } from "react-icons/fi";
import {
  registerLenis,
  unregisterLenis,
} from "../../utils/lenisController";

gsap.registerPlugin(ScrollTrigger);

function FeaturedHero({ project, index, onOpenGallery, isLast }) {
  return (
    <section
      className="featured-hero relative grid place-items-center w-full h-[100svh] overflow-clip"
      data-project-id={project.id}
    >
      <div className="featured-hero-image absolute inset-0 z-0 bg-black overflow-hidden">
        <img
          src={project.images[0]}
          alt={`${project.name} featured preview`}
          className="block w-full h-full object-cover object-top"
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
      </div>

      <div
        className="featured-hero-marquee absolute inset-0 z-[1] flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span className="portfolio-featured-serif text-[18vw] sm:text-[14vw] font-bold italic text-white/[0.07] leading-none whitespace-nowrap">
          {project.name}
        </span>
      </div>

      <div className="featured-hero-content relative z-10 w-full max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full bg-black/40 border border-white/15 text-gray-100/90"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs uppercase tracking-[0.32em] text-[#de6b58] mb-3">
            {project.name}
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.04em] leading-[1.05] text-white">
            {project.type}
          </h3>
          <p className="mt-3 text-sm sm:text-base text-gray-300/80 leading-relaxed max-w-xl">
            {project.summary}
          </p>
          <p className="mt-2 text-xs text-gray-400">
            {project.images.length} screens
            {isLast ? " · keep scrolling for case studies" : " · scroll for next project"}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={`/our-work/${project.id}`}
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-[#de6b58] text-black text-sm font-semibold hover:brightness-110 transition"
            >
              View case study
            </Link>
            <button
              type="button"
              onClick={() => onOpenGallery(project.id, 0)}
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 border border-white/20 text-white text-sm font-semibold hover:border-[#de6b58]/60 transition"
            >
              Gallery
            </button>
            {/* <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/20 text-white text-sm font-semibold hover:border-[#de6b58]/60 transition"
            >
              Live site
              <FiExternalLink className="text-xs" />
            </a> */}
          </div>

          {isLast && (
            <a
              href="#case-studies"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 backdrop-blur-sm px-4 py-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-gray-200 hover:border-[#de6b58]/50 hover:text-white transition"
            >
              Continue to case studies
              <FiArrowDown />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default function FeaturedInfiniteScroll({ projects, onOpenGallery }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.15,
      wheelMultiplier: 0.95,
      allowNestedScroll: true,
    });

    registerLenis(lenis);

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true });
        } else {
          return lenis.scroll;
        }
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: "transform",
    });

    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const heroes = section.querySelectorAll(".featured-hero");
    const panelCount = heroes.length;

    const snapTrigger =
      panelCount > 1
        ? ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            snap: {
              snapTo: 1 / (panelCount - 1),
              duration: { min: 0.45, max: 1.15 },
              delay: 0.08,
              ease: "power3.inOut",
              inertia: false,
            },
          })
        : null;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const runParallax = (imageRange, marqueeRange, scrub) => {
        heroes.forEach((hero) => {
          const imageWrap = hero.querySelector(".featured-hero-image");
          const marquee = hero.querySelector(".featured-hero-marquee");
          const content = hero.querySelector(".featured-hero-content");

          const shared = {
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top bottom",
              end: "bottom top",
              scrub,
            },
          };

          gsap.set(imageWrap, { yPercent: imageRange.from });
          gsap.fromTo(
            imageWrap,
            { yPercent: imageRange.from },
            { yPercent: imageRange.to, ...shared },
          );

          gsap.set(marquee, { scale: marqueeRange.from });
          gsap.fromTo(
            marquee,
            { scale: marqueeRange.from },
            { scale: marqueeRange.to, ...shared },
          );

          gsap.fromTo(
            content,
            { y: 36, opacity: 0.72 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top 75%",
                end: "top 35%",
                scrub: scrub * 0.8,
              },
            },
          );
        });
      };

      mm.add("(min-width: 768px)", () => {
        runParallax({ from: -50, to: 50 }, { from: 1.5, to: 0.5 }, 1.4);
      });

      mm.add("(max-width: 767px)", () => {
        runParallax({ from: -25, to: 25 }, { from: 1.25, to: 0.75 }, 1.1);
      });
    }, section);

    const onResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", onResize);
      snapTrigger?.kill();
      ctx.revert();
      mm.revert();
      lenis.off("scroll", onLenisScroll);
      gsap.ticker.remove(raf);
      unregisterLenis(lenis);
      lenis.destroy();
      ScrollTrigger.scrollerProxy(document.documentElement, {});
    };
  }, [projects]);

  return (
    <section
      id="featured-projects"
      ref={sectionRef}
      className="relative w-full border-y border-white/10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-4 px-5 sm:px-8 lg:px-10 pt-6 sm:pt-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#de6b58] mb-2">
            Featured work
          </p>
          <h2 className="portfolio-featured-serif text-2xl sm:text-3xl font-medium italic text-white tracking-[-0.02em] drop-shadow-md">
            Featured projects
          </h2>
        </div>
        <p className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2">
          Scroll to explore
        </p>
      </div>

      {projects.map((project, index) => (
        <FeaturedHero
          key={project.id}
          project={project}
          index={index}
          onOpenGallery={onOpenGallery}
          isLast={index === projects.length - 1}
        />
      ))}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&display=swap');
        .portfolio-featured-serif {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
        }
      `}</style>
    </section>
  );
}


