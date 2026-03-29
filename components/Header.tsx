'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portifolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 pt-4 pb-2">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-black/40 px-4 py-3 backdrop-blur-xl md:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white md:text-xl"
        >
          Million<span className="text-upwork">.</span>
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          onClick={() => setIsMenuOpen((o) => !o)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <ul
          className={`absolute left-4 right-4 top-full z-50 mt-2 flex flex-col gap-1 rounded-xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-xl md:static md:mt-0 md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            isMenuOpen ? 'flex' : 'hidden md:flex'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.href} className="list-none">
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition md:py-1.5 ${
                  pathname === item.href
                    ? 'bg-white/10 text-white'
                    : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
