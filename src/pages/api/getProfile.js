// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { profileQuery } from "@/utils/queries";
import { client } from "../../utils/sanityUtils"

export default async function handler(req, res) {
    const profile = await client.fetch(profileQuery);

    res.status(200).json({ profile });
};