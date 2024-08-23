export type ImageType = {
  attributes: {
    name: string;
    url: string;
    alternativeText: string | "image description";
    width: number;
    height: number;
  };
};
