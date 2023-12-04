import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'books',
  title: 'Books',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'authors'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'array',
      of: [{
        type: 'image'
      }],
    }),
    defineField({
        name: 'price',
        title: 'Price',
        type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.title',
      media: 'mainImage[0]',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `ავტორი: ${author}`}
    },
  },
})
