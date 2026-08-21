import { Grid3x3 } from "lucide-react";
import { GalleryImage } from "./GalleryImage";
import type { Photo } from "../../types";

interface HeroGalleryProps {
  photos: Photo[];
  onShowAllPhotos: () => void;
  onPhotoClick?: (globalIndex: number) => void;
}

export function HeroGallery({ photos, onShowAllPhotos, onPhotoClick }: HeroGalleryProps) {
  const [main, ...rest] = photos.slice(0, 5);

  const getTileCornerClass = (index: number) => {
    if (index === 1) return "rounded-tr-xl";
    if (index === 3) return "rounded-br-xl";
    return "";
  };

  return (
    <div className="relative grid h-[360px] sm:h-[420px] md:h-[460px] lg:h-[480px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl">
      {main && (
        <div className="col-span-2 row-span-2 overflow-hidden rounded-l-xl">
          <GalleryImage
            photo={main}
            className="h-full w-full"
            onClick={() => onPhotoClick?.(main.globalIndex)}
          />
        </div>
      )}

      {rest.map((photo, index) => (
        <div
          key={photo.id}
          className={`col-span-1 row-span-1 overflow-hidden ${getTileCornerClass(index)}`}
        >
          <GalleryImage
            photo={photo}
            className="h-full w-full"
            onClick={() => onPhotoClick?.(photo.globalIndex)}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={onShowAllPhotos}
        className="absolute bottom-5 right-5 flex items-center gap-2 rounded-lg border border-neutral-900 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-md transition-all hover:bg-neutral-100 active:scale-95 cursor-pointer"
      >
        <Grid3x3 size={16} />
        Show all photos
      </button>
    </div>
  );
}
