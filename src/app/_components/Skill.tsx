import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Skill = (props: PropsWithChildren<{className?:string, name:string, link:string}>) => {
    return (
        <Link href={props.link} target="_blank" className={cn("rounded-lg px-2 py-1 text-md font-grand border-sketched duration-200 opacity-70 hover:opacity-100 hover:scale-105", props.className)}>
            {props.name}
        </Link>
    )
}