import type { Photo } from "../../types";

interface GalleryImageProps {
  photo: Photo;
  className?: string;
  onClick?: () => void;
}

export function GalleryImage({ photo, className = '', onClick }: GalleryImageProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden bg-neutral-100 cursor-pointer ${className}`}
    >
      <img
        src={photo.src}
        alt={`${photo.category} photo ${photo.categoryIndex}`}
        className="h-full w-full object-cover"
      />
      {/* Subtle hover overlay without scaling/magnifying the image */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/10 pointer-events-none" />
    </div>
  );
}
