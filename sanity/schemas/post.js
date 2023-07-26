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
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      hidden: false,
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
      options: {
        dateFormat: 'DD-MM-YYYY',
      }
    }),
    defineField({
      name: 'altPost',
      title: 'Alt-Post',
      type: 'text',
      description: 'A small paragraph about the blog.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'Only 600px width images',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
})
