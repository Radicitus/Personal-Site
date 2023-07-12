import Link from "next/link";
import Image from "next/image";
import { ProjectType } from "@/types/strapi/projectType";

export default function ProjectsGrid({
  projects,
  limit,
}: {
  projects: ProjectType[];
  limit: number;
}) {
  return (
    <div className="flex flex-row flex-wrap place-content-center gap-12">
      {projects &&
        projects.slice(0, limit).map((project) => (
          <Link
            key={project.attributes.slug}
            href={"/projects/" + project.attributes.slug}
          >
            <div className="relative h-60 w-104 overflow-hidden rounded-3xl shadow-xl ring ring-primary ring-opacity-20">
              <Image
                src={project.attributes.media.data[0].attributes.url}
                alt={
                  project.attributes.media.data[0].attributes.alternativeText
                }
                width={project.attributes.media.data[0].attributes.width}
                height={project.attributes.media.data[0].attributes.height}
                className="z-0 h-60 w-104 object-cover object-top"
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
  );
}
