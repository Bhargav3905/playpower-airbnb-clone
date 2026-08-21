import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Heart, Share, X } from "lucide-react";
import { photos, totalPhotos } from "../../data/photos";

interface LightboxProps {
  initialGlobalIndex: number;
  onClose: () => void;
  onShare?: () => void;
  onSave?: () => void;
}

export function Lightbox({
  initialGlobalIndex,
  onClose,
  onShare,
  onSave,
}: LightboxProps) {
  const [currentGlobalIndex, setCurrentGlobalIndex] = useState(initialGlobalIndex);

  // Find photo by global index (1-43)
  const currentPhoto = photos.find((p) => p.globalIndex === currentGlobalIndex) || photos[0];
  const photoPosition = photos.findIndex((p) => p.globalIndex === currentGlobalIndex);

  const handlePrev = useCallback(() => {
    const prevPos = photoPosition > 0 ? photoPosition - 1 : photos.length - 1;
    setCurrentGlobalIndex(photos[prevPos].globalIndex);
  }, [photoPosition]);

  const handleNext = useCallback(() => {
    const nextPos = photoPosition < photos.length - 1 ? photoPosition + 1 : 0;
    setCurrentGlobalIndex(photos[nextPos].globalIndex);
  }, [photoPosition]);

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
      className="fixed inset-0 z-50 flex flex-col bg-black/95 text-white backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Top Header */}
      <header className="flex h-16 w-full shrink-0 items-center justify-between px-6">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="text-sm font-semibold text-white/90">
          {photoPosition + 1} / {totalPhotos}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onShare}
            aria-label="Share listing"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
          >
            <Share size={18} />
          </button>
          <button
            type="button"
            onClick={onSave}
            aria-label="Save listing"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
          >
            <Heart size={18} />
          </button>
        </div>
      </header>

      {/* Main Image Stage */}
      <main className="relative flex flex-1 items-center justify-between px-4 sm:px-8">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo"
          className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-all hover:scale-105 hover:bg-white/20 active:scale-95 cursor-pointer shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Current Photo Display */}
        <div className="flex flex-1 items-center justify-center p-4">
          <img
            key={currentPhoto.id}
            src={currentPhoto.src}
            alt={`${currentPhoto.category} photo ${currentPhoto.categoryIndex}`}
            className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl transition-opacity duration-200 select-none"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo"
          className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-all hover:scale-105 hover:bg-white/20 active:scale-95 cursor-pointer shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </main>

      {/* Bottom Caption */}
      <footer className="flex h-16 w-full shrink-0 flex-col items-center justify-center pb-2 text-center text-xs text-white/70">
        <p className="font-semibold text-sm text-white">{currentPhoto.category}</p>
        <p className="mt-0.5 text-neutral-400">
          Photo {currentPhoto.categoryIndex} of {photos.filter(p => p.category === currentPhoto.category).length} in {currentPhoto.category} · Global photo {currentPhoto.globalIndex} of {totalPhotos}
        </p>
      </footer>
    </div>
  );
}
