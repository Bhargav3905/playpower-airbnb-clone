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
   * Builds the Airbnb gallery layout matching reference screenshots:
   * - 2 photos: 2-column grid [0, 1]
   * - 5 photos (Gym): 1 large [0], 2-col [1, 2], 2-col [3, 4]
   * - Other counts (1, 3, 6, 7, 10): alternating 1 large -> 2-col -> 1 large -> 2-col
   */
  const renderCategoryGallery = (photos: Photo[]) => {
    if (photos.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-3.5">
          {photos.map((photo) => (
            <div
              key={photo.id}
              id={`photo-${photo.globalIndex}`}
              onClick={() => onPhotoClick(photo.globalIndex)}
              className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer shadow-xs aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={`${photo.category} photo ${photo.categoryIndex}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      );
    }

    if (photos.length === 5) {
      const mainPhoto = photos[0];
      const pair1 = [photos[1], photos[2]];
      const pair2 = [photos[3], photos[4]];

      return (
        <div className="space-y-3.5">
          <div
            id={`photo-${mainPhoto.globalIndex}`}
            onClick={() => onPhotoClick(mainPhoto.globalIndex)}
            className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer shadow-xs aspect-[16/10] sm:aspect-[4/3] md:aspect-[3/2]"
          >
            <img
              src={mainPhoto.src}
              alt={`${mainPhoto.category} photo ${mainPhoto.categoryIndex}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            {pair1.map((photo) => (
              <div
                key={photo.id}
                id={`photo-${photo.globalIndex}`}
                onClick={() => onPhotoClick(photo.globalIndex)}
                className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer shadow-xs aspect-[4/3]"
              >
                <img
                  src={photo.src}
                  alt={`${photo.category} photo ${photo.categoryIndex}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            {pair2.map((photo) => (
              <div
                key={photo.id}
                id={`photo-${photo.globalIndex}`}
                onClick={() => onPhotoClick(photo.globalIndex)}
                className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer shadow-xs aspect-[4/3]"
              >
                <img
                  src={photo.src}
                  alt={`${photo.category} photo ${photo.categoryIndex}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    const elements: React.ReactNode[] = [];
    let i = 0;
    let isFullWidthNext = true;

    while (i < photos.length) {
      if (isFullWidthNext || i === photos.length - 1) {
        const photo = photos[i];
        elements.push(
          <div
            key={photo.id}
            id={`photo-${photo.globalIndex}`}
            onClick={() => onPhotoClick(photo.globalIndex)}
            className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer shadow-xs aspect-[16/10] sm:aspect-[4/3] md:aspect-[3/2]"
          >
            <img
              src={photo.src}
              alt={`${photo.category} photo ${photo.categoryIndex}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        );
        i += 1;
        isFullWidthNext = false;
      } else {
        const photoA = photos[i];
        const photoB = photos[i + 1];
        elements.push(
          <div key={`${photoA.id}-${photoB.id}`} className="grid grid-cols-2 gap-3.5">
            <div
              id={`photo-${photoA.globalIndex}`}
              onClick={() => onPhotoClick(photoA.globalIndex)}
              className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer shadow-xs aspect-[4/3]"
            >
              <img
                src={photoA.src}
                alt={`${photoA.category} photo ${photoA.categoryIndex}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div
              id={`photo-${photoB.globalIndex}`}
              onClick={() => onPhotoClick(photoB.globalIndex)}
              className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer shadow-xs aspect-[4/3]"
            >
              <img
                src={photoB.src}
                alt={`${photoB.category} photo ${photoB.categoryIndex}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        );
        i += 2;
        isFullWidthNext = true;
      }
    }

    return <div className="space-y-3.5">{elements}</div>;
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

      <main className="mx-auto max-w-[1120px] px-6 py-8 lg:px-8">
        {/* Top Category Thumbnail Jump Grid */}
        <section aria-label="Photo categories" className="mb-20">
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
            {categoryOrder.map((category) => {
              const categoryPhotos = photosByCategory[category] || [];
              const thumbnail = categoryPhotos[0];
              if (!thumbnail) return null;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => scrollToCategory(category)}
                  className="group flex flex-col text-left transition-transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  <div className="overflow-hidden rounded-xl bg-neutral-100 aspect-[1.1] shadow-xs">
                    <img
                      src={thumbnail.src}
                      alt={category}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="mt-1.5 text-xs font-semibold text-neutral-800 group-hover:text-black leading-tight">
                    {category}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Categories & Galleries Section */}
        <div className="space-y-4">
          {categoryOrder.map((category) => {
            const categoryPhotos: Photo[] = photosByCategory[category] || [];
            if (categoryPhotos.length === 0) return null;
            const slug = category.toLowerCase().replace(/\s+/g, "-");
            const desc = categoryDescriptions[category];

            return (
              <section
                key={category}
                id={`cat-${slug}`}
                className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16 py-16 border-t border-neutral-200 first:border-0 first:pt-0"
              >
                {/* Left Column: Category Info */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
                    {category}
                  </h2>
                  {desc && (
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                      {desc}
                    </p>
                  )}
                </div>

                {/* Right Column: Photos Layout */}
                <div>
                  {renderCategoryGallery(categoryPhotos)}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
