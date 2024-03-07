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
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: { type: 'lector' },
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
      name: 'body',
      title: 'Obsah',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
