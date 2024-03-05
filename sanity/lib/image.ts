import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const imageBuilder = createImageUrlBuilder({
  projectId: "du6qptuy",
  dataset: "production",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).fit("max").format("webp").url();
};
