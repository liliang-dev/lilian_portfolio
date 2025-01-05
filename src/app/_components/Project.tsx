import { cn } from "@/lib/utils"
import Link from "next/link"
import { PropsWithChildren } from "react"
import Image, { StaticImageData } from 'next/image'
import { Skill, SkillObject } from "./Skill";
export interface ProjectObject {
    id: number;
    title:string;
    link:string;
    image:StaticImageData;
    alt:string;
    description: string;
    skills: SkillObject[];
}

export const Project = (props: PropsWithChildren<{className?:string, project: ProjectObject}>) =>  {
    return (
        <Link href={props.project.link || ''} target="_blank" className={cn("grid grid-cols-12 max-sm:flex max-sm:flex-col max-sm:grid-rows-2 max-sm:grid-flow-col gap-5 font-grand p-5 rounded-lg duration-300 bg-[#f9f9f9] hover:bg-[#f1f1f1] hover:scale-105 text-foreground", props.className)}>
            <div className={`col-span-3 text-xs justify-center items-center`}>
                <Image src={`/images/${props.project.image}`} className="rounded-sm h-full w-full object-cover" alt={props.project.alt} width="1000" height="1000"/>
            </div>
            <div className="flex flex-col col-span-9 max-sm:text-center gap-1">
                <p><strong>{props.project.title}</strong></p>
                <p className="text-sm">
                    {props.project.description}
                </p>
                <div className="flex gap-2 max-sm:justify-center">
                    {props.project.skills?.length > 0 && props.project.skills.map((skill: any) => (
                        <Skill key={skill.id} skill={skill} />
                    ))}
                </div>
            </div>
        </Link>
    )
}