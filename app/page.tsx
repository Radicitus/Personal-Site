import Badge from "@/app/components/Scenes/Badge";

export const revalidate = 1200;

export default function Home() {
  return (
    <main className="h-screen bg-foreground">
      <Badge />
    </main>
  );
}
