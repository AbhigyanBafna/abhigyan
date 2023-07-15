// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { socialsQuery } from "@/utils/queries";
import { client } from "../../utils/sanityUtils"

export default async function handler(req, res) {
    const socials = await client.fetch(socialsQuery);

    res.status(200).json({ socials });
};