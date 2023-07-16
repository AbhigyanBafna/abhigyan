// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { projectsQuery } from "@/utils/queries";
import { sanityClient } from "@/utils/sanityServer";

export default async function handler(req, res) {
    const projects = await sanityClient.fetch(projectsQuery);

    res.status(200).json({ projects });
};