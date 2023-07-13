import Link from "next/link";
import { ButtonType } from "@/types/strapi/buttonType";

export default function Hero({
  title,
  description,
  buttons,
  children,
}: {
  title: string;
  description: string;
  buttons: ButtonType[];
  children: React.ReactNode;
}) {
  return (
    <div className="hero h-screen max-h-[900px] md:px-8 lg:px-16">
      <div className="hero-content flex-col gap-14 text-center lg:flex-row-reverse">
        <div>{children}</div>
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
          <div className="flex justify-center space-x-4">
            {buttons &&
              buttons.map((button) => (
                <Link
                  href={button.attributes.link.data.attributes.path}
                  target={"_" + button.attributes.link.data.attributes.target}
                  className="btn-primary btn"
                  key={button.attributes.link.data.attributes.path}
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
