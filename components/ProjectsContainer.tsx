import { ProjectType } from "@/types/projectType";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectsContainer() {
  // Get projects data from Strapi
  const projectsQueryUrl = "/projects?populate=*";
  const data = await fetch(process.env.CMS_URL + projectsQueryUrl).then((res) =>
    res.json()
  );
  const projects: ProjectType[] = data.data;

  if (projects.length) {
    return (
      <div className="bg-black pb-24">
        {/* Projects Header */}
        <h2 className="h-26 select-none bg-black pb-24 pt-8 text-center font-mohave text-4xl font-semibold uppercase tracking-[.35em] sm:text-5xl">
          Projects
        </h2>

        <div className="flex flex-col justify-center gap-6 md:gap-4">
          {projects
            .sort((a, b) => {
              return a.attributes.rank - b.attributes.rank;
            })
            .map((project) => (
              <div
                className="h-24 w-150 border-b-2 first:border-t-2"
                key={project.attributes.slug}
              >
                <Link href={"/project/" + project.attributes.slug}>
                  <div className="">
                    <div>{project.attributes.title}</div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
