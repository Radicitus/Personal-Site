import { VentureType } from "@/types/strapi/ventureType";

export type VentureSearchResultType = {
  data: {
    ventures: {
      data: VentureType[];
    };
  };
};
