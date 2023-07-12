import Link from "next/link";
import Image from "next/image";
import { ProjectType } from "@/types/strapi/projectType";

export default function ProjectsList({
  projects,
  limit,
}: {
  projects: ProjectType[];
  limit: number;
}) {
  return (
    <>
      {projects &&
        projects.slice(0, limit).map((project) => (
          <div key={project.attributes.slug} className="px-6 py-7 md:px-40">
            <div className="card card-compact h-96 bg-base-100 text-left shadow-xl">
              <figure>
                <Image
                  src={project.attributes.media.data[0].attributes.url}
                  alt={
                    project.attributes.media.data[0].attributes.alternativeText
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
    </>
  );
}
