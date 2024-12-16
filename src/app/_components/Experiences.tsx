'use client';

import { PropsWithChildren, useEffect, useState } from "react"
import { Experience } from "./Experience"
import { LoaderExperiences } from "../loading";
import { ShowMore } from "./ShowMore";
import { HomeArrow } from "./HomeArrow";

export const Experiences = (props: PropsWithChildren<{className?:string, isPage: boolean}>) =>  {
    const [experiences, setExperiences] = useState([])
    const [loading, setLoading] = useState(true);

    function getExperiences() {
        let limit = 3
        if(props.isPage) {
            limit = 99
        }
        
        fetch('/api/get-experiences?limit='+limit, {
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
            <h3 className="flex text-4xl font-bold text-foreground pb-5 justify-between">
				{props.isPage && (<HomeArrow/>)}
				<div>
					{!props.isPage && <span className="text-primary">1. </span>}Experiences
				</div>
				<span id="experience" className="anchor"></span>
            </h3>
            <div className="flex flex-col gap-5">
                {loading ? (
                    <>
                        <LoaderExperiences/>
                        <LoaderExperiences/>
                        <LoaderExperiences/>
                    </>
                ) : (
                    <>
                        {experiences.length > 0 && experiences.map((experience:any) => (
                            <Experience key={experience.id} from={experience.from_year} to={experience.to_year} title={experience.title} company={experience.company} link={experience.link}>
                                {experience.description}
                            </Experience>
                        ))}
                        {!props.isPage && <ShowMore link="/experiences"/>}
                    </>
                )}
            </div>
        </div>
    )
}