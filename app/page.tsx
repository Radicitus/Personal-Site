import Badge from "@/components/Scenes/Badge";
import { isMobileDevice } from "@/utils/isMobileDevice";
import BadgePlaceholder from "@/components/Scenes/BadgePlaceholder";

export const revalidate = 1200;

export default function Home() {
  return (
    <main className="flex h-screen w-full justify-center">
      {isMobileDevice() ? <BadgePlaceholder /> : <Badge />}
    </main>
  );
}
