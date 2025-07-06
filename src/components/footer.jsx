import Image from "next/image";

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

export function Footer(){
    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            {ITEMS.map((item) => {
                return (
                    <a
                        key={item.href}
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src={item.src}
                            alt={item.alt}
                            width={16}
                            height={16}
                        />
                        🔸{item.text}
                    </a>
                )
            })}
        </footer>
    )
}        
        