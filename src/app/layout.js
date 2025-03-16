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
  title: "Delux - Earn from daily Jobs",
  description:
    "Monetize your social media effortlessly! Earn rewards by engaging with posts regularly ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1600px] justify-center justify-self-center">
        {children}
      </body>
    </html>
  );
}
