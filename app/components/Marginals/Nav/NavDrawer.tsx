import NavSidebar from "@/app/components/Marginals/Nav/NavSidebar";
import { linkType } from "@/types/linkType";
import Nav from "@/app/components/Marginals/Nav/Nav";

export default function NavDrawer({ children }: { children: React.ReactNode }) {
  const navItems: linkType[] = [
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
