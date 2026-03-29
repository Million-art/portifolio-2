import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";

const highlightPills = [
  "Lean APIs & caching",
  "Queues & horizontal scale",
  "Observable & cost-aware",
];

const Hero = () => {
  return (
    <div className="pb-16 pt-24 md:pb-24 md:pt-28">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#a78bfa"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#22d3ee" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center -z-[1]"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#030712]/80
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
          {/* Left column: hook + CTAs */}
          <div className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">
            <div className="mb-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <span className="rounded-full border border-upwork/25 bg-upwork/[0.08] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-upwork">
                Performance · Scale · Reliability
              </span>
            </div>

            {/* Mobile: short, punchy headline */}
            <h1 className="md:hidden text-balance text-[1.75rem] font-semibold leading-[1.12] tracking-tight text-zinc-100 sm:text-3xl">
              <span className="text-upwork-gradient font-semibold">Millions of requests.</span>
              <br />
              Same steady backend.
            </h1>

            {/* Desktop: stronger two-line hook that uses horizontal space */}
            <h1 className="hidden max-w-xl text-balance md:block text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-100 lg:max-w-none lg:text-5xl xl:text-[3.35rem]">
              Real systems.
              <br />
              <span className="text-upwork-gradient font-bold">
                Backends tuned for 1M+ traffic.
              </span>
            </h1>

            <p className="mt-4 hidden md:block max-w-md text-sm leading-relaxed text-zinc-500 lg:max-w-lg lg:text-base">
              I build Production APIs that stay fast when load spikes caching, pools, workers, and observability
              baked in.
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Link href="#portifolio" className="w-full sm:w-auto">
                <span className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-upwork-deep to-upwork px-8 text-sm font-semibold text-zinc-950 shadow-lg shadow-upwork/25 transition hover:opacity-95 hover:shadow-upwork/35 sm:w-auto">
                  View selected work
                </span>
              </Link>
              <MagicButton className="justify-center" />
            </div>
          </div>

          {/* Right column: detail + visual density on large screens */}
          <div className="lg:col-span-7">
            <p className="text-pretty text-center text-base leading-relaxed text-zinc-400 md:text-left md:text-lg lg:max-w-none">
              I&apos;m <span className="text-zinc-200 font-medium">Million</span> : I focus on{" "}
              <span className="font-medium text-upwork">production systems</span> that stay fast under
              load: lean APIs, smart caching, queues and workers, connection pooling, database tuning, and
              horizontal scaling so spikes and sustained traffic on the order of{" "}
              <span className="font-medium text-zinc-300">1M+ requests</span> stay predictable, observable,
              and cost-aware. Still shipping bots and AI features where they belong: on top of solid
              infrastructure.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="Engineering focus">
              {highlightPills.map((label) => (
                <li
                  key={label}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-center text-xs font-medium leading-snug text-zinc-300 sm:text-left md:text-sm"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
