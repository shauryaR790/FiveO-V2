import { LogoMark } from "@/components/hero/LogoMark";
import { SITE_NAV_LINKS } from "@/lib/site-nav";

export function SiteFooter() {
  return (
    <footer
      className="relative border-t border-white/10 bg-black text-cream"
      aria-labelledby="site-footer-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28 lg:py-36">
        <div className="flex flex-col gap-16 lg:gap-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="min-w-0 space-y-6">
              <p className="flex items-center gap-3 text-cream/45">
                <LogoMark className="text-cream" size={22} />
                <span className="font-sans text-sm font-medium uppercase tracking-[0.22em] md:text-base">
                  Studio
                </span>
              </p>
              <h2
                id="site-footer-heading"
                className="font-heading text-[clamp(4rem,18vw,13.5rem)] font-normal leading-[0.8] tracking-[-0.045em] text-cream"
              >
                Five
                <span className="font-serif-accent relative inline-block translate-y-[0.02em] text-[0.92em] font-normal italic tracking-tight text-cream">
                  O
                </span>
              </h2>
              <p className="max-w-2xl font-serif-accent text-[clamp(1.15rem,2.4vw,1.85rem)] italic leading-snug text-cream/55">
                Web, mobile, cloud APIs, and LLM-backed products—designed, built, and shipped with one
                team.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-md bg-accent px-6 py-4 text-base font-semibold tracking-tight text-white shadow-[0_0_36px_rgba(61,94,255,0.4)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_52px_rgba(61,94,255,0.55)] md:px-8 md:py-5 md:text-lg"
            >
              <span className="text-xl leading-none md:text-2xl">+</span>
              Start a project
            </a>
          </div>

          <div className="grid gap-12 border-t border-white/10 pt-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:pt-16">
            <nav className="lg:col-span-5" aria-label="Footer">
              <p className="mb-6 font-heading text-[clamp(1.5rem,3.8vw,2.5rem)] font-normal tracking-[-0.02em] text-cream">
                Explore
              </p>
              <ul className="flex flex-col gap-4 md:gap-5" role="list">
                {SITE_NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 font-heading text-[clamp(1.25rem,2.8vw,2rem)] font-normal tracking-[-0.02em] text-cream/75 transition-colors hover:text-cream"
                    >
                      <span className="text-cream/30 transition-colors group-hover:text-accent">—</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col justify-between gap-10 lg:col-span-7 lg:flex-row lg:gap-16">
              <div className="min-w-0">
                <p className="mb-6 font-heading text-[clamp(1.5rem,3.8vw,2.5rem)] font-normal tracking-[-0.02em] text-cream">
                  Contact
                </p>
                <a
                  href="#top"
                  className="font-serif-accent text-xl italic text-cream/70 underline decoration-white/20 underline-offset-8 transition-colors hover:text-cream md:text-2xl"
                >
                  Back to top
                </a>
              </div>
              <p className="max-w-sm self-end font-sans text-base leading-relaxed text-cream/45 lg:max-w-[30ch] lg:text-lg lg:leading-relaxed">
                FiveO partners with product teams who need memorable interfaces, solid architecture, and
                AI features that survive real users.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-10 text-sm text-cream/40 md:flex-row md:items-center md:text-base">
            <span>© {new Date().getFullYear()} FiveO. All rights reserved.</span>
            <span className="font-medium tracking-tight text-cream/55">Engineering studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
