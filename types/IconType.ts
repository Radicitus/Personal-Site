import { LinkType } from "@/types/linkType";

export type IconType = {
  attributes: {
    title: string;
    type: string;
    link: {
      data: LinkType;
    };
  };
};
