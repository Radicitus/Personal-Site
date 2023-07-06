import NavSidebar from "@/app/components/Marginals/Nav/NavSidebar";
import { linkType } from "@/types/linkType";
import Nav from "@/app/components/Marginals/Nav/Nav";

export default function NavDrawer({ children }: { children: React.ReactNode }) {
  const navItems: linkType[] = [
    { title: "Home", path: "/" },
    { title: "Experience", path: "/experience" },
    { title: "Projects", path: "/projects" },
    { title: "About", path: "/about" },
  ];

  return (
    <div className="drawer drawer-end">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Nav navItems={navItems} />

        {/* Page content here */}
        {children}
      </div>
      <NavSidebar navItems={navItems} />
    </div>
  );
}
