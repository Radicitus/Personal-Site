import { slugParamsType } from "@/types/slugParamsType";

export default function Experience({ params }: slugParamsType) {
  return <h1>Experience: {params.slug} </h1>;
}
