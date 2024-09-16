import { ExperienceType } from "@/types/experienceType";

export default async function ExperiencePage({ params }: { params: { slug: string } }) {
    // Get the experience data from Strapi
    const experienceQueryUrl = "/experiences?populate=*&filters[slug][$eq]=" + params.slug
    const res = await fetch(process.env.CMS_URL + experienceQueryUrl)
    .then((res) => res.json());
    const experience: ExperienceType = res.data[0]

    return <div className="text-6xl text-white">{experience.attributes.company}</div>
}