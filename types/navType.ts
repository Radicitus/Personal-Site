import { LinkType } from "@/types/linkType";

export type NavType = {
  data: {
    attributes: {
      links: {
        data: LinkType[];
      };
    };
  };
};
