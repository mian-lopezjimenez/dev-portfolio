import type { PageLoad } from "./$types";

import { sanityClient } from "$utils";
import { processProjectEntries } from "$utils/sanity";

export const load: PageLoad = async (): Promise<{
  workExperience: WorkExperience[];
  projects: ProcessedProject[];
}> => {
  const workExperience: WorkExperience[] = await sanityClient.fetch(
    "*[_type == 'devExperience'] | order(startDate desc)"
  );

  const rawProjects: Project[] = await sanityClient.fetch(
    "*[_type == 'project']"
  );

  const projects: ProcessedProject[] = rawProjects.map((project) =>
    processProjectEntries(project)
  );

  return {
    workExperience,
    projects,
  };
};
