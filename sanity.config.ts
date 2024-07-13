/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import {apiVersion, dataset, projectId} from './sanity/env'
import { schema } from "./sanity/schema";

export default defineConfig({
  title: "Amanasia Studio",
  // basePath: '/studio',
  projectId: "du6qptuy",
  dataset: "production",
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool(),
  ],
});
