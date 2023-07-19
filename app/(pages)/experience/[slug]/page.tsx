import { pageParamsType } from "@/types/pageParamsType";

export default function Experience({ params }: pageParamsType) {
  return <h1>Experience: {params.slug} </h1>;
}
