import Link from "next/link";
import Image from "next/image";
import { VentureType } from "@/types/strapi/ventureType";
import { FaArrowRight } from "react-icons/fa6";

export default function ItemGridView({
  items,
  limit = items.length,
  detailed = false,
}: {
  items: VentureType[];
  limit?: number;
  detailed?: boolean;
}) {
  return (
    <div className="flex flex-row flex-wrap place-content-center gap-12">
      {items &&
        items.slice(0, limit).map((item) => (
          <Link
            key={item.attributes.slug}
            href={item.attributes.type + "/" + item.attributes.slug}
          >
            <div className="w-104">
              <div className="relative h-60 overflow-hidden rounded-2xl ring-2 ring-primary drop-shadow-md">
                <Image
                  src={item.attributes.cover.data.attributes.url}
                  alt={item.attributes.cover.data.attributes.alternativeText}
                  width={item.attributes.cover.data.attributes.width}
                  height={item.attributes.cover.data.attributes.height}
                  className="z-0 h-60 w-104 object-cover object-top"
                />

                {!detailed && (
                  <div
                    className="group absolute inset-0 z-10 flex items-center justify-center bg-primary-focus
                   bg-opacity-50 opacity-0 duration-700 ease-in-out hover:opacity-100"
                  >
                    <div className="translate-y-8 text-4xl font-semibold text-white duration-700 ease-in-out group-hover:transform-none">
                      <div>{item.attributes.title}</div>
                    </div>
                  </div>
                )}
              </div>

              {detailed && (
                <div className="pl-1">
                  <div className="py-2 text-xl font-bold">
                    {item.attributes.title}
                  </div>
                  <div className="line-clamp-2">
                    {item.attributes.description}
                  </div>

                  <div className="flex items-center gap-2 pt-4 text-secondary transition-all duration-300 hover:gap-3">
                    <span className="font-bold">READ MORE</span>
                    <FaArrowRight />
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
}
