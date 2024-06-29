import { paramsType } from "@/types/paramsType";
import { getClient } from "@/graphql/clients/serverSideClient";
import { VentureSearchResultType } from "@/types/strapi/ventureSearchResultType";
import { GET_VENTURE_BY_SLUG } from "@/graphql/queries/venture";
import { VentureType } from "@/types/strapi/ventureType";
import VentureView from "@/components/VentureView";

export const revalidate = 60;

export default async function Project({ params }: paramsType) {
  // Get the venture page from Strapi
  const client = getClient();
  const res: VentureSearchResultType = await client.query({
    query: GET_VENTURE_BY_SLUG,
    variables: { slug: params.slug },
  });
  const venture: VentureType = res.data.ventures.data[0];

  return <VentureView venture={venture} />;
}
