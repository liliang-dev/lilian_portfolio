import { cn } from "@/lib/utils"
import Link from "next/link"
import { PropsWithChildren } from "react"

export const Experience = (props: PropsWithChildren<{className?:string, from:string, to:string, title:string, company:string, link:string}>) =>  {
    const htmlText: string = props.children ? props.children.toString() : ''
    
    return (
        <Link href={props.link} target="_blank" className={cn("grid grid-cols-12 gap-5 font-grand p-5 rounded-lg duration-300 bg-[#f9f9f9] hover:bg-[#f1f1f1] hover:scale-105 text-foreground", props.className)}>
            <div className={`col-span-3 font-bold max-md:justify-center max-md:items-center max-md:flex max-md:flex-col`}><span>{props.from}</span> <span>-</span> <span>{props.to}</span></div>
            <div className="flex flex-col col-span-9 gap-1">
                <p><strong>{props.title} - <span className={"text-primary"}>{props.company}</span></strong></p>
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: htmlText}}></p>
            </div>
        </Link>
    )
}