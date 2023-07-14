import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_PAGE } from "@/graphql/queries/page";
import { GET_ALL_EXPERIENCES } from "@/graphql/queries/venture";
// COMPONENTS
import ItemListView from "@/app/components/ItemListView";
import ItemGridView from "@/app/components/ItemGridView";
import ExperienceAnimation from "@/app/components/Lottie/ExperienceAnimation";
import LeadHero from "@/app/components/Heroes/LeadHero";
// TYPES
import { VentureSearchResultType } from "@/types/strapi/ventureSearchResultType";
import { PageSearchResultType } from "@/types/strapi/pageSearchResultType";

export const revalidate = 60;

export default async function Experience() {
  // Get all experiences from Strapi
  const client = getClient();
  const res: VentureSearchResultType = await client.query({
    query: GET_ALL_EXPERIENCES,
  });
  const experiences = res.data.ventures.data;

  // Get the Projects page from Strapi
  const pageRes: PageSearchResultType = await client.query({
    query: GET_PAGE,
    variables: { slug: "experience" },
  });
  const experiencePage = pageRes.data.pages.data[0];
  const experiencePageHero =
    experiencePage.attributes.lead_hero.data.attributes;

  return (
    <div>
      <LeadHero
        title={experiencePageHero.title}
        description={experiencePageHero.description}
        buttons={experiencePageHero.buttons.data}
      >
        <div className="w-8/12 lg:w-full">
          <ExperienceAnimation />
        </div>
      </LeadHero>

      <div>
        {/* Mobile List: 3 Most Recent Projects */}
        <div className="pb-10 lg:hidden">
          <ItemListView items={experiences} />
        </div>

        {/* Grid View: 3 Most Recent Projects */}
        <div className="hidden pb-20 lg:block">
          <ItemGridView items={experiences} detailed={true} />
        </div>
      </div>
    </div>
  );
}
