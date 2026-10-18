// Media lives behind one base URL. Unset, files come from /public/media, which
// is fine for development. In production, point it at the bucket, e.g.
//   NEXT_PUBLIC_MEDIA_BASE_URL=https://<project>.supabase.co/storage/v1/object/public/media
// and the same relative paths resolve there. next.config.ts reads the same
// variable to allow that host for image optimization.

const base = (process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? "/media").replace(
  /\/$/,
  "",
);

export function mediaUrl(path: string): string {
  return `${base}/${path.replace(/^\//, "")}`;
}
