'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Import all the necessary image assets
import htmlImage from '../assets/html.png';
import cssImage from '../assets/css.png';
import jsImage from '../assets/js.png';
import reactImage from '../assets/react.png';
import nextjsImage from '../assets/nextjs.png';
import nodejsImage from '../assets/node.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import api from '../assets/api.png';
import wordpressImage from '../assets/wordpress.png';
import githubImage from '../assets/git.png';
import dockerImage from '../assets/docker.png';

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
    <div  className="mt-5 flex flex-col px-5 items-center py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-12">My Skills</h1>
      <div className="max-w-4xl w-full">
        <Slider {...settings}>
          {/* Skill items */}
          {[

            { image: jsImage, title: 'JavaScript' },
            { image: reactImage, title: 'React' },
            { image: nextjsImage, title: 'Next.js' },
            { image: nodejsImage, title: 'Node.js' },
            { image: wordpressImage, title: 'WordPress' },
            { image: mongodb, title: 'MongoDB' },
            { image: mysql, title: 'MySQL' },
            { image: api, title: 'API Integration' },
            { image: githubImage, title: 'GitHub' },
            { image: dockerImage, title: 'Docker' },
            { image: htmlImage, title: 'HTML' },
            { image: cssImage, title: 'CSS' },
          ].map((skill, index) => (
            <div key={index} className="flex justify-center  flex-col items-center px-4">
              <div className="w-[170px] h-32 sm:w-40 sm:h-[130px] flex justify-center items-center  overflow-hidden relative">
                <Image src={skill.image} layout="fill" objectFit="contain" alt={skill.title} className='' />
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
