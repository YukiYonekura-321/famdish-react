"use client";

import { Footer } from "@/src/components/footer.jsx";
import { Main } from "@/src/components/main.jsx";
import { Header } from "@/src/components/header.jsx";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Header />

      <Main page = "about"/>

      <Footer />
    </div>
  );
}
