import Image from "next/image";
import { heroParamsType } from "@/types/heroParamsType";

export default function Hero({
  heroImage,
  heroTitle,
  heroDescription,
}: heroParamsType) {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="avatar">
          <div className="w-80 rounded-full">
            <Image
              src={heroImage}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="A picture of Cameron Sherry"
            />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">{heroTitle}</h1>
          <p className="py-6">{heroDescription}</p>
          <button className="btn btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
}
