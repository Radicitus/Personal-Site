import { Project } from "@/types/strapi/project";

export function destructureProjectImages(project: Project) {
  const { media } = project.data.attributes;
  const images = media.map((image) => {
    const { name, url, alternativeText, width, height } = image.data.attributes;
    return {
      name,
      url,
      alternativeText,
      width,
      height,
    };
  });
  return images;
}
