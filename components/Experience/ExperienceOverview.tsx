import { ExperienceType } from "@/types/experienceType";

export default function ExperienceOverview(experience: ExperienceType) {
  return (
    <div className="ml-8 flex flex-row" key={experience.company}>
      <div className="m-12">
        <h3 className="mt-12 font-mohave text-6xl">{experience.company}</h3>
        <h4 className="text-xl">{experience.title}</h4>
        <h5 className="text-md font-light opacity-80">{experience.dates}</h5>
        <p className="my-4">{experience.overview}</p>
      </div>
    </div>
  );
}
