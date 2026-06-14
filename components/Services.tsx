"use client";

import React from "react";
import Link from "next/link";

const platformServices = [
  {
    title: "High-Performance APIs & Backends",
    description:
      "Fast, optimized endpoints built to handle high concurrency, heavy traffic spikes, and real-time streaming, with caching and database connection pooling.",
    tech: ["Go", "NestJS", "PostgreSQL", "Redis", "gRPC"],
    icon: (
      <svg
        className="h-5 w-5 text-upwork"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Scalable Infrastructure & Queues",
    description:
      "Horizontal scale and event-driven microservices designed to process background tasks reliably without bottlenecking main user threads.",
    tech: ["Kafka", "RabbitMQ", "Docker", "Kubernetes", "AWS"],
    icon: (
      <svg
        className="h-5 w-5 text-upwork"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20h20M5 17V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v12" />
        <path d="M9 17v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4" />
      </svg>
    ),
  },
  {
    title: "AI & LLM-Powered Pipelines",
    description:
      "Production-grade integration of Large Language Models with streaming outputs, function-calling orchestration, retrieval systems, and robust guardrails.",
    tech: ["OpenAI API", "Vector Search", "JSON Schema", "Guardrails"],
    icon: (
      <svg
        className="h-5 w-5 text-upwork"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

const botServices = [
  {
    title: "Production Telegram Bots",
    description:
      "High-availability transactional bots supporting deep referral tracking, payment gates, complex multi-step dialogs, and instant push updates.",
    tech: ["GrammY", "Telegraf", "Redis State", "Webhooks"],
    icon: (
      <svg
        className="h-5 w-5 text-upwork"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Telegram Mini Apps (TMA)",
    description:
      "Rich web apps embedded right inside Telegram. Ideal for seamless authentication, interactive onboarding, dashboards, and client-adjacent flows.",
    tech: ["Next.js", "React", "Tailwind CSS", "TMA SDK"],
    icon: (
      <svg
        className="h-5 w-5 text-upwork"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Intelligent Conversational Flows",
    description:
      "AI chat engines with retrieval-augmented generation (RAG), customized prompts, semantic checking, and safe validation layers for business processes.",
    tech: ["RAG", "Embeddings", "Context Splitting", "Validation"],
    icon: (
      <svg
        className="h-5 w-5 text-upwork"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
];

const ecosystemServices = [
  {
    title: "Ecosystem & Community Curation",
    description:
      "Curation of a growing professional tech community, connecting software engineers, AI professionals, QA specialists, and ERP experts with career opportunities.",
    tech: ["Digital Jobs ET", "Community Growth"],
    icon: (
      <svg
        className="h-5 w-5 text-upwork"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Market Intelligence & Trend Reports",
    description:
      "Regular publication of job market intelligence, local tech hiring benchmarks, and skill demand reports to keep community members informed.",
    tech: ["Weekly Reports", "Hiring Insights"],
    icon: (
      <svg
        className="h-5 w-5 text-upwork"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Targeted Talent Matching",
    description:
      "Active bridging of the gap between employers seeking verified digital talent and qualified candidates in the Ethiopian tech market.",
    tech: ["2,300+ Followers", "Recruitment Matching"],
    icon: (
      <svg
        className="h-5 w-5 text-upwork"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full my-12 px-4">
      {/* Track 1: Web & Platform Engineering */}
      <div className="surface-card p-6 flex flex-col justify-between transition duration-300 hover:border-upwork/20 hover:shadow-lg hover:shadow-upwork/[0.03]">
        <div>
          {/* Header */}
          <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <h3 className="text-lg font-bold tracking-tight text-zinc-100 md:text-xl">
              Web &amp; Platform Engineering
            </h3>
            <span className="rounded-full bg-upwork/10 border border-upwork/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-upwork-bright">
              Scale
            </span>
          </div>

          {/* Sub-services list */}
          <div className="space-y-6">
            {platformServices.map((service, idx) => (
              <div key={idx} className="group flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-zinc-300 transition duration-300 group-hover:border-upwork/30 group-hover:bg-upwork/[0.05]">
                  {service.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold tracking-tight text-zinc-200 group-hover:text-upwork-bright transition">
                    {service.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-white/[0.03] border border-white/[0.06] px-1.5 py-0.5 font-mono text-[9px] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Track 2: Bots & Mini-Apps */}
      <div className="surface-card p-6 flex flex-col justify-between transition duration-300 hover:border-upwork/20 hover:shadow-lg hover:shadow-upwork/[0.03]">
        <div>
          {/* Header */}
          <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <h3 className="text-lg font-bold tracking-tight text-zinc-100 md:text-xl">
              Intelligent Bots &amp; Mini Apps
            </h3>
            <span className="rounded-full bg-upwork/10 border border-upwork/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-upwork-bright">
              AI
            </span>
          </div>

          {/* Sub-services list */}
          <div className="space-y-6">
            {botServices.map((service, idx) => (
              <div key={idx} className="group flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-zinc-300 transition duration-300 group-hover:border-upwork/30 group-hover:bg-upwork/[0.05]">
                  {service.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold tracking-tight text-zinc-200 group-hover:text-upwork-bright transition">
                    {service.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-white/[0.03] border border-white/[0.06] px-1.5 py-0.5 font-mono text-[9px] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Track 3: Talent Network Builder */}
      <div className="surface-card p-6 flex flex-col justify-between transition duration-300 hover:border-upwork/20 hover:shadow-lg hover:shadow-upwork/[0.03]">
        <div>
          {/* Header */}
          <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <h3 className="text-lg font-bold tracking-tight text-zinc-100 md:text-xl">
              Talent Network Builder
            </h3>
            <span className="rounded-full bg-upwork/10 border border-upwork/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-upwork-bright">
              Ecosystem
            </span>
          </div>

          {/* Sub-services list */}
          <div className="space-y-6">
            {ecosystemServices.map((service, idx) => (
              <div key={idx} className="group flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-zinc-300 transition duration-300 group-hover:border-upwork/30 group-hover:bg-upwork/[0.05]">
                  {service.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold tracking-tight text-zinc-200 group-hover:text-upwork-bright transition">
                    {service.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-white/[0.03] border border-white/[0.06] px-1.5 py-0.5 font-mono text-[9px] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] flex justify-center">
            <Link
              href="https://t.me/Digitaljobs_et"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-upwork hover:text-upwork-bright hover:underline"
            >
              Explore Digital Jobs ET
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}