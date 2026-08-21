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
  "Living Room 2": "Dining table · Sofa · Ceiling fan · TV",
  "Full Kitchen": "Refrigerator · Microwave · Cooking basics · Stove",
  Bedroom: "1 double bed · Attached bathroom · Air conditioning",
  "Full Bathroom": "Hot water · Shower · Essentials",
  Gym: "Exercise equipment",
  Exterior: "Patio or balcony · Building exterior",
  Pool: "Shared outdoor pool",
  "Additional Photos": "Other spaces and property details",
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
      const topOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 animate-in fade-in duration-200">
      {/* Sticky Header */}
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
        <section aria-label="Photo categories" className="mb-16">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
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
                  <span className="mt-2 text-xs font-semibold text-neutral-900 group-hover:text-black">
                    {category}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Categories & Photos Section */}
        <div className="space-y-20">
          {categoryOrder.map((category) => {
            const categoryPhotos: Photo[] = photosByCategory[category] || [];
            if (categoryPhotos.length === 0) return null;
            const slug = category.toLowerCase().replace(/\s+/g, "-");

            return (
              <section
                key={category}
                id={`cat-${slug}`}
                className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16 pt-4 border-t border-neutral-100 first:border-0"
              >
                {/* Left Column: Category Info */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <h2 className="text-2xl font-bold text-neutral-900">{category}</h2>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                    {categoryDescriptions[category]}
                  </p>
                </div>

                {/* Right Column: Photos in Category */}
                <div className="space-y-8">
                  {categoryPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      id={`photo-${photo.globalIndex}`}
                      onClick={() => onPhotoClick(photo.globalIndex)}
                      className="group overflow-hidden rounded-2xl bg-neutral-100 cursor-pointer shadow-xs transition-all hover:shadow-md active:scale-[0.99]"
                    >
                      <img
                        src={photo.src}
                        alt={`${photo.category} photo ${photo.categoryIndex}`}
                        className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
