import { groq } from "next-sanity";

export const profileQuery = groq`
    *[_type == "profile"][0]
`;

export const projectsQuery = groq`
    *[_type == "project"]{
    ...,
    technologies[]->
    }
`;

export const socialsQuery = groq`
    *[_type == "social"]
`

export const postsQuery = groq`
  *[_type=='post'] {
    ...,
    categories[]->,
  } | order(_createdAt desc)
`;