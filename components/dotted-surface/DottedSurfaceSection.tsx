import { DottedSurfaceCanvas } from "@/components/dotted-surface/DottedSurfaceCanvas";

import "./dotted-surface.css";

export function DottedSurfaceSection() {
  return (
    <section className="dotted scroll-mt-28" id="signal" aria-labelledby="dotted-heading">
      <DottedSurfaceCanvas />
      <div className="dotted__glow" aria-hidden />

      <div className="dotted__content">
        <p className="dotted__label">Operator signal · FIVEO</p>
        <blockquote className="dotted__quote">
          <h2 id="dotted-heading">
            <span className="dotted__line">Code the stack</span>
            <span className="dotted__line">ship it live</span>
          </h2>
        </blockquote>
        <cite className="dotted__cite">FIVEO · Full Stack · Web · AI · Remote</cite>
        <a href="#contact" className="dotted__cta">
          Start transmission →
        </a>
      </div>
    </section>
  );
}
