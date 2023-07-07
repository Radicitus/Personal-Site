import Image from "next/image";
import { heroParamsType } from "@/types/heroParamsType";

export default function Hero({
  heroImage,
  heroTitle,
  heroDescription,
}: heroParamsType) {
  return (
    <div className="hero h-screen lg:h-128">
      <div className="hero-content flex-col lg:flex-row-reverse text-center">
        <div className="avatar">
          <div className="w-72 lg:w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image priority src={heroImage} alt="A picture of Cameron Sherry" />
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
