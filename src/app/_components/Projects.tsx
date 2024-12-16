'use client';

import { PropsWithChildren, useEffect, useState } from "react"
import { Project } from "./Project"
import { LoaderProjects } from "../loading"
import { ShowMore } from "./ShowMore";
import { HomeArrow } from "./HomeArrow";

export const Projects = (props: PropsWithChildren<{className?:string, isPage: boolean}>) =>  {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true);

    function getProjects() {
        let limit = 3
        if(props.isPage) {
            limit = 99
        }

        fetch('/api/get-projects?limit='+limit, {
            cache: "no-store"
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setProjects(data.projects.rows);
            setLoading(false);
        })
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <div className={props.className}>
            <h3 className="flex text-4xl font-bold text-foreground pb-5 justify-between">
                {props.isPage && (<HomeArrow/>)}
				<div>
					{!props.isPage && <span className="text-third">3. </span>}Projects
				</div>
                <span id="projects" className="anchor"></span>
            </h3>
            <div className="flex flex-col gap-5">
                {loading ? (
                    <>
                        <LoaderProjects/>
                        <LoaderProjects/>
                        <LoaderProjects/>
                    </>
                ) : (
                    <>
                        {projects.length > 0 && projects.map((project:any) => (
                            <Project key={project.id} title={project.title} image={project.image} link={project.link} alt={project.image_alt}>
                                {project.description}
                            </Project>
                        ))}
                        {!props.isPage && <ShowMore link="/projects"/>}
                    </>
                )}
            </div>
        </div>
    )
}