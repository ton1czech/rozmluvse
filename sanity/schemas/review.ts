import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Recenze',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
