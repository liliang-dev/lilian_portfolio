import { query } from "@/lib/db";
import { Projects } from "../_components/Projects";
import { ProjectObject } from "../_components/Project";

export default async function ProjectsPage() {
  const projects = await query<ProjectObject>(`select * from projects order by sort_order asc;`);

  return (
    <>
      <Projects projects={projects} isPage={true}/>
    </>
  );
}
