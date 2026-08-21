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
      <header className="flex h-16 w-full shrink-0 items-center justify-between px-6 pt-2">
        {/* Left: 9-dot grid button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Back to photo tour"
          className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-800 transition-colors hover:bg-neutral-100 cursor-pointer"
        >
          <Grid3x3 size={18} />
        </button>

        {/* Center: Category title */}
        <div className="text-sm font-semibold text-neutral-900">
          {currentPhoto.category}
        </div>

        {/* Right: Counter + Close X button */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-neutral-800 font-normal">
            {photoPosition + 1} of {totalPhotos}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo viewer"
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-800 transition-colors hover:bg-neutral-100 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>
      </header>

      {/* Main Image Stage */}
      <main className="relative flex flex-1 items-center justify-between px-6 sm:px-12 py-4">
        {/* Previous Navigation Button */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={isFirstPhoto}
          aria-label="Previous photo"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all ${
            isFirstPhoto
              ? "border-neutral-200 bg-white text-neutral-300 opacity-40 cursor-not-allowed pointer-events-none"
              : "border-neutral-300 bg-white text-neutral-800 shadow-xs hover:border-neutral-900 hover:bg-neutral-50 active:scale-95 cursor-pointer"
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Main Photo Display */}
        <div className="flex flex-1 items-center justify-center h-full max-h-[82vh] px-4">
          <img
            key={currentPhoto.id}
            src={currentPhoto.src}
            alt={`${currentPhoto.category} photo ${currentPhoto.categoryIndex}`}
            className="max-h-[80vh] max-w-full object-contain shadow-xs select-none"
          />
        </div>

        {/* Next Navigation Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={isLastPhoto}
          aria-label="Next photo"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all ${
            isLastPhoto
              ? "border-neutral-200 bg-white text-neutral-300 opacity-40 cursor-not-allowed pointer-events-none"
              : "border-neutral-300 bg-white text-neutral-800 shadow-xs hover:border-neutral-900 hover:bg-neutral-50 active:scale-95 cursor-pointer"
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </main>
    </div>
  );
}
