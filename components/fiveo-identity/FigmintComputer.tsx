"use client";

import { FigmintTypewriter } from "@/components/fiveo-identity/FigmintTypewriter";

export function FigmintComputer() {
  return (
    <div className="product-col">
      <div className="scene" id="figmint-scene">
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
      </div>
    </div>
  );
}
