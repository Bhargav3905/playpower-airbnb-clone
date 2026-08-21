import type { Photo } from "../../types";

interface GalleryImageProps {
  photo: Photo;
  className?: string;
}

/**
 * Single photo tile used inside the hero gallery grid.
 * `className` is expected to carry sizing / rounding for the
 * specific grid position it's placed in.
 */
export function GalleryImage({ photo, className = '' }: GalleryImageProps) {
  return (
    <div className={`group overflow-hidden bg-neutral-100 cursor-pointer ${className}`}>
      <img
        src={photo.src}
        alt={`${photo.category} photo ${photo.categoryIndex}`}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
      />
    </div>
  );
}
