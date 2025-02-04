import { cn } from "@/lib/utils"
import Link from "next/link"
import { PropsWithChildren } from "react"

export interface StudyObject {
    id: number;
    from_year: string;
    to_year: string;
    title: string;
    company: string;
    link: string;
    description: string;
}

export const Study = (props: PropsWithChildren<{className?:string, study: StudyObject}>) =>  {
    return (
        <Link href={props.study.link} target="_blank" className={cn("grid grid-cols-12 gap-5 font-grand p-5 rounded-lg duration-300 bg-[#f9f9f9] hover:bg-[#f1f1f1] hover:scale-105 text-foreground", props.className)}>
            <div className={`col-span-3 font-bold max-md:justify-center max-md:items-center max-md:flex max-md:flex-col`}><span>{props.study.from_year}</span> <span>-</span> <span>{props.study.to_year}</span></div>
            <div className="flex flex-col col-span-9 gap-1">
                <p><strong>{props.study.title}</strong></p>
                <p><strong><span className={"text-fourth"}>{props.study.company}</span></strong></p>
                <p className="text-sm">
                    {props.study.description}
                </p>
            </div>
        </Link>
    )
}