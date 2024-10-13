import { PropsWithChildren } from "react"
import { Skill } from "./Skill"

export const Skills = (props: PropsWithChildren<{className?:string}>) =>  {
    return (
        <div className={props.className}>
            <h3 className="text-4xl font-bold text-foreground pb-5">
                <span id="skills" className="anchor"></span>
                <span className="text-secondary">2.</span> Skills
            </h3>
            <section className="flex flex-row flex-wrap gap-3 justify-between text-foreground">
              <Skill className="bg-[#e7d4ff]" name="PHP" link="https://www.php.net/"/>
              <Skill className="bg-[#fffbd4]" name="Javascript" link="https://fr.wikipedia.org/wiki/JavaScript"/>
              <Skill className="bg-[#ffe1d4]" name="HTML" link="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"/>
              <Skill className="bg-[#d9d4ff]" name="CSS" link="https://fr.wikipedia.org/wiki/CSS"/>
              <Skill className="bg-[#ffdbd4]" name="MySQL" link="https://www.mysql.com/fr/"/>
              <Skill className="bg-[#d4e4ff]" name="Typescript" link="https://www.typescriptlang.org/"/>
              <Skill className="bg-[#f8d4ff]" name="C#" link="https://fr.wikipedia.org/wiki/C_Sharp#:~:text=C%23%20est%20un%20langage%20d%C3%A9riv%C3%A9,les%20types%20sont%20des%20objets."/>
              <Skill className="bg-[#fffbd4]" name="Python" link="https://www.python.org/"/>
              <Skill className="bg-[#ffd4d4]" name="Java" link="https://www.java.com/fr/"/>

              <Skill className="bg-[#ffd4d4]" name="Laravel" link="https://laravel.com/"/>
              <Skill className="bg-[#cfcfcf]" name="Symfony" link="https://symfony.com/"/>
              <Skill className="bg-[#d4ffff]" name="React" link="https://fr.react.dev/"/>
              <Skill className="bg-[#ffd4d4]" name="Angular" link="https://angular.dev/"/>
              <Skill className="bg-[#d9d9d9]" name="Next.js" link="https://nextjs.org/"/>
              <Skill className="bg-[#d4ffd9]" name="Vue.js" link="https://vuejs.org/"/>
              <Skill className="bg-[#e5ffd4]" name="Node.js" link="https://nodejs.org/fr"/>
          
              <Skill className="bg-[#ffd4d4]" name="Git" link="https://git-scm.com/"/>
              <Skill className="bg-[#d4dfff]" name="Photoshop" link="https://www.adobe.com/fr/products/photoshop.html"/>
              <Skill className="bg-[#ffead4]" name="Illustrator" link="https://www.adobe.com/fr/products/illustrator.html"/>
              <Skill className="bg-[#cfcfcf]" name="Unity" link="https://unity.com/fr"/>
            </section>
        </div>
    )
}