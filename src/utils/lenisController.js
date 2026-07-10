/** Shared registry so overlays (e.g. portfolio drawer) can pause page Lenis. */
let activeLenis = null;
let pauseCount = 0;
let onLenisScrollHandler = null;

const scrollListeners = new Set();

function notifyScroll(scroll) {
  scrollListeners.forEach((listener) => listener(scroll));
}

export function registerLenis(lenis) {
  if (activeLenis === lenis) return;

  if (activeLenis && onLenisScrollHandler) {
    activeLenis.off("scroll", onLenisScrollHandler);
  }

  activeLenis = lenis;
  onLenisScrollHandler = ({ scroll }) => notifyScroll(scroll);
  lenis.on("scroll", onLenisScrollHandler);
  notifyScroll(lenis.scroll);
}

export function unregisterLenis(lenis) {
  if (activeLenis !== lenis) return;

  if (onLenisScrollHandler) {
    lenis.off("scroll", onLenisScrollHandler);
    onLenisScrollHandler = null;
  }

  activeLenis = null;
  pauseCount = 0;
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
