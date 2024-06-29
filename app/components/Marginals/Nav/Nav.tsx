import Link from "next/link";
import ThemeSwitch from "@/app/components/Marginals/Nav/ThemeSwitch";
import { LinkType } from "@/types/linkType";

export default function Nav({ links }: { links: LinkType[] }) {
  return (
    <div className="navbar sticky top-0 z-[1] w-full bg-base-100 px-8 pt-6">
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
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          <ThemeSwitch />
          {/* Navbar menu content here */}
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.path} target={"_" + link.target}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none lg:hidden">
        <ThemeSwitch />
        <label htmlFor="nav-drawer" className="btn-ghost btn-square btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  );
}
