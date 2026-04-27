import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MD Tauhid | Portfolio",
  description: "Full-Stack Developer | Networking Enthusiast",

  openGraph: {
    title: "MD Tauhid | Portfolio",
    description: "Full-Stack Developer | Networking Enthusiast",
    url: "https://your-vercel-link.vercel.app",
    siteName: "Tauhid's Portfolio",
    images: [
      {
        url: "/preview.png", // put image in /public
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
