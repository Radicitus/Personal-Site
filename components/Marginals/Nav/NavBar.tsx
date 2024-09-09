import Link from "next/link";
import { LinkType } from "@/types/linkType";
import { House } from "lucide-react";

export default function NavBar({ links }: { links: LinkType[] }) {
  return (
    <div className="sticky top-0 z-[1] flex w-full justify-between bg-opacity-40 px-8 pt-6 text-white backdrop-blur-lg backdrop-filter">
      <div className="mx-2 flex-1 px-2">
        <Link href={"/"} className="group font-mohave text-4xl font-bold">
          <span className="align-sub">
            <div className="inline-block transition group-hover:-translate-y-1">
              C
            </div>
            <div className="inline-block transition group-hover:translate-y-1">
              S
            </div>
          </span>
        </Link>
      </div>
      {/* Navbar menu content here */}
      <div className="flex items-center space-x-8 font-quicksand text-gray-300">
        {links.map((link) => (
          <div
            className="transition ease-in-out hover:text-gray-400"
            key={link.attributes.title}
          >
            <Link
              href={link.attributes.path}
              target={"_" + link.attributes.target}
            >
              {link.attributes.path === "/#home" ? (
                <House className="h-5 w-5" />
              ) : (
                link.attributes.title
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
