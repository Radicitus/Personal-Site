import { ExperienceType } from "@/types/experienceType";
import BlockRendererClient from "@/utils/BlockRendererClient";
import Link from "next/link";

export default function ExperienceOverview(experience: ExperienceType) {
  return (
    <div className="m-20">
      <h3 className="font-mohave text-6xl">{experience.attributes.company}</h3>
      <h4 className="text-3xl font-light">{experience.attributes.title}</h4>
      <h6 className="text-md font-light opacity-80">
        {new Date(experience.attributes.start).toLocaleDateString("default", {
          month: "short",
          year: "numeric",
        })}{" "}
        -{" "}
        {experience.attributes.end
          ? new Date(experience.attributes.end).toLocaleDateString("default", {
              month: "short",
              year: "numeric",
            })
          : "Present"}
      </h6>
      <h5 className="mt-4">{experience.attributes.summary}</h5>

      <div className="mt-6 text-justify">
        <h5 className="text-lg">Key Contributions:</h5>
        <BlockRendererClient content={experience.attributes.contributions} />
      </div>

      <div className="mt-6 flex justify-end pr-4">
        <Link
          className="transition-all duration-300 ease-in-out hover:font-bold"
          href={"/experience/" + experience.attributes.slug}
        >
          {"Read More >>"}
        </Link>
      </div>
    </div>
  );
}
