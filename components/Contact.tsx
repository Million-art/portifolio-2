import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
 
const Contact = () => {
  // Define your contact details
  const contactDetails = {
    telegram: 'https://t.me/miilla021',
    linkedin: 'https://www.linkedin.com/in/your_linkedin_username',
    gmail: 'mailto:millionmulugeta09@gmail.com',
    phone: '+251943789101'   
  };

  return (
    <div id='contact' className="shadow-md rounded-lg p-8 max-w-4xl mx-auto mt-10">
  <h1 className="text-3xl font-bold mb-6 text-center">Contact Million</h1>
  <ul className="py-5  flex justify-center items-center gap-10">
    <li className="flex">
      <Link href="https://t.me/miilla021" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.866 7.287l-2.89 13.565c-.216.997-.816 1.242-1.65.773l-4.558-3.354-2.191 2.108c-.243.243-.446.446-.914.446-.599 0-.5-.225-.705-.798L6.5 13.09l-4.076-1.277c-.888-.272-.902-.888.199-1.32l15.966-6.175c.73-.272 1.433.18 1.152 1.269z"/>
        </svg>
       </Link>
    </li>
    <li className="flex items-center">
      <Link href="https://www.linkedin.com/in/your_linkedin_username" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
       </Link>
    </li>
    <li className="flex items-center">
      <Link href="mailto:millionmulugeta09@gmail.com" className="text-blue-500 hover:underline">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
        </svg>
       </Link>
    </li>
    <li className="flex items-center">
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 24.868 1.12-.236 2.83-1.243 3.065-1.506z"/>
      </svg>
      +251943789101
    </li>
  </ul>
</div>
  );
};

export default Contact;
