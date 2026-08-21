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
    <section className="border-t border-neutral-200 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">More stays nearby</h2>
        <div className="flex items-center gap-3 text-sm text-neutral-500">
          <span>1 / 2</span>
          <button type="button" aria-label="Previous stays" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 hover:border-neutral-900"><ChevronLeft size={18} /></button>
          <button type="button" aria-label="Next stays" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:border-neutral-900"><ChevronRight size={18} /></button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-5 gap-5">
        {stays.map((stay) => (
          <article key={stay.title} className="min-w-0">
            <img src={stay.photo.src} alt="" className="aspect-[0.82] w-full rounded-xl object-cover" />
            <h3 className="mt-3 text-sm leading-snug">{stay.title}</h3>
            <p className="mt-1 flex items-center gap-2 text-sm"><span>{stay.price}</span><span className="flex items-center gap-1"><Star size={13} fill="currentColor" /> {stay.rating}</span></p>
          </article>
        ))}
      </div>
    </section>
  );
}