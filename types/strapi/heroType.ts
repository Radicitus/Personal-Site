import { ImageType } from "@/types/strapi/imageType";
import { ButtonType } from "@/types/strapi/buttonType";
import { VentureType } from "@/types/strapi/ventureType";

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
      data: VentureType[];
    };
  };
};
