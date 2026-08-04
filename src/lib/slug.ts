// Slugs come from unauthenticated endpoints, so they are validated before ever
// reaching Redis. This keeps junk keys out of the store and stops arbitrary text
// from being written into a key name.
const SLUG_PATTERN = /^[a-z0-9-]{1,80}$/;

export function isValidSlug(slug: unknown): slug is string {
  return typeof slug === "string" && SLUG_PATTERN.test(slug);
}
