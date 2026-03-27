'use client'
import React from 'react';
import { saveAs } from 'file-saver'; // Import the file-saver library

const MagicButton = () => {
  const handleDownload = () => {
    const fileUrl = '/resume/million_resume.pdf'; // Path to the file in the public folder
    const fileName = 'million_resume.pdf'; // Name for the downloaded file

    // Use file-saver to trigger the download
    saveAs(fileUrl, fileName);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#8b5cf6_50%,#22d3ee_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-semibold text-zinc-100 backdrop-blur-xl">
        Résumé PDF
      </span>
    </button>
  );
};

export default MagicButton;
