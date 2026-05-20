export const AUTHOR = "Abhigyan Bafna";
export const SITE_NAME = "abhigyan.tech";

export const TAGS = ["advice", "creation", "experience", "insight", "technical"] as const;
export type Tag = (typeof TAGS)[number];

export function formatPostDate(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
