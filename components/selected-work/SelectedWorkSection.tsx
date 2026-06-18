import Image from "next/image";

import { cn } from "@/lib/utils";

export type WorkProject = {
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
};

const CAROUSEL_IMAGES = [
  { id: "01", width: 1920, height: 972 },
  { id: "03", width: 1920, height: 971 },
  { id: "04", width: 1920, height: 969 },
  { id: "05", width: 1920, height: 983 },
  { id: "06", width: 1920, height: 977 },
  { id: "07", width: 1920, height: 978 },
  { id: "08", width: 1920, height: 1259 },
  { id: "09", width: 1920, height: 979 },
  { id: "10", width: 1920, height: 976 },
  { id: "11", width: 1920, height: 973 },
  { id: "12", width: 1920, height: 981 },
  { id: "13", width: 1920, height: 972 },
  { id: "14", width: 1920, height: 975 },
  { id: "15", width: 1920, height: 980 },
] as const;

const SITE_SHOWCASE: WorkProject[] = CAROUSEL_IMAGES.map((item, index) => ({
  imageSrc: `/websites-built/${item.id}.png`,
  imageAlt: `Website and product build ${index + 1} delivered by FiveO`,
  width: item.width,
  height: item.height,
}));

function WorkCard({ project }: { project: WorkProject }) {
  return (
    <article
      className={cn(
        "shrink-0 overflow-hidden rounded-xl border border-white/10",
        "shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7)]",
        "w-[min(90vw,480px)] sm:w-[min(88vw,560px)] md:w-[min(82vw,680px)] lg:w-[min(78vw,800px)]",
      )}
    >
      <Image
        src={project.imageSrc}
        alt={project.imageAlt}
        width={project.width}
        height={project.height}
        quality={100}
        unoptimized
        className="block h-auto w-full"
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 82vw, 800px"
        draggable={false}
      />
    </article>
  );
}

type SelectedWorkSectionProps = {
  projects?: WorkProject[];
};

export function SelectedWorkSection({ projects = SITE_SHOWCASE }: SelectedWorkSectionProps) {
  return (
    <section
      id="cases"
      className="scroll-mt-28 bg-black py-16 text-cream md:py-20 lg:py-24"
      aria-labelledby="selected-work-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="mx-auto flex max-w-6xl flex-col items-center pb-10 text-center lg:pb-14">
          <h2
            id="selected-work-heading"
            className="section-title font-heading text-[clamp(2.85rem,7.5vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-cream xl:text-[clamp(3.25rem,6.5vw,6.25rem)]"
          >
            Marketing sites, SaaS dashboards, and product launches we have{" "}
            <span className="text-cream">designed, built,</span> and shipped
          </h2>
          <p className="mt-6 max-w-3xl text-base text-cream/65 md:text-lg lg:text-xl">
            A live scroll through fourteen recent websites and digital products — the interfaces and
            experiences FiveO has taken from brief to production for founders and internal teams.
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
        <div className="work-marquee-track flex w-max items-center gap-5 md:gap-6">
          <div className="flex items-center gap-5 pr-3 md:gap-6 md:pr-4">
            {projects.map((project) => (
              <WorkCard key={project.imageSrc} project={project} />
            ))}
          </div>
          <div className="flex items-center gap-5 pr-3 md:gap-6 md:pr-4" aria-hidden>
            {projects.map((project) => (
              <WorkCard key={`${project.imageSrc}-loop`} project={project} />
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only">
        This row scrolls automatically and repeats all fourteen website showcases in a continuous loop.
      </p>
    </section>
  );
}
