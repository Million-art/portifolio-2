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
      <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">Web Development 🌐 </h2>
      <p className="text-base md:text-lg lg:text-xl mb-6">
        I have extensive experience in building responsive and user-friendly websites for both individuals
         and businesses. My expertise extends from creating simple static pages to complex dynamic web applications 
         using the latest and most trending tech stacks.
      </p>
      
    </div>
  );
};

export default Web;