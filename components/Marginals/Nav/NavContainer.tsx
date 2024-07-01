// TYPES
import { LinkType } from "@/types/linkType";
// HELPERS
import { isMobileDevice } from "@/utils/isMobileDevice";
// COMPONENTS
import NavBar from "@/components/Marginals/Nav/NavBar";
import NavDrawer from "@/components/Marginals/Nav/NavDrawer";

export const revalidate = 60;

export default function NavContainer() {
  const navLinks: LinkType[] = [
    { title: "/", path: "#home", target: "_self" },
    { title: "Experience", path: "#experience", target: "_self" },
    { title: "Projects", path: "#projects", target: "_self" },
    // { title: "About", path: "/about", target: "_self" },
  ];

  return isMobileDevice() ? (
    <NavDrawer links={navLinks} />
  ) : (
    <NavBar links={navLinks} />
  );
}
