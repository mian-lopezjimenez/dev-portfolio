import type { PageLoad } from "./$types";

import { sanityClient } from "$utils";
import { processProjectEntries } from "$utils/sanity";

export const load: PageLoad = async (): Promise<{
  workExperience: WorkExperience[];
  projects: ProcessedProject[];
  skills: Skill[];
}> => {
  const workExperience: WorkExperience[] = await sanityClient.fetch(
    "*[_type == 'devExperience'] | order(startDate desc)"
  );

  const rawProjects: Project[] = await sanityClient.fetch(
    "*[_type == 'project']"
  );

  const skills: Skill[] = await sanityClient.fetch(
    "*[_type == 'skill'][0].skillsList"
  );

  const projects: ProcessedProject[] = rawProjects.map((project) =>
    processProjectEntries(project)
  );

  return {
    workExperience,
    projects,
    skills,
  };
};
