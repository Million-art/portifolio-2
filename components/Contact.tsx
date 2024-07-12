import React from 'react';

const Contact = () => {
  // Define your contact details
  const contactDetails = {
    telegram: 'https://t.me/miilla021',
    linkedin: 'https://www.linkedin.com/in/your_linkedin_username',
    gmail: 'mailto:millionmulugeta09@gmail.com',
    phone: '+251943789101'   
  };

  return (
    <div className=" shadow-md rounded-lg p-8 max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      
      <ul className="space-y-4">
        <li className="flex items-center">
          <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 12a7 7 0 0 1-7 7m0 0a7 7 0 0 1-7-7m7 7v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4-10.586a2 2 0 1 1-2.828 2.828A2 2 0 0 1 12 8.243V10m4 3v2a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2m-4-3V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
          <a href={contactDetails.telegram} className="text-blue-500">{contactDetails.telegram}</a>
        </li>
        <li className="flex items-center">
          <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M3 3h18v18H3V3zm5 4h8M8 15h.01M8 9h.01M8 12h.01m8-7v14"></path>
          </svg>
          <a href={contactDetails.linkedin} className="text-blue-500">{contactDetails.linkedin}</a>
        </li>
        <li className="flex items-center">
          <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 7h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm1-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
          </svg>
          <a href={contactDetails.gmail} className="text-blue-500">{contactDetails.gmail}</a>
        </li>
        <li className="flex items-center">
          <svg className="w-6 h-6 mr-3 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2a6 6 0 0 1 6 6c0 3.88-3.5 6.333-6 8-2.5-1.667-6-4.12-6-8a6 6 0 0 1 6-6zm-4 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
          </svg>
          <span className="text-gray-700">{contactDetails.phone}</span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
