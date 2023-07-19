import { pageParamsType } from "@/types/pageParamsType";

export default async function Experience({ params }: pageParamsType) {
  return <h1>Experience: {params.slug} </h1>;
}
