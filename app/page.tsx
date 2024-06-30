import DynamicBadge from "@/components/Scenes/DynamicBadge";
import { isMobileDevice } from "@/utils/isMobileDevice";
import StaticBadge from "@/components/Scenes/StaticBadge";

export const revalidate = 1200;

export default function Home() {
  return (
    <main className="flex h-screen w-full justify-center">
      {isMobileDevice() ? <StaticBadge /> : <DynamicBadge />}
    </main>
  );
}
