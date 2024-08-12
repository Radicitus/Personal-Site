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
    // "Writer",
    // "Weight Lifter",
    // "Dreamer"
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
            <div className="">
              <div className="flex-nowrap absolute overflow-hidden top-20 animate-banner-scroll-right text-4xl font-extralight text-white/50">
                {adjectivesList.map((item) => (
                  <span className="z-40">{item} • </span>
                ))}
              </div>
            </div>

          </div>
        </main>
      )}
    </>
  );
}
