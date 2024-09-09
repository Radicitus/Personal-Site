import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { ImageType } from "@/types/imageType";

export type ExperienceType = {
  attributes: {
    company: string;
    logo: {
      data: ImageType;
    };
    start: string;
    end: string;
    title: string;
    description: string;
    contributions: BlocksContent;
    summary: string;
  };
};
