import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 w-full border-t border-white/[0.06] py-8 text-zinc-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 text-center text-sm sm:flex-row sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} Million. All rights reserved.</p>
        <p className="font-mono text-xs text-zinc-600">Built with Next.js</p>
      </div>
    </footer>
  );
};

export default Footer;
