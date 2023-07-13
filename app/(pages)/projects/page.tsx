import { getClient } from "@/graphql/clients/serverSideClient";
import { ProjectSearchResultType } from "@/types/strapi/projectSearchResultType";
import { GET_ALL_PROJECTS } from "@/graphql/queries/project";
import ItemListView from "@/app/components/ItemListView";
import ItemGridView from "@/app/components/ItemGridView";
import ProjectsAnimation from "@/app/components/Lottie/ProjectsAnimation";

export const revalidate = 60;

export default async function Projects() {
  // Get all projects from Strapi
  const client = getClient();
  const res: ProjectSearchResultType = await client.query({
    query: GET_ALL_PROJECTS,
  });
  const projects = res.data.projects.data;

  return (
    <div>
      <div className="hero h-screen max-h-[900px] md:px-8 lg:px-16">
        <div className="hero-content flex-col text-center lg:flex-row-reverse lg:gap-12">
          <div className="w-112 lg:w-full">
            <ProjectsAnimation />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Projects</h1>
            <p className="py-6">
              Here are the top projects I've developed, ranging from Project
              Management and Robotics to E-Commerce and Lifestyle.
            </p>
          </div>
        </div>
      </div>

      <div>
        {/* Mobile List: 3 Most Recent Projects */}
        <div className="pb-10 lg:hidden">
          <ItemListView items={projects} />
        </div>

        {/* Grid View: 3 Most Recent Projects */}
        <div className="hidden pb-20 lg:block">
          <ItemGridView items={projects} detailed={true} />
        </div>
      </div>
    </div>
  );
}
