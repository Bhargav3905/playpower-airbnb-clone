import { useEffect } from "react";
import { ChevronLeft, Heart, Share } from "lucide-react";
import { categoryOrder, photosByCategory } from "../../data/photos";
import type { Photo, PhotoCategory } from "../../types";

interface PhotoTourProps {
  initialGlobalIndex?: number;
  onClose: () => void;
  onPhotoClick: (globalIndex: number) => void;
  onShare?: () => void;
  onSave?: () => void;
}

const categoryDescriptions: Record<PhotoCategory, string> = {
  "Living Room 1": "Sofa · Air conditioning · Ceiling fan · TV",
  "Living Room 2": "Ceiling fan · Hot tub",
  "Full Kitchen":
    "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
  Bedroom:
    "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
  "Full Bathroom": "Hairdryer · Hot water · Shampoo · Shower gel",
  Gym: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
  Exterior: "",
  Pool: "Pool",
  "Additional Photos": "",
};

const categoryDisplayNames: Record<PhotoCategory, string> = {
  "Living Room 1": "Living room 1",
  "Living Room 2": "Living room 2",
  "Full Kitchen": "Full kitchen",
  Bedroom: "Bedroom",
  "Full Bathroom": "Full bathroom",
  Gym: "Gym",
  Exterior: "Exterior",
  Pool: "Pool",
  "Additional Photos": "Additional photos",
};

// Explicit photo grid patterns requested for each section:
// '1' = full-width image
// '2' = row of 2 smaller images matching the full-width span
const categoryPatterns: Record<PhotoCategory, ("1" | "2")[]> = {
  "Living Room 1": ["1", "2"],
  "Living Room 2": ["1", "2", "1", "2", "1"],
  "Full Kitchen": ["2"],
  Bedroom: ["1", "2", "1", "2"],
  "Full Bathroom": ["1"],
  Gym: ["1", "2", "2"],
  Exterior: ["1", "2", "1", "2"],
  Pool: ["1", "2"],
  "Additional Photos": ["1", "2", "1", "2", "1", "2", "1"],
};

export function PhotoTour({
  initialGlobalIndex,
  onClose,
  onPhotoClick,
  onShare,
  onSave,
}: PhotoTourProps) {
  // Smooth scroll to initial photo or category on mount
  useEffect(() => {
    if (initialGlobalIndex) {
      const timer = setTimeout(() => {
        const el = document.getElementById(`photo-${initialGlobalIndex}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [initialGlobalIndex]);

  const scrollToCategory = (category: PhotoCategory) => {
    const slug = category.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(`cat-${slug}`);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  /**
   * Renders photos for a category following its exact pattern ('1' or '2').
   * Image sizes and proportions match the compact reference layout.
   */
  const renderCategoryGallery = (category: PhotoCategory, photos: Photo[]) => {
    const pattern = categoryPatterns[category] || ["1", "2"];
    const elements: React.ReactNode[] = [];
    let photoIndex = 0;

    pattern.forEach((type, patternIndex) => {
      if (photoIndex >= photos.length) return;

      if (type === "1") {
        const photo = photos[photoIndex];
        photoIndex += 1;

        elements.push(
          <div
            key={`pattern-1-${photo.id}-${patternIndex}`}
            id={`photo-${photo.globalIndex}`}
            onClick={() => onPhotoClick(photo.globalIndex)}
            className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer aspect-[16/10.5] shadow-[0_1px_4px_rgba(0,0,0,0.06)] transition-all duration-150 hover:shadow-md hover:opacity-[0.98]"
          >
            <img
              src={photo.src}
              alt={`${photo.category} photo ${photo.categoryIndex}`}
              className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.01]"
            />
          </div>
        );
      } else if (type === "2") {
        const photoA = photos[photoIndex];
        const photoB = photos[photoIndex + 1];
        photoIndex += 2;

        if (photoA && photoB) {
          elements.push(
            <div
              key={`pattern-2-${photoA.id}-${photoB.id}-${patternIndex}`}
              className="grid grid-cols-2 gap-2.5"
            >
              <div
                id={`photo-${photoA.globalIndex}`}
                onClick={() => onPhotoClick(photoA.globalIndex)}
                className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer aspect-[1.38/1] shadow-[0_1px_4px_rgba(0,0,0,0.06)] transition-all duration-150 hover:shadow-md hover:opacity-[0.98]"
              >
                <img
                  src={photoA.src}
                  alt={`${photoA.category} photo ${photoA.categoryIndex}`}
                  className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.01]"
                />
              </div>
              <div
                id={`photo-${photoB.globalIndex}`}
                onClick={() => onPhotoClick(photoB.globalIndex)}
                className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer aspect-[1.38/1] shadow-[0_1px_4px_rgba(0,0,0,0.06)] transition-all duration-150 hover:shadow-md hover:opacity-[0.98]"
              >
                <img
                  src={photoB.src}
                  alt={`${photoB.category} photo ${photoB.categoryIndex}`}
                  className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.01]"
                />
              </div>
            </div>
          );
        } else if (photoA) {
          // If only 1 image left for a '2' slot, render single full width
          elements.push(
            <div
              key={`pattern-1-fallback-${photoA.id}-${patternIndex}`}
              id={`photo-${photoA.globalIndex}`}
              onClick={() => onPhotoClick(photoA.globalIndex)}
              className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer aspect-[16/10.5] shadow-[0_1px_4px_rgba(0,0,0,0.06)] transition-all duration-150 hover:shadow-md hover:opacity-[0.98]"
            >
              <img
                src={photoA.src}
                alt={`${photoA.category} photo ${photoA.categoryIndex}`}
                className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.01]"
              />
            </div>
          );
        }
      }
    });

    // If any trailing photos remain outside the pattern, render them safely
    while (photoIndex < photos.length) {
      const remainingPhoto = photos[photoIndex];
      photoIndex += 1;
      elements.push(
        <div
          key={`remaining-${remainingPhoto.id}`}
          id={`photo-${remainingPhoto.globalIndex}`}
          onClick={() => onPhotoClick(remainingPhoto.globalIndex)}
          className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer aspect-[16/10.5] shadow-[0_1px_4px_rgba(0,0,0,0.06)] transition-all duration-150 hover:shadow-md hover:opacity-[0.98]"
        >
          <img
            src={remainingPhoto.src}
            alt={`${remainingPhoto.category} photo ${remainingPhoto.categoryIndex}`}
            className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.01]"
          />
        </div>
      );
    }

    return <div className="space-y-2.5">{elements}</div>;
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 animate-in fade-in duration-200">
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-neutral-200 bg-white/95 px-6 backdrop-blur-md">
        <button
          type="button"
          onClick={onClose}
          aria-label="Back to listing"
          className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-800 transition-colors hover:bg-neutral-100 cursor-pointer"
        >
          <ChevronLeft size={22} />
        </button>

        <h1 className="text-base font-semibold text-neutral-900">Photo tour</h1>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onShare}
            aria-label="Share listing"
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-800 transition-colors hover:bg-neutral-100 cursor-pointer"
          >
            <Share size={18} />
          </button>
          <button
            type="button"
            onClick={onSave}
            aria-label="Save listing"
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-800 transition-colors hover:bg-neutral-100 cursor-pointer"
          >
            <Heart size={18} />
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1020px] px-6 py-8 lg:px-8">
        {/* Top Category Thumbnail Jump Grid */}
        <section aria-label="Photo categories" className="mb-20">
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
            {categoryOrder.map((category) => {
              const categoryPhotos = photosByCategory[category] || [];
              const thumbnail = categoryPhotos[0];
              if (!thumbnail) return null;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => scrollToCategory(category)}
                  className="group flex flex-col text-left cursor-pointer focus:outline-hidden"
                >
                  <div className="relative aspect-square w-full rounded-2xl">
                    <div className="h-full w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_1px_4px_rgba(0,0,0,0.06)] transition-all duration-150 ease-out group-hover:scale-[1.03] group-hover:shadow-md group-hover:z-10">
                      <img
                        src={thumbnail.src}
                        alt={category}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="mt-2 text-xs font-semibold text-neutral-800 group-hover:text-black leading-tight">
                    {categoryDisplayNames[category] || category}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Categories & Galleries Section */}
        <div className="space-y-14">
          {categoryOrder.map((category) => {
            const categoryPhotos: Photo[] = photosByCategory[category] || [];
            if (categoryPhotos.length === 0) return null;
            const slug = category.toLowerCase().replace(/\s+/g, "-");
            const desc = categoryDescriptions[category];

            return (
              <section
                key={category}
                id={`cat-${slug}`}
                className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_520px] lg:justify-between"
              >
                {/* Left Column: Category Info */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <h2 className="text-[26px] font-semibold text-neutral-900 tracking-tight leading-tight">
                    {categoryDisplayNames[category] || category}
                  </h2>
                  {desc && (
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed font-normal">
                      {desc}
                    </p>
                  )}
                </div>

                {/* Right Column: Photos Layout */}
                <div className="w-full max-w-[520px]">
                  {renderCategoryGallery(category, categoryPhotos)}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
