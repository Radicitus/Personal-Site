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
      <div className="bg-black pb-24" id="projects">
        {/* Projects Header */}
        <h2
          className="h-26 select-none bg-black pb-24 text-center font-mohave text-4xl font-semibold uppercase
        tracking-[.35em] sm:mt-20 sm:text-8xl"
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
                  href={"/projects/" + project.attributes.slug}
                  className="group/item mx-6 flex min-h-32 flex-row justify-between border-t-[.5px] border-white border-opacity-30
                px-6 py-4 transition-all duration-300 ease-in-out last:border-b-[.5px]
                hover:scale-[1.02] hover:!opacity-100 sm:mx-14 group-hover:sm:opacity-50"
                  key={project.attributes.slug}
                >
                  <div className="lg:mr-24">
                    {/* Title */}
                    <div
                      className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text font-inter text-xl font-bold
                    transition-all duration-300 ease-in-out group-hover/item:animate-text group-hover/item:text-transparent lg:text-2xl"
                    >
                      {project.attributes.title}
                    </div>

                    {/* Description */}
                    <div className="mr-8 pt-1 text-sm lg:pt-2 lg:text-base">
                      {project.attributes.description}
                    </div>

                    {/* Technologies */}
                    {project.attributes.technologies.data.length ? (
                      <div className="flex flex-row pt-3 lg:pt-5">
                        {/*<div className="text-sm uppercase">Technologies</div>*/}
                        <div className="flex flex-row flex-wrap gap-2 text-sm opacity-65 lg:text-base">
                          {project.attributes.technologies.data.map(
                            (tech, index) => {
                              if (index == 0) {
                                return (
                                  <div key={tech.attributes.title}>
                                    {tech.attributes.title}
                                  </div>
                                );
                              } else {
                                return (
                                  <div
                                    className="flex flex-row gap-2"
                                    key={tech.attributes.title}
                                  >
                                    <div>•</div>
                                    <div>{tech.attributes.title}</div>
                                  </div>
                                );
                              }
                            }
                          )}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Cover Image */}
                  <Image
                    className="h-28 w-28 place-self-center rounded object-cover object-center opacity-80 lg:h-32 lg:w-32"
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
