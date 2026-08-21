import { Fan, DoorOpen, Tent } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { ListingHeader } from '../components/listing/ListingHeader';
import { ListingOverview } from '../components/listing/ListingOverview';
import { HeroGallery } from '../components/gallery/HeroGallery';
import { getPhotoByGlobalIndex } from '../data/photos';
import type { Photo } from '../types';

import type { ListingHighlight } from '../components/listing/types';

// Sourced from the Playpower reference screenshots. Not fabricated —
// this is the only listing we're building the page around right now.
const LISTING_TITLE = 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10';

// Curated hero gallery selection confirmed against the Playpower
// reference screenshot. This is intentionally NOT a sequential slice
// of the global 1-43 order — the global order stays untouched in
// photos.ts because Photo Tour / Lightbox navigation depends on it.
const HERO_GLOBAL_INDICES = [34, 4, 5, 13, 25];

// All values below are taken directly from the Playpower reference
// screenshots, not invented.
const LISTING_HIGHLIGHTS: ListingHighlight[] = [
  {
    icon: Tent,
    title: 'Outdoor entertainment',
    description: 'The pool and alfresco dining are great for summer trips.',
  },
  {
    icon: Fan,
    title: 'Designed for staying cool',
    description: 'Beat the heat with the A/C and ceiling fan.',
  },
  {
    icon: DoorOpen,
    title: 'Self check-in',
    description: 'You can check in with the building staff.',
  },
];

export function ListingPage() {
  const heroPhotos = HERO_GLOBAL_INDICES
    .map(getPhotoByGlobalIndex)
    .filter((photo): photo is Photo => photo !== undefined);

  // Placeholder — Photo Tour / Lightbox navigation isn't implemented yet.
  const handleShowAllPhotos = () => {
    console.log('Show all photos clicked — Photo Tour not implemented yet.');
  };

  const handleShare = () => {
    console.log('Share clicked — not implemented yet.');
  };

  const handleSave = () => {
    console.log('Save clicked — not implemented yet.');
  };

  // Placeholder — no real translation toggle logic yet.
  const handleShowOriginal = () => {
    console.log('Show original clicked — not implemented yet.');
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

        <HeroGallery photos={heroPhotos} onShowAllPhotos={handleShowAllPhotos} />

        {/*
          Left-column content width only for now — the right-side
          booking sidebar (price, dates, Reserve) isn't built yet.
        */}
        <div className="max-w-[700px]">
          <ListingOverview
            subtitle="Entire serviced apartment in Candolim, India"
            guests={3}
            bedrooms={1}
            beds={1}
            bathrooms={1}
            guestFavouriteDescription="One of the most loved homes on Airbnb, according to guests"
            rating={4.95}
            reviewCount={19}
            hostName="Mirashya Homes"
            hostingDuration="2 years hosting"
            highlights={LISTING_HIGHLIGHTS}
            onShowOriginal={handleShowOriginal}
          />
        </div>
      </main>
    </div>
  );
}
