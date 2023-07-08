import Hero from "@/app/components/Hero";
import profileImage from "/public/Profile.png";
import { linkType } from "@/types/linkType";
import { getClient } from "@/graphql/serverSideClient";
import { gql } from "@apollo/client";

export const revalidate = 5;
const query = gql`
  query {
    projects {
      data {
        id
      }
    }
  }
`;

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
  const { data } = await client.query({ query });

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
        <div>{JSON.stringify(data.projects.data)}</div>
      </div>
    </main>
  );
}
