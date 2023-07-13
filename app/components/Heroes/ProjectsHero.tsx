import Link from "next/link";
import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_ALL_PROJECTS } from "@/graphql/queries/project";
// COMPONENTS
import {
  BiLogoAngular,
  BiLogoGraphql,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import ItemGridView from "@/app/components/ItemGridView";
import ItemListView from "@/app/components/ItemListView";
// TYPES
import { ProjectSearchResultType } from "@/types/strapi/projectSearchResultType";

export const revalidate = 60;

export default async function ProjectsHero() {
  // Get all projects from Strapi
  const client = getClient();
  const res: ProjectSearchResultType = await client.query({
    query: GET_ALL_PROJECTS,
  });
  const projects = res.data.projects.data;

  return (
    <div className="bg-base-100 py-24 text-center">
      <div className="pb-6 text-5xl font-bold">SEE MY WORK</div>

      <div className="text-md line mx-8 pb-4 font-bold leading-6">
        Take a peek at some of the awesome projects I've worked on!
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-2 px-12 pb-4 text-4xl lg:pb-12">
        <BiLogoReact />
        <BiLogoAngular />
        <BiLogoTailwindCss />
        <BiLogoTypescript />
        <BiLogoGraphql />
        <BiLogoPostgresql />
        {/*<SiPrisma />*/}
        {/*<BiLogoNodejs />*/}
        {/*<BiLogoAws />*/}
        {/*<RxVercelLogo className="text-3xl" />*/}
        {/*<FaCloudflare />*/}
        {/*<BiLogoGit />*/}
      </div>

      {/* Mobile List: 3 Most Recent Projects */}
      <div className="pb-10 lg:hidden">
        <ItemListView items={projects} limit={3} />
      </div>

      {/* Grid View: 3 Most Recent Projects */}
      <div className="hidden pb-20 lg:block">
        <ItemGridView items={projects} limit={3} />
      </div>

      <Link href={"/projects"}>
        <div className="font-bold underline decoration-2 underline-offset-4">
          {"WANT TO SEE MORE? >>"}
        </div>
      </Link>
    </div>
  );
}
