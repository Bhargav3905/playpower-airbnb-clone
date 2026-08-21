import { Award, Star } from 'lucide-react';

interface GuestFavouriteBadgeProps {
  description: string;
  rating: number;
  reviewCount: number;
}

/**
 * Bordered "Guest favourite" row with the overall rating and
 * review count on the right.
 */
export function GuestFavouriteBadge({
  description,
  rating,
  reviewCount,
}: GuestFavouriteBadgeProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-neutral-200 px-6 py-4">
      <div className="flex items-center gap-3">
        <Award size={28} className="shrink-0 text-neutral-800" strokeWidth={1.5} />
        <div className="text-sm">
          <p className="font-semibold text-neutral-900">Guest favourite</p>
          <p className="text-neutral-500">{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <div className="flex flex-col items-center leading-tight">
          <span className="text-lg font-semibold text-neutral-900">
            {rating.toFixed(2)}
          </span>
          <div className="flex gap-0.5 text-neutral-900">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
        </div>
        <div className="h-8 w-px bg-neutral-200" />
        <div className="flex flex-col items-center leading-tight">
          <span className="text-lg font-semibold text-neutral-900">
            {reviewCount}
          </span>
          <span className="text-neutral-500">Reviews</span>
        </div>
      </div>
    </div>
  );
}
