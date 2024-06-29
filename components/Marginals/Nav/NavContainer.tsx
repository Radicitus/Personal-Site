import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_NAV_PAGES } from "@/graphql/queries/page";
// TYPES
import { LinkType } from "@/types/linkType";
import { PageSearchResultType } from "@/types/strapi/pageSearchResultType";
// HELPERS
import { isMobileDevice } from "@/utils/isMobileDevice";
// COMPONENTS
import NavBar from "@/components/Marginals/Nav/NavBar";
import NavDrawer from "@/components/Marginals/Nav/NavDrawer";

export const revalidate = 60;

export default async function NavContainer() {
  // Get page nav data from Strapi
  const client = getClient();
  const res: PageSearchResultType = await client.query({
    query: GET_NAV_PAGES,
  });

  let pages = res.data.pages.data;
  // Inject page title into link objects
  let pageLinks: LinkType[] = pages.map((page) => {
    let pageLink = page.attributes.link.data.attributes;
    let link: LinkType = {
      title: page.attributes.title,
      path: pageLink.path,
      target: pageLink.target,
    };
    return link;
  });

  return isMobileDevice() ? (
    <NavDrawer links={pageLinks} />
  ) : (
    <NavBar links={pageLinks} />
  );
}
