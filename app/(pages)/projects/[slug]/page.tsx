import { pageParamsType } from "@/types/pageParamsType";

export default function Project({ params }: pageParamsType) {
  return <h1>Project: {params.slug} </h1>;
}
