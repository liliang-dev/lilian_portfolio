import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils";

export interface SkillObject {
    id: number;
    color: string;
    name: string;
}

export const Skill = (props: PropsWithChildren<{className?:string, skill: SkillObject}>) => {
    return (
        <div style={{backgroundColor:`${props.skill.color}`}} className={cn("rounded-lg px-2 py-1 text-md font-grand border-sketched duration-200 opacity-70 hover:opacity-100 hover:scale-105", props.className)}>
            {props.skill.name}
        </div>
    )
}