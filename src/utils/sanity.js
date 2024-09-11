"use client"

import imageUrlBuilder from '@sanity/image-url';
import { definePreview } from 'next-sanity/preview'
import { sanityConfig } from '@/lib/info'
import { sanityClient } from './sanityServer';
import { getVideoUrl } from './queries';

export const urlFor = source => imageUrlBuilder(sanityClient).image(source).auto('format').fit('max');

export async function urlForVideo(file) {
  try{
    const videoObject = await sanityClient.fetch(getVideoUrl(file));

    if (videoObject[0].videoUrl[0]){
      return videoObject[0].videoUrl[0];
    }else{
      return null;
    }
  } catch (error) {
    console.error("Error fetching video URL:", error);
    return null;
  }
}

export const usePreview = definePreview({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
})