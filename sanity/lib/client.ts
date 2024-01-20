import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2024-01-20",
  dataset: "production",
  projectId: "du6qptuy",
  useCdn: true,
  perspective: "published",
  token:
    process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_STUDIO_TOKEN,
  ignoreBrowserTokenWarning: true,
});
