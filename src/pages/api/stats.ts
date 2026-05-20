import type { APIRoute } from "astro";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: import.meta.env.UPSTASH_REDIS_REST_URL,
  token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
});

export const GET: APIRoute = async ({ request }) => {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  if (!token || token !== import.meta.env.STATS_SECRET) {
    return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 });
  }

  try {
    const [viewKeys, likeKeys] = await Promise.all([
      redis.keys("views:*"),
      redis.keys("likes:*"),
    ]);

    const allKeys = [...new Set([...viewKeys, ...likeKeys])];
    const slugs = allKeys.map((k) => k.replace(/^(views|likes):/, "")).filter((v, i, a) => a.indexOf(v) === i);

    const stats = await Promise.all(
      slugs.map(async (slug) => {
        const [views, likes] = await Promise.all([
          redis.get<number>(`views:${slug}`),
          redis.get<number>(`likes:${slug}`),
        ]);
        return { slug, views: views ?? 0, likes: likes ?? 0 };
      })
    );

    stats.sort((a, b) => b.views - a.views);

    return new Response(JSON.stringify({ stats }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "server error" }), { status: 500 });
  }
};
