import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div id="about" className="container mt-28 sm:mt-36 sm:mx-auto px-4">
      <h2 className="heading mb-3 text-zinc-100">About</h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-base md:text-lg text-zinc-400 leading-relaxed">
        I build production systems where{" "}
        <span className="text-zinc-200">APIs, data, and AI</span> meet real users — from secure backends
        and integrations to bots and LLM-assisted flows. I value clear contracts, testing, and shipping
        responsibly.
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="surface-card p-6 text-white">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400/90">
            Education
          </h3>
          <p className="text-zinc-300 leading-relaxed">
            Bachelor&apos;s in Computer Science
          </p>
        </div>

        <div className="surface-card p-6 text-white">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-400/90">
            Certifications
          </h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>
              <Link
                className="text-cyan-400/90 hover:text-cyan-300 hover:underline"
                href="https://www.udemy.com/certificate/UC-372be494-59ec-489a-8cbb-d5f64426cfa4/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email"
              >
                Frontend development Zero to Expert
              </Link>
            </li>
            <li>
              <Link
                className="text-cyan-400/90 hover:text-cyan-300 hover:underline"
                href="https://verify.mygreatlearning.com/verify/XGZDMZUM"
              >
                Project Management
              </Link>
            </li>
            <li>
              <Link
                className="text-cyan-400/90 hover:text-cyan-300 hover:underline"
                href="https://verify.mygreatlearning.com/verify/RQDMXFNT"
              >
                AWS Fundamentals
              </Link>
            </li>
            <li>
              <Link
                className="text-cyan-400/90 hover:text-cyan-300 hover:underline"
                href="https://www.credly.com/badges/d2fadc2d-cb36-4faa-a4b2-c1fe44c9eda5/print"
              >
                CISCO Networking
              </Link>
            </li>
          </ul>
        </div>

        <div className="surface-card p-6 text-white md:col-span-2 lg:col-span-1">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-fuchsia-400/90">
            AI &amp; automation
          </h3>
          <ul className="space-y-2.5 text-sm text-zinc-300 leading-relaxed">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400/80" />
              <span>
                <strong className="text-zinc-200">LLM integration</strong> — REST/streaming APIs, tool use,
                structured outputs, and guardrails for production bots.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400/80" />
              <span>
                <strong className="text-zinc-200">Conversational products</strong> — Telegram and web
                assistants with retrieval-style patterns and clear UX.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400/80" />
              <span>
                <strong className="text-zinc-200">Backend for AI</strong> — Nest/Node and Go services,
                queues, observability, and secure handling of keys and user data.
              </span>
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-zinc-500">
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">OpenAI API</span>
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">agents</span>
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">RAG patterns</span>
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">embeddings</span>
          </div>
        </div>

        <div className="surface-card p-6 text-white md:col-span-2 lg:col-span-3">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400/90">
            Experience
          </h3>
          <div className="grid gap-8 text-zinc-300 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-l border-white/15 pl-4">
              <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
                2023
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-cyan-400/90 hover:underline" href="https://www.fanabc.com/">
                    Fana BC
                  </Link>{" "}
                  — Intern (3 months)
                </li>
                <li>
                  <Link className="text-cyan-400/90 hover:underline" href="https://techsphareet.com/">
                    Techsphere
                  </Link>{" "}
                  — Web Developer (8 months)
                </li>
              </ul>
            </div>
            <div className="border-l border-white/15 pl-4">
              <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
                2024
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-cyan-400/90 hover:underline" href="https://www.godigitalethio.com">
                    Go Digital
                  </Link>{" "}
                  — Backend Developer (6 months)
                </li>
                <li>
                  <Link className="text-cyan-400/90 hover:underline" href="https://www.blihmarketing.com">
                    30x LLC
                  </Link>{" "}
                  (Remote) — Web Developer (1 year)
                </li>
              </ul>
            </div>
            <div className="border-l border-white/15 pl-4">
              <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500">
                2025
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-cyan-400/90 hover:underline" href="https://www.blihmarketing.com">
                    Blih Marketing
                  </Link>{" "}
                  — Programmer (1+ years)
                </li>
                <li>
                  <Link className="text-cyan-400/90 hover:underline" href="https://ptgr.ch">
                    PTGR AG
                  </Link>{" "}
                  — Senior Backend Engineer
                </li>
              </ul>
            </div>
            <div className="border-l border-violet-500/40 pl-4">
              <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-violet-400/90">
                2026 — Present
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-cyan-400/90 hover:underline" href="https://ptgr.ch">
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
