import { paramsType } from "@/types/paramsType";
import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_VENTURE_BY_SLUG } from "@/graphql/queries/venture";
import { VentureType } from "@/types/strapi/ventureType";
import { VentureSearchResultType } from "@/types/strapi/ventureSearchResultType";
import OverlayHero from "@/app/components/Heroes/OverlayHero";

export default async function Experience({ params }: paramsType) {
  // Get the venture page from Strapi
  const client = getClient();
  const res: VentureSearchResultType = await client.query({
    query: GET_VENTURE_BY_SLUG,
    variables: { slug: params.slug },
  });
  const venture: VentureType = res.data.ventures.data[0];

  return (
    <div>
      <OverlayHero
        imageUrl={venture.attributes.cover.data.attributes.url}
        title={venture.attributes.title}
        description={venture.attributes.description}
      />
    </div>
  );
}
