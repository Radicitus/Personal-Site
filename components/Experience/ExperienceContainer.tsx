import Image from "next/image";
import ExperienceOverview from "@/components/Experience/ExperienceOverview";
import { ExperienceType } from "@/types/experienceType";
import { NavType } from "@/types/navType";

export const revalidate = 3600;

export default async function ExperienceContainer() {
  // const descr =
  //   "Maecenas eget dui non mi maximus pellentesque at eget nisl. Sed\n" +
  //   "vel sodales turpis, non sagittis lorem. Aenean id fringilla\n" +
  //   "tortor. Praesent vulputate sit amet nunc malesuada accumsan.\n" +
  //   "Etiam fringilla, justo sit amet gravida tincidunt, mi ligula\n" +
  //   "bibendum erat, eleifend dignissim eros nunc sed arcu. Nulla arcu\n" +
  //   "tortor, rutrum nec efficitur ut, elementum convallis ex. Nam\n" +
  //   "nisl massa, tempor blandit scelerisque nec, tempor aliquet leo.\n" +
  //   "Cras iaculis fringilla lacus, quis malesuada lorem aliquet a. Ut\n" +
  //   "aliquet molestie blandit.\n\n" +
  //   "Quisque nec elit quis ligula cursus rhoncus sed a libero. Donec\n" +
  //   "aliquam ligula nibh. Sed ut malesuada elit. Sed posuere augue\n" +
  //   "est, ut rhoncus ligula egestas et. Morbi vel magna consequat\n" +
  //   "felis aliquet tristique. Nam finibus eros eu enim maximus\n" +
  //   "interdum. In hac habitasse platea dictumst. Etiam dapibus\n" +
  //   "facilisis semper. Donec fermentum cursus ligula, et maximus nunc\n" +
  //   "condimentum vel. Etiam accumsan fermentum turpis ut accumsan.\n" +
  //   "Mauris dignissim augue libero, porttitor ullamcorper arcu\n" +
  //   "egestas vitae.\n\n" +
  //   "Morbi libero erat, rhoncus eget suscipit a, convallis ut urna.\n" +
  //   "Suspendisse fringilla id risus ut volutpat. Suspendisse\n" +
  //   "condimentum magna ipsum, et rutrum ex tincidunt nec. Ut eu\n" +
  //   "sapien dictum, eleifend orci sed, rhoncus augue. Praesent vel\n" +
  //   "quam diam.";
  //
  // const takeaways = [
  //   "I did some cool things like sing.",
  //   "I did some cool things like eat.",
  //   "I did some cool things like dance.",
  // ];
  //
  // const experience: ExperienceType[] = [
  //   {
  //     company: "Northrop Grumman",
  //     company_logo: "/ng-logo-white-on-black.png",
  //     dates: "September 2023 - Present",
  //     title: "Software Engineer",
  //     description: descr,
  //     key_contributions: takeaways,
  //     summary:
  //       "At Northrop, I did lots of things that were very cool and awesome. I was the best employee ever! Cool!",
  //   },
  //   {
  //     company: "Taco Bell",
  //     company_logo: "/taco-bell-logo-white-on-black.png",
  //     dates: "June 2022 - August 2022",
  //     title: "Fullstack Serverless SWE Intern",
  //     description: descr,
  //     key_contributions: takeaways,
  //     summary:
  //       "At Taco Bell, I did lots of things that were very cool and awesome. Cool!",
  //   },
  //   {
  //     company: "Intelligent Education",
  //     company_logo: "/ie-logo.png",
  //     dates: "Februrary 2021 - August 2021",
  //     title: "Fullstack SWE",
  //     description: descr,
  //     key_contributions: takeaways,
  //     summary:
  //       "At IE, I did lots of things that were very cool and awesome. Cool!",
  //   },
  // ];

  // Get experience data from Strapi
  const experienceQueryUrl = "/experiences?populate=*";
  const data = await fetch(process.env.CMS_URL + experienceQueryUrl).then(
    (res) => res.json()
  );
  const experiences: ExperienceType[] = data.data;

  return (
    <div className="mb-32 pt-12" id="experience">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="h-26 mb-24 mt-8 select-none text-center font-mohave text-8xl font-semibold uppercase tracking-[.35em] text-white">
          Experience
        </h2>

        <div
          className="bg-cover bg-fixed bg-center bg-no-repeat"
          style={{ backgroundImage: `url("experience-bg.jpg")` }}
        >
          {experiences.map((exp, index) => {
            if (index % 2 !== 1) {
              return (
                <div
                  className="flex h-150 flex-row overflow-hidden text-white lg:h-166"
                  key={exp.attributes.company}
                >
                  <div className="min-w-96 basis-1/2 bg-black">
                    <ExperienceOverview {...exp} />
                  </div>
                  <div className="flex min-w-96 basis-1/2 items-center justify-center backdrop-blur">
                    <Image
                      className="h-64 w-64"
                      src={exp.attributes.logo.data.attributes.url}
                      alt={exp.attributes.logo.data.attributes.alternativeText}
                      width={225}
                      height={225}
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="flex h-150  flex-row overflow-hidden text-white lg:h-166"
                  key={exp.attributes.company}
                >
                  <div className="flex min-w-96 basis-1/2 items-center justify-center backdrop-blur">
                    <Image
                      className="h-64 w-64"
                      src={exp.attributes.logo.data.attributes.url}
                      alt={exp.attributes.logo.data.attributes.alternativeText}
                      width={225}
                      height={225}
                    />
                  </div>
                  <div className="basis-1/2 bg-black">
                    <ExperienceOverview {...exp} />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
