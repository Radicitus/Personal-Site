import { LinkType } from "@/types/linkType";

export type ButtonType = {
  attributes: {
    title: string;
    link: {
      data: {
        attributes: LinkType;
      };
    };
  };
};
