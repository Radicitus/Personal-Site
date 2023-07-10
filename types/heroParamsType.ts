import { ButtonType } from "@/types/strapi/buttonType";
import { ImageType } from "@/types/strapi/imageType";

export type heroParamsType = {
  heroImage: ImageType;
  heroTitle: string;
  heroDescription: string;
  buttons: ButtonType[];
};
