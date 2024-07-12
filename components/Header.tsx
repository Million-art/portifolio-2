'use client'
import Link from 'next/link';
 import { usePathname } from 'next/navigation';
 import logo from './images/logo.png';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Contact Me',
      href: '#contact'
    },
    {
      label: 'Portifolio',
      href: '#portifolio'
    },
    
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky  p-4  top-0 z-10 text-black    ">
      <div className="container  mx-auto flex justify-between items-center">
        <Link href="/"  className="  font-bold text-2xl md:text-3xl relative">
            <h1 className='text-white'>My Portifolio</h1>             
        </Link>
        <div className="md:hidden">
          <button
            className="focus:outline-none text-white"
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          className={`flex-col mt-4  pl-5 py-5   gap-4 md:flex  md:flex-row  md:mt-0  md:gap-5 ${
            isMenuOpen ? 'flex absolute  bg-dark justify-start z-50' : 'hidden'
          } absolute text-white bg-blue mt-96  left-0 right-0    md:bottom-0 md:static`}
        >
           {navItems.map((item, index) => (
              <li key={index} className='list-none' onClick={()=>setIsMenuOpen(!isMenuOpen)}
>
                <Link href={item.href} className={`block  lg:inline-block hover:text-golden ${pathname === item.href ? 'font-semibold dark:golden text-golden' : ''}`}>
                  {item.label}
                </Link>
              </li>
            ))}

        
        </div>
       
      </div>
    </nav>
  );
};

export default Header;
