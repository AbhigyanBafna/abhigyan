import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social Links',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Social media Platform',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],
})
