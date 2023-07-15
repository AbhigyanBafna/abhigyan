'use client'

import { definePreview } from 'next-sanity/preview';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = 'production';

// function onPublicAccessOnly() {
//     throw new Error(`Unable to load preview as not logged in`);
// }

if(!projectId || !dataset){
    throw new Error(`Missing ProjectID or Dataset`);
}

export const usePreview = definePreview({
    projectId,
    dataset,
});