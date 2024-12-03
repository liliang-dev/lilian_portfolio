'use client';

import { PropsWithChildren, useEffect, useState } from "react"
import { Study } from "./Study"
import { LoaderStudies } from "../loading";

export const Studies = (props: PropsWithChildren<{className?:string}>) =>  {
    const [studies, setStudies] = useState([])
    const [loading, setLoading] = useState(true);

    function getStudies() {
        fetch('/api/get-studies?limit=4', {
            cache: "no-store"
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setStudies(data.studies.rows);
            setLoading(false);
        })
    }

    useEffect(() => {
        getStudies()
    }, [])

    return (
        <div className={props.className}>
            <h3 className="text-4xl font-bold text-foreground pb-5">
                <span id="studies" className="anchor"></span>
                <span className="text-fourth">4.</span> Studies
            </h3>
            <div className="flex flex-col gap-5">
                {loading ? (
                    <>
                        <LoaderStudies/>
                        <LoaderStudies/>
                        <LoaderStudies/>
                    </>
                ) : (
                    studies.length > 0 && studies.map((study:any) => (
                        <Study key={study.id} from={study.from_year} to={study.to_year} title={study.title} company={study.company} link={study.link}></Study>
                    ))
                )}
            </div>
        </div>
    )
}