import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  registerLenis,
  unregisterLenis,
} from "../../utils/lenisController";

gsap.registerPlugin(ScrollTrigger);

const PIN_SCROLL_VH = 0.9;

export function useSocialMediaScroll(rootRef) {
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
      const section = root.querySelector(".sm-hero");
      const pin = root.querySelector(".sm-hero-pin");
      const screen = root.querySelector(".sm-hero-screen");
      const header = root.querySelector(".sm-hero-header");
      const screenCopy = root.querySelector(".sm-hero-screen-copy");
      const grid = root.querySelector(".sm-hero-grid");
      const shade = root.querySelector(".sm-hero-video-shade");
      const poster = root.querySelector(".sm-hero-poster");
      const scrollHint = root.querySelector(".sm-hero-scroll-hint");
      const video = root.querySelector(".sm-hero-video");
      const flankLeft = root.querySelector(".sm-hero-flank-left");
      const flankRight = root.querySelector(".sm-hero-flank-right");
      const connectors = root.querySelectorAll(
        ".sm-hero-connector-left, .sm-hero-connector-right",
      );

      if (!section || !pin || !screen) return;

      const pinDistance = () => window.innerHeight * PIN_SCROLL_VH;

      gsap.set(screen, {
        transformPerspective: 1200,
        transformOrigin: "50% 100%",
        force3D: true,
      });

      if (prefersReducedMotion) {
        gsap.set(screen, { rotateX: 0, y: 0, scale: 1, opacity: 1 });
        gsap.set([screenCopy, grid, shade, poster], { opacity: 0 });
        gsap.set(video, { opacity: 1 });
        section.dispatchEvent(
          new CustomEvent("sm-hero-video-reveal", {
            detail: { revealed: true, progress: 1 },
          }),
        );
        return;
      }

      const entranceTl = gsap.timeline({ delay: 0.2, defaults: { ease: "power3.out" } });

      if (flankLeft) {
        entranceTl.from(
          flankLeft.querySelectorAll(".sm-hero-side-tag, .sm-hero-side-highlight"),
          { x: -28, opacity: 0, duration: 0.7, stagger: 0.08 },
          0,
        );
      }

      if (flankRight) {
        entranceTl.from(
          flankRight.querySelectorAll(".sm-hero-side-stat, .sm-hero-side-highlight"),
          { x: 28, opacity: 0, duration: 0.7, stagger: 0.08 },
          0.05,
        );
      }

      if (connectors.length) {
        entranceTl.from(
          connectors,
          { scaleX: 0, opacity: 0, duration: 0.9, stagger: 0.1, transformOrigin: "center center" },
          0.15,
        );
      }

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${pinDistance()}`,
        pin,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      const revealTrigger = {
        trigger: section,
        start: "top top",
        end: () => `+=${pinDistance()}`,
        scrub: 1.1,
        invalidateOnRefresh: true,
      };

      gsap.fromTo(
        screen,
        { rotateX: 28, y: 64, scale: 0.94, opacity: 0.92 },
        {
          rotateX: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: revealTrigger,
        },
      );

      if (header) {
        gsap.fromTo(
          header,
          { y: 0, opacity: 1 },
          {
            y: -48,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              ...revealTrigger,
              scrub: 1,
            },
          },
        );
      }

      if (screenCopy) {
        gsap.fromTo(
          screenCopy,
          { opacity: 1, y: 0 },
          {
            opacity: 0,
            y: -24,
            ease: "none",
            scrollTrigger: {
              ...revealTrigger,
              scrub: 0.8,
            },
          },
        );
      }

      if (grid) {
        gsap.to(grid, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            ...revealTrigger,
            scrub: 0.8,
          },
        });
      }

      if (shade) {
        gsap.to(shade, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            ...revealTrigger,
            scrub: 0.8,
          },
        });
      }

      if (poster) {
        gsap.to(poster, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            ...revealTrigger,
            scrub: 0.8,
          },
        });
      }

      if (video) {
        gsap.to(video, {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            ...revealTrigger,
            scrub: 0.8,
          },
        });
      }

      if (scrollHint) {
        gsap.to(scrollHint, {
          opacity: 0,
          y: 12,
          ease: "none",
          scrollTrigger: {
            ...revealTrigger,
            scrub: 0.6,
          },
        });
      }

      if (video) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${pinDistance()}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const revealed = self.progress > 0.68;
            section.dispatchEvent(
              new CustomEvent("sm-hero-video-reveal", {
                detail: { revealed, progress: self.progress },
              }),
            );
          },
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
