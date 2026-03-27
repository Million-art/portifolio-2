'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface PhoneNumberProps {
  phoneNumber: string;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({ phoneNumber }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (navigator.share) {
      navigator.share({ text: phoneNumber });
    } else {
      void navigator.clipboard.writeText(phoneNumber);
      alert('Phone number copied to clipboard.');
    }
  };

  return (
    <div
      className="flex h-full min-h-[5.5rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 text-zinc-200 transition hover:border-cyan-500/30 hover:bg-white/[0.05]"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleClick(e as unknown as React.MouseEvent<HTMLDivElement>);
      }}
    >
      <FontAwesomeIcon icon={['fas', 'phone']} className="h-7 w-7 text-cyan-400/90" />
      <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Phone</span>
      <span className="select-all font-mono text-sm text-zinc-200">{phoneNumber}</span>
    </div>
  );
};

const Contact = () => {
  const contactDetails = {
    telegram: 'https://t.me/miilla021',
    linkedin:
      'https://www.linkedin.com/in/million-mulugeta-b8604a233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    gmail: 'mailto:millionmulugeta09@gmail.com',
    phone: '+251943789101',
  };

  const linkTile = (
    href: string,
    label: string,
    children: React.ReactNode,
    external = true
  ) => (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 text-zinc-300 transition hover:border-violet-500/30 hover:bg-white/[0.06] hover:text-white"
    >
      {children}
      <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</span>
    </Link>
  );

  return (
    <section
      id="contact"
      className="surface-card mx-auto mt-24 max-w-3xl p-8 md:mt-32 md:p-10"
    >
      <h2 className="heading mb-2 text-zinc-100">Contact</h2>
      <p className="mb-8 text-center text-sm text-zinc-400">
        Open to backend, AI integration, and product engineering conversations.
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {linkTile(
          contactDetails.telegram,
          'Telegram',
          <svg className="h-7 w-7 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.866 7.287l-2.89 13.565c-.216.997-.816 1.242-1.65.773l-4.558-3.354-2.191 2.108c-.243.243-.446.446-.914.446-.599 0-.5-.225-.705-.798L6.5 13.09l-4.076-1.277c-.888-.272-.902-.888.199-1.32l15.966-6.175c.73-.272 1.433.18 1.152 1.269z" />
          </svg>
        )}
        {linkTile(
          contactDetails.linkedin,
          'LinkedIn',
          <svg className="h-7 w-7 text-violet-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        )}
        {linkTile(
          contactDetails.gmail,
          'Email',
          <svg className="h-7 w-7 text-fuchsia-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>,
          false
        )}
        <PhoneNumber phoneNumber={contactDetails.phone} />
      </div>
    </section>
  );
};

export default Contact;
