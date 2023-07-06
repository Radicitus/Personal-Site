import Hero from "@/app/components/Hero";
import profileImage from "/public/Profile.png";

export default function Home() {
  return (
    <main>
      <div>
        <Hero
          heroImage={profileImage}
          heroTitle={"Cameron Sherry"}
          heroDescription={
            "Hi there! I'm a fullstack developer and designer, with a focus on" +
            "frontend development. My current stack is React, Next.js," +
            "TailwindCSS, and TypeScript. I'm currently looking for a full-time " +
            "position as a frontend developer."
          }
        />
        <div>Home</div>
      </div>
    </main>
  );
}
