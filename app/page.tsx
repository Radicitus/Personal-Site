import DynamicBadge from "@/components/Badge/DynamicBadge";
import { isMobileDevice } from "@/utils/isMobileDevice";
import StaticBadge from "@/components/Badge/StaticBadge";

export const revalidate = 1200;

export default function Home() {
  return (
    <>
      {isMobileDevice() ? (
        <main className="flex w-full justify-center">
          <StaticBadge />
        </main>
      ) : (
        <main className="flex h-screen w-full justify-center">
          <DynamicBadge />
        </main>
      )}
    </>
  );
}
