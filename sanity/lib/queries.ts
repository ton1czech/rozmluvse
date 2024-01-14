import { groq } from 'next-sanity'

export const LectorsQuery = groq`
    *[_type=='lector'] {
        ...,
    }
`
