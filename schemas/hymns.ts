import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hymns',
  title: 'Hymns',
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
        name: 'number',
        title: 'Number',
        type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'notes',
        title: 'Notes',
        type: 'array',
        of: [{
          type: 'image'
        }],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
