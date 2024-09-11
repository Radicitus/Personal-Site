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
    summary: string;
    contributions: BlocksContent;
    content: BlocksContent;
    slug: string;
  };
};
