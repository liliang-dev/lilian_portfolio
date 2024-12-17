import { query } from "@/lib/db";
import { Experiences } from "../_components/Experiences";
import { ExperienceObject } from "../_components/Experience";

export default async function ExperiencesPage() {
  const experiences = await query<ExperienceObject>(`select * from experiences order by from_year desc;`);

  return (
    <>
      <Experiences experiences={experiences} isPage={true}/>
    </>
  );
}