import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2024-01-27",
  dataset: "production",
  projectId: "du6qptuy",
  useCdn: true,
  perspective: "published",
});
