'use client';

import { PropsWithChildren, useEffect, useState } from "react"
import { Skill } from "./Skill"

export const Skills = (props: PropsWithChildren<{className?:string}>) =>  {
    const [skills, setSkills] = useState([])

    function getSkills() {
        fetch('/api/get-skills', {
            cache: "no-store"
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setSkills(data.skills.rows);
        })
    }

    useEffect(() => {
        getSkills()
    }, [])

    return (
        <div className={props.className}>
            <h3 className="text-4xl font-bold text-foreground pb-5">
                <span id="skills" className="anchor"></span>
                <span className="text-secondary">2.</span> Skills
            </h3>
            <section className="flex flex-row flex-wrap gap-3 justify-between text-foreground">
                {skills.length > 0 && skills.map((skill:any) => (
                    <Skill key={skill.id} skill={skill}/>
                ))}
            </section>
        </div>
    )
}