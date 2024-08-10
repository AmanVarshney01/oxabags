import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2024-08-08",
  dataset: "production",
  projectId: "du6qptuy",
  useCdn: true,
  perspective: "published",
});
