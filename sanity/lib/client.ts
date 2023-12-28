import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skR3mWxqulZd3Ut5TuT9NXX7a2NtvUbJ5RV7pqwefG8hYJPPElxAXoXOwgmgjCv8pHIC6ZUTWCy6WunZuSiikZOiphP9tPapQY0UPu3JmzvDo1AGG9Gu3FhqH857zOU88zDjBMv6MmGfqaSBg41kVCcD2jsWL6IbKZyjG0mNLZNp1G5tDsRY",
})
