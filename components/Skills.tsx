import React from 'react';
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
  return (
    <div className="mt-5 flex h-fit flex-col justify-center items-center py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-12">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-center gap-12 max-w-4xl">
        {/* Skill items */}
        {[
          { image: htmlImage, title: 'HTML' },
          { image: cssImage, title: 'CSS' },
          { image: jsImage, title: 'JavaScript' },
          { image: reactImage, title: 'React' },
          { image: nextjsImage, title: 'Next.js' },
          { image: nodejsImage, title: 'Node.js' },
          { image: wordpressImage, title: 'WordPress' },
          { image: mongodb, title: 'MongoDB' },
          { image: mysql, title: 'MySql' },
          { image: api, title: 'Api Integration' },
          { image: githubImage, title: 'GitHub' },
          { image: dockerImage, title: 'Docker' },
        ].map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-24 sm:w-32 h-24 sm:h-32 rounded-full overflow-hidden">
              <Image src={skill.image} layout="fill" objectFit="cover" className="animate-pulse" alt={skill.title} />
            </div>
            <p className="mt-4 font-medium text-base sm:text-xl">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;