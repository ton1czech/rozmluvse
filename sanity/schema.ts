import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import lector from './schemas/lector'
import lookingFor from './schemas/lookingFor'
import author from './schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, lector, author, lookingFor, blockContent],
}
