"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useCallback, useRef } from "react";

import { FigmintTypewriter } from "@/components/fiveo-identity/FigmintTypewriter";

const IDLE_ROTATE_Y = -16;
const IDLE_ROTATE_X = 6;

export function FigmintComputer() {
  const reduce = useReducedMotion() === true;
  const sceneRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);

  const rotateY = useMotionValue(IDLE_ROTATE_Y);
  const rotateX = useMotionValue(IDLE_ROTATE_X);
  const springY = useSpring(rotateY, { stiffness: 110, damping: 22, mass: 0.65 });
  const springX = useSpring(rotateX, { stiffness: 110, damping: 22, mass: 0.65 });

  const faceForward = useCallback(() => {
    hoveredRef.current = true;
    rotateY.set(0);
    rotateX.set(0);
  }, [rotateX, rotateY]);

  const returnToIdle = useCallback(() => {
    hoveredRef.current = false;
    rotateY.set(IDLE_ROTATE_Y);
    rotateX.set(IDLE_ROTATE_X);
  }, [rotateX, rotateY]);

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (reduce || !hoveredRef.current) return;

      const scene = sceneRef.current;
      if (!scene) return;

      const rect = scene.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;

      rotateY.set(nx * 10);
      rotateX.set(-ny * 7);
    },
    [reduce, rotateX, rotateY],
  );

  return (
    <div className="product-col">
      <div className="scene-scale">
        <motion.div
          ref={sceneRef}
          className="scene"
          id="figmint-scene"
          style={
            reduce
              ? undefined
              : {
                  rotateY: springY,
                  rotateX: springX,
                  transformPerspective: 1400,
                }
          }
          onPointerEnter={reduce ? undefined : faceForward}
          onPointerLeave={reduce ? undefined : returnToIdle}
          onPointerMove={reduce ? undefined : onPointerMove}
        >
        <div className="computer-unit">
          <div className="face front">
            <div className="screen-inset">
              <div className="crt">
                <div className="crt-glow">
                  <div className="crt-ui">
                    <div className="sidebar">
                      <div className="icon-list">
                        <div>
                          <span className="icon-circle blue" /> System
                        </div>
                        <div>
                          <span className="icon-circle orange" /> Disk A
                        </div>
                        <div>
                          <span className="icon-circle" /> Trash
                        </div>
                        <div>
                          <span className="icon-circle" /> Write
                        </div>
                        <div>
                          <span className="icon-circle" /> Think
                        </div>
                      </div>
                    </div>
                    <div className="main-area">
                      <div className="fig-os-label">FigOS 1.0</div>
                      <div className="window">
                        <div className="window-header">
                          <span>Untitled.txt</span>
                          <span>[x]</span>
                        </div>
                        <div className="typing-container">
                          <FigmintTypewriter />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="logo-badge" aria-hidden />
            <div className="floppy-slot" aria-hidden />

            <div className="sticker sticker-ball" aria-hidden />
            <div className="sticker sticker-star" aria-hidden />
            <div className="sticker sticker-text" aria-hidden>
              MACHINE
              <br />
              INTELLIGENCE
            </div>

            <div className="grill" aria-hidden>
              <div className="vent" />
              <div className="vent" />
              <div className="vent" />
              <div className="vent" />
              <div className="vent" />
              <div className="vent" />
              <div className="vent" />
              <div className="vent" />
            </div>
          </div>
          <div className="face back" aria-hidden />
          <div className="face left" aria-hidden />
          <div className="face right" aria-hidden />
          <div className="face top" aria-hidden />
          <div className="face bottom" aria-hidden />

          <div className="keyboard-assembly" aria-hidden>
            <div className="kb-base">
              <div className="keys-grid">
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />

                <div className="key wide" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
                <div className="key wide" />

                <div className="key" />
                <div className="key" />
                <div className="key space" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
              </div>
            </div>
            <div className="kb-front" />
            <div className="kb-back" />
            <div className="kb-left" />
            <div className="kb-right" />
            <div className="kb-shadow" />
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
}
