import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { ImageType } from "@/types/imageType";
import { TechnologyType } from "@/types/technologyType";

export type ProjectType = {
  attributes: {
    title: string;
    description: string;
    rank: number;
    cover: {
      data: ImageType;
    };
    media: {
      data: ImageType[];
    };
    content: BlocksContent;
    start: string;
    end?: string;
    technologies: {
      data: TechnologyType[];
    };
    slug: string;
  };
};
