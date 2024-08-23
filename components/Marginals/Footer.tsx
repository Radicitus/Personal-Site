import Image from "next/image";
// TYPES
import { FooterType } from "@/types/footerType";
import { IconType } from "@/types/IconType";
import { ImageType } from "@/types/imageType";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const revalidate = 3600;

export default async function Footer() {
  // Get the footer from Strapi
  const footerQueryUrl = "/footer?populate[icons][populate]=*&populate[avatar][populate]=*"
  const footer: FooterType = await fetch(process.env.CMS_URL + footerQueryUrl).then((res) => 
    res.json()
  )

  console.log(footer.data.attributes.icons.data)

  // Destructure to fractionals
  const footerAvatar: ImageType = footer.data.attributes.avatar.data
  const gitHubIcon: IconType = footer.data.attributes.icons.data.find((icon) => icon.attributes.type === "github")!
  const linkedInIcon: IconType = footer.data.attributes.icons.data.find((icon) => icon.attributes.type === "linkedin")!
  const emailIcon: IconType = footer.data.attributes.icons.data.find((icon) => icon.attributes.type === "email")!

  return (
    <footer className="mb-8 mt-auto bg-black p-5 text-white">
      <div className="mb-4 flex flex-col items-center ">
        <div className="w-12 overflow-hidden rounded-full ring-2 ring-violet-800 ring-offset-2 ring-offset-black transition duration-300 ease-in-out hover:-translate-y-0.5 hover:ring-4">
          <Link
            href={"https://www.instagram.com/wondercameron/"}
            target={"_blank"}
          >
            <Image
              src={footerAvatar.attributes.url}
              alt={footerAvatar.attributes.alternativeText}
              width={128}
              height={128}
            />
          </Link>
        </div>

        <p className="mt-4 font-light">
          {footer.data.attributes.tag}
        </p>
        <p className="font-thin">{footer.data.attributes.subtag}</p>
      </div>

      <div className="flex flex-row place-content-center gap-4 text-gray-300">
        <div className="transition duration-300 ease-in-out hover:text-gray-400">
          <Link
            href={gitHubIcon.attributes.link.data.attributes.path}
            target={"_" + gitHubIcon.attributes.link.data.attributes.target}
          >
            <Github />
          </Link>
        </div>
        <div className="transition duration-300 ease-in-out hover:text-gray-400">
          <Link
            href={linkedInIcon.attributes.link.data.attributes.path}
            target={"_" + linkedInIcon.attributes.link.data.attributes.target}
          >
            <Linkedin />
          </Link>
        </div>
        <div className="transition duration-300 ease-in-out hover:text-gray-400">
          <Link
            href={emailIcon.attributes.link.data.attributes.path}
            target={"_" + emailIcon.attributes.link.data.attributes.target}
          >
            <Mail />
          </Link>
        </div>
      </div>
    </footer>
  );
}
