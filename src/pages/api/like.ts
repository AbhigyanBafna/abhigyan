import type { APIRoute } from "astro";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: import.meta.env.UPSTASH_REDIS_REST_URL,
  token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { slug, action } = await request.json();
    if (!slug || typeof slug !== "string") {
      return new Response(JSON.stringify({ error: "slug required" }), { status: 400 });
    }
    let likes: number;
    if (action === "unlike") {
      likes = await redis.decr(`likes:${slug}`);
      if (likes < 0) {
        await redis.set(`likes:${slug}`, 0);
        likes = 0;
      }
    } else {
      likes = await redis.incr(`likes:${slug}`);
    }
    return new Response(JSON.stringify({ likes }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "server error" }), { status: 500 });
  }
};

export const GET: APIRoute = async ({ url }) => {
  try {
    const slug = url.searchParams.get("slug");
    if (!slug) {
      return new Response(JSON.stringify({ error: "slug required" }), { status: 400 });
    }
    const likes = (await redis.get<number>(`likes:${slug}`)) ?? 0;
    return new Response(JSON.stringify({ likes }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "server error" }), { status: 500 });
  }
};
