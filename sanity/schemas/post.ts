import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Příspěvek',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nadpis',
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
      name: 'writtenby',
      title: 'Autor',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Obrázek',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Kategorie',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publikováno',
      type: 'datetime',
    }),
    defineField({
      name: 'minutes',
      title: 'Minut k přečtení',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Obsah',
      type: 'blockContent',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaUrl',
      title: 'CTA Odkaz',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'writtenby.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
