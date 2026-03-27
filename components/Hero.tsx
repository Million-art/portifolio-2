import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-16 pt-24 md:pb-24 md:pt-32">
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

      <div className="flex justify-center relative z-10">
        <div className="max-w-[92vw] md:max-w-3xl lg:max-w-4xl flex flex-col items-center justify-center text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300/90">
              Performance · Scale · Reliability
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-zinc-400">
              Senior Backend Engineer @ PTGR AG
            </span>
          </div>

          <TextGenerateEffect
            words="Shipping real performant systems with backends built to handle a million requests the right way"
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.15] tracking-tight"
          />

          <p className="mt-6 max-w-2xl text-pretty text-base md:text-lg text-zinc-400 leading-relaxed">
            I&apos;m <span className="text-zinc-200 font-medium">Million</span> — I focus on{" "}
            <span className="text-gradient font-medium">production backends</span> that stay fast under
            load: lean APIs, smart caching, queues and workers, connection pooling, database tuning, and
            horizontal scaling so spikes and sustained traffic—on the order of{" "}
            <span className="text-zinc-300">1M+ requests</span>—stay predictable, observable, and
            cost-aware. Still shipping bots and AI features where they belong: on top of solid
            infrastructure.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link href="#portifolio">
              <span className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-8 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:opacity-95 hover:shadow-violet-500/35">
                View selected work
              </span>
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-zinc-400 underline-offset-4 hover:text-zinc-200 hover:underline"
            >
              About &amp; experience
            </Link>
            <MagicButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
