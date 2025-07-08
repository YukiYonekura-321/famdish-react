"use client";

import Style from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/footer.jsx";
import { Main } from "@/src/components/main.jsx";
import { Header } from "@/src/components/header.jsx";
import {useState, useCallback, useEffect} from "react";
import { useFoo } from "@/src/context/FooContext";

const ITEMS = [
    {
        href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        src: "/file.svg",
        alt: "File icon",
        text: "Learn More"
    },
    {
        href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        src: "/window.svg",
        alt: "Window icon",
        text: "Explore Templates"
    },
    {
        href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        src: "/globe.svg",
        alt: "Globe icon",
        text: "Let's go to nextjs.org →"
    }
]


export default function Home() {
  const { foo, bar, baz } = useFoo ();

  const [items, setItems] = useState(ITEMS);

  const handleDiscount = useCallback(() => {
      setItems(prevItems => {
          return prevItems.slice(0, prevItems.length - 1)
      })
  }, [])

  console.log( foo );
  console.log( bar );
  console.log( baz );

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue"; // 背景色を変更
    return () => {
      document.body.style.backgroundColor = ""; // 背景色を元に戻す
    };
  }, []);

  return (
    <div className={Style.main}>

      <Header />

      <Main page = "home" items = {items} />

      <Footer items = {items} handleDiscount = {handleDiscount} />

      

    </div>
  );
}
