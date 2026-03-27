"use client";

import { Tabs } from "./ui/tabs";
import Web from "./services-content/Web";
import Bot from "./services-content/Bot";

export function Services() {
  const tabs = [
    {
      title: "Web Development",
      value: "Service",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-violet-950/50 p-6 text-white md:p-10">
           <Web />
        </div>
      ),
    },
    {
      title: "Bot Development",
      value: "services",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-cyan-950/40 p-6 text-white md:p-10">
           <Bot />
        </div>
      ),
    }
     
  ];

  return (
    <div className="h-[35rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

 