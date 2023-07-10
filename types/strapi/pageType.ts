import { HeroType } from "@/types/strapi/heroType";
import { ButtonType } from "@/types/strapi/buttonType";

export type PageType = {
  data: {
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
};
