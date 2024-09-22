import Image from "next/image";

export const revalidate = 3600;

export default async function StaticBadge() {
  return (
    <div className="flex max-w-xl flex-col bg-black pb-32">
      <Image
        src={"/Badge Assets/static-badge.png"}
        alt={"Static badge image"}
        width={2000}
        height={2000}
        priority
      />
      <p className="w-80 place-self-center text-center font-quicksand text-sm opacity-80">
        To see things <strong>really</strong> move, visit this site on desktop.
      </p>
    </div>
  );
}
