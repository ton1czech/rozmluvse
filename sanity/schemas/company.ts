import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'company',
  title: 'Firma',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název',
      type: 'string',
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
    defineField({
      name: 'link',
      title: 'Odkaz',
      type: 'string',
    }),
    defineField({
      name: 'linkPreview',
      title: 'Odkaz Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
