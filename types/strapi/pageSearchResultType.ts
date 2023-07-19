import { PageType } from "@/types/strapi/pageType";

export type PageSearchResultType = {
  data: {
    pages: {
      data: PageType[];
    };
  };
};
