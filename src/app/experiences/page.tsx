import { Experiences } from "../_components/Experiences";
import { ExperienceObject } from "../_components/Experience";
import { sql } from "@vercel/postgres";

export default async function ExperiencesPage() {
  const experiences = await sql<ExperienceObject>`select * from experiences order by from_year desc;`;

  return (
    <>
      <Experiences experiences={experiences.rows} isPage={true}/>
    </>
  );
}