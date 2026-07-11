import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Lenis from "lenis";
import {
  registerLenis,
  unregisterLenis,
} from "../../utils/lenisController";

gsap.registerPlugin(ScrollTrigger, Flip);

const PIN_SCROLL_VH = 0.9;

function preloadImages(root, selector) {
  const images = root.querySelectorAll(selector);
  const sources = new Set();

  images.forEach((el) => {
    const bg = el.style.backgroundImage;
    const match = bg && bg.match(/url\(["']?(.+?)["']?\)/);
    if (match?.[1]) sources.add(match[1]);
  });

  const main = root.querySelector(".sm-one");
  const mainBg = main?.style.backgroundImage;
  const mainMatch = mainBg && mainBg.match(/url\(["']?(.+?)["']?\)/);
  if (mainMatch?.[1]) sources.add(mainMatch[1]);

  if (!sources.size) return Promise.resolve();

  return Promise.all(
    [...sources].map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        }),
    ),
  );
}

function setupSmHeroAnimations(root, prefersReducedMotion) {
  const section = root.querySelector(".sm-hero");
  const pin = root.querySelector(".sm-hero-pin");
  const screen = root.querySelector(".sm-hero-screen");
  const subtitle = root.querySelector(".sm-hero-subtitle");
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

  const entranceTl = gsap.timeline({
    delay: 0.2,
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  if (flankLeft) {
    entranceTl.from(
      flankLeft.querySelectorAll(
        ".sm-hero-side-tag, .sm-hero-side-service, .sm-hero-side-highlight",
      ),
      { x: -28, opacity: 0, duration: 0.7, stagger: 0.06 },
      0,
    );
  }

  if (flankRight) {
    entranceTl.from(
      flankRight.querySelectorAll(
        ".sm-hero-side-stat, .sm-hero-side-platform, .sm-hero-side-highlight",
      ),
      { x: 28, opacity: 0, duration: 0.7, stagger: 0.06 },
      0.05,
    );
  }

  if (connectors.length) {
    entranceTl.from(
      connectors,
      {
        scaleX: 0,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        transformOrigin: "center center",
      },
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

  if (subtitle) {
    gsap.fromTo(
      subtitle,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -12,
        ease: "none",
        scrollTrigger: {
          ...revealTrigger,
          scrub: 0.7,
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
}

function setupSmWorkScroll(root, prefersReducedMotion) {
  const workItems = root.querySelectorAll('.sm-work [data-work="item"]');
  const ghostItems = root.querySelectorAll(".sm-work .ghost_work-item");

  if (!workItems.length || !ghostItems.length || prefersReducedMotion) return;

  gsap.set(workItems, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    clipPath: "inset(100% 0 0% 0)",
  });

  workItems.forEach((element, index) => {
    gsap.set(element, { zIndex: index + 10 });

    const lines = element.querySelectorAll("[data-line]");
    const workImage = element.querySelector('[data-work="image"]');
    const videoContainer = element.querySelectorAll('[data-work="video"]');
    const overlay = element.querySelectorAll('[data-work="item-overlay"]');

    gsap.set(workImage, {
      scale: 1.4,
      yPercent: 10,
    });

    const stStarting = {
      trigger: ghostItems[index],
      scrub: true,
      start: "top bottom",
      end: "+75vh top",
    };

    gsap.to(element, {
      clipPath: "inset(0% 0 0 0)",
      scrollTrigger: stStarting,
    });

    gsap.to(workImage, {
      yPercent: 10,
      scale: 1.2,
      scrollTrigger: stStarting,
    });

    gsap.from(lines, {
      yPercent: 125,
      rotate: 2.5,
      ease: "power2.inOut",
      duration: 1.25,
      scrollTrigger: {
        trigger: ghostItems[index],
        start: "top 75%",
        toggleActions: "play reverse restart reverse",
      },
    });

    gsap.to(workImage, {
      filter: "blur(10px)",
      opacity: 0.3,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ghostItems[index],
        scrub: true,
        start: "0 top",
        end: "35% top",
      },
    });

    gsap.from(videoContainer, {
      x: index % 2 === 0 ? "100vw" : "-100vw",
      scrollTrigger: {
        trigger: ghostItems[index],
        scrub: true,
        start: "0 top",
        end: "65% top",
        onLeave: () => {
          gsap.set(overlay, {
            display: "flex",
            opacity: 0,
          });
        },
      },
    });

    const stFinal = {
      trigger: ghostItems[index],
      scrub: true,
      start: "105% bottom",
      toggleActions: "play reverse play reverse",
    };

    gsap.fromTo(
      overlay,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: stFinal,
      },
    );

    gsap.to(videoContainer, {
      yPercent: 15,
      scrollTrigger: stFinal,
    });

    gsap.to(element, {
      filter: "blur(1px)",
      scrollTrigger: stFinal,
    });
  });

  const smWorkFooter = root.querySelector(".sm-work .footer_section");

  const hideWorkPanels = () => {
    gsap.set(workItems, {
      autoAlpha: 0,
      visibility: "hidden",
      pointerEvents: "none",
    });
  };

  const showWorkPanels = () => {
    workItems.forEach((element, index) => {
      gsap.set(element, {
        autoAlpha: 1,
        visibility: "visible",
        pointerEvents: "auto",
        zIndex: index + 10,
      });
    });
  };

  if (smWorkFooter) {
    ScrollTrigger.create({
      trigger: smWorkFooter,
      start: "top bottom",
      onEnter: hideWorkPanels,
      onLeaveBack: showWorkPanels,
    });
  }
}

function setupSmZoomReveal(root, prefersReducedMotion) {
  const wrapper = root.querySelector(".sm-zoom-wrapper");
  const hero = root.querySelector(".sm-zoom-hero");
  const img = root.querySelector(".sm-zoom-image-container img");
  if (!wrapper || !hero || !img || prefersReducedMotion) return;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
      },
    })
    .to(img, {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut",
    })
    .to(
      hero,
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      "<",
    );
}

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
    let flipCtx = null;
    let cancelled = false;

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

    const createFlipOnScrollAnimation = () => {
      flipCtx?.revert();

      const oneElement = root.querySelector(".sm-one");
      const parentElement = oneElement?.parentNode;
      const stepElements = [...root.querySelectorAll("[data-step]")];

      if (!oneElement || !parentElement || !stepElements.length) return;

      flipCtx = gsap.context(() => {
        const flipConfig = {
          duration: 1,
          ease: "sine.inOut",
        };

        const states = stepElements.map((stepElement) =>
          Flip.getState(stepElement),
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: parentElement,
            start: "clamp(center center)",
            endTrigger: stepElements[stepElements.length - 1],
            end: "clamp(center center)",
            scrub: true,
            immediateRender: false,
          },
        });

        states.forEach((state, index) => {
          tl.add(
            Flip.fit(
              oneElement,
              state,
              {
                ...flipConfig,
                ease: index === 0 ? "none" : flipConfig.ease,
              },
            ),
            index ? "+=0.5" : 0,
          );
        });
      }, root);
    };

    const animateSpansOnScroll = () => {
      root.querySelectorAll(".content__title > span").forEach((span, index) => {
        const direction = index % 2 === 0 ? -150 : 150;
        const triggerElement = span.closest(".content--center")
          ? span.parentNode
          : span;

        gsap.from(span, {
          x: direction,
          duration: 1,
          ease: "sine",
          scrollTrigger: {
            trigger: triggerElement,
            start: "top bottom",
            end: "+=45%",
            scrub: true,
          },
        });
      });
    };

    const animateImagesOnScroll = () => {
      const images = root.querySelectorAll(
        ".content--lines .content__img:not([data-step]), .content--grid .content__img:not([data-step])",
      );

      images.forEach((image) => {
        gsap.fromTo(
          image,
          {
            scale: 0,
            autoAlpha: 0,
            filter: "brightness(180%) saturate(0%)",
          },
          {
            scale: 1,
            autoAlpha: 1,
            filter: "brightness(100%) saturate(100%)",
            duration: 1,
            ease: "sine",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "+=45%",
              scrub: true,
            },
          },
        );
      });
    };

    const addParallaxToText = () => {
      const firstTextElement = root.querySelector(".content__text");
      if (!firstTextElement) return;

      gsap.fromTo(
        firstTextElement,
        { y: 250 },
        {
          y: -250,
          ease: "sine",
          scrollTrigger: {
            trigger: firstTextElement,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        },
      );
    };

    const animateFilterOnFirstSwitch = () => {
      const oneElement = root.querySelector(".sm-one");
      const parentElement = oneElement?.parentNode;
      if (!oneElement || !parentElement) return;

      gsap.fromTo(
        oneElement,
        { filter: "brightness(80%)" },
        {
          filter: "brightness(100%)",
          ease: "sine",
          scrollTrigger: {
            trigger: parentElement,
            start: "clamp(top bottom)",
            end: "clamp(bottom top)",
            scrub: true,
          },
        },
      );
    };

    const addParallaxToColumnImages = () => {
      const columnImages = [
        ...root.querySelectorAll(
          ".content--column .content__img:not([data-step])",
        ),
      ];
      const totalImages = columnImages.length;
      const middleIndex = (totalImages - 1) / 2;

      columnImages.forEach((image, index) => {
        const intensity = Math.abs(index - middleIndex) * 75;

        gsap.fromTo(
          image,
          { y: intensity },
          {
            y: -intensity,
            ease: "sine",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    };

    const fadeIntroOverlayOnScroll = () => {
      const parentElement = root.querySelector(".content--initial");
      const overlayLayer = root.querySelector(".sm-flip-intro-ui");

      if (!parentElement || !overlayLayer) return;

      gsap.to(overlayLayer, {
        autoAlpha: 0,
        y: -24,
        ease: "none",
        scrollTrigger: {
          trigger: parentElement,
          start: "top top",
          end: "+=45%",
          scrub: true,
        },
      });
    };

    const initAnimations = () => {
      if (cancelled) return;

      const ctx = gsap.context(() => {
        if (prefersReducedMotion) return;

        createFlipOnScrollAnimation();
        animateSpansOnScroll();
        animateImagesOnScroll();
        addParallaxToText();
        addParallaxToColumnImages();
        animateFilterOnFirstSwitch();
        fadeIntroOverlayOnScroll();
        setupSmHeroAnimations(root, prefersReducedMotion);
        setupSmWorkScroll(root, prefersReducedMotion);
        setupSmZoomReveal(root, prefersReducedMotion);
      }, root);

      return ctx;
    };

    let gsapCtx = null;

    preloadImages(root, ".content__img, .sm-one, .sm-zoom-image-container img").then(() => {
      if (cancelled) return;
      gsapCtx = initAnimations();
      ScrollTrigger.refresh();
    });

    const onResize = () => {
      lenis?.resize();
      createFlipOnScrollAnimation();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      flipCtx?.revert();
      gsapCtx?.revert();

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
