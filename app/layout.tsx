import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const title = `${profile.name} | ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://noahstarkenburg.dev"),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description: profile.hook,
  keywords: [
    "Noah Starkenburg",
    "Software Engineer",
    "Software Developer",
    "Backend Engineer",
    "Full-stack Developer",
    "Java",
    "C#",
    ".NET",
    "ASP.NET Core",
    "Python",
    "React",
    "TypeScript",
    "Go",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title,
    description: profile.hook,
    url: "https://noahstarkenburg.dev",
    siteName: profile.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-flair="on"
      className={`${sans.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-screen bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
