"use client";

import React from "react";
import Image from "next/image";
import postgres from "../assets/postgress.png";
import kubernet from "../assets/kubernet.png";
import nestjs from "../assets/nest.png";
import reactImage from "../assets/react.png";
import nextjsImage from "../assets/nextjs.png";
import mongodb from "../assets/mongodb.png";
import golang from "../assets/golang.png";
import awsImage from "../assets/aws.png";
import dockerImage from "../assets/docker.png";
import kafka from "../assets/kafka.png";
import grpc from "../assets/grpc.jpeg";

const aiStack = [
  "LLM APIs & streaming",
  "Agent-style workflows",
  "Prompt & eval loops",
  "Vector / retrieval patterns",
  "Embeddings & search",
  "Bot platforms (Telegram)",
  "Secure key handling",
];

const skills = [
  { image: golang, title: "Golang" },
  { image: nestjs, title: "Nest.js" },
  { image: kafka, title: "Apache Kafka" },
  { image: dockerImage, title: "Docker" },
  { image: mongodb, title: "MongoDB" },
  { image: postgres, title: "PostgreSQL" },
  { image: reactImage, title: "React" },
  { image: nextjsImage, title: "Next.js" },
  { image: awsImage, title: "AWS" },
  { image: grpc, title: "gRPC" },
  { image: kubernet, title: "Kubernetes" },
];

const Skills = () => {
  return (
    <section id="skills" className="mt-20 flex flex-col items-center px-4 py-16 md:py-20">
      <h2 className="heading mb-3 text-zinc-100">Skills</h2>
      <p className="mb-10 max-w-xl text-center text-sm text-zinc-400 md:text-base">
        Stack I use to ship backends, UIs, and AI-connected features.
      </p>

      {/* AI & Intelligent Systems card */}
      <div className="surface-card mb-12 w-full max-w-4xl p-6 md:p-8">
        <h3 className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-upwork">
          AI &amp; intelligent systems
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {aiStack.map((label) => (
            <span
              key={label}
              className="rounded-full border border-upwork/25 bg-upwork/[0.08] px-3 py-1.5 text-xs font-medium text-upwork-bright"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Platforms & Infrastructure Grid */}
      <div className="surface-card w-full max-w-5xl px-6 py-8 md:px-10 md:py-10">
        <h3 className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-upwork/80">
          Platforms &amp; infrastructure
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
          {skills.map((skill, index) => (
            <div
              key={skill.title + index}
              className="flex flex-col items-center justify-center group"
            >
              <div className="relative flex h-24 w-full items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 group-hover:border-upwork/20 group-hover:bg-white/[0.05] group-hover:scale-[1.03]">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  className="object-contain p-2"
                  fill
                  sizes="(max-width: 640px) 120px, 150px"
                />
              </div>
              <p className="mt-2 text-center text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
                {skill.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
