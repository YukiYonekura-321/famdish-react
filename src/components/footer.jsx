import Image from "next/image";

export function Footer(props){
    

    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <button onClick = {props.handleDiscount}>減らす</button>
            {props.items.map((item) => {
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
        