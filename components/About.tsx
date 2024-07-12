import React from 'react';

const About = () => {
    return (
        <div id='about' className='container mt-48 sm:mx-auto  px-4'>
            <h1 className='text-3xl font-bold mt-8 mb-4 text-center'>About Me</h1>
            <p className='text-lg text-center mb-8'>
                I am a passionate and ethical developer with strong problem-solving skills and a solid foundation in data structures and algorithms. These skills empower me to effectively tackle challenges and deliver robust solutions.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-black px-3 py-5 border rounded-xl text-white'>
                    <h2 className='text-lg font-semibold mb-2'>Education</h2>
                         <li>Bachelor's in Computer Science</li>
                          <li>Level2 in Graphics Design </li>
                 </div>
                <div className='bg-black px-3 py-5 border rounded-xl text-white'>
                    <h2 className='text-lg font-semibold mb-2'>Certifications</h2>
                    <ul className='text-gray-300'>
                        <li>👉 <a href="https://www.udemy.com/certificate/UC-372be494-59ec-489a-8cbb-d5f64426cfa4/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email"> Frontend development Zero to Expert </a></li>
                        <li>👉 <a href="https://verify.mygreatlearning.com/verify/XGZDMZUM"> Project Management </a></li>
                        <li>👉 <a href="https://verify.mygreatlearning.com/verify/RQDMXFNT"> AWS Fundamentals </a></li>
                        <li>👉 <a href="https://www.credly.com/badges/d2fadc2d-cb36-4faa-a4b2-c1fe44c9eda5/print"> CISCO Networking </a></li>
                    </ul>
                </div>
                <div className='bg-black px-3 py-5 border rounded-xl text-white'>
                    <h2 className='text-lg font-semibold mb-2'>Experience</h2>
                    <ul className='text-gray-300 '>
                        <li>📝 1+ Year at Blih Marketing as a Programmer</li>
                        <li>📝 1+ year as a frelancer</li>
                        <li>📝 3 Months at Fana as an IT Officer</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
