import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: "47z6906s",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-11-21",
};

const sanityClient = createClient(config);

export default sanityClient;

function processProjectContent(content: RawTextContent | RawImageContent) {
  const { _type } = content;

  if (_type === "block") {
    const processedTextContent: ProcessedTextContent = {
      type: "text",
      style: content.style,
      textToRender: content.children.map((child) => child.text).join("\n"),
    };

    return processedTextContent;
  }

  const builder = imageUrlBuilder(sanityClient);
  const projectImageUrl = builder.image(content).url();
  const processedImageContent: ProcessedImageContent = {
    type: "image",
    url: projectImageUrl,
  };

  return processedImageContent;
}

export function processProjectEntries(rawProject: Project) {
  const { name, company, dateAccomplished, stack, slug, image, content } =
    rawProject;
  const builder = imageUrlBuilder(sanityClient);

  const projectImageUrl = builder.image(image).url();

  const proccesedProject: ProcessedProject = {
    name,
    company,
    dateAccomplished,
    stack,
    slug,
    projectImageUrl,
    content: content.map(processProjectContent),
  };

  return proccesedProject;
}
