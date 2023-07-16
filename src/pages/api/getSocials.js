// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { socialsQuery } from "@/utils/queries";
import { sanityClient } from "@/utils/sanityServer";

export default async function handler(req, res) {
    const socials = await sanityClient.fetch(socialsQuery);

    res.status(200).json({ socials });
};