import { useState, useEffect, useCallback } from "react";
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
import { StickyNav } from "../components/layout/StickyNav";
import { ListingHeader } from "../components/listing/ListingHeader";
import { ListingOverview } from "../components/listing/ListingOverview";
import { PropertyDescription } from "../components/listing/PropertyDescription";
import { SleepingArrangements } from "../components/listing/SleepingArrangements";
import { AmenitiesSection } from "../components/listing/AmenitiesSection";
import { AvailabilityCalendar } from "../components/listing/AvailabilityCalendar";
import { BookingSidebar } from "../components/listing/BookingSidebar";
import { ReviewsSection } from "../components/listing/ReviewsSection";
import { LocationSection } from "../components/listing/LocationSection";
import { HostSection } from "../components/listing/HostSection";
import { ThingsToKnow } from "../components/listing/ThingsToKnow";
import { NearbyStays } from "../components/listing/NearbyStays";
import { HeroGallery } from "../components/gallery/HeroGallery";
import { PhotoTour } from "../components/photo-tour/PhotoTour";
import { Lightbox } from "../components/lightbox/Lightbox";
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

const NEARBY_STAY_CONFIG = [
  { globalIndex: 1, title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: "4.91" },
  { globalIndex: 4, title: "NAGQAB - 1bhk with private pool", price: "₹42,218", rating: "4.95" },
  { globalIndex: 6, title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,506", rating: "4.94" },
  { globalIndex: 8, title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96" },
  { globalIndex: 10, title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95" },
  { globalIndex: 13, title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96" },
  { globalIndex: 14, title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95" },
  { globalIndex: 34, title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool", price: "₹45,648", rating: "5.0" },
  { globalIndex: 36, title: "Luxury Apt | Private Pool | 6 Mins from Beach", price: "₹48,786", rating: "4.93" },
  { globalIndex: 15, title: "Serendipity Cottage - Calm Stay in Calangute-Baga.", price: "₹22,824", rating: "4.92" },
];

export function ListingPage() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [tourInitialPhotoIndex, setTourInitialPhotoIndex] = useState<number | undefined>(undefined);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync state with browser URL search params for back/forward navigation
  useEffect(() => {
    const syncStateFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const modal = params.get("modal");
      const photo = params.get("photo");

      if (modal === "PHOTO_TOUR_SCROLLABLE") {
        setIsPhotoTourOpen(true);
        if (photo) {
          const pIdx = parseInt(photo, 10);
          if (!isNaN(pIdx)) setLightboxIndex(pIdx);
        } else {
          setLightboxIndex(null);
        }
      } else {
        setIsPhotoTourOpen(false);
        setLightboxIndex(null);
      }
    };

    syncStateFromUrl();
    window.addEventListener("popstate", syncStateFromUrl);
    return () => window.removeEventListener("popstate", syncStateFromUrl);
  }, []);

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

  const nearbyStays = NEARBY_STAY_CONFIG.map((stay) => {
    const photo = getPhotoByGlobalIndex(stay.globalIndex);
    return photo ? { ...stay, photo } : undefined;
  }).filter((stay): stay is (typeof NEARBY_STAY_CONFIG)[number] & { photo: Photo } => stay !== undefined);

  // Photo Tour & Lightbox actions
  const handleShowAllPhotos = useCallback(() => {
    setTourInitialPhotoIndex(1);
    setIsPhotoTourOpen(true);
    window.history.pushState({}, "", "?modal=PHOTO_TOUR_SCROLLABLE");
  }, []);

  const handleHeroPhotoClick = useCallback((globalIndex: number) => {
    setTourInitialPhotoIndex(globalIndex);
    setIsPhotoTourOpen(true);
    window.history.pushState({}, "", "?modal=PHOTO_TOUR_SCROLLABLE");
  }, []);

  const handleTourPhotoClick = useCallback((globalIndex: number) => {
    setLightboxIndex(globalIndex);
    window.history.pushState({}, "", `?modal=PHOTO_TOUR_SCROLLABLE&photo=${globalIndex}`);
  }, []);

  const handleLightboxIndexChange = useCallback((newIndex: number) => {
    setLightboxIndex(newIndex);
    window.history.replaceState({}, "", `?modal=PHOTO_TOUR_SCROLLABLE&photo=${newIndex}`);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
    window.history.pushState({}, "", "?modal=PHOTO_TOUR_SCROLLABLE");
  }, []);

  const handleClosePhotoTour = useCallback(() => {
    setIsPhotoTourOpen(false);
    setLightboxIndex(null);
    setTourInitialPhotoIndex(undefined);
    window.history.pushState({}, "", window.location.pathname);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: LISTING_TITLE, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Listing link copied to clipboard!");
    }
  };

  const handleSave = () => {
    console.log("Save clicked");
  };

  const handleShowOriginal = () => {
    console.log("Show original clicked");
  };

  const handleShowMoreDescription = () => {
    console.log("Show more clicked");
  };

  const handleShowAllAmenities = () => {
    console.log("Show all amenities clicked");
  };

  // If Photo Tour is open, render Photo Tour full page (+ Lightbox if active)
  if (isPhotoTourOpen) {
    return (
      <>
        <PhotoTour
          initialGlobalIndex={tourInitialPhotoIndex}
          onClose={handleClosePhotoTour}
          onPhotoClick={handleTourPhotoClick}
          onShare={handleShare}
          onSave={handleSave}
        />
        {lightboxIndex !== null && (
          <Lightbox
            key={lightboxIndex}
            initialGlobalIndex={lightboxIndex}
            onClose={handleCloseLightbox}
            onIndexChange={handleLightboxIndexChange}
            onShare={handleShare}
            onSave={handleSave}
          />
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <StickyNav />
      <Navbar />

      <main className="mx-auto max-w-[1120px] px-6 py-6 lg:px-8">
        <div id="photos">
          <ListingHeader
            title={LISTING_TITLE}
            onShare={handleShare}
            onSave={handleSave}
          />

          <HeroGallery
            photos={heroPhotos}
            onShowAllPhotos={handleShowAllPhotos}
            onPhotoClick={handleHeroPhotoClick}
          />
        </div>

        {/* 2-Column Content Section: Overview & Sticky Sidebar */}
        <div className="mt-8 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_370px]">
          <div className="min-w-0">
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

            <div id="amenities" className="border-t border-neutral-200 scroll-mt-24">
              <AmenitiesSection
                amenities={VISIBLE_AMENITIES}
                totalCount={TOTAL_AMENITIES_COUNT}
                onShowAll={handleShowAllAmenities}
              />
            </div>

            <div className="border-t border-neutral-200">
              <AvailabilityCalendar />
            </div>
          </div>

          <BookingSidebar />
        </div>

        {/* Full-width Sections Below 2-Column Content */}
        <div id="reviews" className="scroll-mt-24">
          <ReviewsSection />
        </div>

        <div id="location" className="scroll-mt-24">
          <LocationSection />
        </div>

        <HostSection />

        <ThingsToKnow />

        <NearbyStays stays={nearbyStays} />
      </main>
    </div>
  );
}
