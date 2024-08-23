import { ImageType } from "@/types/imageType";
import { IconType } from "@/types/IconType";

export type FooterType = {
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
