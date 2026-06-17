"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const TYPEWRITER_TEXT =
  "welcome to FIVEO studio. full stack · ui/ux · ai. scroll down — we ship live sites.";

export function FigmintTypewriter() {
  const reduceMotion = useReducedMotion() === true;
  const [text, setText] = useState(reduceMotion ? TYPEWRITER_TEXT : "");

  useEffect(() => {
    if (reduceMotion) {
      setText(TYPEWRITER_TEXT);
      return;
    }

    let index = 0;
    let resetTimeout: ReturnType<typeof setTimeout> | undefined;
    let typeTimeout: ReturnType<typeof setTimeout> | undefined;

    const type = () => {
      if (index < TYPEWRITER_TEXT.length) {
        setText(TYPEWRITER_TEXT.slice(0, index + 1));
        index += 1;
        typeTimeout = setTimeout(type, 100 + Math.random() * 50);
        return;
      }

      resetTimeout = setTimeout(() => {
        setText("");
        index = 0;
        type();
      }, 3000);
    };

    type();

    return () => {
      if (resetTimeout) clearTimeout(resetTimeout);
      if (typeTimeout) clearTimeout(typeTimeout);
    };
  }, [reduceMotion]);

  return (
    <>
      <span>{text}</span>
      <span className="cursor" aria-hidden />
    </>
  );
}
