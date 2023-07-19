import { getClient } from "@/graphql/clients/serverSideClient";
import { PageSearchResultType } from "@/types/strapi/pageSearchResultType";
import { GET_PAGE } from "@/graphql/queries/page";
import { PageType } from "@/types/strapi/pageType";
import Image from "next/image";
import LeadHero from "@/app/components/Heroes/LeadHero";

export const revalidate = 60;

export default async function About() {
  // Get the about page from Strapi
  const client = getClient();
  const res: PageSearchResultType = await client.query({
    query: GET_PAGE,
    variables: { slug: "about" },
  });
  const aboutPage: PageType = res.data.pages.data[0];

  // Destructure section data
  const leadHero = aboutPage.attributes.lead_hero.data.attributes;
  // const heroes = aboutPage.attributes.heroes.data;

  return (
    <LeadHero
      title={leadHero.title}
      description={leadHero.description}
      buttons={leadHero.buttons.data}
    >
      <div className="avatar">
        <div className="w-72 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 lg:w-80">
          <Image
            priority
            src={leadHero.cover.data.attributes.url}
            alt={leadHero.cover.data.attributes.alternativeText}
            width={512}
            height={512}
          />
        </div>
      </div>
    </LeadHero>
  );
}
