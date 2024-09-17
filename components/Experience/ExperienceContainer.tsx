import Image from "next/image";
import ExperienceOverview from "@/components/Experience/ExperienceOverview";
import { ExperienceType } from "@/types/experienceType";
import { isMobileDevice } from "@/utils/isMobileDevice";

export const revalidate = 3600;

export default async function ExperienceContainer() {
  // Get experience data from Strapi
  const experienceQueryUrl = "/experiences?populate=*";
  const data = await fetch(process.env.CMS_URL + experienceQueryUrl).then(
    (res) => res.json()
  );
  const experiences: ExperienceType[] = data.data;

  if (isMobileDevice()) {
    return (
      <div className="pt-12" id="experience">
        {/* Experience Header */}
        <h2 className="h-26 mb-24 mt-8 select-none text-center font-mohave text-5xl font-semibold uppercase tracking-[.35em]">
          Experience
        </h2>

        {/* Experience Scroller */}
        <div
          className="bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/strapi-cms/image/upload/v1726021944/small_experience_bg_5df9383d9a.jpg")`,
          }}
        >
          {experiences
            .sort((a, b) =>
              b.attributes.start.localeCompare(a.attributes.start)
            )
            .map((exp) => {
              return (
                <div
                  className="flex flex-col overflow-hidden"
                  key={exp.attributes.company}
                >
                  <div className="flex h-64 items-center justify-center backdrop-blur">
                    <Image
                      className="h-48 w-48"
                      src={exp.attributes.logo.data.attributes.url}
                      alt={exp.attributes.logo.data.attributes.alternativeText}
                      width={225}
                      height={225}
                    />
                  </div>
                  <div className="bg-black">
                    <ExperienceOverview {...exp} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mb-32 pt-12" id="experience">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="h-26 mb-24 mt-8 select-none text-center font-mohave text-8xl font-semibold uppercase tracking-[.35em] text-white">
            Experience
          </h2>

          <div
            className="bg-cover bg-fixed bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/strapi-cms/image/upload/v1726021944/small_experience_bg_5df9383d9a.jpg")`,
            }}
          >
            {experiences
              .sort((a, b) =>
                b.attributes.start.localeCompare(a.attributes.start)
              )
              .map((exp, index) => {
                if (index % 2 !== 1) {
                  return (
                    <div
                      className="flex min-h-150 flex-row overflow-hidden text-white lg:min-h-166"
                      key={exp.attributes.company}
                    >
                      <div className="min-w-96 basis-1/2 bg-black">
                        <ExperienceOverview {...exp} />
                      </div>
                      <div className="flex min-w-96 basis-1/2 items-center justify-center backdrop-blur">
                        <Image
                          className="h-80 w-80"
                          src={exp.attributes.logo.data.attributes.url}
                          alt={
                            exp.attributes.logo.data.attributes.alternativeText
                          }
                          width={225}
                          height={225}
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="flex min-h-150 flex-row overflow-hidden text-white lg:min-h-166"
                      key={exp.attributes.company}
                    >
                      <div className="flex min-w-96 basis-1/2 items-center justify-center backdrop-blur">
                        <Image
                          className="h-80 w-80"
                          src={exp.attributes.logo.data.attributes.url}
                          alt={
                            exp.attributes.logo.data.attributes.alternativeText
                          }
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
}
