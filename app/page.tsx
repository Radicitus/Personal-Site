// COMPONENTS
import DynamicBadge from "@/components/Badge/DynamicBadge";
import StaticBadge from "@/components/Badge/StaticBadge";
import ExperienceContainer from "@/components/Experience/ExperienceContainer";
import ProjectsContainer from "@/components/ProjectsContainer";
// HELPERS
import { isMobileDevice } from "@/utils/isMobileDevice";

export default function Home() {
  return (
    <>
      {isMobileDevice() ? (
        <main id="home" className="flex flex-col justify-center">
          <StaticBadge />
          <ExperienceContainer />
          <ProjectsContainer />
        </main>
      ) : (
        <main id="home" className="flex flex-col">
          <div className="h-screen">
            <DynamicBadge />
          </div>
          <ExperienceContainer />
          <ProjectsContainer />
        </main>
      )}
    </>
  );
}
