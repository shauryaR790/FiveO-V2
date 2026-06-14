import { cn } from "@/lib/utils";

export type WorkProject = {
  category: string;
  title: string;
  metric: string;
  imageSrc: string;
  imageAlt: string;
};

const DEFAULT_PROJECTS: WorkProject[] = [
  {
    category: "B2B SaaS",
    title: "Northwind Labs",
    metric: "Design system + app shell in 10 weeks",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Analytics dashboard on a laptop",
  },
  {
    category: "Professional services",
    title: "Lumen Counsel",
    metric: "Headless site + secure client portal",
    imageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Developer workspace with monitors",
  },
  {
    category: "Fintech",
    title: "Apex Ledger",
    metric: "SOC2-minded auth + auditable event streams",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Financial charts and data visualization",
  },
  {
    category: "Marketplace",
    title: "Harbor Trade",
    metric: "Live in 6 markets, sub-2s LCP",
    imageSrc:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "E-commerce shopping on a phone",
  },
  {
    category: "Healthtech",
    title: "Vital Chorus",
    metric: "WCAG 2.2 AA + EHR-aware scheduling",
    imageSrc:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Clinical team collaborating",
  },
];

function WorkCard({ project }: { project: WorkProject }) {
  return (
    <article
      className={cn(
        "relative aspect-[3/2] w-[min(90vw,480px)] shrink-0 overflow-hidden rounded-xl border border-white/10",
        "shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7)] sm:w-[min(88vw,560px)] md:w-[min(82vw,680px)] lg:w-[min(78vw,800px)]",
      )}
    >
      <img
        src={project.imageSrc}
        alt={project.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-top"
        draggable={false}
        loading="lazy"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent to-[55%]"
        aria-hidden
      />
      <div className="relative z-10 flex h-full flex-col p-5 md:p-6 lg:p-8">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/85 md:text-xs">
          {project.category}
        </p>
        <div className="mt-auto">
          <h3 className="font-heading text-[clamp(1.5rem,4vw,2.35rem)] font-normal leading-[1.05] tracking-[-0.03em] text-cream md:text-[clamp(1.65rem,3.2vw,2.65rem)]">
            {project.title}
          </h3>
          <p className="mt-2 font-serif-accent text-sm italic leading-snug text-cream/90 md:mt-3 md:text-base">
            {project.metric}
          </p>
        </div>
      </div>
    </article>
  );
}

type SelectedWorkSectionProps = {
  projects?: WorkProject[];
};

export function SelectedWorkSection({ projects = DEFAULT_PROJECTS }: SelectedWorkSectionProps) {
  return (
    <section
      id="cases"
      className="scroll-mt-28 bg-black py-16 text-cream md:py-20 lg:py-24"
      aria-labelledby="selected-work-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="mx-auto flex max-w-3xl flex-col items-center pb-10 text-center lg:pb-14">
          <h2
            id="selected-work-heading"
            className="section-title font-heading text-[clamp(2.85rem,7.5vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-cream xl:text-[clamp(3.25rem,6.5vw,6.25rem)]"
          >
            Selected <span className="font-serif-accent font-normal italic text-cream">work</span>
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-cream/65 md:text-lg lg:text-xl">
            Marketing sites, dashboards, native clients, and LLM copilots we have shipped with founders and
            internal product teams.
          </p>
        </header>
      </div>

      <div
        className="relative overflow-hidden pb-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="work-marquee-track flex w-max gap-5 md:gap-6">
          <div className="flex gap-5 pr-3 md:gap-6 md:pr-4">
            {projects.map((project) => (
              <WorkCard key={project.title} project={project} />
            ))}
          </div>
          <div className="flex gap-5 pr-3 md:gap-6 md:pr-4" aria-hidden>
            {projects.map((project) => (
              <WorkCard key={`${project.title}-loop`} project={project} />
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only">This row scrolls automatically; it repeats all projects in a continuous loop.</p>
    </section>
  );
}
