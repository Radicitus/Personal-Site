import Link from "next/link";
import Image from "next/image";
import { ProjectType } from "@/types/strapi/projectType";

export default function ItemListView({
  items,
  limit = items.length,
}: {
  items: ProjectType[];
  limit?: number;
}) {
  return (
    <>
      {items &&
        items.slice(0, limit).map((item) => (
          <div key={item.attributes.slug} className="px-6 py-7 md:px-40">
            <div className="card-compact card h-96 bg-base-100 text-left drop-shadow-lg">
              <figure>
                <Image
                  src={item.attributes.media.data[0].attributes.url}
                  alt={item.attributes.media.data[0].attributes.alternativeText}
                  width={512}
                  height={512}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.attributes.title}</h2>
                <p>{item.attributes.description}</p>
                <div className="card-actions justify-end">
                  <Link href={"/projects/" + item.attributes.slug}>
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
