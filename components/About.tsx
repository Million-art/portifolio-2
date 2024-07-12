import React from 'react';

const About = () => {
    return (
        <div id='about' className='container mx-auto px-4'>
            <h1 className='text-3xl font-bold mt-8 mb-4 text-center'>About Me</h1>
            <p className='text-lg text-center mb-8'>
                I am a passionate and ethical developer with strong problem-solving skills and a solid foundation in data structures and algorithms. These skills empower me to effectively tackle challenges and deliver robust solutions.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-black px-3 py-5 border rounded-xl text-white'>
                    <h2 className='text-lg font-semibold mb-2'>Education</h2>
                    <p className='text-gray-300'>
                        Bachelor's in Computer Science
                    </p>
                </div>
                <div className='bg-black px-3 py-5 border rounded-xl text-white'>
                    <h2 className='text-lg font-semibold mb-2'>Certifications</h2>
                    <ul className='text-gray-300'>
                        <li>Project Management</li>
                        <li>AWS Fundamentals</li>
                        <li>CISCO Networking</li>
                    </ul>
                </div>
                <div className='bg-black px-3 py-5 border rounded-xl text-white'>
                    <h2 className='text-lg font-semibold mb-2'>Experience</h2>
                    <ul className='text-gray-300'>
                        <li>1+ Year at Blih Marketing as a Programmer</li>
                        <li>3 Months at Fana as IT Support</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
