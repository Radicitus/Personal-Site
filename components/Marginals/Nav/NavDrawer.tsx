import { LinkType } from "@/types/linkType";
import Link from "next/link";

export default function NavDrawer({ links }: { links: LinkType[] }) {
  return (
    <>
      <div className="sticky top-0 z-[1] flex w-full justify-center bg-opacity-40 px-8 pt-6 text-white backdrop-blur-lg backdrop-filter">
        <Link href={"/#home"} className="group font-mohave text-4xl font-bold">
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
    </>
  );
}
