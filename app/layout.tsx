import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Million's Portfolio",
  description:
    "Senior backend engineer building AI-powered products, scalable APIs, and intelligent bots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}