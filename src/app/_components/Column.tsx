import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

export const Column = (props: PropsWithChildren<{className?:string}>) => {
    return (
        <div className={cn(props.className)}>
           {props.children}
        </div>
    )
}