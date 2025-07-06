"use client";

import Style from "@/styles/Home.module.css";
import { Footer } from "@/components/footer";
import { Main } from "@/components/main";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className={Style.main}>

      <Header />

      <Main page = "home"/>

      <Footer />
    </div>
  );
}
