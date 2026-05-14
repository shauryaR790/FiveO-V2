import { cn } from "@/lib/utils";

/** SVGL hosts files under /library/ — root URLs like /figma.svg 404. */
const SVGL = (file: string) => `https://svgl.app/library/${file}`;

const LOGOS = [
  {
    name: "Procure",
    src: SVGL("procure.svg"),
    gradient: "from-blue-500 to-indigo-700",
  },
  {
    name: "Shopify",
    src: SVGL("shopify.svg"),
    gradient: "from-amber-300 via-yellow-300 to-lime-400",
  },
  {
    name: "Blender",
    src: SVGL("blender.svg"),
    gradient: "from-sky-500 to-blue-700",
  },
  {
    name: "Figma",
    src: SVGL("figma.svg"),
    gradient: "from-violet-500 to-fuchsia-600",
  },
  {
    name: "Spotify",
    src: SVGL("spotify.svg"),
    gradient: "from-pink-500 to-red-600",
  },
  {
    name: "Lottielab",
    src: SVGL("lottielab.svg"),
    gradient: "from-yellow-300 to-emerald-500",
  },
  {
    name: "Google Cloud",
    src: SVGL("google-cloud.svg"),
    gradient: "from-sky-300 to-blue-500",
  },
  {
    name: "Bing",
    src: SVGL("bing.svg"),
    gradient: "from-cyan-400 to-teal-600",
  },
] as const;

function LogoRow({ suffix = "" }: { suffix?: string }) {
  return (
    <>
      {LOGOS.map((logo) => (
        <div
          key={`${logo.name}${suffix}`}
          className={cn(
            "relative flex h-24 w-40 shrink-0 items-center justify-center overflow-hidden rounded-full",
            "bg-gradient-to-br transition-transform duration-300 ease-out will-change-transform hover:scale-[1.04]",
            logo.gradient,
          )}
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="relative z-10 h-10 w-auto max-w-[7rem] object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
            loading="lazy"
          />
        </div>
      ))}
    </>
  );
}

export function LogoMarquee() {
  return (
    <div
      className="relative mt-10 w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="epoch-marquee-track flex w-max gap-4">
        <div className="flex gap-4 pr-4">
          <LogoRow suffix="-a" />
        </div>
        <div className="flex gap-4 pr-4" aria-hidden>
          <LogoRow suffix="-b" />
        </div>
      </div>
    </div>
  );
}
