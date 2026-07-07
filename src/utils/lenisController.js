/** Shared registry so overlays (e.g. portfolio drawer) can pause page Lenis. */
let activeLenis = null;
let pauseCount = 0;

export function registerLenis(lenis) {
  activeLenis = lenis;
}

export function unregisterLenis(lenis) {
  if (activeLenis === lenis) {
    activeLenis = null;
    pauseCount = 0;
  }
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
