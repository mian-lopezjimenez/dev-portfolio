import type { PageLoad } from "./$types";

import { sanityClient } from "$utils";

export const load: PageLoad = async (): Promise<{
  workExperience: WorkExperience[];
}> => {
  const workExperience: WorkExperience[] = await sanityClient.fetch(
    "*[_type == 'WorkExperience'] | order(startDate desc)"
  );
  const rawProjects: Project[] = await sanityClient.fetch(
    "*[_type == 'project']"
  );

  return {
    workExperience,
  };
};
