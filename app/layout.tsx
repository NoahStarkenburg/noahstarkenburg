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

// Runs synchronously in <head> before first paint: applies the saved theme,
// or falls back to the OS preference. Prevents a flash of the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

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
      data-theme="light"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
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
