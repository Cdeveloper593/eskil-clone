/* Plain (server-safe) blog formatting helpers. These live outside the
   client BlogList component module so Server Components can call them. */
export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function stripExcerpt(excerpt: string): string {
  return excerpt
    .replace(/<[^>]+>/g, " ")
    .replace(/&hellip;/g, "…")
    .replace(/&amp;/g, "&")
    .replace(/&rsquo;/g, "’")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/\s+/g, " ")
    .trim();
}
