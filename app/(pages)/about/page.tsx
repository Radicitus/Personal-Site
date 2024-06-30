import { getClient } from "@/graphql/clients/serverSideClient";
import { PageSearchResultType } from "@/types/strapi/pageSearchResultType";
import { GET_PAGE } from "@/graphql/queries/page";
import { PageType } from "@/types/strapi/pageType";
import Image from "next/image";

export const revalidate = 60;

export default async function About() {
  // Get the about page from Strapi
  const client = getClient();
  const res: PageSearchResultType = await client.query({
    query: GET_PAGE,
    variables: { slug: "about" },
  });
  const aboutPage: PageType = res.data.pages.data[0];

  return <p>About</p>;
}
