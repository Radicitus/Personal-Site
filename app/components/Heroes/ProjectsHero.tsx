import Link from "next/link";
import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_ALL_PROJECTS } from "@/graphql/queries/project";
import { ProjectSearchResultType } from "@/types/strapi/projectSearchResultType";
import Image from "next/image";

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

      <div>
        <div className="text-md line mx-8 pb-4 font-bold leading-6">
          Take a peek at some of the awesome projects I've worked on!
        </div>

        {/*<div>*/}
        {/*  {JSON.stringify(projects[0].attributes.media.data[0].attributes.url)}*/}
        {/*</div>*/}

        {/*<div>*/}
        {/*  {projects &&*/}
        {/*    projects.map((project) => (*/}
        {/*      <div className="carousel-item">*/}
        {/*        {JSON.stringify(project.attributes.media.data)}*/}
        {/*      </div>*/}
        {/*    ))}*/}
        {/*</div>*/}

        <div className="carousel-center carousel rounded-box h-36 space-x-4 bg-neutral">
          {projects &&
            projects.map((project) => (
              <div className="carousel-item">
                <Image
                  src={project.attributes.media.data[0].attributes.url}
                  alt={
                    project.attributes.media.data[0].attributes.alternativeText
                  }
                  width={512}
                  height={512}
                  className="rounded-box object-cover"
                />
              </div>
            ))}
        </div>

        <Link href={"/projects"}>
          <div className="font-bold underline decoration-2 underline-offset-4">
            {"WANT TO SEE MORE? >>"}
          </div>
        </Link>
      </div>
    </div>
  );
}
