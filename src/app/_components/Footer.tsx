import { PropsWithChildren} from "react"
import { cn } from "@/lib/utils"

export const Footer = (props: PropsWithChildren<{className?:string}>) =>  {
    return (
        <div className={cn("font-grand text-xs", props.className)}>
           Designed in <strong>Photoshop</strong> and coded in <strong>Visual Studio Code</strong>. Built with <strong>Next.js</strong> and <strong>Tailwind</strong>, and deployed using <strong>Vercel</strong>. All text is set in the <strong>Grandstander</strong> and <strong>Nanum Pen Script</strong> typefaces.
        </div>
    )
}