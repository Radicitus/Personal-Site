import Image from "next/image";
import { heroParamsType } from "@/types/heroParamsType";
import Link from "next/link";

export default function Hero({
  heroImage,
  heroTitle,
  heroDescription,
  buttons,
}: heroParamsType) {
  return (
    <div className="hero h-screen md:px-8 lg:px-16">
      <div className="hero-content flex-col text-center lg:flex-row-reverse lg:gap-12">
        <div className="avatar">
          <div className="w-72 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 lg:w-80">
            <Image
              priority
              src={heroImage.attributes.url}
              alt={heroImage.attributes.alternativeText}
              width={heroImage.attributes.width}
              height={heroImage.attributes.height}
            />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">{heroTitle}</h1>
          <p className="py-6">{heroDescription}</p>
          <div className="flex justify-center space-x-4">
            {buttons &&
              buttons.map((button) => (
                <Link
                  href={button.attributes.path}
                  target={"_" + button.attributes.target}
                  className="btn-primary btn"
                  key={button.attributes.path}
                >
                  {button.attributes.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
