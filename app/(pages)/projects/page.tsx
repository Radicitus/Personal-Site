import { getClient } from "@/graphql/clients/serverSideClient";
import { ProjectSearchResultType } from "@/types/strapi/projectSearchResultType";
import { GET_ALL_PROJECTS } from "@/graphql/queries/project";
import ItemListView from "@/app/components/ItemListView";
import ItemGridView from "@/app/components/ItemGridView";

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
        <ItemListView items={projects} limit={projects.length} />
      </div>

      {/* Grid View: 3 Most Recent Projects */}
      <div className="hidden pb-20 lg:block">
        <ItemGridView items={projects} detailed={true} />
      </div>
    </div>
  );
}
