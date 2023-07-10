"use client";

import Link from "next/link";
import { LinkType } from "@/types/linkType";

export default function NavSidebar({ links }: { links: LinkType[] }) {
  const handleNavClick = () => {
    setTimeout(() => {
      document.getElementById("nav-drawer")!.click();
    }, 400);
  };

  return (
    <div className="drawer-side z-[2]">
      <label htmlFor="nav-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 pt-8 w-64 h-full bg-base-100 flex divide-y">
        {/* Sidebar content here */}
        {links.map((link) => (
          <li key={link.title} className="py-2 first:pb-2 last:pt-2">
            <Link
              href={link.path}
              target={link.target}
              onClick={handleNavClick}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
