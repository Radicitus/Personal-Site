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
        <h2
          className="h-26 select-none bg-black pb-24 pt-8 text-center font-mohave text-4xl font-semibold
        uppercase tracking-[.35em] sm:text-8xl"
        >
          Projects
        </h2>
        <div className="flex flex-row justify-center">
          <div className="group flex flex-col">
            {projects
              .sort((a, b) => {
                return a.attributes.rank - b.attributes.rank;
              })
              .map((project) => (
                <Link
                  href={"/project/" + project.attributes.slug}
                  className="mx-6 mb-4 flex min-h-32 max-w-screen-lg flex-row justify-between border-b-[.5px] border-white
                border-opacity-30 px-6 pb-4 transition-all duration-300
                first:border-t-[.5px] first:pt-4 hover:!scale-105 hover:!opacity-100 group-hover:opacity-50 sm:mx-14"
                  key={project.attributes.slug}
                >
                  <div>
                    <div className="text-xl font-bold">
                      {project.attributes.title}
                    </div>
                    <div className="mr-8 pt-2 text-sm">
                      {project.attributes.description}
                    </div>
                    <h6 className="pt-2 text-sm font-light">
                      {new Date(project.attributes.start).toLocaleDateString(
                        "default",
                        {
                          month: "short",
                          year: "numeric",
                        }
                      )}{" "}
                      -{" "}
                      {project.attributes.end
                        ? new Date(project.attributes.end).toLocaleDateString(
                            "default",
                            {
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "Present"}
                    </h6>
                  </div>
                  <Image
                    className="mr-3 h-28 w-28 rounded object-cover object-center opacity-80"
                    src={project.attributes.cover.data.attributes.url}
                    alt={
                      project.attributes.cover.data.attributes.alternativeText
                    }
                    height={225}
                    width={225}
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
