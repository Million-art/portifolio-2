'use client'
import React from 'react';
import { saveAs } from 'file-saver';
import { cn } from '@/lib/utils/cn';

const MagicButton = ({ className }: { className?: string }) => {
  const handleDownload = () => {
    const fileUrl = '/resume/million_resume.pdf';
    const fileName = 'million_resume.pdf';

    saveAs(fileUrl, fileName);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={cn(
        'relative inline-flex h-12 min-h-[3rem] w-full overflow-hidden rounded-full p-px focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:w-auto',
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#8b5cf6_50%,#22d3ee_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-semibold text-zinc-100 backdrop-blur-xl">
        Résumé PDF
      </span>
    </button>
  );
};

export default MagicButton;
