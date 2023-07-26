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
    tags[]->,
  } | order(date desc)
`;

export const postsByTagQuery = (tag) => `
*[_type == "post" && "${tag}" in tags[]->title]
`;

export const postQuery = (slug) => groq`
  *[_type=='post' && slug.current == '${slug}'][0]
  {
    ...,
    tags[]->
  }
`

export const tagsQuery = groq`
*[_type=='tag'].title
`;

export const stringSlugsQuery = groq`
*[_type == 'post'].slug.current
`

export const slugsQuery = groq`
*[_type == 'post'] | order(date desc) {
  "slug": slug.current
} 
`

