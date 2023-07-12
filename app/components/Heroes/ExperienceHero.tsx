import Link from "next/link";
import { GiPrism } from "react-icons/gi";
import { SiTacobell } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";

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

        <div className="flex flex-row flex-wrap justify-center gap-4 px-12 pb-4 text-4xl">
          <FaUniversity />
          <GiPrism />
          <SiTacobell />
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
