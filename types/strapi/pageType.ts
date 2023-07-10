import { HeroType } from "@/types/strapi/heroType";
import { ButtonType } from "@/types/strapi/buttonType";

export type PageType = {
  attributes: {
    slug: string;
    path: string;
    lead_hero: {
      data: HeroType;
    };
    buttons: {
      data: ButtonType[];
    };
  };
};
