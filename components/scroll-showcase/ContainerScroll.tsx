"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { cn } from "@/lib/utils";

export function ContainerScroll({
  titleComponent,
  children,
  className,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = (): [number, number] => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -100]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[52rem] items-start justify-center px-2 pt-8 pb-3 md:h-[62rem] md:px-16 md:pt-10 md:pb-5",
        className,
      )}
    >
      <div
        className="relative w-full pt-2 pb-5 md:pt-3 md:pb-8"
        style={{ perspective: reduceMotion ? undefined : "1000px" }}
      >
        <ScrollHeader translate={translate} titleComponent={titleComponent} reduceMotion={!!reduceMotion} />
        <ScrollCard rotate={rotate} scale={scale} reduceMotion={!!reduceMotion}>
          {children}
        </ScrollCard>
      </div>
    </div>
  );
}

function ScrollHeader({
  translate,
  titleComponent,
  reduceMotion,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
  reduceMotion: boolean;
}) {
  if (reduceMotion) {
    return <div className="mx-auto max-w-5xl text-center">{titleComponent}</div>;
  }

  return (
    <motion.div style={{ translateY: translate }} className="mx-auto max-w-5xl text-center">
      {titleComponent}
    </motion.div>
  );
}

function ScrollCard({
  rotate,
  scale,
  children,
  reduceMotion,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
  reduceMotion: boolean;
}) {
  if (reduceMotion) {
    return (
      <div className="mx-auto -mt-10 h-[28rem] w-full max-w-5xl rounded-[30px] border-4 border-zinc-600 bg-zinc-900 p-2 shadow-2xl md:-mt-12 md:h-[38rem] md:p-4">
        <div className="h-full w-full overflow-hidden rounded-2xl bg-black">{children}</div>
      </div>
    );
  }

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        transformStyle: "preserve-3d",
      }}
      className="mx-auto -mt-10 h-[28rem] w-full max-w-5xl rounded-[30px] border-4 border-zinc-600 bg-zinc-900 p-2 shadow-2xl md:-mt-12 md:h-[38rem] md:p-4"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-black">{children}</div>
    </motion.div>
  );
}
