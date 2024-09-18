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

        <div className="flex flex-row flex-wrap justify-center gap-6 md:gap-4">
          {projects
            .sort((a, b) => {
              return a.attributes.rank - b.attributes.rank;
            })
            .map((project) => (
              <div
                className="group relative overflow-hidden rounded transition-all duration-500 ease-in-out"
                key={project.attributes.slug}
              >
                <Link href={"/project/" + project.attributes.slug}>
                  <div
                    className="absolute top-0 z-50 h-full w-full animate-text select-none place-content-center bg-gradient-to-r from-amber-500 to-pink-500
              bg-clip-text text-center font-inter text-3xl font-bold text-transparent transition-all duration-500 ease-in-out md:translate-y-5
              md:text-4xl md:font-normal md:opacity-0 md:group-hover:-translate-y-5 md:group-hover:font-bold md:group-hover:opacity-100"
                  >
                    {project.attributes.title}
                  </div>
                  <Image
                    src={project.attributes.cover.data.attributes.url}
                    alt={
                      project.attributes.cover.data.attributes.alternativeText
                    }
                    width={500}
                    height={500}
                    className="pointer-events-none z-10 h-64 w-64 select-none object-cover object-center brightness-75 grayscale
                    transition-all duration-500 ease-in-out group-hover:brightness-75 group-hover:grayscale-0 md:h-96 md:w-96 md:brightness-50"
                  />
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
