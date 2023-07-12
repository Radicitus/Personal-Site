import { getClient } from "@/graphql/clients/serverSideClient";
import { ProjectSearchResultType } from "@/types/strapi/projectSearchResultType";
import { GET_ALL_PROJECTS } from "@/graphql/queries/project";
import ProjectsList from "@/app/components/ProjectsList";
import ProjectsGrid from "@/app/components/ProjectsGrid";

export default async function Projects() {
  // Get all projects from Strapi
  const client = getClient();
  const res: ProjectSearchResultType = await client.query({
    query: GET_ALL_PROJECTS,
  });
  const projects = res.data.projects.data;

  return (
    <div>
      {/* Mobile List: 3 Most Recent Projects */}
      <div className="pb-10 lg:hidden">
        <ProjectsList projects={projects} limit={projects.length} />
      </div>

      {/* Grid View: 3 Most Recent Projects */}
      <div className="hidden pb-20 lg:block">
        <ProjectsGrid projects={projects} limit={projects.length} />
      </div>
    </div>
  );
}
