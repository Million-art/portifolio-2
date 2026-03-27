
import React from 'react';

const Web = () => {
  return (
    <div className="surface-card h-fit w-full border-0 bg-transparent p-0 shadow-none">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
        Web &amp; platform engineering
      </h2>
      <ul className="list-none space-y-4 text-base font-normal leading-relaxed text-zinc-400 md:text-lg">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" />
          <span>
            <strong className="text-zinc-200">Full-stack delivery</strong> — React, Next.js, Node/Nest,
            PostgreSQL, MongoDB, and GraphQL for fast, secure, observable products.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" />
          <span>
            <strong className="text-zinc-200">AI-ready backends</strong> — APIs and workers for LLM
            features: streaming, tool routing, rate limits, and safe handling of prompts and context.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" />
          <span>
            <strong className="text-zinc-200">Distributed systems</strong> — Kafka, RabbitMQ, Docker,
            and Kubernetes where scale and reliability matter.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Web;
