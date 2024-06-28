import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_PAGE } from "@/graphql/queries/page";
import Image from "next/image";
// COMPONENTS
import LeadHero from "@/app/components/Heroes/LeadHero";
// TYPES
import { PageType } from "@/types/strapi/pageType";
import { PageSearchResultType } from "@/types/strapi/pageSearchResultType";
import Hero from "@/app/components/Heroes/Hero";
import { FaUniversity } from "react-icons/fa";
import { GiPrism } from "react-icons/gi";
import { SiTacobell } from "react-icons/si";
import {
  BiLogoAngular,
  BiLogoGraphql,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import BadgeScene from "@/app/components/Scenes/BadgeScene";

export const revalidate = 60;

export default async function Home() {
  // Get the home page from Strapi
  const client = getClient();
  const res: PageSearchResultType = await client.query({
    query: GET_PAGE,
    variables: { slug: "home" },
  });
  const homePage: PageType = res.data.pages.data[0];

  // Destructure section data
  const myIntroHero = homePage.attributes.lead_hero.data.attributes;
  const heroes = homePage.attributes.heroes.data;
  // Heroes
  const experienceHero = heroes.find(
    (hero) => hero.attributes.slug === "experience"
  )!.attributes;
  const projectsHero = heroes.find(
    (hero) => hero.attributes.slug === "projects"
  )!.attributes;

  return (
    <main>
      <div className="h-screen">
        <BadgeScene />
      </div>

      {/* Experience Hero */}
      <Hero
        title={experienceHero.title}
        description={experienceHero.description}
        button={experienceHero.button.data}
        background={experienceHero.background_color.replaceAll("_", "-")}
      >
        <FaUniversity />
        <GiPrism />
        <SiTacobell />
      </Hero>

      {/*Project Hero */}
      <Hero
        title={projectsHero.title}
        description={projectsHero.description}
        button={projectsHero.button.data}
        items={projectsHero.ventures.data}
        limit={3}
        background={projectsHero.background_color.replaceAll("_", "-")}
      >
        <BiLogoReact />
        <BiLogoAngular />
        <BiLogoTailwindCss />
        <BiLogoTypescript />
        <BiLogoGraphql />
        <BiLogoPostgresql />
      </Hero>
    </main>
  );
}
