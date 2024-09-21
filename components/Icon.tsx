import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { IconType } from "@/types/IconType";

export default function Icon({ icon }: { icon: IconType }) {
  if (icon.attributes.type === "email") {
    return (
      <Link
        href={icon.attributes.link.data.attributes.path}
        target={"_" + icon.attributes.link.data.attributes.target}
      >
        <Mail />
      </Link>
    );
  }

  if (icon.attributes.type === "github") {
    return (
      <Link
        href={icon.attributes.link.data.attributes.path}
        target={"_" + icon.attributes.link.data.attributes.target}
      >
        <Github />
      </Link>
    );
  }

  if (icon.attributes.type === "linkedin") {
    return (
      <Link
        href={icon.attributes.link.data.attributes.path}
        target={"_" + icon.attributes.link.data.attributes.target}
      >
        <Linkedin />
      </Link>
    );
  }

  if (icon.attributes.type === "external") {
    return (
      <Link
        href={icon.attributes.link.data.attributes.path}
        target={"_" + icon.attributes.link.data.attributes.target}
      >
        <ExternalLink />
      </Link>
    );
  }
}
