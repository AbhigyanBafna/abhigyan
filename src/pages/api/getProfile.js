// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { profileQuery } from "@/utils/queries";
import { sanityClient } from "@/utils/sanityServer";

export default async function handler(req, res) {
    const profile = await sanityClient.fetch(profileQuery);

    res.status(200).json({ profile });
};