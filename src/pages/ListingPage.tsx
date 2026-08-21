
import { HeroGallery } from "../components/gallery/HeroGallery";
import { Navbar } from "../components/layout/Navbar";
import { ListingHeader } from "../components/listing/ListingHeader";
import { photos } from "../data/photos";

// Sourced from the Playpower reference screenshots. Not fabricated —
// this is the only listing we're building the page around right now.
const LISTING_TITLE = "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10";

export function ListingPage() {
  const heroPhotos = photos.slice(0, 5);

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

      <main className="mx-auto max-w-[1120px] px-6 py-6 lg:px-10">
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
