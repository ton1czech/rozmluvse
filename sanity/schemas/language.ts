import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'language',
  title: 'Jazyk',
  type: 'document',
  fields: [
    defineField({
      name: 'titleCz',
      title: 'Název 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'titleEn',
      title: 'Název 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'titleDe',
      title: 'Název 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'titleUa',
      title: 'Název 🇺🇦',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Pořadí',
      type: 'number',
    }),
    defineField({
      name: 'disabled',
      title: 'Neaktivní',
      type: 'boolean',
    }),
    defineField({
      name: 'color',
      title: 'Barva',
      type: 'string',
    }),
  ],
})
