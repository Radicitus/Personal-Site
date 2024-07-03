import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_PAGE } from "@/graphql/queries/page";
import { GET_ALL_PROJECTS } from "@/graphql/queries/venture";
// TYPES
import { VentureSearchResultType } from "@/types/strapi/ventureSearchResultType";
import { PageSearchResultType } from "@/types/strapi/pageSearchResultType";
import DynamicCarousel from "@/components/DynamicCarousel";

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
  // const projectsPage = pageRes.data.pages.data[0];

  return (
    <div className="h-screen w-full">
      <DynamicCarousel />
      <div
        id="projectTitle"
        className="auto absolute top-56 w-full text-center text-3xl"
      ></div>
      <div className="absolute bottom-8 left-8 text-sm md:bottom-16 md:left-16">
        Try scrolling!
      </div>
    </div>
  );
}
