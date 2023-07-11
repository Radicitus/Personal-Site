import Link from "next/link";

export default function ExperienceHero() {
  return (
    <div className="bg-primary py-24 text-center">
      <div className="pb-6 text-5xl font-bold">GOT EXPERIENCE?</div>

      <div>
        <div className="text-md line mx-8 pb-4 font-bold leading-6">
          From rewriting core infrastructure code for online learning to
          building serverless intermediary caching functions for production
          microservices, I've got experience!
        </div>

        <Link href={"/experience"}>
          <div className="font-bold underline decoration-2 underline-offset-4">
            {"SEE MY EXPERIENCE >>"}
          </div>
        </Link>
      </div>
    </div>
  );
}
