"use client";

import { useId } from "react";

const RING_TEXT = "FIVEO • FULL STACK • UI/UX • AI • SHIP •";

export function FigmintGlobeBadge() {
  const pathId = useId().replace(/:/g, "");

  return (
    <div className="figmint-globe-badge" aria-label="FiveO capabilities">
      <div className="figmint-globe-badge__inner">
        <svg
          viewBox="0 0 100 100"
          className="figmint-globe-badge__icon"
          aria-hidden
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="50" cy="50" rx="18" ry="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        <div className="figmint-globe-badge__ring" aria-hidden>
          <svg viewBox="0 0 200 200">
            <path
              id={pathId}
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              fill="none"
            />
            <text>
              <textPath href={`#${pathId}`} startOffset="0%">
                {RING_TEXT}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
