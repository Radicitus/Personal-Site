import { ExperienceType } from "@/types/experienceType";

export default function ExperienceOverview(experience: ExperienceType) {
  return (
    <div>
      <h1>{experience.company}</h1>
    </div>
  );
}
