"use client";

import Style from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/footer.jsx";
import { Main } from "@/src/components/main.jsx";
import { Header } from "@/src/components/header.jsx";
import { useEffect } from "react";

export default function Home() {
  // console.log("レンダリング！");

  useEffect(() => {
    console.log("マウント！");
    document.body.style.backgroundColor = "lightblue"; // 背景色を変更
    return () => {
      console.log("アンマウント");
      document.body.style.backgroundColor = ""; // 背景色を元に戻す
    };
  }, []);

  return (
    <div className={Style.main}>

      <Header />

      <Main page = "home"/>

      <Footer />

    </div>
  );
}
