import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricelist',
  title: 'Ceník',
  type: 'document',
  fields: [
    defineField({
      name: 'labelCz',
      title: 'Nadpis 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'labelEn',
      title: 'Nadpis 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'labelDe',
      title: 'Nadpis 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'labelUa',
      title: 'Nadpis 🇺🇦',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Pořadí',
      type: 'number',
    }),

    defineField({
      name: 'row1Cz',
      title: '1. Řádek 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'row1En',
      title: '1. Řádek 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'row1De',
      title: '1. Řádek 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'row1Ua',
      title: '1. Řádek 🇺🇦',
      type: 'string',
    }),

    defineField({
      name: 'row2Cz',
      title: '2. Řádek 🇨🇿',
      type: 'string',
    }),
    defineField({
      name: 'row2En',
      title: '2. Řádek 🇬🇧',
      type: 'string',
    }),
    defineField({
      name: 'row2De',
      title: '2. Řádek 🇩🇪',
      type: 'string',
    }),
    defineField({
      name: 'row2Ua',
      title: '2. Řádek 🇺🇦',
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
      title: 'labelCz',
      media: 'image',
    },
  },
})
