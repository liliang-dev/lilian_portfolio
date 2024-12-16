import { cn } from "@/lib/utils"
import Link from "next/link"
import { PropsWithChildren } from "react"

export const HomeArrow = (props: PropsWithChildren<{className?:string}>) =>  {    
    const backArrow = "<"
    return (
        <Link href="/" className={cn("duration-300 hover:scale-110 text-foreground", props.className)}>{backArrow} </Link>
    )
}