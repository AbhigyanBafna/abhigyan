import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = 'production';

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2023-05-21',
  useCdn: false
});

export const urlFor = source => imageUrlBuilder(client).image(source);

export function overlayDrafts(docs) {
  const documents = docs || []
  const overlayed = documents.reduce((map, doc) => {
    if (!doc._id) {
      throw new Error('Ensure that `_id` is included in query projection')
    }

    const isDraft = doc._id.startsWith('drafts.')
    const id = isDraft ? doc._id.slice(7) : doc._id
    return isDraft || !map.has(id) ? map.set(id, doc) : map
  }, new Map())

  return Array.from(overlayed.values())
}