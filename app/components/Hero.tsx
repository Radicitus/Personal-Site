import Image from "next/image";
import profileImage from "/public/Profile.png";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="avatar">
          <div className="w-80 rounded-full">
            <Image
              src={profileImage}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="A picture of Cameron Sherry"
            />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">Cameron Sherry</h1>
          <p className="py-6">
            Hi there! I'm a fullstack developer and designer, with a focus on
            frontend development. My current stack is React, Next.js,
            TailwindCSS, and TypeScript. I'm currently looking for a full-time
            position as a frontend developer.
          </p>
          <button className="btn btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
}
