import Link from "next/link";
import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_ALL_PROJECTS } from "@/graphql/queries/project";
import { ProjectSearchResultType } from "@/types/strapi/projectSearchResultType";
import Image from "next/image";
import {
  BiLogoAngular,
  BiLogoGraphql,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";

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

      {/* Mobile: 3 Most Recent Projects */}
      <div className="pb-6 lg:hidden">
        {projects &&
          projects.slice(0, 3).map((project) => (
            <div key={project.attributes.slug} className="px-6 py-5 md:px-40">
              <div className="card card-compact h-96 bg-base-100 text-left shadow-xl">
                <figure>
                  <Image
                    src={project.attributes.media.data[0].attributes.url}
                    alt={
                      project.attributes.media.data[0].attributes
                        .alternativeText
                    }
                    width={512}
                    height={512}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.attributes.title}</h2>
                  <p>{project.attributes.description}</p>
                  <div className="card-actions justify-end">
                    <Link href={"/projects/" + project.attributes.slug}>
                      <button className="btn-primary btn">SEE MORE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Grid View of All Projects */}
      <div className="hidden pb-16 lg:block">
        <div className="flex flex-row flex-wrap place-content-center gap-12">
          {projects &&
            projects.map((project) => (
              <Link href={"/projects/" + project.attributes.slug}>
                <div className="relative h-60 w-104 overflow-hidden rounded-3xl shadow-xl ring ring-primary ring-opacity-20">
                  <Image
                    src={project.attributes.media.data[0].attributes.url}
                    alt={
                      project.attributes.media.data[0].attributes
                        .alternativeText
                    }
                    width={project.attributes.media.data[0].attributes.width}
                    height={project.attributes.media.data[0].attributes.height}
                    className="z-0 h-60 w-104 object-cover object-top"
                    key={project.attributes.slug}
                  />

                  <div
                    className="group absolute inset-0 z-10 flex items-center justify-center bg-primary-focus
                   bg-opacity-50 opacity-0 duration-700 ease-in-out hover:opacity-100"
                  >
                    <div className="translate-y-8 text-4xl font-semibold text-white duration-700 ease-in-out group-hover:transform-none">
                      <div>{project.attributes.title}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <Link href={"/projects"}>
        <div className="font-bold underline decoration-2 underline-offset-4">
          {"WANT TO SEE MORE? >>"}
        </div>
      </Link>
    </div>
  );
}
