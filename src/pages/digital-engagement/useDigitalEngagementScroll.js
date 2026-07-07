import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  registerLenis,
  unregisterLenis,
} from "../../utils/lenisController";

gsap.registerPlugin(ScrollTrigger);

function setupMarquees(root, prefersReducedMotion) {
  root.querySelectorAll(".de-marquee-track").forEach((track) => {
    const reverse = track.dataset.direction === "reverse";
    const distance = reverse ? 50 : -50;
    const duration = reverse ? 38 : 32;

    if (prefersReducedMotion) {
      gsap.set(track, { xPercent: distance * 0.5 });
      return;
    }

    gsap.to(track, {
      xPercent: distance,
      duration,
      repeat: -1,
      ease: "none",
    });
  });
}

export function useDigitalEngagementScroll(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let lenis = null;
    let raf = null;
    let onLenisScroll = null;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.28,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1.1,
        wheelMultiplier: 0.92,
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

      onLenisScroll = () => ScrollTrigger.update();
      lenis.on("scroll", onLenisScroll);

      raf = (time) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.15,
      });

      heroTl
        .from(".de-hero-eyebrow", { y: 22, opacity: 0, duration: 0.65 })
        .from(
          ".de-hero-line",
          { y: 56, opacity: 0, duration: 0.8, stagger: 0.1 },
          "-=0.3",
        )
        .from(
          ".de-hero-pill",
          { y: 22, opacity: 0, duration: 0.6, stagger: 0.07 },
          "-=0.45",
        )
        .from(".de-hero-tagline", { y: 14, opacity: 0, duration: 0.55 }, "-=0.35")
        .from(".de-scroll-hint", { y: 12, opacity: 0, duration: 0.5 }, "-=0.35");

      const hero = root.querySelector(".de-hero");
      if (hero && !prefersReducedMotion) {
        const content = hero.querySelector(".de-hero-content");
        const scrollHint = hero.querySelector(".de-scroll-hint");

        gsap.fromTo(
          content,
          { y: 0, opacity: 1 },
          {
            y: -40,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          },
        );

        if (scrollHint) {
          gsap.fromTo(
            scrollHint,
            { y: 0, opacity: 1 },
            {
              y: 16,
              opacity: 0,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "center top",
                scrub: 0.8,
              },
            },
          );
        }
      }

      setupMarquees(root, prefersReducedMotion);

      const marqueeSection = root.querySelector(".de-marquee-section");
      if (marqueeSection && !prefersReducedMotion) {
        gsap.fromTo(
          marqueeSection,
          { y: 40 },
          {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: marqueeSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          },
        );
      }

      gsap.from(".de-why-header > *", {
        scrollTrigger: {
          trigger: ".de-why-header",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        y: 44,
        opacity: 0,
        duration: 0.85,
        stagger: 0.11,
        ease: "power3.out",
      });

      gsap.utils.toArray(".de-why-block").forEach((block, index) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          x: index % 2 === 0 ? -40 : 40,
          y: 28,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      gsap.from(".de-process-header > *", {
        scrollTrigger: {
          trigger: ".de-process-header",
          start: "top 84%",
          toggleActions: "play none none reverse",
        },
        y: 36,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.utils.toArray(".de-process-card").forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1.05,
          ease: "power4.out",
        });
      });

      const engine = root.querySelector(".de-engine");
      if (engine && !prefersReducedMotion) {
        const background = engine.querySelector(".de-engine-bg");
        if (background) {
          gsap.fromTo(
            background,
            { opacity: 0.7 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: engine,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            },
          );
        }
      }

      gsap.from(".de-engine-title-line, .de-engine-subtitle", {
        scrollTrigger: {
          trigger: ".de-engine-header",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".de-engine-core, .de-orbit-card", {
        scrollTrigger: {
          trigger: ".de-engine-orbit",
          start: "top 84%",
          toggleActions: "play none none reverse",
        },
        scale: 0.92,
        opacity: 0,
        duration: 1,
        stagger: 0.06,
        ease: "power3.out",
      });

      gsap.from(".de-cta-content > *", {
        scrollTrigger: {
          trigger: ".de-cta",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: "power3.out",
      });

      if (!prefersReducedMotion) {
        gsap.to(".de-cta-glow", {
          x: 30,
          y: -20,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".de-cta-ring", {
          rotate: 360,
          duration: 42,
          repeat: -1,
          ease: "none",
        });
      }
    }, root);

    const onResize = () => {
      lenis?.resize();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();

      if (lenis) {
        lenis.off("scroll", onLenisScroll);
        gsap.ticker.remove(raf);
        unregisterLenis(lenis);
        lenis.destroy();
      }

      ScrollTrigger.scrollerProxy(document.documentElement, {});

      document.documentElement.classList.remove(
        "lenis",
        "lenis-smooth",
        "lenis-scrolling",
        "lenis-stopped",
      );
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [rootRef]);
}
