"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

import "./kernel-bento.css";

gsap.registerPlugin(ScrollTrigger);

const DESK_IMG =
  "https://images.unsplash.com/photo-1496559249665-c7e2874707ea?q=80&w=2574&auto=format&fit=crop";
const CODE_IMG =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop";

export function KernelBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || reduce) return;

      ScrollTrigger.batch(".kernel .card", {
        start: "top 92%",
        onEnter: (batch) => {
          gsap.from(batch, {
            y: 36,
            scale: 0.97,
            duration: 0.65,
            stagger: 0.06,
            ease: "power3.out",
            overwrite: true,
          });
        },
      });
    },
    { scope: sectionRef, dependencies: [reduce] },
  );

  return (
    <section ref={sectionRef} className="kernel scroll-mt-28" id="services" aria-label="Capabilities">
      <div className="kernel-wrapper">
        <main className="bento-grid">
          <article className="card span-2">
            <div className="content-overlay">
              <span className="meta-tag">What we do</span>
              <h2 className="headline headline-large">DESIGN. BUILD. SHIP.</h2>
              <p className="copy">
                Product design, full-stack engineering, and AI integration under one roof. One team
                designs the interface, builds the system, and owns the launch — start to finish.
              </p>
            </div>
          </article>

          <a href="#cases" className="card span-2">
            <img src={DESK_IMG} alt="Modern engineering workspace" className="card-image" />
            <div className="content-overlay content-overlay--light">
              <span className="meta-tag" style={{ color: "rgba(255,255,255,0.8)" }}>
                Engineering Culture
              </span>
              <div className="content-overlay__foot">
                <h3 className="headline">CLOUD-NATIVE WORKFLOW</h3>
                <span className="arrow-icon">↗</span>
              </div>
            </div>
          </a>

          <a href="#services" className="card">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Artificial Intelligence</span>
            <h3 className="headline">AI Integration</h3>
            <div className="terminal-block">
              <span className="prompt">deploy ai-feature</span>
              <br />
              &gt; Model: connected
              <br />
              &gt; Status: in production
            </div>
          </a>

          <a href="#services" className="card dark">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Security</span>
            <h3 className="headline">Secure by Default</h3>
            <p className="copy" style={{ marginBottom: 20 }}>
              Auth done right, dependency hygiene, and hardening built into every release — security
              is part of the foundation, not a pre-launch scramble.
            </p>
            <div className="terminal-block">
              <span className="prompt">npm audit --production</span>
              <span className="cursor" />
            </div>
          </a>

          <div className="card card--top-head card--stat">
            <span className="meta-tag">Track record</span>
            <h3 className="headline">Products Shipped</h3>
            <div className="stat-large">50+</div>
          </div>

          <a href="#services" className="card card--top-head">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Engineering</span>
            <h3 className="headline">Full-Stack Build</h3>
            <p className="copy">
              React, Node, databases, and APIs — we build the entire stack, not just the layer your
              customers see.
            </p>
          </a>

          <a href="#cases" className="card span-2">
            <img src={CODE_IMG} alt="Production codebase" className="card-image" />
            <div className="content-overlay">
              <span className="meta-tag" style={{ color: "white", mixBlendMode: "difference" }}>
                Recent Launches
              </span>
            </div>
          </a>

          <a href="#services" className="card">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Performance</span>
            <h3 className="headline">Speed at Scale</h3>
            <p className="copy">
              Lean bundles, smart caching, and real-user metrics so every release stays fast in
              production.
            </p>
          </a>

          <a href="#services" className="card">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Design</span>
            <h3 className="headline">UI / UX Systems</h3>
            <p className="copy">
              Design systems, typography, and interfaces engineered to convert — where form always
              follows function.
            </p>
          </a>

          <a href="#services" className="card dark card--philosophy">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Philosophy</span>
            <h3 className="headline">BUILT TO LAST</h3>
            <p className="copy">
              We don&apos;t ship demos. Every product is engineered, tested, and hardened until it
              holds up under real customers and real load.
            </p>
          </a>

          <div className="card card--status">
            <span className="meta-tag">Availability</span>
            <h3 className="headline">Taking Projects</h3>
            <p className="copy">Now booking new product builds — web platforms, SaaS dashboards, and AI features.</p>
            <a href="#contact" className="newsletter-input" style={{ color: "inherit", textDecoration: "none" }}>
              <span>Start a project</span>
              <span>→</span>
            </a>
          </div>

          <a href="#contact" className="card span-2 card--top-head card--contact">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Contact</span>
            <h3 className="headline">Work With Us</h3>

            <div className="contact-display">
              <div className="contact-display__primary">
                <span className="contact-display__status">Available · Remote · Worldwide</span>
                <p className="contact-display__cta">
                  Tell us what you&apos;re building — we reply within one business day.
                </p>
              </div>
              <div className="contact-display__scope">
                <p>
                  <span>01</span>Web &amp; product engineering
                </p>
                <p>
                  <span>02</span>UI / UX systems
                </p>
                <p>
                  <span>03</span>AI &amp; integrations
                </p>
              </div>
            </div>

            <div className="terminal-block contact-card__terminal">
              <span className="prompt">goto contact</span>
              <br />
              &gt; web · saas · ai products
              <br />
              &gt; design · build · ship
              <span className="cursor" />
            </div>
          </a>
        </main>
      </div>
    </section>
  );
}
