import Image from "next/image"

export default function ExperienceScroller() {

    const experience = [
        { company: "Northrop Grumman", company_logo: "/ng-logo-white-on-black.png", dates: "September 2023 - Present", title: "Software Engineer" },
        { company: "Taco Bell", company_logo: "/taco-bell-logo-white-on-black.png", dates: "June 2022 - August 2022", title: "Fullstack Serverless SWE Intern" },
        { company: "Intelligent Education", company_logo: "/ng-logo-white-on-black.png", dates: "September 2023 - Present", title: "Fullstack SWE" },
    ]

    return (
        <div className="pt-12" id="experience">
            <h2 className="text-9xl m-8 mb-24 text-center font-semibold h-36 animate-text
            bg-gradient-to-r bg-clip-text text-transparent 
            from-red-400 via-violet-500 to-indigo-500">Experience</h2>
            {experience.map((exp) => (
                <div className="flex flex-row ml-8" key={exp.company}>
                    <div className="w-1/2 text-white m-12">
                        <h3 className="text-2xl">{exp.company}</h3>
                        <h5 className="font-light opacity-80 text-md">{exp.dates}</h5>
                        <h4 className="text-xl">{exp.title}</h4>
                        <p className="my-4">
                            Maecenas eget dui non mi maximus pellentesque at eget nisl. Sed vel sodales turpis, non sagittis lorem.
                            Aenean id fringilla tortor. Praesent vulputate sit amet nunc malesuada accumsan.
                            Etiam fringilla, justo sit amet gravida tincidunt, mi ligula bibendum erat, eleifend dignissim eros nunc sed arcu.
                            Nulla arcu tortor, rutrum nec efficitur ut, elementum convallis ex.
                            Nam nisl massa, tempor blandit scelerisque nec, tempor aliquet leo.
                            Cras iaculis fringilla lacus, quis malesuada lorem aliquet a. Ut aliquet molestie blandit.
                            <br></br>
                            <br></br>
                            Quisque nec elit quis ligula cursus rhoncus sed a libero. Donec aliquam ligula nibh. Sed ut malesuada elit.
                            Sed posuere augue est, ut rhoncus ligula egestas et. Morbi vel magna consequat felis aliquet tristique.
                            Nam finibus eros eu enim maximus interdum. In hac habitasse platea dictumst. Etiam dapibus facilisis semper.
                            Donec fermentum cursus ligula, et maximus nunc condimentum vel. Etiam accumsan fermentum turpis ut accumsan.
                            Mauris dignissim augue libero, porttitor ullamcorper arcu egestas vitae.
                            Morbi libero erat, rhoncus eget suscipit a, convallis ut urna. Suspendisse fringilla id risus ut volutpat.
                            Suspendisse condimentum magna ipsum, et rutrum ex tincidunt nec.
                            Ut eu sapien dictum, eleifend orci sed, rhoncus augue. Praesent vel quam diam.
                        </p>

                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <Image className="w-64 h-64 sticky top-20" src={exp.company_logo} alt="NG Logo" width={225} height={225} />
                    </div>
                </div>
            ))}
        </div>
    )
}