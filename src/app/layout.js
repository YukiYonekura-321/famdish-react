import { Geist, Geist_Mono } from "next/font/google";
import "@/src/app/globals.css";
import React from "react";
import { FooProvider } from "@/src/context/FooContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FooProvider>
          {children}
        </FooProvider>
      </body>
    </html>
  );
}
