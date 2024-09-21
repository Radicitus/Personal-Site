import { ProjectType } from "@/types/projectType";
import { notFound } from "next/navigation";
import BlockRendererClient from "@/utils/BlockRendererClient";
import ImageCarousel from "@/components/ImageCarousel";

// Return a list of params to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const res = await fetch(process.env.CMS_URL + "/projects").then((res) =>
    res.json()
  );
  const projects: ProjectType[] = res.data;

  return projects.map((project) => ({
    slug: project.attributes.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  // Get the experience data from Strapi
  const projectQueryUrl =
    "/projects?populate[technologies][populate]=*&populate[media][populate]=*&populate[logo]=*&filters[slug][$eq]=" +
    params.slug;
  const res = await fetch(process.env.CMS_URL + projectQueryUrl).then((res) =>
    res.json()
  );

  const project: ProjectType = res.data[0];

  if (!project) {
    notFound();
  }

  return (
    <div className="text-white">
      <div className="mx-10 mt-16 md:mx-24 lg:mx-40 xl:mx-56 2xl:mx-80">
        {/* Project Header */}
        <h5
          className="animate-text bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text uppercase text-transparent
          transition-all duration-300 ease-in-out"
        >
          Project
        </h5>

        {/* Project Name*/}
        <h1 className="mt-5 font-mohave text-6xl font-bold">
          {project.attributes.title}
        </h1>

        {/* Creator and Dates */}
        <div className="mb-5 flex flex-col sm:flex-row">
          <h4 className="text-xl font-light">{"Made by Cam"}</h4>
          <div className="hidden self-center px-2.5 pt-1 font-light opacity-70 sm:block">
            •
          </div>
          <h6 className="text-md pt-1 font-light opacity-70">
            {new Date(project.attributes.start).toLocaleDateString("default", {
              month: "long",
              year: "numeric",
            })}{" "}
            -{" "}
            {project.attributes.end
              ? new Date(project.attributes.end).toLocaleDateString("default", {
                  month: "long",
                  year: "numeric",
                })
              : "Present"}
          </h6>
        </div>

        {/* Description */}
        <h4 className="italic">{project.attributes.description}</h4>

        {/* Main Content */}
        <div
          className="my-12 text-justify first-letter:float-left first-letter:mr-3 first-letter:text-7xl
          first-letter:text-white first-line:uppercase first-line:tracking-widest"
        >
          <BlockRendererClient content={project.attributes.content} />
        </div>

        {/* Technologies */}
        {project.attributes.technologies.data.length ? (
          <div className="mb-16 md:mx-28">
            <div className="text-center font-mohave text-2xl uppercase">
              Technologies
            </div>
            <div className="mt-4 flex flex-row flex-wrap justify-center gap-3">
              {project.attributes.technologies.data.map((tech, index) => {
                if (index == 0) {
                  return (
                    <div key={tech.attributes.title}>
                      {tech.attributes.title}
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="flex flex-row gap-3"
                      key={tech.attributes.title}
                    >
                      <div>•</div>
                      <div>{tech.attributes.title}</div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ) : null}

        {/* Media */}
        {project.attributes.media.data ? (
          <div className="mb-10 flex justify-center md:pt-12">
            <ImageCarousel {...project.attributes.media} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
