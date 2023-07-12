import Link from "next/link";

export default function ContactMeHero() {
  return (
    <div className="bg-secondary py-24 text-center">
      <div className="pb-6 text-5xl font-bold">CONTACT ME</div>

      <div>
        <div className="text-md line mx-8 pb-4 font-bold leading-6">
          Trying to reach me? Don't worry, I got a page for that!
        </div>

        <Link href={"/contact"}>
          <div className="font-bold underline decoration-2 underline-offset-4">
            {"CLICK HERE >>"}
          </div>
        </Link>
      </div>
    </div>
  );
}
