const { createClient } = require('@sanity/client');
const imageUrlBuilder = require('@sanity/image-url');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-05-21',
});

const urlFor = source => imageUrlBuilder(client).image(source);

module.exports = { client, urlFor };
