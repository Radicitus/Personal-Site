import { ProjectType } from "@/types/strapi/projectType";

export type ProjectSearchResultType = {
  data: {
    projects: {
      data: ProjectType[];
    };
  };
};
