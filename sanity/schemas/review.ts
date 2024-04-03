import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Recenze',
  type: 'document',
  fields: [
    defineField({
      name: 'nameCz',
      title: 'Jméno 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'nameEn',
      title: 'Jméno 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'nameDe',
      title: 'Jméno 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'nameUa',
      title: 'Jméno 🇺🇦',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Obrázek',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'textCz',
      title: 'Text 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'textEn',
      title: 'Text 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'textDe',
      title: 'Text 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'textUa',
      title: 'Text 🇺🇦',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Barva',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'nameCz',
      media: 'image',
    },
  },
})
