import { ProjectType } from "@/types/strapi/projectType";
import { ImageType } from "@/types/strapi/imageType";

export function destructureProjectImages(project: ProjectType): ImageType[] {
  const { media } = project.attributes;
  return media.data.map((image) => {
    const { name, url, alternativeText, width, height } = image.attributes;
    return {
      name,
      url,
      alternativeText,
      width,
      height,
    };
  });
}
