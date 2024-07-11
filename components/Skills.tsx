import React from 'react';
import htmlImage from '../assets/html.png';
import cssImage from '../assets/css.png';
import jsImage from '../assets/js.png';
import reactImage from '../assets/react.png';
import nextjsImage from '../assets/nextjs.png';
import nodejsImage from '../assets/node.png';
import wordpressImage from '../assets/wordpress.png';
import githubImage from '../assets/git.png';
import dockerImage from '../assets/docker.png';
import Image from 'next/image';
const Skills = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-8">My Skills</h1>
      <div className="grid grid-cols-5 gap-8 max-w-4xl">
        {/* HTML */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image src={htmlImage} layout="fill" objectFit="cover" className='animate-pulse' alt="HTML" />
          </div>
          <p className="mt-2 text-center">HTML</p>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image src={cssImage} layout="fill" objectFit="cover" className='animate-pulse' alt="CSS" />
          </div>
          <p className="mt-2 text-center">CSS</p>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image src={jsImage} layout="fill" objectFit="cover" className='animate-pulse' alt="JavaScript" />
          </div>
          <p className="mt-2 text-center">JavaScript</p>
        </div>

        {/* React */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image src={reactImage} layout="fill" objectFit="cover" className='animate-pulse' alt="React" />
          </div>
          <p className="mt-2 text-center">React</p>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image src={nextjsImage} layout="fill" objectFit="cover" className='animate-pulse' alt="Next.js" />
          </div>
          <p className="mt-2 text-center">Next.js</p>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image src={nodejsImage} layout="fill" objectFit="cover" className='animate-pulse' alt="Node.js" />
          </div>
          <p className="mt-2 text-center">Node.js</p>
        </div>

        {/* WordPress */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image src={wordpressImage} layout="fill" objectFit="cover" className='animate-pulse' alt="WordPress" />
          </div>
          <p className="mt-2 text-center">WordPress</p>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image src={githubImage} layout="fill" objectFit="cover" className='animate-pulse' alt="GitHub" />
          </div>
          <p className="mt-2 text-center">GitHub</p>
        </div>

        {/* Docker */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image src={dockerImage} layout="fill" objectFit="cover" className='animate-pulse' alt="Docker" />
          </div>
          <p className="mt-2 text-center">Docker</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
