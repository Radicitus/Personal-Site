import Link from "next/link";
import Image from "next/image";
import { VentureType } from "@/types/strapi/ventureType";

export default function ItemListView({
  items,
  limit = items.length,
}: {
  items: VentureType[];
  limit?: number;
}) {
  return (
    <>
      {items &&
        items.slice(0, limit).map((item) => (
          <div key={item.attributes.slug} className="px-6 py-7 md:px-40">
            <div className="card card-compact h-96 bg-base-100 text-left drop-shadow-lg">
              <figure>
                <Image
                  src={item.attributes.cover.data.attributes.url}
                  alt={item.attributes.cover.data.attributes.alternativeText}
                  width={512}
                  height={512}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.attributes.title}</h2>
                <p>
                  <div className="line-clamp-2">
                    {item.attributes.description}
                  </div>
                </p>
                <div className="card-actions justify-end">
                  <Link
                    href={item.attributes.type + "/" + item.attributes.slug}
                  >
                    <button className="btn-primary btn">SEE MORE</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
