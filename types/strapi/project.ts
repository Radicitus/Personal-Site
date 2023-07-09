import { ProjectMedia } from "@/types/strapi/projectMedia";

export type Project = {
  data: {
    attributes: {
      slug: string;
      title: string;
      description: string;
      content: string;
      media: ProjectMedia[];
    };
  };
};
