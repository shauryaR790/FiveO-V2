"use client";

import { Download, Shield, Users } from "lucide-react";

import { cn } from "@/lib/utils";

const AVATARS = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&h=128&q=80",
] as const;

function CraftCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article
      data-craft-card
      className={cn(
        "craft-card relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 will-change-transform",
        className,
      )}
    >
      {children}
    </article>
  );
}

function SparklineDownloadCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-zinc-950/80 p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-zinc-400">
          <Download className="size-4 shrink-0" strokeWidth={1.5} />
          <span className="text-xs font-medium tracking-wide">Download</span>
        </div>
        <span className="font-mono text-xs font-medium tabular-nums text-white">14.34 mbps</span>
      </div>
      <svg
        className="w-full overflow-visible"
        viewBox="0 0 386 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="craftLineFill" x1="3" y1="50" x2="3" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.14" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="craftLineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M3 75C45 92 78 28 120 48C162 68 190 22 230 40C270 58 310 18 350 35C375 45 383 28 383 28"
          stroke="white"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M3 75C45 92 78 28 120 48C162 68 190 22 230 40C270 58 310 18 350 35C375 45 383 28 383 28V100H3V75Z"
          fill="url(#craftLineFill)"
        />
        <path
          filter="url(#craftLineGlow)"
          d="M3 75C45 92 78 28 120 48C162 68 190 22 230 40C270 58 310 18 350 35C375 45 383 28 383 28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

function DashboardLineChart() {
  return (
    <div className="relative -mb-6 -mr-6 mt-2 h-fit overflow-hidden rounded-tl-2xl border-l border-t border-white/10 bg-zinc-950/60 p-5 pt-8 sm:ml-4">
      <div className="absolute left-3 top-3 flex gap-1.5">
        <span className="block size-2 rounded-full bg-white/20" />
        <span className="block size-2 rounded-full bg-white/20" />
        <span className="block size-2 rounded-full bg-white/20" />
      </div>
      <svg
        className="mt-4 w-full min-w-[280px] sm:min-w-[320px]"
        viewBox="0 0 360 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="craftDashFill" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="rgb(139 92 246)" stopOpacity="0.25" />
            <stop offset="1" stopColor="rgb(139 92 246)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M4 100 L24 88 L48 95 L72 62 L96 78 L120 52 L148 68 L176 38 L200 55 L228 42 L252 60 L276 35 L300 48 L324 28 L356 40"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M4 100 L24 88 L48 95 L72 62 L96 78 L120 52 L148 68 L176 38 L200 55 L228 42 L252 60 L276 35 L300 48 L324 28 L356 40 V140 H4 Z"
          fill="url(#craftDashFill)"
        />
        <path
          d="M4 100 L24 88 L48 95 L72 62 L96 78 L120 52 L148 68 L176 38 L200 55 L228 42 L252 60 L276 35 L300 48 L324 28 L356 40"
          stroke="rgb(167 139 250)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

export function WebDevCraftGrid() {
  return (
    <div className="relative z-10 grid grid-cols-6 gap-4 md:gap-5">
      <CraftCard className="col-span-full lg:col-span-2">
        <div className="relative flex flex-col items-center px-6 pb-8 pt-8">
          <div className="relative flex h-28 w-full max-w-[17rem] items-center justify-center md:h-32 md:max-w-[19rem]">
            <svg
              className="absolute inset-0 size-full text-zinc-600"
              viewBox="0 0 254 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                fill="currentColor"
              />
            </svg>
            <span className="relative z-[1] text-5xl font-semibold tracking-tight text-white md:text-6xl">
              100%
            </span>
          </div>
          <h3 className="mt-8 text-center text-3xl font-semibold text-white md:text-[2rem]">Customizable</h3>
          <p className="mt-4 max-w-[20rem] text-center text-sm leading-relaxed text-zinc-400">
            Tailor layouts, tokens, and components to your product—not a rigid template that fights your
            brand.
          </p>
        </div>
      </CraftCard>

      <CraftCard className="col-span-full sm:col-span-3 lg:col-span-2">
        <div className="flex flex-col px-6 pb-8 pt-8">
          <div className="relative mx-auto flex aspect-square w-36 items-center justify-center">
            <div
              className="absolute inset-0 rounded-full border border-white/10 bg-zinc-900/40 shadow-[0_0_48px_-12px_rgba(255,255,255,0.18)]"
              aria-hidden
            />
            <div
              className="relative flex size-[7.25rem] items-center justify-center rounded-full border border-white/15 bg-zinc-950/50"
              style={{
                boxShadow:
                  "inset 0 0 40px -10px rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <svg
                className="relative z-[1] h-[4.5rem] w-auto"
                viewBox="0 0 212 143"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  className="text-zinc-500"
                  d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542Z M126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656Z"
                  fill="currentColor"
                />
                <path
                  className="text-white/90"
                  d="M3 72H209"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="mt-8 space-y-3 text-center">
            <h3 className="text-lg font-semibold text-white">Secure by default</h3>
            <p className="text-pretty text-sm leading-relaxed text-zinc-400">
              Sensible auth, dependency hygiene, and accessible UI so security and inclusivity are part
              of the foundation—not a pre-launch scramble.
            </p>
          </div>
        </div>
      </CraftCard>

      <CraftCard className="col-span-full sm:col-span-3 lg:col-span-2">
        <div className="flex flex-col px-6 pb-8 pt-8">
          <SparklineDownloadCard />
          <div className="mt-8 space-y-3 text-center">
            <h3 className="text-lg font-semibold text-white">Faster than light</h3>
            <p className="text-pretty text-sm leading-relaxed text-zinc-400">
              Lean bundles, caching that makes sense, and real-user metrics so every release stays quick
              in production.
            </p>
          </div>
        </div>
      </CraftCard>

      <CraftCard className="col-span-full lg:col-span-3">
        <div className="grid gap-6 pt-8 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:pb-8">
          <div className="flex flex-col justify-between space-y-10 px-6 sm:space-y-8 sm:px-0">
            <div className="relative flex size-12 shrink-0 rounded-full border border-white/10 bg-zinc-900/50 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5">
              <Shield className="m-auto size-5 text-zinc-200" strokeWidth={1.25} />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Performance you can see</h3>
              <p className="text-pretty text-sm leading-relaxed text-zinc-400">
                Observable systems, clear SLIs, and dashboards your stakeholders actually understand—no
                black-box hosting.
              </p>
            </div>
          </div>
          <DashboardLineChart />
        </div>
      </CraftCard>

      <CraftCard className="col-span-full lg:col-span-3">
        <div className="grid h-full gap-6 pt-8 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:pb-8">
          <div className="flex flex-col justify-between space-y-10 px-6 sm:space-y-8 sm:px-0">
            <div className="relative flex size-12 shrink-0 rounded-full border border-white/10 bg-zinc-900/50 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5">
              <Users className="m-auto size-6 text-zinc-200" strokeWidth={1.25} />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Your team, extended</h3>
              <p className="text-pretty text-sm leading-relaxed text-zinc-400">
                We embed in your rituals—Slack, Linear, reviews—so strategy and execution stay in sync
                across time zones.
              </p>
            </div>
          </div>
          <div className="before:bg-white/10 relative mt-2 before:absolute before:inset-y-0 before:left-1/2 before:z-0 before:w-px before:-translate-x-1/2 sm:-my-2 sm:-mr-4 sm:mt-0">
            <div className="relative z-[1] flex flex-col justify-center space-y-6 px-6 py-4 sm:px-2 sm:py-6">
              <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                <span className="block h-fit rounded-md border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300 shadow-sm">
                  Likeur
                </span>
                <div className="size-8 shrink-0 overflow-hidden rounded-full ring-2 ring-black ring-offset-2 ring-offset-zinc-950">
                  <img className="size-full object-cover" src={AVATARS[0]} alt="" loading="lazy" />
                </div>
              </div>
              <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                <div className="size-9 shrink-0 overflow-hidden rounded-full ring-2 ring-black ring-offset-2 ring-offset-zinc-950">
                  <img className="size-full object-cover" src={AVATARS[1]} alt="" loading="lazy" />
                </div>
                <span className="block h-fit rounded-md border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300 shadow-sm">
                  M. Irung
                </span>
              </div>
              <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                <span className="block h-fit rounded-md border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300 shadow-sm">
                  B. Ng
                </span>
                <div className="size-8 shrink-0 overflow-hidden rounded-full ring-2 ring-black ring-offset-2 ring-offset-zinc-950">
                  <img className="size-full object-cover" src={AVATARS[2]} alt="" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CraftCard>
    </div>
  );
}
