import { PropsWithChildren } from "react"
import Link from "next/link"
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { SpotifyIcon } from "../icons/SpotifyIcon";

export const Contacts = (props: PropsWithChildren<{className?:string}>) => {
    return (
        <div className={props.className}>
            <Link href="https://github.com/liliang-dev" target="_blank" className="duration-200 hover:scale-110">
                <GithubIcon size={50} className="text-foreground"/>
            </Link>
            <Link href="https://www.linkedin.com/in/lilian-garrido-4b1607176/" target="_blank"  className="duration-200 hover:scale-110">
                <LinkedInIcon size={50} className="text-foreground"/>
            </Link>
            <Link href="https://open.spotify.com/user/21msl3kyo36zxbifxwmve5cnq" target="_blank"  className="duration-200 hover:scale-110">
                <SpotifyIcon size={50} className="text-foreground"/>
            </Link>
        </div>
    )
}