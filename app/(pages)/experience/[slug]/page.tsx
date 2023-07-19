import { paramsType } from "@/types/paramsType";
import { getClient } from "@/graphql/clients/serverSideClient";
import { GET_VENTURE_BY_SLUG } from "@/graphql/queries/venture";
import { VentureType } from "@/types/strapi/ventureType";
import { VentureSearchResultType } from "@/types/strapi/ventureSearchResultType";
import OverlayHero from "@/app/components/Heroes/OverlayHero";
import ReactMarkdown from "react-markdown";

export default async function Experience({ params }: paramsType) {
  // Get the venture page from Strapi
  const client = getClient();
  const res: VentureSearchResultType = await client.query({
    query: GET_VENTURE_BY_SLUG,
    variables: { slug: params.slug },
  });
  const venture: VentureType = res.data.ventures.data[0];
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
        title={venture.attributes.company}
        description={venture.attributes.description}
      />

      <div className="px-12 pb-24 pt-16 lg:px-32">
        <h1 className="pb-1 text-3xl font-bold">
          {venture.attributes.company}
        </h1>
        <h3 className="pb-1 text-xl">{venture.attributes.title}</h3>
        <p className="pb-6 text-lg italic">
          <span>{ventureDate(venture.attributes.start)}</span>
          <span> - </span>
          <span>{ventureDate(venture.attributes.end)}</span>
        </p>
        <div className="">
          <ReactMarkdown>{venture.attributes.content}</ReactMarkdown>
        </div>

        {venture.attributes.media.data.length > 0 &&
          venture.attributes.media.data.map((media) => {
            return (
              <div className="carousel rounded-box">
                <div className="carousel-item">
                  <img
                    src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    alt="Burger"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
