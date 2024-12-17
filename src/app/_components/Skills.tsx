import { PropsWithChildren } from "react"
import { Skill, SkillObject } from "./Skill"

export const Skills = (props: PropsWithChildren<{ className?: string, skills: SkillObject[] }>) => {
    return (
        <div className={props.className}>
            <h3 className="text-4xl font-bold text-foreground pb-5">
                <span id="skills" className="anchor"></span>
                <span className="text-secondary">2.</span> Skills
            </h3>
            <section className="flex flex-row flex-wrap gap-3 justify-between text-foreground">
                {props.skills.length > 0 && props.skills.map((skill: any) => (
                    <Skill key={skill.id} skill={skill} />
                ))}
            </section>
        </div>
    )
}