import Link from "next/link";
import { LinkType } from "@/types/linkType";
import { Button } from "@/components/ui/button";

export default function NavBar({ links }: { links: LinkType[] }) {
  return (
    <div className="sticky top-0 z-[1] flex w-full justify-between bg-opacity-40 px-8 pt-6 text-white backdrop-blur-lg backdrop-filter">
      <div className="mx-2 px-2">
        <Link href={"/"} className="font-mohave text-4xl font-bold">
          <span className="align-sub">CS</span>
        </Link>
      </div>
      {/* Navbar menu content here */}
      <div className="flex items-center space-x-8 font-quicksand text-gray-300">
        {links.map((link) => (
          <div className="transition ease-in-out hover:text-gray-400">
            <Link
              href={link.path}
              target={"_" + link.target}
              legacyBehavior
              passHref
            >
              {link.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
