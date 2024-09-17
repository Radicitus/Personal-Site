// COMPONENTS
import DynamicBadge from "@/components/Badge/DynamicBadge";
import StaticBadge from "@/components/Badge/StaticBadge";
import ExperienceContainer from "@/components/Experience/ExperienceContainer";
// HELPERS
import { isMobileDevice } from "@/utils/isMobileDevice";

export default function Home() {
  return (
    <>
      {isMobileDevice() ? (
        <main id="home" className="flex flex-col justify-center">
          <StaticBadge />
          <ExperienceContainer />
        </main>
      ) : (
        <main id="home" className="flex flex-col">
          <div className="h-screen">
            <DynamicBadge />
          </div>
          <ExperienceContainer />
        </main>
      )}
    </>
  );
}
