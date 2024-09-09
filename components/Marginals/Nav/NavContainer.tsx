// HELPERS
import { isMobileDevice } from "@/utils/isMobileDevice";
// COMPONENTS
import NavBar from "@/components/Marginals/Nav/NavBar";
import NavDrawer from "@/components/Marginals/Nav/NavDrawer";
import { NavType } from "@/types/navType";

export const revalidate = 3600;

export default async function NavContainer() {
  // Get nav data from Strapi
  const navQueryUrl = "/nav?populate=*";
  const nav: NavType = await fetch(process.env.CMS_URL + navQueryUrl).then(
    (res) => res.json()
  );

  return isMobileDevice() ? (
    <NavDrawer links={nav.data.attributes.links.data} />
  ) : (
    <NavBar links={nav.data.attributes.links.data} />
  );
}
