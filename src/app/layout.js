import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dex | Portfolio",
  description: "Personal portfolio website showcasing my projects, skills, and professional experience in software development",
  keywords: ["portfolio", "web developer", "software engineer", "frontend", "backend", "fullstack", "developer portfolio"],
  authors: [{ name: "Dex" }],
  metadataBase: new URL("https://dineshveguru.me"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dineshveguru.me', // Replace with your actual domain
    title: 'Dex | Portfolio',
    description: 'Personal portfolio website showcasing my projects, skills, and professional experience in software development',
    siteName: 'Dex Portfolio',
    images: [
      {
        url: '/d.png',
        width: 1200,
        height: 630,
        alt: 'Dex Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dex | Portfolio',
    description: 'Personal portfolio website showcasing my projects, skills, and professional experience in software development',
    images: ['/d.png'],
    creator: '@yourtwitterhandle', // Replace with your Twitter handle
  },
  icons: {
    icon: '/d.png',
    apple: '/d.png',
    shortcut: '/d.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Ephesis&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
