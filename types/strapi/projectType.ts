import { ImageType } from "@/types/strapi/imageType";

export type ProjectType = {
  attributes: {
    slug: string;
    title: string;
    description: string | null;
    content: string | "";
    media: {
      data: ImageType[]; // Add more types here
    };
  };
};
