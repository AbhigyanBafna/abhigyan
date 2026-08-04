import type { APIRoute } from "astro";

export const prerender = false;

// Redirects to WhatsApp so the number never appears in page HTML for scrapers
// to harvest. A human tapping through gets there in one hop.
const PREFILL = "Hey Abhigyan, we met at ...";

export const GET: APIRoute = () => {
  const phone = import.meta.env.CONTACT_PHONE;

  if (!phone) {
    return new Response("WhatsApp link unavailable.", { status: 503 });
  }

  // wa.me wants digits only — no leading + or spaces.
  const digits = phone.replace(/\D/g, "");

  return new Response(null, {
    status: 302,
    headers: {
      Location: `https://wa.me/${digits}?text=${encodeURIComponent(PREFILL)}`,
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
};
