import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "**/index.mdx", base: "./src/content/writing" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string().max(160),
      tags: z.array(
        z.enum(["advice", "creation", "experience", "insight", "technical"]),
      ),
      author: z.string().default("Abhigyan Bafna"),
      cover: image().optional(),
    }),
});

export const collections = { writing };
