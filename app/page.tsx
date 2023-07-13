import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_PAGE } from "@/graphql/queries/page";
import Image from "next/image";
// COMPONENTS
import ProjectsHero from "@/app/components/Heroes/ProjectsHero";
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
  const experienceHero = heroes.find(
    (hero) => hero.attributes.slug === "experience"
  )!.attributes;

  return (
    <main>
      <LeadHero
        title={myIntroHero.title}
        description={myIntroHero.description}
        buttons={myIntroHero.buttons.data}
      >
        <div className="avatar">
          <div className="w-72 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 lg:w-80">
            <Image
              priority
              src={myIntroHero.cover.data.attributes.url}
              alt={myIntroHero.cover.data.attributes.alternativeText}
              width={myIntroHero.cover.data.attributes.width}
              height={myIntroHero.cover.data.attributes.height}
            />
          </div>
        </div>
      </LeadHero>

      {/* Experience Hero */}
      <Hero
        title={experienceHero.title}
        description={experienceHero.description}
        button={experienceHero.button.data}
        background={"bg-primary"}
        limit={3}
      >
        <FaUniversity />
        <GiPrism />
        <SiTacobell />
      </Hero>

      {/* Project Hero */}
      {/*<Hero>*/}
      {/*  <BiLogoReact />*/}
      {/*  <BiLogoAngular />*/}
      {/*  <BiLogoTailwindCss />*/}
      {/*  <BiLogoTypescript />*/}
      {/*  <BiLogoGraphql />*/}
      {/*  <BiLogoPostgresql />*/}
      {/*</Hero>*/}

      <ProjectsHero />
    </main>
  );
}
