import Image from "next/image";
import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_FOOTER } from "@/graphql/queries/single";
// TYPES
import { FooterType } from "@/types/strapi/footerType";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

export default async function Footer() {
  // Get the footer from Strapi
  const client = getClient();
  const footer: FooterType = await client.query({ query: GET_FOOTER });

  // Avatar
  const footerAvatar =
    footer.data.footer.data.attributes.avatar.data.attributes;

  // Icons
  const footerIcons = footer.data.footer.data.attributes.icons.data;
  const gitHubIcon = footerIcons.find(
    (icon) => icon.attributes.type === "github"
  )!.attributes;
  const linkedInIcon = footerIcons.find(
    (icon) => icon.attributes.type === "linkedin"
  )!.attributes;
  const emailIcon = footerIcons.find(
    (icon) => icon.attributes.type === "email"
  )!.attributes;

  return (
    <footer className="mt-auto bg-black p-5 text-white">
      <div className="mb-4 flex flex-col items-center ">
        <div className="w-12 overflow-hidden rounded-full ring-2 ring-violet-800 ring-offset-2 ring-offset-black transition duration-300 ease-in-out hover:-translate-y-0.5 hover:ring-4">
          <Link
            href={"https://www.instagram.com/wondercameron/"}
            target={"_blank"}
          >
            <Image
              src={footerAvatar.url}
              alt={footerAvatar.alternativeText}
              width={128}
              height={128}
            />
          </Link>
        </div>

        <p className="mt-4 font-light">
          {footer.data.footer.data.attributes.tag}
        </p>
        <p className="font-thin">{footer.data.footer.data.attributes.subtag}</p>
      </div>

      <div className="flex flex-row place-content-center gap-4 text-gray-300">
        <div className="transition duration-300 ease-in-out hover:text-gray-400">
          <Link
            href={gitHubIcon.link.data.attributes.path}
            target={"_" + gitHubIcon.link.data.attributes.target}
          >
            <Github />
          </Link>
        </div>
        <div className="transition duration-300 ease-in-out hover:text-gray-400">
          <Link
            href={linkedInIcon.link.data.attributes.path}
            target={"_" + linkedInIcon.link.data.attributes.target}
          >
            <Linkedin />
          </Link>
        </div>
        <div className="transition duration-300 ease-in-out hover:text-gray-400">
          <Link
            href={emailIcon.link.data.attributes.path}
            target={"_" + emailIcon.link.data.attributes.target}
          >
            <Mail />
          </Link>
        </div>
      </div>
    </footer>
  );
}
