import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Photo } from "../../types";

interface NearbyStay {
  photo: Photo;
  title: string;
  price: string;
  rating: string;
}

interface NearbyStaysProps {
  stays: NearbyStay[];
}

export function NearbyStays({ stays }: NearbyStaysProps) {
  const [page, setPage] = useState<0 | 1>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const page1Stays = stays.slice(0, 5);
  const page2Stays = stays.slice(5, 10);

  const handlePrev = () => {
    if (page === 0 || isTransitioning) return;
    setIsTransitioning(true);
    setPage(0);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const handleNext = () => {
    if (page === 1 || isTransitioning) return;
    setIsTransitioning(true);
    setPage(1);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const renderCard = (stay: NearbyStay, index: number) => (
    <article key={`${stay.title}-${index}`} className="group min-w-0 cursor-pointer">
      <div className="overflow-hidden rounded-xl bg-neutral-100 aspect-square">
        <img
          src={stay.photo.src}
          alt={stay.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-2.5 text-sm font-medium text-neutral-900 line-clamp-2 leading-snug">
        {stay.title}
      </h3>
      <div className="mt-1 flex items-center gap-2 text-sm">
        <span className="font-semibold text-neutral-900">{stay.price}</span>
        <span className="flex items-center gap-1 text-neutral-900 font-normal">
          <Star size={12} fill="currentColor" />
          {stay.rating}
        </span>
      </div>
    </article>
  );

  return (
    <section className="border-t border-neutral-200 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-neutral-900">More stays nearby</h2>

        <div className="flex items-center gap-3 text-sm font-normal text-neutral-700">
          <span>{page + 1} / 2</span>
          <button
            type="button"
            aria-label="Previous stays"
            disabled={page === 0}
            onClick={handlePrev}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all ${
              page === 0
                ? "border-neutral-200 text-neutral-300 cursor-not-allowed opacity-40"
                : "border-neutral-300 text-neutral-800 hover:border-neutral-900 hover:shadow-sm cursor-pointer"
            }`}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next stays"
            disabled={page === 1}
            onClick={handleNext}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all ${
              page === 1
                ? "border-neutral-200 text-neutral-300 cursor-not-allowed opacity-40"
                : "border-neutral-300 text-neutral-800 hover:border-neutral-900 hover:shadow-sm cursor-pointer"
            }`}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {/* Page 1 (cards 1–5) */}
          <div className="grid w-full shrink-0 grid-cols-5 gap-4">
            {page1Stays.map(renderCard)}
          </div>

          {/* Page 2 (cards 6–10) */}
          <div className="grid w-full shrink-0 grid-cols-5 gap-4">
            {page2Stays.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}