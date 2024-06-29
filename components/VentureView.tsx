import OverlayHero from "@/components/Heroes/OverlayHero";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { VentureType } from "@/types/strapi/ventureType";

export default function VentureView({ venture }: { venture: VentureType }) {
  const ventureDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div>
      <OverlayHero
        imageUrl={venture.attributes.cover.data.attributes.url}
        title={
          venture.attributes.type === "projects"
            ? venture.attributes.title
            : venture.attributes.company
        }
        description={venture.attributes.description}
      />

      <div className="px-12 pb-12 pt-16 lg:px-32">
        <h1 className="pb-1 text-3xl font-bold">
          {venture.attributes.type === "projects"
            ? venture.attributes.title
            : venture.attributes.company}
        </h1>
        <h3 className="pb-1 text-xl">
          {venture.attributes.type === "projects"
            ? venture.attributes.company
            : venture.attributes.title}
        </h3>
        <p className="pb-6 text-lg italic">
          <span>{ventureDate(venture.attributes.start)}</span>
          <span> - </span>
          {venture.attributes.end === null ? (
            "Present"
          ) : (
            <span>{ventureDate(venture.attributes.end)}</span>
          )}
        </p>
        <div className="">
          <ReactMarkdown>{venture.attributes.content}</ReactMarkdown>
        </div>
      </div>

      {venture.attributes.media.data.length > 0 && (
        <div className="carousel mb-32 h-72">
          {venture.attributes.media.data.map((media) => (
            <div className="carousel-item">
              <Image
                src={media.attributes.url}
                alt={media.attributes.alternativeText}
                width={512}
                height={512}
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
