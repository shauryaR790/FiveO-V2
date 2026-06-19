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
              <span className="meta-tag">Manifesto</span>
              <h2 className="headline headline-large">DESIGN. BUILD. SHIP.</h2>
              <p className="copy">
                Full-stack development, UI/UX design, and cybersecurity — one operator, many
                terminals. Code the front end. Probe the network. Ship the product.
              </p>
            </div>
          </article>

          <a href="#services" className="card span-2">
            <img src={DESK_IMG} alt="Minimalist desk setup" className="card-image" />
            <div className="content-overlay content-overlay--light">
              <span className="meta-tag" style={{ color: "rgba(255,255,255,0.8)" }}>
                Dev Environment
              </span>
              <div className="content-overlay__foot">
                <h3 className="headline">LINUX + KALI WORKFLOW</h3>
                <span className="arrow-icon">↗</span>
              </div>
            </div>
          </a>

          <a href="#services" className="card">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Artificial Intelligence</span>
            <h3 className="headline">AI Workflows</h3>
            <div className="terminal-block">
              <span className="prompt">python run_pipeline.py</span>
              <br />
              &gt; Model: loaded
              <br />
              &gt; Output: deployed
            </div>
          </a>

          <a href="#services" className="card dark">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Security</span>
            <h3 className="headline">Kali Linux Ops</h3>
            <p className="copy" style={{ marginBottom: 20 }}>
              Ethical hacking practice on Kali. Nmap for recon, Wireshark for packet analysis, Linux
              for everything underneath.
            </p>
            <div className="terminal-block">
              <span className="prompt">nmap -sV target.local</span>
              <span className="cursor" />
            </div>
          </a>

          <div className="card card--top-head">
            <span className="meta-tag">Output</span>
            <h3 className="headline">Sites Shipped</h3>
            <div className="stat-large">MANY</div>
          </div>

          <a href="#services" className="card card--top-head">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Engineering</span>
            <h3 className="headline">Full-Stack Dev</h3>
            <p className="copy">
              React, Node, databases, APIs. I build the whole stack — not just the pretty layer on
              top.
            </p>
          </a>

          <a href="#cases" className="card span-2">
            <img src={CODE_IMG} alt="Code on screen" className="card-image" />
            <div className="content-overlay">
              <span className="meta-tag" style={{ color: "white", mixBlendMode: "difference" }}>
                Live Projects
              </span>
            </div>
          </a>

          <a href="#services" className="card">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Terminal</span>
            <h3 className="headline">Wireshark</h3>
            <p className="copy">Packet capture and network analysis. Reading traffic like source code.</p>
          </a>

          <a href="#services" className="card">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Design</span>
            <h3 className="headline">UI / UX Craft</h3>
            <p className="copy">
              Sites I designed and built. Typography, grids, brutalist systems — form follows
              function.
            </p>
          </a>

          <a href="#services" className="card dark">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Philosophy</span>
            <h3 className="headline">LEARN BY BREAKING</h3>
            <p className="copy">
              Cybersecurity isn&apos;t theory for me — it&apos;s Kali, Nmap, Wireshark, and Linux
              until the system makes sense.
            </p>
          </a>

          <a href="#contact" className="card span-2 card--top-head card--contact">
            <span className="arrow-icon">↗</span>
            <span className="meta-tag">Contact</span>
            <h3 className="headline">Get In Touch</h3>

            <div className="contact-display">
              <div className="contact-display__primary">
                <span className="contact-display__status">Open · Remote · IST</span>
                <p className="contact-display__cta">
                  Email &amp; phone live in the contact block — one place only.
                </p>
              </div>
              <div className="contact-display__scope">
                <p>
                  <span>01</span>Full-stack &amp; deploy
                </p>
                <p>
                  <span>02</span>UI / UX systems
                </p>
                <p>
                  <span>03</span>Cyber &amp; hardening
                </p>
              </div>
            </div>

            <div className="terminal-block contact-card__terminal">
              <span className="prompt">goto contact</span>
              <br />
              &gt; projects · collabs · freelance
              <br />
              &gt; full-stack · design · cyber
              <span className="cursor" />
            </div>
          </a>

          <div className="card">
            <span className="meta-tag">Status</span>
            <h3 className="headline">Open to Work</h3>
            <p className="copy">Projects, collabs, freelance — full-stack, design, or security consulting.</p>
            <a href="#contact" className="newsletter-input" style={{ color: "inherit", textDecoration: "none" }}>
              <span>Jump to contact</span>
              <span>→</span>
            </a>
          </div>
        </main>
      </div>
    </section>
  );
}
