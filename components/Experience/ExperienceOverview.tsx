import { ExperienceType } from "@/types/experienceType";
import BlockRendererClient from "@/utils/BlockRendererClient";

export default function ExperienceOverview(experience: ExperienceType) {
  let startDate = new Date(experience.attributes.start)
  let endDate = new Date(experience.attributes.end)

  return (
    <div className="m-20">
      <h3 className="font-mohave text-6xl">{experience.attributes.company}</h3>
      <h4 className="text-3xl font-light">{experience.attributes.title}</h4>
      <h6 className="text-md font-light opacity-80">
        {startDate.toLocaleDateString('default', { month: 'long', year: "numeric" })} - {endDate.toLocaleDateString('default', { month: 'short', year: "numeric" })}
      </h6>
      <h5 className="mt-4">{experience.attributes.summary}</h5>

      <div className="mt-6">
        <h5 className="text-lg">Key Contributions:</h5>
        <BlockRendererClient content={experience.attributes.contributions} />
      </div>
    </div>
  );
}
