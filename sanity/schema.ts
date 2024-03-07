import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import lector from './schemas/lector'
import lookingFor from './schemas/lookingFor'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, lector, lookingFor, blockContent],
}
