import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Hex color code for the category',
      validation: Rule => Rule.regex(/^#[0-9A-F]{6}$/i),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      color: 'color',
    },
    prepare(selection) {
      const { color } = selection
      return {
        ...selection,
        media: color ? `🎨 ${color}` : undefined,
      }
    },
  },
})
