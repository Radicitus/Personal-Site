import Image from "next/image";

export default function ExperienceScroller() {
  const experience = [
    {
      company: "Northrop Grumman",
      company_logo: "/ng-logo-white-on-black.png",
      dates: "September 2023 - Present",
      title: "Software Engineer",
    },
    {
      company: "Taco Bell",
      company_logo: "/taco-bell-logo-white-on-black.png",
      dates: "June 2022 - August 2022",
      title: "Fullstack Serverless SWE Intern",
    },
    {
      company: "Intelligent Education",
      company_logo: "/ng-logo-white-on-black.png",
      dates: "Februrary 2021 - August 2021",
      title: "Fullstack SWE",
    },
  ];

  return (
    <div className="mb-32 pt-12" id="experience">
      <h2
        className="h-26 mb-16 mt-8 animate-text select-none bg-gradient-to-r from-red-600 via-violet-500 to-green-500 bg-clip-text text-center
            font-mohave text-8xl font-semibold 
            uppercase tracking-[.35em] text-transparent"
      >
        Experience
      </h2>

      {experience.map((exp) => (
        <div
          className="group collapse min-h-20 cursor-pointer px-8"
          key={exp.company}
          tabIndex={0}
        >
          <div className="collapse-title flex select-none flex-col items-center justify-center p-4">
            <h2 className="text-2xl">{exp.company}</h2>
            <h5 className="text-md font-light opacity-0 transition duration-300 ease-in-out group-hover:opacity-80 group-focus:opacity-80">
              {exp.dates}
            </h5>
          </div>
          <div className="collapse-content">
            <div className="flex flex-col items-center">
              <Image
                className="h-24 w-24"
                src={exp.company_logo}
                alt="NG Logo"
                width={225}
                height={225}
              />
              <h4 className="select-none text-center text-xl">{exp.title}</h4>
              <p className="p-8 pt-10">
                Maecenas eget dui non mi maximus pellentesque at eget nisl. Sed
                vel sodales turpis, non sagittis lorem. Aenean id fringilla
                tortor. Praesent vulputate sit amet nunc malesuada accumsan.
                Etiam fringilla, justo sit amet gravida tincidunt, mi ligula
                bibendum erat, eleifend dignissim eros nunc sed arcu. Nulla arcu
                tortor, rutrum nec efficitur ut, elementum convallis ex. Nam
                nisl massa, tempor blandit scelerisque nec, tempor aliquet leo.
                Cras iaculis fringilla lacus, quis malesuada lorem aliquet a. Ut
                aliquet molestie blandit.
                <br></br>
                <br></br>
                Quisque nec elit quis ligula cursus rhoncus sed a libero. Donec
                aliquam ligula nibh. Sed ut malesuada elit. Sed posuere augue
                est, ut rhoncus ligula egestas et. Morbi vel magna consequat
                felis aliquet tristique. Nam finibus eros eu enim maximus
                interdum. In hac habitasse platea dictumst. Etiam dapibus
                facilisis semper. Donec fermentum cursus ligula, et maximus nunc
                condimentum vel. Etiam accumsan fermentum turpis ut accumsan.
                Mauris dignissim augue libero, porttitor ullamcorper arcu
                egestas vitae.
                <br></br>
                <br></br>
                Morbi libero erat, rhoncus eget suscipit a, convallis ut urna.
                Suspendisse fringilla id risus ut volutpat. Suspendisse
                condimentum magna ipsum, et rutrum ex tincidunt nec. Ut eu
                sapien dictum, eleifend orci sed, rhoncus augue. Praesent vel
                quam diam.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
