import { StaticImageData } from "next/image";
import { ButtonType } from "@/types/strapi/buttonType";

export type heroParamsType = {
  heroImage: StaticImageData;
  heroTitle: string;
  heroDescription: string;
  buttons: ButtonType[];
};
