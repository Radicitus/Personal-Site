import Hero from "@/app/components/Hero";
import profileImage from "/public/Profile.png";
import { linkType } from "@/types/linkType";
import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_ALL_PROJECTS } from "@/graphql/queries/project";
import Image from "next/image";

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
  const data = await client
    .query({ query: GET_ALL_PROJECTS })
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
        {/*{JSON.stringify(data)}*/}
        {data.map((project) => (
          <div>
            <div>{project.id}</div>
            <div>{project.attributes.title}</div>
            <div>{project.attributes.description}</div>
            <div>
              {project.attributes.media.data.map((attr) => (
                <div>
                  <div>{attr.attributes.url}</div>
                  <Image
                    src={attr.attributes.url}
                    width={256}
                    height={256}
                    alt=""
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
