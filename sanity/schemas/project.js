import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Name of the project',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      description: 'Landscape Images Better.',
      options: {
        hotspot: true,
      }
    }),
    defineField({
        name: 'technologies',
        title: 'Technologies Used',
        type: 'array',
        of: [{ type: "reference", to: {type: 'techStack'} }]
      }),
    defineField({
      name: 'bio',
      title: 'Project Description',
      type: 'text',
    }),
    defineField({
      name: 'url',
      title: 'LinkToBuild',
      type: 'url',
    }),
  ],
})
