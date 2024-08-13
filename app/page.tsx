import DynamicBadge from "@/components/Badge/DynamicBadge";
import { isMobileDevice } from "@/utils/isMobileDevice";
import StaticBadge from "@/components/Badge/StaticBadge";

export const revalidate = 1200;

export default function Home() {

  const adjectivesList = [
    "Coder",
    "Surfer",
    "Singer",
    "Runner",
    "Writer",
    "Lifter",
    "Dreamer",
    "Gamer",
    "Raver",
    "Foodie",
    "Traveler",
    "Designer",
    "Brother"
  ];

  return (
    <>
      {isMobileDevice() ? (
        <main id="home" className="flex w-full justify-center">
          <StaticBadge />
        </main>
      ) : (
        <main id="home" className="flex h-screen w-full justify-center">
          <DynamicBadge />
        </main>
      )}
    </>
  );
}
