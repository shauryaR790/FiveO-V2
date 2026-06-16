"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface CircularRevealTextItem {
  text: string;
  image: string;
}

export interface CircularRevealHeadingProps {
  items: CircularRevealTextItem[];
  centerText: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: {
    container: "h-[280px] w-[280px]",
    fontSize: "text-[9px]",
    tracking: "tracking-[0.22em]",
    radius: 120,
    gap: 36,
    imageSize: "w-[75%] h-[75%]",
    textStyle: "font-medium",
  },
  md: {
    container: "h-[380px] w-[380px]",
    fontSize: "text-[10px]",
    tracking: "tracking-[0.28em]",
    radius: 150,
    gap: 28,
    imageSize: "w-[75%] h-[75%]",
    textStyle: "font-medium",
  },
  lg: {
    container: "h-[460px] w-[460px]",
    fontSize: "text-xs",
    tracking: "tracking-[0.32em]",
    radius: 165,
    gap: 22,
    imageSize: "w-[75%] h-[75%]",
    textStyle: "font-medium",
  },
} as const;

function usePreloadImages(images: string[]) {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const loadImage = (url: string): Promise<void> =>
      new Promise((resolve, reject) => {
        const img = new window.Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = reject;
      });

    void Promise.all(images.map(loadImage))
      .then(() => setLoaded(true))
      .catch((err) => console.error("Error preloading images:", err));
  }, [images]);

  return loaded;
}

function ImagePreloader({ images }: { images: string[] }) {
  return (
    <div className="hidden" aria-hidden="true">
      {images.map((src) => (
        <img key={src} src={src} alt="" />
      ))}
    </div>
  );
}

function ImageOverlay({
  image,
  size = "md",
}: {
  image: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
    >
      <motion.img
        src={image}
        alt=""
        className={cn(
          sizeConfig[size].imageSize,
          "rounded-full object-cover ring-1 ring-white/10",
        )}
        style={{ filter: "brightness(0.85)" }}
      />
    </motion.div>
  );
}

export function CircularRevealHeading({
  items,
  centerText,
  className,
  size = "md",
}: CircularRevealHeadingProps) {
  const [activeImage, setActiveImage] = React.useState<string | null>(null);
  const config = sizeConfig[size];
  const imagesLoaded = usePreloadImages(items.map((item) => item.image));
  const uid = React.useId().replace(/:/g, "");
  const gradientId = `circularRevealGradient-${uid}`;
  const curveId = `circularRevealCurve-${uid}`;

  const createTextSegments = () => {
    const totalItems = items.length;
    const totalGapDegrees = config.gap * totalItems;
    const availableDegrees = 360 - totalGapDegrees;
    const segmentDegrees = availableDegrees / totalItems;
    return items.map((item, index) => {
      const startPosition = index * (segmentDegrees + config.gap);
      const startOffset = `${(startPosition / 360) * 100}%`;
      return (
        <g key={`${item.text}-${index}`}>
          <text
            className={cn(
              config.fontSize,
              config.tracking,
              config.textStyle,
              "cursor-pointer uppercase transition-all duration-300",
            )}
            onMouseEnter={() => imagesLoaded && setActiveImage(item.image)}
            onMouseLeave={() => setActiveImage(null)}
          >
            <textPath
              href={`#${curveId}`}
              style={{ fill: `url(#${gradientId})` }}
              startOffset={startOffset}
              textLength={`${segmentDegrees * 1.8}`}
              lengthAdjust="spacingAndGlyphs"
            >
              {item.text}
            </textPath>
          </text>
        </g>
      );
    });
  };

  return (
    <>
      <ImagePreloader images={items.map((item) => item.image)} />
      <motion.div
        whileHover={{
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.75), inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
        whileTap={{ scale: 0.985 }}
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "relative overflow-hidden rounded-full bg-zinc-950",
          "ring-1 ring-zinc-800/90",
          "shadow-[0_20px_60px_rgba(0,0,0,0.85)]",
          "transition-all duration-500 ease-out",
          config.container,
          className,
        )}
      >
        <AnimatePresence>
          {activeImage && imagesLoaded ? (
            <ImageOverlay image={activeImage} size={size} />
          ) : null}
        </AnimatePresence>

        <div
          className="absolute inset-[2px] rounded-full bg-zinc-950"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.6)",
          }}
        />

        <div
          className="absolute inset-[10px] rounded-full bg-zinc-950"
          style={{
            boxShadow:
              "inset 0 10px 30px rgba(0,0,0,0.55), inset 0 -6px 20px rgba(255,255,255,0.02)",
          }}
        />

        <motion.div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence>
            {!activeImage ? (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 px-4"
              >
                {centerText}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 400 400" className="h-full w-full">
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a1a1aa" />
                <stop offset="100%" stopColor="#fafafa" />
              </linearGradient>
            </defs>
            <path
              id={curveId}
              fill="none"
              d={`M 200,200 m -${config.radius},0 a ${config.radius},${config.radius} 0 1,1 ${config.radius * 2},0 a ${config.radius},${config.radius} 0 1,1 -${config.radius * 2},0`}
            />
            {createTextSegments()}
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
}
