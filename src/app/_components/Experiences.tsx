'use client';

import { PropsWithChildren, useEffect, useState } from "react"
import { Experience } from "./Experience"
import { LoaderExperiences } from "../loading";

export const Experiences = (props: PropsWithChildren<{className?:string}>) =>  {
    const [experiences, setExperiences] = useState([])
    const [loading, setLoading] = useState(true);

    function getExperiences() {
        fetch('/api/get-experiences?limit=3', {
            cache: "no-store"
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setExperiences(data.experiences.rows);
            setLoading(false);
        })
    }

    useEffect(() => {
        getExperiences()
    }, [])

    return (
        <div className={props.className}>
            <h3 className="text-4xl font-bold text-foreground pb-5">
                <span id="experience" className="anchor"></span>
                <span className="text-primary">1.</span> Experiences
            </h3>
            <div className="flex flex-col gap-5">
                {loading ? (
                    <>
                        <LoaderExperiences />
                        <LoaderExperiences />
                        <LoaderExperiences />
                    </>
                ) : (
                    experiences.length > 0 && experiences.map((experience:any) => (
                        <Experience key={experience.id} from={experience.from_year} to={experience.to_year} title={experience.title} company={experience.company} link={experience.link}>
                            {experience.description}
                        </Experience>
                    ))
                )}
            </div>
        </div>
    )
}