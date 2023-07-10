import Hero from "@/app/components/Hero";
import { getClient } from "@/graphql/clients/serverSideClient";
import { PageType } from "@/types/strapi/pageType";
import { GET_HOME_PAGE } from "@/graphql/queries/page";

export default async function Home() {
  const client = getClient();
  const homePage: PageType = await client
    .query({ query: GET_HOME_PAGE })
    .then((res) => res.data.homePage);

  const myIntroHero = homePage.data.attributes.lead_hero.data.attributes;

  return (
    <main className="md:px-8 lg:px-16">
      <div>
        <Hero
          heroImage={myIntroHero.cover.data}
          heroTitle={myIntroHero.title}
          heroDescription={myIntroHero.description}
          buttons={myIntroHero.buttons.data}
        />
        <div>Home</div>
        <div>{homePage.data.attributes.slug}</div>
      </div>
    </main>
  );
}
