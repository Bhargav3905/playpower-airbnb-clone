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
  return (
    <section className="border-t border-neutral-200 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-neutral-900">More stays nearby</h2>
        
        <div className="flex items-center gap-3 text-sm text-neutral-500 font-medium">
          <span>1 / 2</span>
          <button
            type="button"
            aria-label="Previous stays"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 hover:border-neutral-900 transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next stays"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 hover:border-neutral-900 transition-colors cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {stays.map((stay) => (
          <article key={stay.title} className="group min-w-0 cursor-pointer">
            <div className="overflow-hidden rounded-xl bg-neutral-100 aspect-[0.95]">
              <img
                src={stay.photo.src}
                alt={stay.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-3 text-sm font-medium text-neutral-900 line-clamp-2 leading-snug">
              {stay.title}
            </h3>
            <div className="mt-1 flex items-center justify-between text-sm">
              <span className="font-semibold text-neutral-900">{stay.price}</span>
              <span className="flex items-center gap-1 text-neutral-900 font-medium">
                <Star size={12} fill="currentColor" />
                {stay.rating}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}