import Link from "next/link";
import { linkArrayType } from "@/types/linkArrayType";

export default function NavSidebar({ navItems }: linkArrayType) {
  return (
    <div className="drawer-side">
      <label htmlFor="nav-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 pt-8 w-64 h-full bg-base-100 flex divide-y">
        {/* Sidebar content here */}
        {navItems.map((item) => (
          <li key={item.title} className="py-2 first:pb-2 last:pt-2">
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}