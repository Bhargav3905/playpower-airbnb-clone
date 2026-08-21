import { LayoutGrid } from 'lucide-react';
import { GalleryImage } from './GalleryImage';
import type { Photo } from '../../types';

interface HeroGalleryProps {
  photos: Photo[];
  onShowAllPhotos: () => void;
}

/**
 * Airbnb-style hero gallery: one large image on the left and a
 * 2x2 grid of smaller images on the right, with a "Show all photos"
 * button overlaid on the bottom-right tile.
 *
 * Expects exactly 5 photos (in display order). Extra photos are
 * ignored here — the full set lives behind "Show all photos"
 * (Photo Tour / Lightbox, not implemented yet).
 */
export function HeroGallery({ photos, onShowAllPhotos }: HeroGalleryProps) {
  const [main, ...rest] = photos.slice(0, 5);

  return (
    <div className="relative grid h-[480px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl">
      {main && (
        <GalleryImage photo={main} className="col-span-2 row-span-2" />
      )}

      {rest.map((photo) => (
        <GalleryImage key={photo.id} photo={photo} className="col-span-1 row-span-1" />
      ))}

      <button
        type="button"
        onClick={onShowAllPhotos}
        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-md hover:bg-neutral-50 transition-colors"
      >
        <LayoutGrid size={16} />
        Show all photos
      </button>
    </div>
  );
}
