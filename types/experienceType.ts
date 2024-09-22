import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { ImageType } from "@/types/imageType";
import { TechnologyType } from "@/types/technologyType";
import { IconType } from "@/types/IconType";

export type ExperienceType = {
  attributes: {
    company: string;
    logo: {
      data: ImageType;
    };
    start: string;
    end?: string;
    title: string;
    summary: string;
    contributions: BlocksContent;
    content: BlocksContent;
    technologies: {
      data: TechnologyType[];
    };
    media: {
      data: ImageType[];
    };
    icons: {
      data: IconType[];
    };
    slug: string;
  };
};
