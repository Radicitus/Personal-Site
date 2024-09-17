import { ImageType } from "@/types/imageType";
import { LinkType } from "@/types/linkType";

export type TechnologyType = {
  attributes: {
    title: string;
    icon: ImageType;
    link?: LinkType;
  };
};
