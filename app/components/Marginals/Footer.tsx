import Image from "next/image";
import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_FOOTER } from "@/graphql/queries/single";
// COMPONENTS
import GitHubIcon from "@/app/components/Icons/GitHubIcon";
import LinkedInIcon from "@/app/components/Icons/LinkedInIcon";
import EmailIcon from "@/app/components/Icons/EmailIcon";
// TYPES
import { FooterType } from "@/types/strapi/footerType";

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
    <footer className="footer footer-center mt-auto bg-black p-5 text-white">
      <div>
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-amber-400 ring-offset-2 ring-offset-black">
            <Image
              src={footerAvatar.url}
              alt={footerAvatar.alternativeText}
              width={128}
              height={128}
            />
          </div>
        </div>

        <p className="font-bold">{footer.data.footer.data.attributes.tag}</p>
        <p>{footer.data.footer.data.attributes.subtag}</p>
      </div>

      <div>
        <div className="grid grid-flow-col gap-4">
          <GitHubIcon
            link={gitHubIcon.link.data.attributes}
            width={"24"}
            height={"24"}
          />

          <LinkedInIcon
            link={linkedInIcon.link.data.attributes}
            width={"24"}
            height={"24"}
          />

          <EmailIcon
            link={emailIcon.link.data.attributes}
            width={"24"}
            height={"24"}
          />
        </div>
      </div>
    </footer>
  );
}
