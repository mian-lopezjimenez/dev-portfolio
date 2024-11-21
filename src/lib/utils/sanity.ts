import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "47z6906s",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-11-21",
};

const sanityClient = createClient(config);

export default sanityClient;

export function processProjectEntries(rawProject: Project) {
  const proccesedProject = {};
}
