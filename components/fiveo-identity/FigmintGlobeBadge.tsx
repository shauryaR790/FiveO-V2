"use client";

import { useId } from "react";

const RING_SEGMENT = "FIVEO • FULL STACK • UI/UX • AI • SHIP • REMOTE • ";
const RING_TEXT = RING_SEGMENT.repeat(2);

export function FigmintGlobeBadge() {
  const pathId = useId().replace(/:/g, "");

  return (
    <div className="figmint-globe-badge" aria-label="FiveO capabilities">
      <div className="figmint-globe-badge__inner">
        <div className="figmint-globe-badge__ring" aria-hidden>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id={pathId}
                d="M 100, 100 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
              />
            </defs>
            <circle
              cx="100"
              cy="100"
              r="82"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              opacity="0.35"
            />
            <text>
              <textPath href={`#${pathId}`} startOffset="0%" spacing="auto">
                {RING_TEXT}
              </textPath>
            </text>
          </svg>
        </div>

        <svg
          viewBox="0 0 100 100"
          className="figmint-globe-badge__icon"
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="50" cy="50" rx="18" ry="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}
