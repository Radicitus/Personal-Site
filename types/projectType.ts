import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { ImageType } from "@/types/imageType";
import { TechnologyType } from "@/types/technologyType";
import { IconType } from "@/types/IconType";

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
    icons: {
      data: IconType[];
    };
    slug: string;
  };
};
