"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { notifyLoaderDone } from "@/lib/loaderReady";
import "./loader.css";

const MIN_MS = 2600;
const MAX_MS = 4800;

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

const LETTERS = ["F", "I", "V", "E", "O"] as const;

const letterVariants: Variants = {
  hidden: { y: "120%" },
  show: (i: number) => ({
    y: "0%",
    transition: { delay: 0.1 + i * 0.09, duration: 1, ease: EASE_OUT },
  }),
};

export function SiteLoader() {
  const reduceMotion = useReducedMotion() === true;
  const [visible, setVisible] = useState(!reduceMotion);
  const [phase, setPhase] = useState<"intro" | "lock" | "exit">("intro");
  const [count, setCount] = useState(0);

  const loadedRef = useRef(false);
  const finishedRef = useRef(false);
  const startRef = useRef(0);

  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 38, damping: 20, mass: 0.9 });
  const barScale = useTransform(smoothProgress, (v) => v / 100);

  const lockBody = useCallback((lock: boolean) => {
    document.body.classList.toggle("site-loader-active", lock);
  }, []);

  const finish = useCallback(() => {
    if (finishedRef.current || !loadedRef.current) return;

    const elapsed = performance.now() - startRef.current;
    if (elapsed < MIN_MS) {
      window.setTimeout(finish, MIN_MS - elapsed);
      return;
    }

    finishedRef.current = true;
    progress.set(100);
    setCount(100);
    setPhase("lock");
    // brief beat on the locked logo, then iris out through the O — hero
    // animations are released as the page is revealed.
    window.setTimeout(() => {
      setPhase("exit");
      notifyLoaderDone();
    }, 620);
    window.setTimeout(() => {
      setVisible(false);
      lockBody(false);
    }, 620 + 1050);
  }, [lockBody, progress]);

  useEffect(() => {
    if (reduceMotion) {
      // No loader is shown — let hero animations run right away.
      notifyLoaderDone();
      return;
    }

    startRef.current = performance.now();
    lockBody(true);

    const onLoad = () => {
      loadedRef.current = true;
      finish();
    };

    if (document.readyState === "complete") {
      loadedRef.current = true;
    } else {
      window.addEventListener("load", onLoad);
    }

    const maxTimer = window.setTimeout(() => {
      loadedRef.current = true;
      finish();
    }, MAX_MS);

    // Animate the counter toward a moving target so it always feels alive.
    let raf = 0;
    const tick = () => {
      if (finishedRef.current) return;
      const elapsed = performance.now() - startRef.current;
      // ease toward 90% across MIN_MS, then hold until load completes
      const target = Math.min(90, (elapsed / MIN_MS) * 90);
      setCount((prev) => {
        const next = prev + (target - prev) * 0.12;
        progress.set(next);
        return next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", onLoad);
      window.clearTimeout(maxTimer);
      lockBody(false);
    };
  }, [reduceMotion, finish, lockBody, progress]);

  if (reduceMotion || !visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="site-loader fixed inset-0 z-[99999] overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading FiveO"
          initial={{ clipPath: "circle(150% at 50% 46%)" }}
          exit={{
            clipPath: "circle(0% at 50% 46%)",
            transition: { duration: 1.0, ease: EASE_IN_OUT },
          }}
        >
          <div className="site-loader__veil" />
          <div className="site-loader__glow" />
          <div className="site-loader__grain" />

          <motion.div
            className="site-loader__content absolute inset-0"
            animate={{
              scale: phase === "exit" ? 1.16 : 1,
              opacity: phase === "exit" ? 0 : 1,
            }}
            transition={{ duration: 1, ease: EASE_IN_OUT }}
          >
            <motion.p
              className="site-loader__meta"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
            >
              Studio online
            </motion.p>

            <div className="site-loader__word">
              {LETTERS.map((letter, i) => (
                <span key={letter} className="site-loader__letter-mask">
                  <motion.span
                    className="site-loader__letter"
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {letter}
                  </motion.span>
                </span>
              ))}
            </div>

            <motion.p
              className="site-loader__role"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: EASE_OUT }}
            >
              Web&nbsp;·&nbsp;Apps&nbsp;·&nbsp;AI&nbsp;engineering
            </motion.p>

            <motion.div
              className="site-loader__footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="site-loader__bar" aria-hidden>
                <motion.span className="site-loader__bar-fill" style={{ scaleX: barScale }} />
              </div>
              <span className="site-loader__count">
                {String(Math.round(count)).padStart(3, "0")}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
