import { PropsWithChildren } from "react"
import { Project, ProjectObject } from "./Project"
import { ShowMore } from "./ShowMore";
import { HomeArrow } from "./HomeArrow";

export const Projects = (props: PropsWithChildren<{ className?: string, isPage: boolean, projects: ProjectObject[] }>) => {
    return (
        <div className={props.className}>
            <h3 className="flex text-4xl font-bold text-foreground pb-5 justify-between">
                {props.isPage && (<HomeArrow />)}
                <div>
                    {!props.isPage && <span className="text-third">3. </span>}Projects
                </div>
                <span id="projects" className="anchor"></span>
            </h3>
            <div className="flex flex-col gap-5">
                {props.projects.length > 0 && props.projects.map((project: any) => (
                    <Project key={project.id} project={project}/>
                ))}
                {!props.isPage && <ShowMore link="/projects" />}
            </div>
        </div>
    )
}