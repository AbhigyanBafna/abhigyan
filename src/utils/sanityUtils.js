const { createClient } = require('@sanity/client');
const imageUrlBuilder = require('@sanity/image-url');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = 'production';

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2023-05-21',
  useCdn: false
});

const urlFor = source => imageUrlBuilder(client).image(source);

module.exports = { client, urlFor };
