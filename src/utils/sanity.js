"use client"

import imageUrlBuilder from '@sanity/image-url';
import { definePreview } from 'next-sanity/preview'
import { sanityConfig } from '@/lib/info'
import { sanityClient } from './sanityServer';

export const urlFor = source => imageUrlBuilder(sanityClient).image(source).auto('format').fit('max');

export const usePreview = definePreview({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
})