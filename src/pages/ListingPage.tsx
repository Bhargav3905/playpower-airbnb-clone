import { Navbar } from "../components/layout/Navbar";
import { ListingHeader } from "../components/listing/ListingHeader";
import { HeroGallery } from "../components/gallery/HeroGallery";
import { getPhotoByGlobalIndex } from "../data/photos";
import type { Photo } from "../types";

// Sourced from the Playpower reference screenshots. Not fabricated —
// this is the only listing we're building the page around right now.
const LISTING_TITLE = "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10";

// Curated hero gallery selection confirmed against the Playpower
// reference screenshot. This is intentionally NOT a sequential slice
// of the global 1-43 order — the global order stays untouched in
// photos.ts because Photo Tour / Lightbox navigation depends on it.
const HERO_GLOBAL_INDICES = [34, 4, 5, 13, 25];

export function ListingPage() {
  const heroPhotos = HERO_GLOBAL_INDICES.map(getPhotoByGlobalIndex).filter(
    (photo): photo is Photo => photo !== undefined,
  );

  // Placeholder — Photo Tour / Lightbox navigation isn't implemented yet.
  const handleShowAllPhotos = () => {
    console.log("Show all photos clicked — Photo Tour not implemented yet.");
  };

  const handleShare = () => {
    console.log("Share clicked — not implemented yet.");
  };

  const handleSave = () => {
    console.log("Save clicked — not implemented yet.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-[1400px] px-6 py-6 lg:px-10">
        <ListingHeader
          title={LISTING_TITLE}
          onShare={handleShare}
          onSave={handleSave}
        />

        <HeroGallery
          photos={heroPhotos}
          onShowAllPhotos={handleShowAllPhotos}
        />
      </main>
    </div>
  );
}
