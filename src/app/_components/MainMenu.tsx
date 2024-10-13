import { PropsWithChildren } from "react"
import Link from "next/link"

export const MainMenu = (props: PropsWithChildren<{className?:string}>) => {
    return (
        <div className={props.className}>
            <Link href="#experience" className="duration-300 hover:scale-105 hover:text-primary"><span className="text-primary">1.</span> Experience</Link>
            <Link href="#skills" className="duration-300 hover:scale-105 hover:text-secondary"><span className="text-secondary">2.</span> Skills</Link>
            <Link href="#projects" className="duration-300 hover:scale-105 hover:text-third"><span className="text-third">3.</span> Projects</Link>
            <Link href="#studies" className="duration-300 hover:scale-105 hover:text-fourth"><span className="text-fourth">4.</span> Studies</Link>
        </div>
    )
}