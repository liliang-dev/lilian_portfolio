import { PropsWithChildren } from "react"
import { Experience, ExperienceObject } from "./Experience"
import { ShowMore } from "./ShowMore";
import { HomeArrow } from "./HomeArrow";

export const Experiences = (props: PropsWithChildren<{ className?: string, isPage: boolean, experiences: ExperienceObject[] }>) => {
    return (
        <div className={props.className}>
            <h3 className="flex text-4xl font-bold text-foreground pb-5 justify-between">
                {props.isPage && (<HomeArrow />)}
                <div>
                    {!props.isPage && <span className="text-primary">1. </span>}Experiences
                </div>
                <span id="experience" className="anchor"></span>
            </h3>
            <div className="flex flex-col gap-5">
                {props.experiences && props.experiences.map((experience: any) => (
                    <Experience key={experience.id} experience={experience}/>
                ))}
                {!props.isPage && <ShowMore link="/experiences" />}
            </div>
        </div>
    )
}