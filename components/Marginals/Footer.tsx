import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
// TYPES
import { FooterType } from "@/types/footerType";
import { IconType } from "@/types/IconType";
import { ImageType } from "@/types/imageType";

export const revalidate = 3600;

export default async function Footer() {
  // Get the footer from Strapi
  const footerQueryUrl =
    "/footer?populate[avatar]=*&populate[icons][populate]=*";
  const footer: FooterType = await fetch(
    process.env.CMS_URL + footerQueryUrl
  ).then((res) => res.json());

  // Destructure to fractionals
  const footerAvatar: ImageType = footer.data.attributes.avatar.data;
  const gitHubIcon: IconType = footer.data.attributes.icons.data.find(
    (icon) => icon.attributes.type === "github"
  )!;
  const linkedInIcon: IconType = footer.data.attributes.icons.data.find(
    (icon) => icon.attributes.type === "linkedin"
  )!;
  const emailIcon: IconType = footer.data.attributes.icons.data.find(
    (icon) => icon.attributes.type === "email"
  )!;

  return (
    <footer className="mt-auto bg-black p-5 pb-12 text-white">
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

        <p className="mt-4 font-light">{footer.data.attributes.tag}</p>
        <p className="font-thin">{footer.data.attributes.subtag}</p>
      </div>

      <div className="flex flex-row place-content-center gap-4 text-gray-300">
        <div className="transition duration-300 ease-in-out hover:text-gray-400">
          <Icon icon={gitHubIcon} />
        </div>
        <div className="transition duration-300 ease-in-out hover:text-gray-400">
          <Icon icon={linkedInIcon} />
        </div>
        <div className="transition duration-300 ease-in-out hover:text-gray-400">
          <Icon icon={emailIcon} />
        </div>
      </div>
    </footer>
  );
}
