import { slugParamsType } from "@/types/slugParamsType";

export default function Project({ params }: slugParamsType) {
  return <h1>Project: {params.slug} </h1>;
}
