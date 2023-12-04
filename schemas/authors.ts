import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'authors',
  title: 'Authors',
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
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string'
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
