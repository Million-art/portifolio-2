import React from 'react';

const Bot = () => {
  return (
    <div className="surface-card h-fit w-full border-0 bg-transparent p-0 shadow-none">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-upwork md:text-3xl">
        Bots &amp; mini-apps
      </h2>
      <ul className="list-none space-y-4 text-base font-normal leading-relaxed text-zinc-400 md:text-lg">
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-upwork shadow-[0_0_12px_rgba(111,218,68,0.35)]" />
          <span>
            <strong className="font-semibold text-upwork-bright">Telegram bots</strong>  Automation,
            payments flows, referrals, and integrations with your existing APIs and databases.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-upwork shadow-[0_0_12px_rgba(111,218,68,0.35)]" />
          <span>
            <strong className="font-semibold text-upwork-bright">Telegram Mini Apps</strong>  Web apps
            inside Telegram for onboarding, dashboards, and lightweight product UX without a separate
            install.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-upwork shadow-[0_0_12px_rgba(111,218,68,0.35)]" />
          <span>
            <strong className="font-semibold text-upwork-bright">AI in chat</strong>  Natural-language
            commands, guided flows, and assistant-style experiences wired to your backend with clear
            guardrails.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Bot;
