'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Import all the necessary image assets
import postgres from '../assets/postgress.png';
import kubernet from '../assets/kubernet.png';
import nestjs from '../assets/nest.png';
import reactImage from '../assets/react.png';
import nextjsImage from '../assets/nextjs.png';
import nodejsImage from '../assets/node.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import graphql from '../assets/graphql.png';
import rustapi from '../assets/rustapi.png';
import golang from '../assets/golang.png';
import githubImage from '../assets/git.png';
import dockerImage from '../assets/docker.png';
import kafka from '../assets/kafka.png';
import rabitmq from '../assets/rabit.png';

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
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="mt-5 flex flex-col px-5 items-center py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-12">My Skills</h1>
      <div className="max-w-4xl w-full">
        <Slider {...settings}>
          {/* Skill items */}
          {[

            { image: reactImage, title: 'React' },
            { image: nextjsImage, title: 'Next.js' },
            { image: nestjs, title: 'Nest Js' },
            { image: nodejsImage, title: 'Node.js' },
            { image: golang, title: 'Golang' },
            { image: mongodb, title: 'MongoDB' },
            { image: mysql, title: 'MySQL' },
            { image: postgres, title: 'PostgreSQL' },
            { image: githubImage, title: 'GitHub' },
            { image: graphql, title: 'graphql' },
            { image: rustapi, title: 'rust Api' },
            { image: kafka, title: 'Apache Kafka' },
            { image: rabitmq, title: 'RabitMQ' },
            { image: dockerImage, title: 'Docker' },
            { image: kubernet, title: 'Kubernetes' },
          ].map((skill, index) => (
            <div>
              <div key={index} className="flex justify-center  flex-col items-center px-4">
                <div className="w-[170px] h-32 sm:w-full  sm:h-[130px] flex  relative">
                  <Image src={skill.image} objectFit="contain" alt={skill.title} className=' sm:ml-0' />
                </div>
              </div>
                <p className="mt-4 font-medium text-base sm:text-xl text-center">{skill.title}</p>
            </div>

          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
