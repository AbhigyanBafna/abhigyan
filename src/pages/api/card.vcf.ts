import type { APIRoute } from "astro";

export const prerender = false;

// vCard 3.0 — the version supported by iOS, Android, Outlook and Gmail alike.
// Phone lives in an env var so it never enters the public repo or the page HTML.
export const GET: APIRoute = () => {
  const phone = import.meta.env.CONTACT_PHONE;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Bafna;Abhigyan;;;",
    "FN:Abhigyan Bafna",
    "TITLE:AI Consultant",
    "EMAIL;TYPE=WORK:abhigyanbafna7@gmail.com",
    ...(phone ? [`TEL;TYPE=CELL:${phone}`] : []),
    "URL:https://abhigyan.tech",
    "END:VCARD",
  ];

  // The spec requires CRLF line endings.
  return new Response(lines.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      // inline, not attachment — iOS then shows a contact-card preview with a
      // save prompt instead of filing it away. Android downloads either way.
      "Content-Disposition": 'inline; filename="abhigyan-bafna.vcf"',
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
