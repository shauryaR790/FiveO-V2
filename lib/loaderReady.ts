const EVENT_NAME = "fiveo:loader-done";

let loaderDone = false;
const listeners = new Set<() => void>();

/** Called once the loader has fully exited and the hero can animate in. */
export function notifyLoaderDone() {
  if (loaderDone) return;
  loaderDone = true;
  if (typeof window === "undefined") return;

  window.dispatchEvent(new Event(EVENT_NAME));
  listeners.forEach((fn) => fn());
  listeners.clear();
}

/**
 * Runs `callback` once the loader has finished. Returns a cleanup function.
 * Uses rAF so GSAP timelines are ready when the callback fires.
 */
export function whenLoaderDone(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  const run = () => requestAnimationFrame(() => callback());

  if (loaderDone) {
    run();
    return () => {};
  }

  listeners.add(callback);
  const onEvent = () => {
    listeners.delete(callback);
    run();
  };
  window.addEventListener(EVENT_NAME, onEvent, { once: true });

  return () => {
    listeners.delete(callback);
    window.removeEventListener(EVENT_NAME, onEvent);
  };
}
