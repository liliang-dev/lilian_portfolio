import { Projects } from "../_components/Projects";
import { ProjectObject } from "../_components/Project";
import { sql } from "@vercel/postgres";

export default async function ProjectsPage() {
  const projects = await sql<ProjectObject>`select * from projects order by sort_order asc;`;

  return (
    <>
      <Projects projects={projects.rows} isPage={true}/>
    </>
  );
}
