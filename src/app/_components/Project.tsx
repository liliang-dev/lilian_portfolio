import { cn } from "@/lib/utils"
import Link from "next/link"
import { PropsWithChildren } from "react"
import Image, { StaticImageData } from 'next/image'

export const Project = (props: PropsWithChildren<{className?:string, title:string, link:string, image:StaticImageData}>) =>  {
    return (
        <Link href={props.link} target="_blank" className={cn("grid grid-cols-12 gap-5 font-grand p-5 rounded-lg duration-300 bg-[#f9f9f9] hover:bg-[#f1f1f1] hover:scale-105 text-foreground", props.className)}>
            <div className={`col-span-3 text-xs justify-center items-center flex flex-col`}>
                <Image src={props.image} className="rounded-sm grayscale h-full w-96 object-cover" placeholder="blur" alt="Picture of the SoLearnSystem application showing solar system on a book"/>
            </div>
            <div className="flex flex-col col-span-9 gap-1">
                <p><strong>{props.title}</strong></p>
                <p className="text-sm">
                    {props.children}
                </p>
            </div>
        </Link>
    )
}