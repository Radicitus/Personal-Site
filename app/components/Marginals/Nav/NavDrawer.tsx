import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_NAV_PAGES } from "@/graphql/queries/page";
// COMPONENTS
import Nav from "@/app/components/Marginals/Nav/Nav";
import NavSidebar from "@/app/components/Marginals/Nav/NavSidebar";
// TYPES
import { LinkType } from "@/types/linkType";
import { PageSearchResultType } from "@/types/strapi/pageSearchResultType";

export const revalidate = 60;

export default async function NavDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <div className="drawer drawer-end">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Nav links={pageLinks} />

        {/* Page content here */}
        {children}
      </div>
      <NavSidebar links={pageLinks} />
    </div>
  );
}
