import { ExperienceType } from "@/types/experienceType";
import { notFound } from "next/navigation";
import BlockRendererClient from "@/utils/BlockRendererClient";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";
import Icon from "@/components/Icon";

// Return a list of params to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const res = await fetch(process.env.CMS_URL + "/experiences").then((res) =>
    res.json()
  );
  const experiences: ExperienceType[] = res.data;

  return experiences.map((experience) => ({
    slug: experience.attributes.slug,
  }));
}

export default async function ExperiencePage({
  params,
}: {
  params: { slug: string };
}) {
  // Get the experience data from Strapi
  const experienceQueryUrl =
    "/experiences?populate[technologies][populate]=*&populate[media][populate]=*&populate[logo]=*&populate[icons][populate]=*&filters[slug][$eq]=" +
    params.slug;
  const res = await fetch(process.env.CMS_URL + experienceQueryUrl).then(
    (res) => res.json()
  );

  const experience: ExperienceType = res.data[0];

  if (!experience) {
    notFound();
  }

  return (
    <div className="text-white">
      <div className="mx-10 mt-16 md:mx-24 lg:mx-40 xl:mx-56 2xl:mx-80">
        {/* Experience Header */}
        <Link href={"/#experience"}>
          <h5
            className="animate-text bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text uppercase text-transparent
          transition-all duration-300 ease-in-out"
          >
            Experience
          </h5>
        </Link>

        {/* Company Name*/}
        <h1 className="mt-5 font-mohave text-6xl font-bold">
          {experience.attributes.company}
        </h1>

        {/* Title and Dates */}
        <div className="mb-5 flex flex-col sm:flex-row">
          <h4 className="text-2xl font-light">{experience.attributes.title}</h4>
          <div className="hidden self-center px-2.5 pt-1 font-light opacity-70 sm:block">
            •
          </div>
          <h6 className="text-md pt-1 font-light opacity-70 md:self-center">
            {new Date(experience.attributes.start).toLocaleDateString(
              "default",
              {
                month: "long",
                year: "numeric",
              }
            )}{" "}
            -{" "}
            {experience.attributes.end
              ? new Date(experience.attributes.end).toLocaleDateString(
                  "default",
                  {
                    month: "long",
                    year: "numeric",
                  }
                )
              : "Present"}
          </h6>
        </div>

        {/* Summary */}
        <h4 className="italic">{experience.attributes.summary}</h4>

        {/* Project Links */}
        {experience.attributes.icons.data ? (
          <div className="flex flex-row gap-4 pt-3">
            {experience.attributes.icons.data.map((icon) => (
              <div
                className="transition-all duration-300 hover:opacity-70"
                key={icon.attributes.title}
              >
                <Icon icon={icon}></Icon>
              </div>
            ))}
          </div>
        ) : null}

        {/* Main Content */}
        <div
          className="my-10 text-justify first-letter:float-left first-letter:mr-3 first-letter:text-7xl
          first-letter:text-white first-line:uppercase first-line:tracking-widest"
        >
          <BlockRendererClient content={experience.attributes.content} />
        </div>

        {/* Key Contributions */}
        <div className="mx-5 mb-16 md:mx-14 lg:mx-24 xl:mx-36 2xl:mx-52">
          <div className="text-center font-mohave text-2xl uppercase">
            Key Contributions
          </div>
          <div className="mt-4 text-justify">
            <BlockRendererClient
              content={experience.attributes.contributions}
            />
          </div>
        </div>

        {/* Technologies */}
        {experience.attributes.technologies.data.length ? (
          <div className="mb-16 md:mx-28">
            <div className="text-center font-mohave text-2xl uppercase">
              Technologies
            </div>
            <div className="mt-4 flex flex-row flex-wrap justify-center gap-3">
              {experience.attributes.technologies.data.map((tech, index) => {
                if (index == 0) {
                  return (
                    <div key={tech.attributes.title}>
                      {tech.attributes.title}
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="flex flex-row gap-3"
                      key={tech.attributes.title}
                    >
                      <div>•</div>
                      <div>{tech.attributes.title}</div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ) : null}

        {/* Media */}
        {experience.attributes.media.data ? (
          <div className="mb-10 flex justify-center md:pt-12">
            <ImageCarousel {...experience.attributes.media} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
