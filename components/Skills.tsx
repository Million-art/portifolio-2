'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import postgres from '../assets/postgress.png';
import kubernet from '../assets/kubernet.png';
import nestjs from '../assets/nest.png';
import reactImage from '../assets/react.png';
import nextjsImage from '../assets/nextjs.png';
import mongodb from '../assets/mongodb.png';
import golang from '../assets/golang.png';
import awsImage from '../assets/aws.png';
import dockerImage from '../assets/docker.png';
import kafka from '../assets/kafka.png';
import grpc from '../assets/grpc.jpeg';

const aiStack = [
  'LLM APIs & streaming',
  'Agent-style workflows',
  'Prompt & eval loops',
  'Vector / retrieval patterns',
  'Embeddings & search',
  'Bot platforms (Telegram)',
  'Secure key handling',
];

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const skills = [
    { image: golang, title: 'Golang' },
    { image: nestjs, title: 'Nest.js' },
    { image: kafka, title: 'Apache Kafka' },
    { image: dockerImage, title: 'Docker' },
    { image: mongodb, title: 'MongoDB' },
    { image: postgres, title: 'PostgreSQL' },
    { image: reactImage, title: 'React' },
    { image: nextjsImage, title: 'Next.js' },
    { image: awsImage, title: 'AWS' }aws  { image: grpc, title: 'gRPC' },
    { image: kubernet, title: 'Kubernetes' },
  ];

  return (
    <section id="skills" className="mt-20 flex flex-col items-center px-4 py-16 md:py-20">
      <h2 className="heading mb-3 text-zinc-100">Skills</h2>
      <p className="mb-10 max-w-xl text-center text-sm text-zinc-400 md:text-base">
        Stack I use to ship backends, UIs, and AI-connected features.
      </p>

      <div className="surface-card mb-12 w-full max-w-4xl p-6 md:p-8">
        <h3 className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400/90">
          AI &amp; intelligent systems
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {aiStack.map((label) => (
            <span
              key={label}
              className="rounded-full border border-fuchsia-500/20 bg-fuchsia-500/[0.08] px-3 py-1.5 text-xs font-medium text-fuchsia-100/90"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="surface-card w-full max-w-5xl px-4 py-8 md:px-8 md:py-10 [&_.slick-dots_li_button:before]:text-zinc-500 [&_.slick-dots_li.slick-active_button:before]:text-cyan-400">
        <h3 className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Platforms &amp; infrastructure
        </h3>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={skill.title + index}>
              <div className="flex flex-col items-center justify-center px-3">
                <div className="relative flex h-28 w-full max-w-[170px] items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] sm:h-[130px]">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    className="object-contain p-3"
                    fill
                    sizes="170px"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-zinc-300">{skill.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
