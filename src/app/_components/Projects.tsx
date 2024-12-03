'use client';

import { PropsWithChildren, useEffect, useState } from "react"
import { Project } from "./Project"
import { LoaderProjects } from "../loading"

export const Projects = (props: PropsWithChildren<{className?:string}>) =>  {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true);

    function getProjects() {
        fetch('/api/get-projects?limit=3', {
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
            <h3 className="text-4xl font-bold text-foreground pb-5">
                <span id="projects" className="anchor"></span>
                <span className="text-third">3.</span> Projects
            </h3>
            <div className="flex flex-col gap-5">
                {loading ? (
                    <>
                        <LoaderProjects/>
                        <LoaderProjects/>
                        <LoaderProjects/>
                    </>
                ) : (
                    projects.length > 0 && projects.map((project:any) => (
                        <Project key={project.id} title={project.title} image={project.image} link={project.link} alt={project.image_alt}>
                            {project.description}
                        </Project>
                    ))
                )}
            </div>
        </div>
    )
}