import Link from "next/link";
// COMPONENTS
import ItemListView from "@/app/components/ItemListView";
import ItemGridView from "@/app/components/ItemGridView";
import { ProjectType } from "@/types/strapi/projectType";
import { ButtonType } from "@/types/strapi/buttonType";

export default function Hero({
  title,
  description,
  items,
  limit = 3,
  button,
  background = "bg-base-100",
  children,
}: {
  title: string;
  description: string;
  items?: ProjectType[];
  limit?: number;
  button: ButtonType;
  background?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`${background} py-24 text-center`}>
      <div className="pb-6 text-5xl font-bold uppercase">{title}</div>

      <div className="text-md line mx-8 pb-4 font-bold leading-6">
        {description}
      </div>

      {children && (
        <div className="flex flex-row flex-wrap justify-center gap-4 px-12 pb-4 text-4xl">
          {children}
        </div>
      )}

      {items && (
        <>
          {/* Mobile List: 3 Most Recent Projects */}
          <div className="pb-10 lg:hidden">
            <ItemListView items={items} limit={limit} />
          </div>

          {/* Grid View: 3 Most Recent Projects */}
          <div className="hidden pb-20 lg:block">
            <ItemGridView items={items} limit={limit} />
          </div>
        </>
      )}

      <Link href={button.attributes.link.data.attributes.path}>
        <div className="font-bold uppercase underline decoration-2 underline-offset-4">
          {button.attributes.title + " >>"}
        </div>
      </Link>
    </div>
  );
}
