"use client";

import Link from "next/link";
import { LinkType } from "@/types/linkType";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function NavBar({ links }: { links: LinkType[] }) {
  return (
    <div className="navbar sticky top-0 z-[1] flex w-full bg-black px-8 pt-6 text-white">
      <div className="mx-2 px-2">
        <Link href={"/"} className="font-mohave text-4xl font-bold">
          <span className="align-sub">CS</span>
        </Link>
      </div>
      {/* Desktop NavBar */}
      <div className="hidden w-full content-center justify-end justify-items-end lg:inline-block">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Navbar menu content here */}
            {links.map((link) => (
              <NavigationMenuItem>
                <Link
                  href={link.path}
                  target={"_" + link.target}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Mobile NavBar Drawer */}
    </div>
  );
}
