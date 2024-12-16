import { cn } from "@/lib/utils"
import Link from "next/link"
import { PropsWithChildren } from "react"

export const ShowMore = (props: PropsWithChildren<{className?:string, link:string}>) =>  {    
    return (
        <Link href={props.link} className={cn("flex justify-center font-bold gap-5 font-grand p-2 rounded-lg duration-300 bg-[#f9f9f9] hover:bg-[#f1f1f1] hover:scale-105 text-foreground", props.className)}>
            Show more
        </Link>
    )
}