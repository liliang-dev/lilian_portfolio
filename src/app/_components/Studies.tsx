import { PropsWithChildren } from "react"
import { Study } from "./Study"

export const Studies = (props: PropsWithChildren<{className?:string}>) =>  {
    return (
        <div className={props.className}>
            <h3 className="text-4xl font-bold text-foreground pb-5">
                <span id="studies" className="anchor"></span>
                <span className="text-fourth">4.</span> Studies
            </h3>
            <div className="flex flex-col gap-5">
                <Study from={"2020"} to={"2023"} title={"Master's Degree in Application Design and Development."} company={"Epitech"} link="https://www.epitech.eu/formation-alternance/master-of-science-realite-virtuelle/">

                </Study>
                <Study from={"2018"} to={"2020"} title={"University Diploma of Technology in Multimedia and Internet Technologies."} company={"IUT Paul Sabatier, Toulouse III"} link="https://iut.univ-tlse3.fr/bachelor-specialite-metiers-du-multimedia-et-de-l-internet-2">

                </Study>
                <Study from={"2017"} to={"2018"} title={"Higher National Diploma in Aeronautics."} company={"Lycée Saint-Exupéry"} link="https://saint-exupery-blagnac.mon-ent-occitanie.fr/le-lycee-saint-exupery/les-formations/post-bac-bts-aeronautique/">

                </Study>
                <Study from={"2015"} to={"2017"} title={"Technology Baccalaureate in Industrial Sciences and Sustainable Development."} company={"Lycée Antoine Bourdelle"} link="https://bourdelle.mon-ent-occitanie.fr/">

                </Study>
            </div>
        </div>
    )
}