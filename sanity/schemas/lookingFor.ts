import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'lookingFor',
  title: 'Právě Hledáme',
  type: 'document',
  fields: [
    defineField({
      name: 'textCz',
      title: '🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'textEn',
      title: '🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'textDe',
      title: '🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'textUa',
      title: '🇺🇦',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'textCz',
      media: 'image',
    },
  },
})
