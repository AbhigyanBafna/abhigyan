import type { APIRoute } from "astro";
import { Redis } from "@upstash/redis";
import { isValidSlug } from "../../lib/slug";

const redis = new Redis({
  url: import.meta.env.UPSTASH_REDIS_REST_URL,
  token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { slug } = await request.json();
    if (!isValidSlug(slug)) {
      return new Response(JSON.stringify({ error: "invalid slug" }), { status: 400 });
    }
    const views = await redis.incr(`views:${slug}`);
    return new Response(JSON.stringify({ views }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "server error" }), { status: 500 });
  }
};
