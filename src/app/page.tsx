import { Skills } from "./_components/Skills";
import { Experiences } from "./_components/Experiences";
import { Studies } from "./_components/Studies";
import { Projects } from "./_components/Projects";
import { Footer } from "./_components/Footer";

export default function HomePage() {
  return (
    <>
      <Experiences isPage={false}/>
      <Skills/>
      <Projects isPage={false}/>
      <Studies/>
      <Footer />
    </>
  );
}
