import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import {schemaTypes} from './sanity/schemas'

const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    title: "AB's portfolio",
    apiVersion: "2023-05-21",
    basePath: "/studio",
    plugins: [deskTool()],
    schema: {
        types: schemaTypes,
      },
})

export default config;


