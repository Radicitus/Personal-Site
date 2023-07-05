"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="navbar bg-base-100 px-8 pt-6 sticky top-0">
      <div className="navbar-start">
        <Link href={"/"} className="text-4xl font-mohave font-bold">
          CS
        </Link>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/experience"}>Experience</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-3 drop-shadow-2xl bg-base-100 rounded-box w-52
            flex divide-y"
          >
            <li className="pb-2">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="py-2">
              <Link href={"/experience"}>Experience</Link>
            </li>
            <li className="py-2">
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li className="pt-2">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
