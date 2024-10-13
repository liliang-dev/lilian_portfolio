import { PropsWithChildren } from "react"
import { Project } from "./Project"
import SoLearnSystem from "../images/solearnsystem.jpg"
import Kingdom from "../images/kingdom.jpg"
import SmartTrashCan from "../images/smarttrashcan.png"

export const Projects = (props: PropsWithChildren<{className?:string}>) =>  {
    return (
        <div className={props.className}>
            <h3 className="text-4xl font-bold text-foreground pb-5">
                <span id="projects" className="anchor"></span>
                <span className="text-third">3.</span> Projects
            </h3>
            <div className="flex flex-col gap-5">
                <Project title={"SoLearnSystem"} image={SoLearnSystem} link="https://liliangrd.itch.io/solearnsystem" alt="Picture of the SoLearnSystem application showing solar system on a book">
                    Children need to learn science differently. This project can give another vision of education 
                    and allow students to better understand the world around us.
                </Project>
                <Project title={"Smart Trash Can"} image={SmartTrashCan} link="https://www.youtube.com/watch?v=KMC9OzSx6EM" alt="Photo of smart trash can project">
                    This application is based on Augmented Reality and IoT to optimize trash collection in a city 
                    by identifying full trash cans before determining the best route to take.
                </Project>
                <Project title={"Kingdom is Crumbling"} image={Kingdom} link="https://www.youtube.com/watch?v=hCJ15TcQbhA" alt="Picture showing medieval weapon on a battlefield">
                    This is a tower defense game in Virtual Reality where you must defend your castle using various cards and weapons at your disposal.
                </Project>
            </div>
        </div>
    )
}