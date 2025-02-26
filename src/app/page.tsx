// Force getting dynamic data from PG
export const revalidate = 1;

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

// Get des datas nécéssaire dans la page d'accueil
async function getData() {
  const [experiences, skills, projects, studies] = await Promise.all([
    sql<ExperienceObject>`select * from experiences order by from_year desc limit 3;`,
    sql<SkillObject>`select * from skills;`,
    sql<ProjectObject>`SELECT p.*, COALESCE(JSON_AGG(JSON_BUILD_OBJECT('id', s.id,'color', s.color,'name', s.name)) FILTER (WHERE s.id IS NOT NULL), '[]') AS skills
                                              FROM projects p
                                              LEFT JOIN project_skills ps ON ps.project_id = p.id
                                              LEFT JOIN skills s ON ps.skill_id = s.id
                                              GROUP BY p.id
                                              ORDER BY p.sort_order
                                              LIMIT 3;`,
    sql<StudyObject>`select * from studies order by from_year desc limit 4;`
  ]);

  return {
    experiences: experiences.rows, 
    skills: skills.rows, 
    projects: projects.rows, 
    studies: studies.rows
  };
}

// Affichage de la page d'accueil
export default async function HomePage() {
  const { experiences, skills, projects, studies } = await getData();
  
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