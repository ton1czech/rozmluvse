import { groq } from 'next-sanity'

export const LectorsQuery = groq`
    *[_type=='lector'] {
        ...,
    } | order(order asc)
`

export const LectorsPathsQuery = groq`*[_type == "lector" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }
`

export const LectorQuery = groq`*[_type == "lector" && slug.current == $slug][0]{
    ...
  }
`
