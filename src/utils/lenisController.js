/** Shared registry so overlays (e.g. portfolio drawer) can pause page Lenis. */
let activeLenis = null;
let pauseCount = 0;
let onLenisScrollHandler = null;

const scrollListeners = new Set();

function notifyScroll(scroll) {
  scrollListeners.forEach((listener) => listener(scroll));
}

function resetNativeScroll() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/** Reset scroll for native window + active Lenis instance. */
export function scrollToTop({ immediate = true, behavior } = {}) {
  if (activeLenis) {
    activeLenis.scrollTo(0, { immediate: behavior ? false : immediate });
    return;
  }

  if (behavior) {
    window.scrollTo({ top: 0, left: 0, behavior });
  } else {
    resetNativeScroll();
  }
}

export function registerLenis(lenis) {
  if (activeLenis === lenis) return;

  if (activeLenis && onLenisScrollHandler) {
    activeLenis.off("scroll", onLenisScrollHandler);
  }

  activeLenis = lenis;
  onLenisScrollHandler = ({ scroll }) => notifyScroll(scroll);
  lenis.on("scroll", onLenisScrollHandler);

  resetNativeScroll();
  lenis.scrollTo(0, { immediate: true });
  notifyScroll(0);
}

export function unregisterLenis(lenis) {
  if (activeLenis !== lenis) return;

  if (onLenisScrollHandler) {
    lenis.off("scroll", onLenisScrollHandler);
    onLenisScrollHandler = null;
  }

  activeLenis = null;
  pauseCount = 0;
  resetNativeScroll();
}

export function getScrollY() {
  return activeLenis?.scroll ?? window.scrollY;
}

export function subscribeScroll(listener) {
  scrollListeners.add(listener);
  listener(getScrollY());
  return () => scrollListeners.delete(listener);
}

export function pauseLenis() {
  pauseCount += 1;
  activeLenis?.stop();
}

export function resumeLenis() {
  pauseCount = Math.max(0, pauseCount - 1);
  if (pauseCount === 0) {
    activeLenis?.start();
  }
}
