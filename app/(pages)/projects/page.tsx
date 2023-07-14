import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_PAGE } from "@/graphql/queries/page";
import { GET_ALL_PROJECTS } from "@/graphql/queries/venture";
// COMPONENTS
import ItemListView from "@/app/components/ItemListView";
import ItemGridView from "@/app/components/ItemGridView";
import ProjectsAnimation from "@/app/components/Lottie/ProjectsAnimation";
import LeadHero from "@/app/components/Heroes/LeadHero";
// TYPES
import { VentureSearchResultType } from "@/types/strapi/ventureSearchResultType";
import { PageSearchResultType } from "@/types/strapi/pageSearchResultType";

export const revalidate = 60;

export default async function Projects() {
  // Get all projects from Strapi
  const client = getClient();
  const res: VentureSearchResultType = await client.query({
    query: GET_ALL_PROJECTS,
  });
  const projects = res.data.ventures.data;
  // Get the Projects page from Strapi
  const pageRes: PageSearchResultType = await client.query({
    query: GET_PAGE,
    variables: { slug: "projects" },
  });
  const projectsPage = pageRes.data.pages.data[0];
  const projectPageHero = projectsPage.attributes.lead_hero.data.attributes;

  return (
    <div>
      <LeadHero
        title={projectPageHero.title}
        description={projectPageHero.description}
        buttons={projectPageHero.buttons.data}
      >
        <div className="w-fit lg:w-full">
          <ProjectsAnimation />
        </div>
      </LeadHero>

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
