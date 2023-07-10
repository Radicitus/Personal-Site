import { ImageType } from "@/types/strapi/imageType";
import { ButtonType } from "@/types/strapi/buttonType";

export type HeroType = {
  attributes: {
    slug: string;
    title: string;
    description: string;
    cover: {
      data: ImageType;
    };
    buttons: {
      data: ButtonType[];
    };
  };
};
