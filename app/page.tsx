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
    "Dreamer"
  ];

  return (
    <>
      {isMobileDevice() ? (
        <main id="home" className="flex w-full justify-center">
          <StaticBadge />
        </main>
      ) : (
        <main id="home" className="flex h-screen w-full justify-center">
          <div className="relative w-full overflow-hidden">
            <DynamicBadge />

            <div className="absolute top-0 z-100">
              <div className="relative">
                {/* Repeat Rows */}
                {adjectivesList.map(() => (
                  <>
                    {/* Left to Right Row */}
                    <div className="flex">
                      <div className="animate-banner-scroll-right whitespace-nowrap py-1">
                        {adjectivesList.map((item) => (
                          <span className="mx-2 text-7xl font-extralight text-white/20">{item} +</span>
                        ))}
                      </div>
                      <div className="animate-banner-scroll-right whitespace-nowrap py-1">
                        {adjectivesList.map((item) => (
                          <span className="mx-2 text-7xl font-extralight text-white/20">{item} +</span>
                        ))}
                      </div>
                    </div>
                    {/* Right to Left Row */}
                    <div className="flex">
                      <div className="animate-banner-scroll-left whitespace-nowrap py-1">
                        {adjectivesList.map((item) => (
                          <span className="mx-2 text-7xl font-extralight text-white/20">{item} +</span>
                        ))}
                      </div>
                      <div className="animate-banner-scroll-left whitespace-nowrap py-1">
                        {adjectivesList.map((item) => (
                          <span className="mx-2 text-7xl font-extralight text-white/20">{item} +</span>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

          </div>
        </main>
      )}
    </>
  );
}
