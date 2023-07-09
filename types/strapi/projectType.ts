import { ProjectMediaType } from "@/types/strapi/projectMediaType";

export type ProjectType = {
  attributes: {
    slug: string;
    title: string;
    description: string;
    content: string;
    media: {
      data: ProjectMediaType[];
    };
  };
};
