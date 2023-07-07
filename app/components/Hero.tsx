import Image from "next/image";
import { heroParamsType } from "@/types/heroParamsType";
import Link from "next/link";

export default function Hero({
  heroImage,
  heroTitle,
  heroDescription,
  links,
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
          <div className="flex space-x-4 justify-center">
            {links &&
              links.map((link) => (
                <Link
                  href={link.path}
                  target={link.target}
                  className="btn btn-primary"
                >
                  {link.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
