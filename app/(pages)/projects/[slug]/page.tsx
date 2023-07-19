import { paramsType } from "@/types/paramsType";

export default function Project({ params }: paramsType) {
  return <h1>Project: {params.slug} </h1>;
}
