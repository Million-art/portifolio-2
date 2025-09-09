import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div id='about' className='container mt-48 sm:mx-auto  px-4'>
            <h1 className='text-3xl font-bold mt-8 mb-4 text-center'>About Me</h1>
            <p className='text-lg text-center mb-8 text-white'>
                I am a passionate and ethical developer with strong problem-solving skills and a solid foundation in data structures and algorithms. These skills empower me to effectively tackle challenges and deliver optimal solutions.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-black px-3 py-5 border rounded-xl text-white'>
                    <h2 className='text-lg font-semibold mb-2'>Education</h2>
                         <li>Bachelor's in Computer Science</li>
                  </div>
                <div className='bg-black px-3 py-5 border rounded-xl text-white'>
                    <h2 className='text-lg font-semibold mb-2'>Certifications</h2>
                    <ul className='text-blue-400'>
                        <li>👉 <Link href="https://www.udemy.com/certificate/UC-372be494-59ec-489a-8cbb-d5f64426cfa4/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email"> Frontend development Zero to Expert </Link></li>
                        <li>👉 <Link href="https://verify.mygreatlearning.com/verify/XGZDMZUM"> Project Management </Link></li>
                        <li>👉 <Link href="https://verify.mygreatlearning.com/verify/RQDMXFNT"> AWS Fundamentals </Link></li>
                        <li>👉 <Link href="https://www.credly.com/badges/d2fadc2d-cb36-4faa-a4b2-c1fe44c9eda5/print"> CISCO Networking </Link></li>
                    </ul>
                </div>
                <div className='bg-black px-3 py-5 border rounded-xl text-white'>
                    <h2 className='text-lg font-semibold mb-2'>Experience</h2>
                    <ul className='text-gray-300'>

                        <li>📝 1+ year at <Link href='https://www.blihmarketing.com' className='text-blue-400'>Blih Marketing</Link> as a Programmer</li>
                        <li>📝 1 year at <Link href='https://www.blihmarketing.com' className='text-blue-400'>30x LLC(Remote)</Link> as a Web Developer</li>
                        <li>📝 6 months at <Link  className='text-blue-400' href='https://www.godigitalethio.com'>Go Digital </Link>  as a Backend Developer</li>
                        <li>📝 8 months at <Link  className='text-blue-400' href="https://techsphareet.com/">Techsphere</Link> as a Web Developer</li>
                        <li>📝 3 months at <Link  className='text-blue-400' href='https://www.fanabc.com/' >Fana BC</Link> as an Intern</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default About;
