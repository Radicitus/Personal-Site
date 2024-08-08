import DynamicBadge from "@/components/Badge/DynamicBadge";
import { isMobileDevice } from "@/utils/isMobileDevice";
import StaticBadge from "@/components/Badge/StaticBadge";

export const revalidate = 1200;

export default function Home() {
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

            <div className="absolute top-20 text-4xl">
              <span className="z-40">Test1</span>
              <span className="z-40">Test2</span>
              <span className="z-40">Test3</span>
              <span className="z-40">Test4</span>
              <span className="z-40">Test5</span>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
