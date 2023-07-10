import Hero from "@/app/components/Hero";
import profileImage from "/public/Profile.png";
import { getClient } from "@/graphql/clients/serverSideClient";
import { PageType } from "@/types/strapi/pageType";
import { GET_HOME_PAGE } from "@/graphql/queries/page";

export default async function Home() {
  const client = getClient();
  const homePage: PageType = await client
    .query({ query: GET_HOME_PAGE })
    .then((res) => res.data.homePage);

  const myIntro = homePage.data.attributes.lead_hero.data.attributes;

  return (
    <main className="md:px-8 lg:px-16">
      <div>
        <Hero
          heroImage={profileImage}
          heroTitle={myIntro.title}
          heroDescription={myIntro.description}
          buttons={myIntro.buttons.data}
        />
        <div>Home</div>
        {/*<div>{JSON.stringify(homePage)}</div>*/}
        <div>{homePage.data.attributes.slug}</div>

        {/*{projects.map((project) => (*/}
        {/*  <div>*/}
        {/*    <div>{project.attributes.title}</div>*/}
        {/*    <div>{project.attributes.description}</div>*/}
        {/*    <div>*/}
        {/*      {destructureProjectImages(project).map((image) => (*/}
        {/*        <div>*/}
        {/*          <div>{image.name}</div>*/}
        {/*          <Image*/}
        {/*            src={image.url}*/}
        {/*            width={256}*/}
        {/*            height={256}*/}
        {/*            alt={image.alternativeText || ""}*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </main>
  );
}
