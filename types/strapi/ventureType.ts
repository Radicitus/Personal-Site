import { ImageType } from "@/types/strapi/imageType";

export type VentureType = {
  attributes: {
    slug: string;
    title: string;
    description: string;
    company: string;
    content: string;
    rank: number;
    start: string;
    end: string;
    cover: {
      data: ImageType; // Add more types here
    };
    media: {
      data: ImageType[]; // Add more types here
    };
  };
};
