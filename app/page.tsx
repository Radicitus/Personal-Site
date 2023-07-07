import Hero from "@/app/components/Hero";
import profileImage from "/public/Profile.png";
import { linkType } from "@/types/linkType";

export default function Home() {
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
      </div>
    </main>
  );
}
