import NavSidebar from "@/app/components/Marginals/Nav/NavSidebar";
import { LinkType } from "@/types/linkType";
import Nav from "@/app/components/Marginals/Nav/Nav";
import { getClient } from "@/graphql/clients/serverSideClient";

export default async function NavDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get page nav data from Strapi
  const client = getClient();
  // let footer: FooterType = await client.query({ query: GET_FOOTER });

  const navItems: LinkType[] = [
    { title: "Home", path: "/", target: "_self" },
    { title: "Experience", path: "/experience", target: "_self" },
    { title: "Projects", path: "/projects", target: "_self" },
    { title: "About", path: "/about", target: "_self" },
  ];

  return (
    <div className="drawer drawer-end">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Nav links={navItems} />

        {/* Page content here */}
        {children}
      </div>
      <NavSidebar links={navItems} />
    </div>
  );
}
