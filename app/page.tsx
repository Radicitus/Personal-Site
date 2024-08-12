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
    "Weight Lifter",
  ];

  return (
    <>
      {isMobileDevice() ? (
        <main id="home" className="flex w-full justify-center">
          <StaticBadge />
        </main>
      ) : (
        <main id="home" className="flex h-screen w-full justify-center">
          <div className="relative w-full">
            <DynamicBadge />

            <div className="animate absolute top-20 animate-banner-scroll-left text-4xl">
              {adjectivesList.map((item) => (
                <span className="z-40">{item}</span>
              ))}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
