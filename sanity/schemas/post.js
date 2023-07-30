import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      hidden: false,
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),
    defineField({
      name: 'date',
      title: 'Date Created',
      type: 'date',
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY',
      }
    }),
    defineField({
      name: 'altPost',
      title: 'Alt Post',
      type: 'text',
      description: 'A summary about the post.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'Best suited to 600 X 384 pixel images.',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),
  ],
})
