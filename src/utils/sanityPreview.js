'use client'

import { definePreview } from 'next-sanity/preview';
import { dataset, projectId } from './sanityUtils';

if(!projectId || !dataset){
    throw new Error(`Missing ProjectID or Dataset`);
}

export const usePreview = definePreview({
    projectId,
    dataset,
});