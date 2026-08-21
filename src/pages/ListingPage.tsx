import {
  Fan,
  DoorOpen,
  Tent,
  UtensilsCrossed,
  Wifi,
  Laptop,
  CarFront,
  Waves,
  Bath,
  PawPrint,
  Camera,
  Radio,
  AlarmSmoke,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { ListingHeader } from "../components/listing/ListingHeader";
import { ListingOverview } from "../components/listing/ListingOverview";
import { PropertyDescription } from "../components/listing/PropertyDescription";
import { SleepingArrangements } from "../components/listing/SleepingArrangements";
import { AmenitiesSection } from "../components/listing/AmenitiesSection";
import { HeroGallery } from "../components/gallery/HeroGallery";
import { getPhotoByGlobalIndex } from "../data/photos";
import type { Photo } from "../types";

import type { ListingHighlight, Amenity } from "../components/listing/types";

// Sourced from the Playpower reference screenshots. Not fabricated —
// this is the only listing we're building the page around right now.
const LISTING_TITLE = "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10";

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
    title: "Outdoor entertainment",
    description: "The pool and alfresco dining are great for summer trips.",
  },
  {
    icon: Fan,
    title: "Designed for staying cool",
    description: "Beat the heat with the A/C and ceiling fan.",
  },
  {
    icon: DoorOpen,
    title: "Self check-in",
    description: "You can check in with the building staff.",
  },
];

// Description text taken verbatim from the Playpower reference
// screenshot, truncated exactly where the reference cuts it off.
// The remainder isn't visible in the reference, so it isn't invented.
const LISTING_DESCRIPTION =
  "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖, popular cafés, restaurants, and nightlife 🌃, it's";

// Sourced from the reference "Where you'll sleep" screenshot. Images
// are pulled from the existing photo manifest by global index — the
// bedroom photo matches globalIndex 13, the living room photo matches
// globalIndex 1 (same photos already used elsewhere on the page).
const SLEEPING_ROOMS_CONFIG = [
  { globalIndex: 13, label: "Bedroom", description: "1 double bed" },
  { globalIndex: 1, label: "Living room", description: "1 sofa" },
];

// Visible amenity subset from the reference screenshot. Available
// amenities first, then the two unavailable ones (Carbon monoxide
// alarm, Smoke alarm), matching the reference's ordering and styling.
const VISIBLE_AMENITIES: Amenity[] = [
  { icon: UtensilsCrossed, label: "Kitchen", available: true },
  { icon: Wifi, label: "Wifi", available: true },
  { icon: Laptop, label: "Dedicated workspace", available: true },
  { icon: CarFront, label: "Free parking on premises", available: true },
  { icon: Waves, label: "Pool", available: true },
  { icon: Bath, label: "Hot tub", available: true },
  { icon: PawPrint, label: "Pets allowed", available: true },
  {
    icon: Camera,
    label: "Exterior security cameras on property",
    available: true,
  },
  { icon: Radio, label: "Carbon monoxide alarm", available: false },
  { icon: AlarmSmoke, label: "Smoke alarm", available: false },
];

const TOTAL_AMENITIES_COUNT = 50;

export function ListingPage() {
  const heroPhotos = HERO_GLOBAL_INDICES.map(getPhotoByGlobalIndex).filter(
    (photo): photo is Photo => photo !== undefined,
  );

  const sleepingRooms = SLEEPING_ROOMS_CONFIG.map(
    ({ globalIndex, label, description }) => {
      const photo = getPhotoByGlobalIndex(globalIndex);
      return photo ? { photo, label, description } : undefined;
    },
  ).filter(
    (room): room is { photo: Photo; label: string; description: string } =>
      room !== undefined,
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

  // Placeholder — no real translation toggle logic yet.
  const handleShowOriginal = () => {
    console.log("Show original clicked — not implemented yet.");
  };

  // Placeholder — no real expand/collapse logic yet (full copy not available).
  const handleShowMoreDescription = () => {
    console.log("Show more clicked — not implemented yet.");
  };

  // Placeholder — full amenities list/modal not implemented yet.
  const handleShowAllAmenities = () => {
    console.log("Show all amenities clicked — not implemented yet.");
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

          <PropertyDescription
            text={LISTING_DESCRIPTION}
            onShowMore={handleShowMoreDescription}
          />

          <div className="border-t border-neutral-200" />

          <SleepingArrangements rooms={sleepingRooms} />

          <div className="border-t border-neutral-200" />

          <AmenitiesSection
            amenities={VISIBLE_AMENITIES}
            totalCount={TOTAL_AMENITIES_COUNT}
            onShowAll={handleShowAllAmenities}
          />
        </div>
      </main>
    </div>
  );
}
