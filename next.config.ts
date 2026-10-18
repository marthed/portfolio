import type { NextConfig } from "next";

// Allow next/image to optimize images from the media bucket, and nothing else.
const mediaBase = process.env.NEXT_PUBLIC_MEDIA_BASE_URL;
const remotePatterns = mediaBase?.startsWith("http")
  ? [new URL(`${mediaBase.replace(/\/$/, "")}/**`)]
  : [];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // AVIF first: typically ~20% smaller than WebP for photos.
    formats: ["image/avif", "image/webp"],
    remotePatterns,
    // Media files are never edited in place (upload under a new name
    // instead), so optimized variants can be cached for a long time.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
