import { Skills } from "./_components/Skills";
import { Experiences } from "./_components/Experiences";
import { Projects } from "./_components/Projects";
import { Footer } from "./_components/Footer";
import { query } from '../lib/db';
import { Studies } from "./_components/Studies";
import { StudyObject } from "./_components/Study";
import { ProjectObject } from "./_components/Project";
import { SkillObject } from "./_components/Skill";
import { ExperienceObject } from "./_components/Experience";


export default async function HomePage() {
  const experiences = await query<ExperienceObject>(`select * from experiences order by from_year desc limit 3;`);
  const skills = await query<SkillObject>(`select * from skills;`);
  const projects = await query<ProjectObject>(`select * from projects order by sort_order asc limit 3;`);
  const studies = await query<StudyObject>(`select * from studies order by from_year desc limit 4;`);

  return (
    <>
      <Experiences experiences={experiences} isPage={false} />
      <Skills skills={skills} />
      <Projects projects={projects} isPage={false} />
      <Studies studies={studies} />
      <Footer />
    </>
  );
}
