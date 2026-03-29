'use client'
import React from 'react';
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
      className="flex h-full min-h-[5.5rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 text-zinc-200 transition hover:border-[#34C759]/35 hover:bg-white/[0.05]"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleClick(e as unknown as React.MouseEvent<HTMLDivElement>);
      }}
    >
      <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" aria-hidden>
        <rect width="24" height="24" rx="2" fill="#34C759" />
        <path
          fill="white"
          d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
        />
      </svg>
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
      className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
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
          <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" aria-hidden>
            <circle cx="12" cy="12" r="12" fill="#229ED9" />
            <path
              fill="white"
              d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.28-.89-.86.2-1.3l15.97-6.15c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.24 1.02-.84 1.27-1.7.79l-4.43-3.27-2.12 1.96c-.25.25-.46.46-.92.46z"
            />
          </svg>
        )}
        {linkTile(
          contactDetails.linkedin,
          'LinkedIn',
          <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" aria-hidden>
            <rect width="24" height="24" rx="2" fill="#0A66C2" />
            <path
              fill="white"
              d="M6.94 15.99H4.32V8.41h2.62v7.58zm-1.31-8.66c-.84 0-1.52-.69-1.52-1.53 0-.84.68-1.52 1.52-1.52.83 0 1.51.68 1.51 1.52 0 .84-.68 1.53-1.51 1.53zm12.3 8.66h-2.61v-3.68c0-.88-.02-2.01-1.22-2.01-1.23 0-1.42.96-1.42 1.95v3.74h-2.61V8.41h2.51v1.03h.04c.35-.66 1.2-1.36 2.47-1.36 2.64 0 3.13 1.74 3.13 4v3.91z"
            />
          </svg>
        )}
        {linkTile(
          contactDetails.gmail,
          'Email',
          <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" aria-hidden>
            <rect width="24" height="24" rx="2" fill="#EA4335" />
            <path
              fill="white"
              d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 2.2L12 13l-7-5.8V7l7 6 7-6v.2zm0 1.7V17H5V9.5l6.4 4c.35.22.78.22 1.13 0L19 9.5z"
            />
          </svg>,
          false
        )}
        <PhoneNumber phoneNumber={contactDetails.phone} />
      </div>
    </section>
  );
};

export default Contact;
