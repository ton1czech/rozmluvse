import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'payment',
  title: 'Platební podmínky',
  type: 'document',
  fields: [
    defineField({
      name: 'bodyCs',
      title: 'Obsah 🇨🇿',
      type: 'blockContent',
    }),
    defineField({
      name: 'bodyEn',
      title: 'Obsah 🇬🇧',
      type: 'blockContent',
    }),
    defineField({
      name: 'bodyDe',
      title: 'Obsah 🇩🇪',
      type: 'blockContent',
    }),
    defineField({
      name: 'bodyUa',
      title: 'Obsah 🇺🇦',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'bodyCz',
    },
  },
})
