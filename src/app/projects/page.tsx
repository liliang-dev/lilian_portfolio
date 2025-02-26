export const fetchCache = 'force-no-store';

import { Projects } from "../_components/Projects";
import { ProjectObject } from "../_components/Project";
import { sql } from "@vercel/postgres";

export default async function ProjectsPage() {
  const projects = await sql<ProjectObject>`SELECT p.*, COALESCE(JSON_AGG(JSON_BUILD_OBJECT('id', s.id,'color', s.color,'name', s.name)) FILTER (WHERE s.id IS NOT NULL), '[]') AS skills
                                            FROM projects p
                                            LEFT JOIN project_skills ps ON ps.project_id = p.id
                                            LEFT JOIN skills s ON ps.skill_id = s.id
                                            GROUP BY p.id
                                            ORDER BY p.sort_order;`

  return (
    <>
      <Projects projects={projects.rows} isPage={true}/>
    </>
  );
}
