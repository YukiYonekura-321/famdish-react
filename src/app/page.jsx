"use client";

import Style from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/footer.jsx";
import { Main } from "@/src/components/main.jsx";
import { Header } from "@/src/components/header.jsx";

export default function Home() {
  return (
    <div className={Style.main}>

      <Header />

      <Main page = "home"/>

      <Footer />

    </div>
  );
}
