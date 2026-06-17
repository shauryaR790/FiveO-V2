"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import "./loader.css";

const TARGET = "FIVEO";
const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&";
const SHUTTER_COUNT = 11;
const MIN_MS = 2600;
const MAX_MS = 4800;

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_SHUTTER = [0.76, 0, 0.24, 1] as const;

const RINGS = [
  { r: 38, opacity: 0.35, duration: 8 },
  { r: 52, opacity: 0.5, duration: 11 },
  { r: 66, opacity: 0.65, duration: 14 },
] as const;

function OrbitDot({ r, duration, delay }: { r: number; duration: number; delay: number }) {
  return (
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
      style={{ transformOrigin: "70px 70px" }}
    >
      <circle cx={70 + r} cy={70} r={2.8} fill="currentColor" />
    </motion.g>
  );
}

function LoaderOrbit() {
  return (
    <div className="site-loader__orbit" aria-hidden>
      <svg viewBox="0 0 140 140" fill="none">
        {RINGS.map((ring, i) => (
          <motion.circle
            key={ring.r}
            className="site-loader__ring"
            cx={70}
            cy={70}
            r={ring.r}
            strokeOpacity={ring.opacity}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.15 + i * 0.12,
              ease: EASE_OUT,
            }}
          />
        ))}
        {RINGS.map((ring, ri) => (
          <OrbitDot key={`dot-${ring.r}`} r={ring.r} duration={ring.duration} delay={ri * 0.35} />
        ))}
        <motion.path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="currentColor"
          transform="translate(58 58) scale(1.05)"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          style={{ transformOrigin: "70px 70px" }}
        />
      </svg>
    </div>
  );
}

export function SiteLoader() {
  const reduceMotion = useReducedMotion() === true;
  const [visible, setVisible] = useState(!reduceMotion);
  const [phase, setPhase] = useState<"load" | "scan" | "exit" | "done">("load");
  const [decode, setDecode] = useState("");
  const [locked, setLocked] = useState(false);
  const [roleVisible, setRoleVisible] = useState(false);
  const [stampVisible, setStampVisible] = useState(false);
  const [progressLabel, setProgressLabel] = useState(0);

  const loadedRef = useRef(false);
  const finishedRef = useRef(false);
  const decodedRef = useRef(false);
  const scrambleFrame = useRef(0);
  const startRef = useRef(0);

  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 42, damping: 18, mass: 0.8 });
  const progressScale = useTransform(smoothProgress, (v) => v / 100);

  const lockBody = useCallback((lock: boolean) => {
    document.body.classList.toggle("site-loader-active", lock);
  }, []);

  const finish = useCallback(() => {
    if (finishedRef.current || !loadedRef.current || !decodedRef.current) return;

    const elapsed = performance.now() - startRef.current;
    if (elapsed < MIN_MS) {
      window.setTimeout(finish, MIN_MS - elapsed);
      return;
    }

    finishedRef.current = true;
    setPhase("scan");
    window.setTimeout(() => setStampVisible(true), 380);
    window.setTimeout(() => setPhase("exit"), 720);
    window.setTimeout(() => {
      setVisible(false);
      setPhase("done");
      lockBody(false);
    }, 1500);
  }, [lockBody]);

  useEffect(() => {
    if (reduceMotion) return;

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

    let raf = 0;
    const scramble = () => {
      if (finishedRef.current) return;

      const frame = scrambleFrame.current;
      if (frame > 52) {
        setDecode(TARGET);
        setLocked(true);
        setRoleVisible(true);
        decodedRef.current = true;
        progress.set(100);
        setProgressLabel(100);
        loadedRef.current = true;
        finish();
        return;
      }

      setDecode(
        TARGET.split("")
          .map((char, i) => {
            if (frame > i * 3 + 10) return char;
            return POOL[Math.floor(Math.random() * POOL.length)];
          })
          .join(""),
      );

      progress.set(Math.min(92, 12 + frame * 1.55));
      setProgressLabel(Math.min(92, Math.round(12 + frame * 1.55)));
      scrambleFrame.current += 1;
      raf = requestAnimationFrame(scramble);
    };

    raf = requestAnimationFrame(scramble);

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
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="site-loader__veil" />
          <div className="site-loader__grid" />
          <div className="site-loader__grain" />

          <motion.div
            className="site-loader__content absolute inset-0"
            animate={{ opacity: phase === "exit" ? 0 : 1 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
          >
            <LoaderOrbit />

            <p className="site-loader__meta">Studio online · FiveO</p>

            <h1 className={`site-loader__decode${locked ? " is-locked" : ""}`}>
              {decode || "\u00A0"}
            </h1>

            <motion.p
              className="site-loader__role"
              initial={{ opacity: 0, y: 8 }}
              animate={roleVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE_OUT }}
            >
              Web · Apps · AI engineering
            </motion.p>

            <div className="site-loader__progress" aria-hidden>
              <motion.div
                className="site-loader__progress-fill"
                style={{ scaleX: progressScale }}
              />
            </div>
            <motion.p className="site-loader__progress-label" style={{ opacity: roleVisible ? 1 : 0 }}>
              {progressLabel}%
            </motion.p>

            <AnimatePresence>
              {(phase === "scan" || phase === "exit") && (
                <motion.div
                  className="site-loader__scan"
                  initial={{ top: "14%", opacity: 0 }}
                  animate={{ top: "86%", opacity: [0, 1, 1, 0.6] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.95, ease: EASE_OUT }}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {stampVisible && (
                <motion.div
                  className="site-loader__stamp"
                  initial={{ opacity: 0, scale: 1.8, rotate: -16, x: "-50%", y: "-50%" }}
                  animate={{ opacity: 1, scale: 1, rotate: -6, x: "-50%", y: "-50%" }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.45, ease: EASE_OUT }}
                >
                  Live
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="site-loader__shutters" aria-hidden>
            {Array.from({ length: SHUTTER_COUNT }, (_, i) => (
              <motion.div
                key={i}
                className="site-loader__shutter"
                initial={{ y: "0%" }}
                animate={{ y: phase === "exit" ? "-108%" : "0%" }}
                transition={{
                  duration: 0.72,
                  delay: phase === "exit" ? Math.abs(i - (SHUTTER_COUNT - 1) / 2) * 0.038 : 0,
                  ease: EASE_SHUTTER,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
