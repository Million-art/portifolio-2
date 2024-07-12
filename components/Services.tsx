"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import Web from "./services-content/Web";
import Bot from "./services-content/Bot";

export function Services() {
  const tabs = [
    {
      title: "Web Development",
      value: "Service",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
           <Web />
        </div>
      ),
    },
    {
      title: "Bot Development",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
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

 