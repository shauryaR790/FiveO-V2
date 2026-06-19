"use client";

import { useEffect, useState } from "react";

const READOUTS = [
  "Build pipeline nominal.",
  "Design systems online.",
  "LLM workflows armed.",
  "Launch window open.",
] as const;

const METRICS = [
  { label: "Status", value: "OPEN" },
  { label: "Node", value: "FIVEO-01" },
  { label: "Mode", value: "REMOTE" },
  { label: "Stack", value: "FULL" },
] as const;

const VERTICAL_COPY =
  "SHIP · ITERATE · DEPLOY · DESIGN · BUILD · SHIP · ITERATE · DEPLOY · ";

function formatClock() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}

export function FigmintSignalPanel() {
  const [clock, setClock] = useState("--:--:--");
  const [readoutIdx, setReadoutIdx] = useState(0);

  useEffect(() => {
    setClock(formatClock());
    const tick = window.setInterval(() => setClock(formatClock()), 1000);
    return () => window.clearInterval(tick);
  }, []);

  useEffect(() => {
    const cycle = window.setInterval(() => {
      setReadoutIdx((i) => (i + 1) % READOUTS.length);
    }, 3200);
    return () => window.clearInterval(cycle);
  }, []);

  return (
    <div className="figmint-signal" aria-label="Studio status">
      <div className="figmint-signal__panel">
        <div className="figmint-signal__rail" aria-hidden>
          <div className="figmint-signal__rail-track">{VERTICAL_COPY.repeat(3)}</div>
        </div>

        <div className="figmint-signal__main">
          <div className="figmint-signal__head">
            <span>SYS / FIVEO</span>
            <span className="figmint-signal__live">
              <span className="figmint-signal__dot" aria-hidden />
              LIVE
            </span>
          </div>

          <p className="figmint-signal__readout" key={readoutIdx}>
            &gt; {READOUTS[readoutIdx]}
            <span className="figmint-signal__cursor" aria-hidden />
          </p>

          <dl className="figmint-signal__metrics">
            {METRICS.map((item) => (
              <div key={item.label} className="figmint-signal__metric">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="figmint-signal__foot">
            <span>IST</span>
            <time dateTime={clock}>{clock}</time>
          </div>
        </div>
      </div>
    </div>
  );
}
