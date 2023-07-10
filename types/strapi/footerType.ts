import { ImageType } from "@/types/strapi/imageType";

export type FooterType = {
  data: {
    footer: {
      data: {
        attributes: {
          tag: string;
          subtag: string;
          avatar: {
            data: ImageType;
          };
        };
      };
    };
  };
};
