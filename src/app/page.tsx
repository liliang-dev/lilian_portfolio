import { Column } from "./_components/Column";
import { Section } from "./_components/Section";
import { Contacts } from "./_components/Contacts";
import { MainMenu } from "./_components/MainMenu";
import { Profile } from "./_components/Profile";
import { Skills } from "./_components/Skills";
import { Experiences } from "./_components/Experiences";
import { Studies } from "./_components/Studies";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl font-pen">
      <div className="lg:flex lg:justify-center">
        <Column className="lg:sticky lg:top-0 lg:flex lg:justify-between p-16 lg:max-h-screen lg:w-1/2">
          <Section className="lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:px-10 max-sm:text-center">
            <Profile/>
            <MainMenu className="flex flex-col text-3xl gap-3 py-10"/>
            <Contacts className="flex flex-row max-sm:justify-center gap-2"/>
          </Section>
        </Column>
        <Column className="flex-1 h-full lg:w-1/2 p-16 lg:px-10">
          <Section className="flex flex-col">
            <Experiences/>
            <Skills className="py-10"/>

            <h3 className="text-4xl font-bold text-foreground pb-5">
              <span id="projects" className="anchor"></span>
              <span className="text-third">3.</span> Projects
            </h3>

            <Studies/>
          </Section>
        </Column>
      </div>
    </main>
  );
}
