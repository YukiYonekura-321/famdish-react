import Image from "next/image";
import { Headline } from "./headline.jsx";
import { use, useCallback, useState } from "react";

export function Main(props) {
    const [text, SetText] = useState("");
    const [array, setArray] = useState([]);

    const handleClick = useCallback(() => {
      alert("クリック！！");
    }, []);

    const handleChange = useCallback((event) => {
      if (event.target.value.length > 5) {
        alert("5文字以下で入力してください");
        return;
      }
      SetText(event.target.value.trim());
    }, []);

    const handleAdd = useCallback(() => {
      setArray((prevArray) => {
        if (text === "") {
          alert("入力してください");
          return prevArray;
        }
        if (prevArray.includes(text)) {
          alert("同じ値が既に存在します");
          return prevArray;
        }
        return [...prevArray, text];
      });
    }, [text]);

    return(
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <Headline 
            page = {props.page} 
            paragraph = {<p className="text-lg mt-4">This is a simple headline component that can be reused across different pages.</p>}
            onClick={handleClick}
        >
            Welcome to the {props.page} Page
        </Headline>


        <input type="text" value={text} onChange={handleChange} />

        <button onClick={handleAdd}>追加</button>

        <ul>
          {array.map(
            (item) => (
              <li key={item} className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                {item}
              </li>
            )
          )}
        </ul>

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
    )
}