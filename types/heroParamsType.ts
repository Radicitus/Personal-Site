import { StaticImageData } from "next/image";
import { linkType } from "@/types/linkType";

export type heroParamsType = {
  heroImage: StaticImageData;
  heroTitle: string;
  heroDescription: string;
  links: linkType[];
};
