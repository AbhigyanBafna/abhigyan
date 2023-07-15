import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'profession',
      title: 'Profession',
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
        name: 'homeText',
        title: 'Homepage Info.',
        type: 'text',
    }),
    defineField({
      name: 'about1',
      title: 'About Paragraph 1',
      type: 'text',
    }),
    defineField({
      name: 'about2',
      title: 'About Paragraph 2',
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