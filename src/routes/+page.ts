import type { PageLoad } from "./$types";

import { sanityClient } from "$utils";
import type { DevExperience } from "$types/sanity";

export const load: PageLoad = async (): Promise<{
  workExperience: DevExperience[];
}> => {
  const workExperience: DevExperience[] = await sanityClient.fetch(
    "*[_type == 'devExperience'] | order(startDate desc)"
  );

  return {
    workExperience,
  };
};
