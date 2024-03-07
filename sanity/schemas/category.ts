import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Kategorie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Barva',
      type: 'string',
    }),
  ],
})
