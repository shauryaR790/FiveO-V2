import { FigmintComputer } from "@/components/fiveo-identity/FigmintComputer";
import { FigmintGlobeBadge } from "@/components/fiveo-identity/FigmintGlobeBadge";

import "./figmint.css";

const SPECS = [
  { label: "Stack", value: "Full-Stack" },
  { label: "Design", value: "UI / UX" },
  { label: "Ship", value: "Production" },
  { label: "AI", value: "LLM · APIs" },
] as const;

export function FigmintSection() {
  return (
    <section className="figmint scroll-mt-28" id="studio" aria-labelledby="figmint-heading">
      <div className="figmint-inner figmint-inner--stage">
        <div className="figmint-anchor figmint-anchor--tl">
          <h2 className="figmint-title" id="figmint-heading">
            <span>We are</span>
            <span className="italic">FiveO.</span>
          </h2>
        </div>

        <div className="figmint-anchor figmint-anchor--bl">
          <p className="lead">
            FIVEO. Senior web studio for teams that need creative sites and production-grade
            engineering. We design unforgettable interfaces, ship full-stack web and AI products, and
            own every launch end to end.
          </p>
        </div>

        <div className="figmint-center">
          <FigmintComputer />
        </div>

        <div className="figmint-side figmint-side--right">
          <div className="figmint-anchor figmint-anchor--tr">
            <div className="cta-group">
              <a href="#cases" className="btn">
                View projects
              </a>
              <div className="price-tag">OPEN / REMOTE</div>
            </div>
          </div>

          <FigmintGlobeBadge />

          <div className="figmint-anchor figmint-anchor--br">
            <div className="specs-grid">
              {SPECS.map((spec) => (
                <div key={spec.label} className="spec-item">
                  <h4>{spec.label}</h4>
                  <p>{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
