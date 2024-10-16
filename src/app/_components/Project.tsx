import { cn } from "@/lib/utils"
import Link from "next/link"
import { PropsWithChildren } from "react"
import Image, { StaticImageData } from 'next/image'

export const Project = (props: PropsWithChildren<{className?:string, title:string, link:string, image:StaticImageData, alt:string}>) =>  {
    return (
        <Link href={props.link} target="_blank" className={cn("grid grid-cols-12 max-sm:flex max-sm:flex-col max-sm:grid-rows-2 max-sm:grid-flow-col gap-5 font-grand grayscale hover:grayscale-0 p-5 rounded-lg duration-300 bg-[#f9f9f9] hover:bg-[#f1f1f1] hover:scale-105 text-foreground", props.className)}>
            <div className={`col-span-3 text-xs justify-center items-center`}>
                <Image src={props.image} className="rounded-sm h-full w-full object-cover" placeholder="blur" alt={props.alt}/>
            </div>
            <div className="flex flex-col col-span-9 max-sm:text-center gap-1">
                <p><strong>{props.title}</strong></p>
                <p className="text-sm">
                    {props.children}
                </p>
            </div>
        </Link>
    )
}