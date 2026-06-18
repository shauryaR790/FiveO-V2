const EVENT_NAME = "fiveo:loader-done";

let loaderDone = false;

/** Called by the site loader once its exit animation begins. */
export function notifyLoaderDone() {
  if (loaderDone) return;
  loaderDone = true;
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(EVENT_NAME));
  }
}

/**
 * Runs `callback` once the loader has finished (or immediately if it already
 * has / we're not in the browser). Returns a cleanup function.
 */
export function whenLoaderDone(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  if (loaderDone) {
    callback();
    return () => {};
  }

  const handler = () => callback();
  window.addEventListener(EVENT_NAME, handler, { once: true });
  return () => window.removeEventListener(EVENT_NAME, handler);
}
