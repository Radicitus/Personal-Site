import { ImageType } from "@/types/strapi/imageType";
import { IconType } from "@/types/strapi/IconType";

export type FooterType = {
  data: {
    footer: {
      data: {
        attributes: {
          tag: string;
          subtag: string;
          icons: {
            data: IconType[];
          };
          avatar: {
            data: ImageType;
          };
        };
      };
    };
  };
};
