import { getClient } from "@/graphql/clients/serverSideClient";
import { ProjectSearchResultType } from "@/types/strapi/projectSearchResultType";
import { GET_ALL_PROJECTS } from "@/graphql/queries/project";
import ItemListView from "@/app/components/ItemListView";
import ItemGridView from "@/app/components/ItemGridView";
import ProjectsAnimation from "@/app/components/Lottie/ProjectsAnimation";
import { PageSearchResultType } from "@/types/strapi/pageSearchResultType";
import { GET_PAGE } from "@/graphql/queries/page";
import Link from "next/link";

export const revalidate = 60;

export default async function Projects() {
  // Get all projects from Strapi
  const client = getClient();
  const res: ProjectSearchResultType = await client.query({
    query: GET_ALL_PROJECTS,
  });
  const projects = res.data.projects.data;
  // Get the Projects page from Strapi
  const pageRes: PageSearchResultType = await client.query({
    query: GET_PAGE,
    variables: { slug: "projects" },
  });
  const projectsPage = pageRes.data.pages.data[0];
  const projectPageHero = projectsPage.attributes.lead_hero.data.attributes;

  return (
    <div>
      <div className="hero h-screen max-h-[900px] md:px-8 lg:px-16">
        <div className="hero-content flex-col gap-14 text-center lg:flex-row-reverse">
          <div className="w-fit lg:w-full">
            <ProjectsAnimation />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Projects</h1>
            <p className="py-6">{projectPageHero.description}</p>
            <div className="flex justify-center space-x-4 pt-4">
              {projectPageHero.buttons.data &&
                projectPageHero.buttons.data.map((button) => (
                  <Link
                    href={button.attributes.path}
                    target={"_" + button.attributes.target}
                    className="btn-primary btn"
                    key={button.attributes.path}
                  >
                    {button.attributes.title}
                  </Link>
                ))}
            </div>
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
