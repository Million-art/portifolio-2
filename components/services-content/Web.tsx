import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const portfolioItems = [
  {
    img: '/project1.jpg',
    name: 'Project 1',
    gitHubUrl: 'https://github.com/username/project1',
    websiteUrl: 'https://www.example.com/project1',
  },
  {
    img: '/project2.jpg',
    name: 'Project 2',
    gitHubUrl: 'https://github.com/username/project2',
    websiteUrl: 'https://www.example.com/project2',
  },
  {
    img: '/project3.jpg',
    name: 'Project 3',
    gitHubUrl: 'https://github.com/username/project3',
    websiteUrl: 'https://www.example.com/project3',
  },
  // Add more portfolio items as needed
];

const Web = () => {
  return (
    <div className="w-full h-fit bg-black rounded-2xl shadow-xl border border-blue-500 p-6 md:p-8 lg:p-10">
      <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">Fullstack Web Development 🌐 </h2>
      <li className='text-lg font-thin text-gray-300'>Frontend Development: using React and Next js, I can develop web that are optimised and efficient </li>
      <li className='text-lg font-thin text-gray-300'>Backend Development: using Node js, Express js and Next.js 13, I can develop backend services that are powerfull and secure  </li>
      <li className='text-lg font-thin text-gray-300'>Api integration: Rust Api integration</li>
      <li className='text-lg font-thin text-gray-300'>Wordpress: I excele developing fast and efficient wordpress site using elementor and gutenberg</li>
       
      
    </div>
  );
};

export default Web;