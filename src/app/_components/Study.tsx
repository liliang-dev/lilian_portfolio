import { cn } from "@/lib/utils"
import Link from "next/link"
import { PropsWithChildren } from "react"

export const Study = (props: PropsWithChildren<{className?:string, from:string, to:string, title:string, company:string, link:string}>) =>  {
    return (
        <Link href={props.link} target="_blank" className={cn("grid grid-cols-12 gap-5 font-grand p-5 rounded-lg duration-300 bg-[#f9f9f9] hover:bg-[#f1f1f1] text-foreground", props.className)}>
            <div className={`col-span-3 font-bold`}>{props.from} - {props.to}</div>
            <div className="flex flex-col col-span-9 gap-1">
                <p><strong>{props.title}</strong></p>
                <p><strong><span className={"text-fourth"}>{props.company}</span></strong></p>
                <p className="text-sm">
                    {props.children}
                </p>
            </div>
        </Link>
    )
}