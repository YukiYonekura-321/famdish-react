"use client";

import Style from "@/styles/Home.module.css";
import { Footer } from "@/components/footer";
import { Main } from "@/components/main";

export default function Home() {
  return (
    <div className={Style.main}>
    {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div> */}
      <Main page = "home"/>

      <Footer />
    </div>
  );
}
