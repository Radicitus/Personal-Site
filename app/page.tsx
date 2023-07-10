import Hero from "@/app/components/Hero";
import profileImage from "/public/Profile.png";
import { linkType } from "@/types/linkType";
import { getClient } from "@/graphql/clients/serverSideClient";
import {
  GET_ALL_PROJECTS,
  GET_PROJECT_BY_SLUG,
} from "@/graphql/queries/project";
import Image from "next/image";
import { destructureProjectImages } from "@/utils/strapiDestructuring";
import { ProjectType } from "@/types/strapi/projectType";

export default async function Home() {
  const myName = "Cameron Sherry";
  const myHeadline =
    "Hi there! I'm a fullstack developer and designer, with a focus on" +
    "frontend development. My current stack is React, Next.js," +
    "TailwindCSS, and TypeScript. I'm currently looking for a full-time " +
    "position as a frontend developer.";
  const links: linkType[] = [
    { title: "Contact Me", path: "/contact", target: "_self" },
    { title: "Contact Me", path: "/contact", target: "_self" },
  ];

  const client = getClient();
  const projects: ProjectType[] = await client
    .query({
      query: GET_PROJECT_BY_SLUG,
      variables: { slug: "this-is-an-empty-test" },
    })
    .then((res) => res.data.projects.data);

  return (
    <main className="md:px-8 lg:px-16">
      <div>
        <Hero
          heroImage={profileImage}
          heroTitle={myName}
          heroDescription={myHeadline}
          links={links}
        />
        <div>Home</div>

        {projects.map((project) => (
          <div>
            <div>{project.attributes.title}</div>
            <div>{project.attributes.description}</div>
            <div>
              {destructureProjectImages(project).map((image) => (
                <div>
                  <div>{image.name}</div>
                  <Image
                    src={image.url}
                    width={256}
                    height={256}
                    alt={image.alternativeText || ""}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
