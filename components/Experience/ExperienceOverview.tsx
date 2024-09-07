import { ExperienceType } from "@/types/experienceType";

export default function ExperienceOverview(experience: ExperienceType) {
  return (
    <div className="m-20">
      <h3 className="font-mohave text-6xl">{experience.company}</h3>
      <h4 className="text-3xl font-light">{experience.title}</h4>
      <h6 className="text-md font-light opacity-80">{experience.dates}</h6>
      <h5 className="mt-4">{experience.summary}</h5>

      <div className="mt-6">
        <h5 className="text-lg">Key Contributions:</h5>
        <ul className="list-disc pl-5">
          {experience.key_contributions.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
