import { ImageType } from "@/types/strapi/imageType";
import { ButtonType } from "@/types/strapi/buttonType";
import { ProjectType } from "@/types/strapi/projectType";

export type HeroType = {
  attributes: {
    slug: string;
    title: string;
    description: string;
    cover: {
      data: ImageType;
    };
    button: {
      data: ButtonType;
    };
    projects: {
      data: ProjectType[];
    };
  };
};
