import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import upworkProfile from '@/assets/upworkprofile.png';

/** Set this to your public Upwork profile URL when you want the CTA to deep-link. */
const UPWORK_PROFILE_URL = 'https://www.upwork.com/freelancers/millionmulugeta';

const About = () => {
  return (
    <div id="about" className="container mt-28 sm:mt-36 sm:mx-auto px-4">
      <h2 className="heading mb-3 text-zinc-100">About</h2>
      <p className="mx-auto mb-6 max-w-3xl text-center text-base md:text-lg text-zinc-400 leading-relaxed">
        I&apos;m <span className="text-zinc-200 font-medium">Million</span> — I build production systems
        where <span className="text-zinc-200">APIs, data, and AI</span> meet real users: secure backends,
        integrations, bots, and LLM-assisted flows. I value clear contracts, testing, and shipping
        responsibly.
      </p>
      <p className="mx-auto mb-12 max-w-3xl text-center text-base md:text-lg text-zinc-400 leading-relaxed">
        On <span className="text-zinc-200">Upwork</span> I work as{" "}
        <span className="font-medium text-upwork">Top Rated</span> talent — the program represents
        roughly the <span className="text-zinc-200 font-medium">top 3%</span> on the platform — and I
        maintain a <span className="text-zinc-200 font-medium">100% Job Success Score (JSS)</span>,{" "}
        meaning clients consistently get delivery they&apos;re happy to close successfully.
      </p>

      <div className="surface-card mb-12 overflow-hidden md:grid md:grid-cols-2 md:gap-0 md:p-0">
        <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-upwork">
            Upwork · verified profile
          </p>
          <h3 className="mb-3 text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">
            Top 3% · 100% job success
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-zinc-400 md:text-base">
            My public profile shows verified <strong className="text-zinc-300">Top Rated</strong> status
            and <strong className="text-zinc-300">100% Job Success</strong> — the same signals clients use
            to hire with confidence for backend, full-stack, and bot work.
          </p>
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="rounded-lg border border-upwork/30 bg-upwork/10 px-3 py-2 text-xs font-semibold text-upwork md:text-sm">
              100% Job Success
            </span>
            <span className="rounded-lg border border-upwork/20 bg-upwork/[0.06] px-3 py-2 text-xs font-semibold text-upwork-bright md:text-sm">
              Top Rated (~3%)
            </span>
            <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-zinc-400 md:text-sm">
              Addis Ababa · open to remote
            </span>
          </div>
          <Link
            href={UPWORK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-upwork hover:text-upwork-bright hover:underline"
          >
            Open Upwork profile
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="relative min-h-[220px] w-full border-t border-white/10 md:min-h-[320px] md:border-l md:border-t-0 lg:min-h-[360px]">
          <Image
            src={upworkProfile}
            alt="Upwork profile: Million M., Top Rated and 100% Job Success"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="surface-card p-6 text-white">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-upwork">
            Education
          </h3>
          <p className="text-zinc-300 leading-relaxed">
            Bachelor&apos;s in Computer Science
          </p>
        </div>

        <div className="surface-card p-6 text-white">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-upwork">
            Certifications
          </h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>
              <Link
                className="text-upwork hover:text-upwork-bright hover:underline"
                href="https://www.udemy.com/certificate/UC-372be494-59ec-489a-8cbb-d5f64426cfa4/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email"
              >
                Frontend development Zero to Expert
              </Link>
            </li>
            <li>
              <Link
                className="text-upwork hover:text-upwork-bright hover:underline"
                href="https://verify.mygreatlearning.com/verify/XGZDMZUM"
              >
                Project Management
              </Link>
            </li>
            <li>
              <Link
                className="text-upwork hover:text-upwork-bright hover:underline"
                href="https://verify.mygreatlearning.com/verify/RQDMXFNT"
              >
                AWS Fundamentals
              </Link>
            </li>
            <li>
              <Link
                className="text-upwork hover:text-upwork-bright hover:underline"
                href="https://www.credly.com/badges/d2fadc2d-cb36-4faa-a4b2-c1fe44c9eda5/print"
              >
                CISCO Networking
              </Link>
            </li>
          </ul>
        </div>

        <div className="surface-card p-6 text-white md:col-span-2 lg:col-span-1">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-upwork">
            AI &amp; automation
          </h3>
          <ul className="space-y-2.5 text-sm text-zinc-300 leading-relaxed">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-upwork" />
              <span>
                <strong className="text-zinc-200">LLM integration</strong> — REST/streaming APIs, tool use,
                structured outputs, and guardrails for production bots.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-upwork" />
              <span>
                <strong className="text-zinc-200">Conversational products</strong> — Telegram and web
                assistants with retrieval-style patterns and clear UX.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-upwork" />
              <span>
                <strong className="text-zinc-200">Backend for AI</strong> — Nest/Node and Go services,
                queues, observability, and secure handling of keys and user data.
              </span>
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-zinc-500">
            <span className="rounded-md border border-upwork/25 bg-upwork/[0.06] px-2 py-1 text-upwork-bright/90">OpenAI API</span>
            <span className="rounded-md border border-upwork/25 bg-upwork/[0.06] px-2 py-1 text-upwork-bright/90">agents</span>
            <span className="rounded-md border border-upwork/25 bg-upwork/[0.06] px-2 py-1 text-upwork-bright/90">RAG patterns</span>
            <span className="rounded-md border border-upwork/25 bg-upwork/[0.06] px-2 py-1 text-upwork-bright/90">embeddings</span>
          </div>
        </div>

        <div className="surface-card p-6 text-white md:col-span-2 lg:col-span-3">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-upwork">
            Experience
          </h3>
          <div className="grid gap-8 text-zinc-300 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-l border-upwork/20 pl-4">
              <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
                2023
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-upwork hover:text-upwork-bright hover:underline" href="https://www.fanabc.com/">
                    Fana BC
                  </Link>{" "}
                  — Intern (3 months)
                </li>
                <li>
                  <Link className="text-upwork hover:text-upwork-bright hover:underline" href="https://blihops.com/">
                    Blih Intelligent Ops
                  </Link>{" "}
                  — Programmer (1+ years)
                </li>
              </ul>
            </div>
            <div className="border-l border-upwork/20 pl-4">
              <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
                2024
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-upwork hover:text-upwork-bright hover:underline" href="https://www.godigitalethio.com">
                    Go Digital
                  </Link>{" "}
                  — Backend Developer (6 months)
                </li>
                <li>
                  <Link className="text-upwork hover:text-upwork-bright hover:underline" href="https://blihops.com">
                    30x LLC
                  </Link>{" "}
                  (Remote) — Web Developer (1 year)
                </li>
              </ul>
            </div>
            <div className="border-l border-upwork/20 pl-4">
              <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
                2025
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-upwork hover:text-upwork-bright hover:underline" href="https://techsphareet.com/">
                    Techsphere
                  </Link>{" "}
                  — Web Developer (8 months)
                </li>
                <li>
                  <Link className="text-upwork hover:text-upwork-bright hover:underline" href="https://ptgr.ch">
                    PTGR AG
                  </Link>{" "}
                  — Senior Backend Engineer
                </li>
              </ul>
            </div>
            <div className="border-l border-upwork/45 pl-4">
              <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-upwork-bright">
                2026 — Present
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-upwork hover:text-upwork-bright hover:underline" href="https://ptgr.ch">
                    PTGR AG
                  </Link>{" "}
                  — Senior Backend Engineer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
