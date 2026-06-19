import { DottedSurfaceCanvas } from "@/components/dotted-surface/DottedSurfaceCanvas";

import "./dotted-surface.css";

export function DottedSurfaceSection() {
  return (
    <section className="dotted scroll-mt-28" id="signal" aria-labelledby="dotted-heading">
      <DottedSurfaceCanvas />
      <div className="dotted__glow" aria-hidden />
      <svg className="dotted__rule" viewBox="0 0 1000 3" preserveAspectRatio="none" aria-hidden>
        <line x1="0" y1="1.5" x2="1000" y2="1.5" />
      </svg>

      <div className="dotted__content">
        <p className="dotted__label">How we work · FIVEO</p>
        <blockquote className="dotted__quote">
          <h2 id="dotted-heading">
            <span className="dotted__line">We build the stack</span>
            <span className="dotted__line">and ship it live</span>
          </h2>
        </blockquote>
      </div>
    </section>
  );
}
