import { PropsWithChildren } from "react"
import { Experience } from "./Experience"

export const Experiences = (props: PropsWithChildren<{className?:string}>) =>  {
    return (
        <div className={props.className}>
            <h3 className="text-4xl font-bold text-foreground pb-5">
                <span id="experience" className="anchor"></span>
                <span className="text-primary">1.</span> Experience
            </h3>
            <div className="flex flex-col gap-5">
                <Experience from={"2024"} to={"NOW"} title={"Fullstack Developer"} company={"Alten"} link="https://www.alten.fr/">
                    At present, I am on a mission with <strong>Airbus Defence & Space</strong> to design, develop, and 
                    maintain an extensive suite of seven applications specifically 
                    tailored to meet the unique needs of the spatial industry.
                </Experience>
                <Experience from={"2021"} to={"2023"} title={"Apprenticeship as a Developer"} company={"Couleur CE"} link="https://www.couleur.fr/">
                    Building and improving an application with extensive functionality for various enterprise's works council. 
                </Experience>
                <Experience from={"2021"} to={"2021"} title={"Intership as a Developer"} company={"Couleur CE"} link="https://www.couleur.fr/">
                    Learned to work effectively in a team and apply the skills I acquired in school.
                </Experience>
            </div>
        </div>
    )
}