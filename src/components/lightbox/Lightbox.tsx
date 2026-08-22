import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Grid3x3, X } from "lucide-react";
import { photos, totalPhotos } from "../../data/photos";

interface LightboxProps {
  initialGlobalIndex: number;
  onClose: () => void;
  onIndexChange?: (newGlobalIndex: number) => void;
  onShare?: () => void;
  onSave?: () => void;
}

const categoryDisplayNames: Record<string, string> = {
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

export function Lightbox({
  initialGlobalIndex,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const [currentGlobalIndex, setCurrentGlobalIndex] = useState(initialGlobalIndex);

  // Find photo by global index (1-43)
  const currentPhoto = photos.find((p) => p.globalIndex === currentGlobalIndex) || photos[0];
  const photoPosition = photos.findIndex((p) => p.globalIndex === currentGlobalIndex);

  const isFirstPhoto = photoPosition <= 0;
  const isLastPhoto = photoPosition >= photos.length - 1;

  const handlePrev = useCallback(() => {
    if (photoPosition > 0) {
      const newIdx = photos[photoPosition - 1].globalIndex;
      setCurrentGlobalIndex(newIdx);
      onIndexChange?.(newIdx);
    }
  }, [photoPosition, onIndexChange]);

  const handleNext = useCallback(() => {
    if (photoPosition < photos.length - 1) {
      const newIdx = photos[photoPosition + 1].globalIndex;
      setCurrentGlobalIndex(newIdx);
      onIndexChange?.(newIdx);
    }
  }, [photoPosition, onIndexChange]);

  // Keyboard navigation & lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full-screen photo gallery"
      className="fixed inset-0 z-50 flex flex-col bg-white text-neutral-900 animate-in fade-in duration-150 select-none"
    >
      {/* Top Header */}
      <header className="flex h-16 w-full shrink-0 items-center justify-between px-6 lg:px-8">
        {/* Left: 9-dot grid button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Back to photo tour"
          className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-800 transition-colors hover:bg-neutral-100 cursor-pointer"
        >
          <Grid3x3 size={18} strokeWidth={2} />
        </button>

        {/* Center: Category title */}
        <div className="text-sm font-semibold text-neutral-900">
          {categoryDisplayNames[currentPhoto.category] || currentPhoto.category}
        </div>

        {/* Right: Counter + Close X button */}
        <div className="flex items-center gap-5">
          <span className="text-sm font-normal text-neutral-900">
            {photoPosition + 1} of {totalPhotos}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo viewer"
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-800 transition-colors hover:bg-neutral-100 cursor-pointer"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Main Image Stage */}
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-16 sm:px-24 py-4">
        {/* Previous Navigation Button */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={isFirstPhoto}
          aria-label="Previous photo"
          className={`absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
            isFirstPhoto
              ? "border-neutral-200 bg-white text-neutral-300 opacity-40 cursor-not-allowed pointer-events-none"
              : "border-neutral-300 bg-white text-neutral-800 shadow-xs hover:border-neutral-900 hover:scale-105 active:scale-95 cursor-pointer"
          }`}
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>

        {/* Center Photo Display with Generous Whitespace */}
        <div className="flex items-center justify-center h-full w-full max-h-[calc(100vh-100px)]">
          <img
            key={currentPhoto.id}
            src={currentPhoto.src}
            alt={`${currentPhoto.category} photo ${currentPhoto.categoryIndex}`}
            className="max-h-[75vh] max-w-[calc(100vw-180px)] lg:max-w-[1000px] w-auto h-auto object-contain select-none"
          />
        </div>

        {/* Next Navigation Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={isLastPhoto}
          aria-label="Next photo"
          className={`absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
            isLastPhoto
              ? "border-neutral-200 bg-white text-neutral-300 opacity-40 cursor-not-allowed pointer-events-none"
              : "border-neutral-300 bg-white text-neutral-800 shadow-xs hover:border-neutral-900 hover:scale-105 active:scale-95 cursor-pointer"
          }`}
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>
      </main>
    </div>
  );
}
