export type ImageType = {
  attributes: {
    name: string;
    url: string;
    alternativeText: string | "some description";
    width: number;
    height: number;
  };
};
