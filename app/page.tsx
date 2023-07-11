import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_PAGE } from "@/graphql/queries/page";
// COMPONENTS
import Hero from "@/app/components/Heroes/Hero";
// TYPES
import { PageType } from "@/types/strapi/pageType";
import { PageSearchResultType } from "@/types/strapi/pageSearchResultType";
import ExperienceHero from "@/app/components/Heroes/ExperienceHero";
import ProjectsHero from "@/app/components/Heroes/ProjectsHero";

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

  return (
    <main className="md:px-8 lg:px-16">
      <Hero
        heroImage={myIntroHero.cover.data}
        heroTitle={myIntroHero.title}
        heroDescription={myIntroHero.description}
        buttons={myIntroHero.buttons.data}
      />
      <ExperienceHero />
      <ProjectsHero />
    </main>
  );
}
