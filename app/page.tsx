// COMPONENTS
import DynamicBadge from "@/components/Badge/DynamicBadge";
import StaticBadge from "@/components/Badge/StaticBadge";
import ExperienceScroller from "@/components/ExperienceScroller"
// HELPERS
import { isMobileDevice } from "@/utils/isMobileDevice";

export default function Home() {

  return (
    <>
      {isMobileDevice() ? (
        <main id="home" className="flex justify-center">
          <StaticBadge />
        </main>
      ) : (
        <main id="home" className="flex flex-col justify-center">
          <div className="h-screen"><DynamicBadge /></div>
          <ExperienceScroller />
        </main>
      )}
    </>
  );
}
