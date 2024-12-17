import { PropsWithChildren } from "react"
import { Study, StudyObject } from "./Study"

export const Studies = (props: PropsWithChildren<{ className?: string, studies: StudyObject[] }>) => {
    return (
        <div className={props.className}>
            <h3 className="text-4xl font-bold text-foreground pb-5">
                <span id="studies" className="anchor"></span>
                <span className="text-fourth">4.</span> Studies
            </h3>
            <div className="flex flex-col gap-5">
                {props.studies.length > 0 && props.studies.map((study: any) => (
                    <Study key={study.id} study={study}/>
                ))}
            </div>
        </div>
    )
}