// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { groq } from "next-sanity";
import { client } from "../../utils/sanityUtils"

const query = groq`
    *[_type == "social"]
`

module.exports = async function handler(req, res) {
    const socials = await client.fetch(query);

    res.status(200).json({ socials });
};