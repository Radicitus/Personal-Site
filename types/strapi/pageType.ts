import { HeroType } from "@/types/strapi/heroType";
import { LinkType } from "@/types/linkType";

export type PageType = {
  attributes: {
    slug: string;
    title: string;
    nav_order: number;
    link: {
      data: {
        attributes: LinkType;
      };
    };
    lead_hero: {
      data: HeroType;
    };
  };
};
