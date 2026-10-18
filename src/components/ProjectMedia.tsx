import Image from "next/image";
import type { Media } from "@/content/site";
import { mediaUrl } from "@/lib/media";

type Props = {
  media: Media;
  /** Tells the browser how wide the media renders, so it picks the smallest
   *  srcset candidate that fits. Get this right per layout. */
  sizes: string;
  /** Only for the above-the-fold image that is the page's LCP element. */
  preload?: boolean;
  className?: string;
};

export function ProjectMedia({ media, sizes, preload, className }: Props) {
  if (media.kind === "video") {
    // preload="none": nothing but the poster downloads until the visitor
    // presses play. A 3 MB video never competes with the page's first paint.
    return (
      <video
        className={className}
        width={media.width}
        height={media.height}
        poster={mediaUrl(media.poster)}
        preload="none"
        controls
        playsInline
        aria-label={media.alt}
      >
        <source src={mediaUrl(media.src)} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      className={className}
      src={mediaUrl(media.src)}
      width={media.width}
      height={media.height}
      alt={media.alt}
      sizes={sizes}
      preload={preload}
    />
  );
}
