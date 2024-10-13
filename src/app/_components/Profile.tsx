import { PropsWithChildren } from "react"

export const Profile = (props: PropsWithChildren<{className?:string}>) => {
    return (
        <div className={props.className}>
            <h1 className="text-7xl font-bold text-foreground">
                Lilian Garrido
            </h1>
            <div className="min-h-4"></div>
            <h2 className="text-4xl font-bold text-foreground">
                Fullstack Developper
            </h2>
            <div className="min-h-4"></div>
            <p className="text-xl text-foreground">
                Passionate fullstack developer combining front-end and back-end expertise to create dynamic and performing web applications.
            </p>
        </div>
    )
}