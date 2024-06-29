import Badge from "@/app/components/Scenes/Badge";
import { isMobileDevice } from "@/utils/isMobileDevice";

export const revalidate = 1200;

export default function Home() {
  return (
    <main className="h-screen bg-foreground">
      {isMobileDevice() ? <p className="text-white">Mobile</p> : <Badge />}
    </main>
  );
}
