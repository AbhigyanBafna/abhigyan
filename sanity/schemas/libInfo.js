import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'libInfo',
  title: 'Info Library',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'profilePic',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
        name: 'bio',
        title: 'Homepage Bio',
        type: 'text',
    }),
    defineField({
      name: 'about1',
      title: 'About Info 1',
      description: 'About Info Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'about2',
      title: 'About Info 2',
      description: 'About Info Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'resume',
      title: 'Resume Link',
      type: 'url',
    })

  ],
})