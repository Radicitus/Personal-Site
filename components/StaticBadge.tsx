import Image from "next/image";

export const revalidate = 60;

export default async function StaticBadge() {
  return (
    <div className="mb-4 max-w-xl">
      <Image
        src={"/static-badge.png"}
        alt={"Static badge image"}
        width={2000}
        height={2000}
        priority
      />
    </div>
  );
}
