import type { APIRoute } from "astro";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: import.meta.env.UPSTASH_REDIS_REST_URL,
  token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { slug } = await request.json();
    if (!slug || typeof slug !== "string") {
      return new Response(JSON.stringify({ error: "slug required" }), { status: 400 });
    }
    const views = await redis.incr(`views:${slug}`);
    return new Response(JSON.stringify({ views }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "server error" }), { status: 500 });
  }
};
