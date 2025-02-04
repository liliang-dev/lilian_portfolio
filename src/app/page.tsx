import { Skills } from "./_components/Skills";
import { Experiences } from "./_components/Experiences";
import { Projects } from "./_components/Projects";
import { Footer } from "./_components/Footer";
import { Studies } from "./_components/Studies";
import { StudyObject } from "./_components/Study";
import { ProjectObject } from "./_components/Project";
import { SkillObject } from "./_components/Skill";
import { ExperienceObject } from "./_components/Experience";
import { sql } from '@vercel/postgres';

export default async function HomePage() {
  const experiences = await sql<ExperienceObject>`select * from experiences order by from_year desc limit 3;`;
  const skills = await sql<SkillObject>`select * from skills;`;
  const projects = await sql<ProjectObject>`SELECT p.*, COALESCE(JSON_AGG(JSON_BUILD_OBJECT('id', s.id,'color', s.color,'name', s.name)) FILTER (WHERE s.id IS NOT NULL), '[]') AS skills
                                            FROM projects p
                                            LEFT JOIN project_skills ps ON ps.project_id = p.id
                                            LEFT JOIN skills s ON ps.skill_id = s.id
                                            GROUP BY p.id
                                            ORDER BY p.sort_order
                                            LIMIT 3;`;
  const studies = await sql<StudyObject>`select * from studies order by from_year desc limit 4;`;

  return (
    <>
      <Experiences experiences={experiences.rows} isPage={false} />
      <Skills skills={skills.rows} />
      <Projects projects={projects.rows} isPage={false} />
      <Studies studies={studies.rows} />
      <Footer />
    </>
  );
}
