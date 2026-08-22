import { Star } from 'lucide-react';

interface GuestFavouriteBadgeProps {
  description: string;
  rating: number;
  reviewCount: number;
}

export function GuestFavouriteBadge({
  description,
  rating,
  reviewCount,
}: GuestFavouriteBadgeProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-neutral-200 px-6 py-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-neutral-800">
          <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-neutral-800">
            <path d="M7.4 3.5C6.1 4.9 5 6.6 4.3 8.5C3.5 10.4 3 12.5 3 14.7C3 19 4.8 23 7.8 25.8C8.2 26.2 8.3 26.8 7.9 27.2C7.5 27.6 6.9 27.7 6.5 27.3C3.1 24.1 1 19.6 1 14.7C1 12.2 1.6 9.8 2.5 7.7C3.3 5.5 4.6 3.6 6.1 2C6.5 1.6 7.1 1.6 7.5 2C7.9 2.4 7.9 3 7.4 3.5Z" fill="currentColor" />
            <path d="M11 6C11 8.2 9.2 10 7 10C6.4 10 5.9 9.8 5.4 9.6C6.3 7.7 7.7 6.1 9.4 4.9C10.4 5.1 11 5.5 11 6Z" fill="currentColor" />
            <path d="M12 12C12 14.2 10.2 16 8 16C7.2 16 6.5 15.8 5.9 15.3C6 13.8 6.4 12.3 7.1 11C8.6 11.1 10.3 11.2 12 12Z" fill="currentColor" />
            <path d="M12 18C12 20.2 10.2 22 8 22C7.4 22 6.8 21.8 6.3 21.6C6.7 19.9 7.4 18.3 8.3 16.9C9.7 17.1 11 17.4 12 18Z" fill="currentColor" />
          </svg>
          <span className="text-base font-semibold text-neutral-900 leading-tight">Guest<br />favourite</span>
          <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 -scale-x-100 text-neutral-800">
            <path d="M7.4 3.5C6.1 4.9 5 6.6 4.3 8.5C3.5 10.4 3 12.5 3 14.7C3 19 4.8 23 7.8 25.8C8.2 26.2 8.3 26.8 7.9 27.2C7.5 27.6 6.9 27.7 6.5 27.3C3.1 24.1 1 19.6 1 14.7C1 12.2 1.6 9.8 2.5 7.7C3.3 5.5 4.6 3.6 6.1 2C6.5 1.6 7.1 1.6 7.5 2C7.9 2.4 7.9 3 7.4 3.5Z" fill="currentColor" />
            <path d="M11 6C11 8.2 9.2 10 7 10C6.4 10 5.9 9.8 5.4 9.6C6.3 7.7 7.7 6.1 9.4 4.9C10.4 5.1 11 5.5 11 6Z" fill="currentColor" />
            <path d="M12 12C12 14.2 10.2 16 8 16C7.2 16 6.5 15.8 5.9 15.3C6 13.8 6.4 12.3 7.1 11C8.6 11.1 10.3 11.2 12 12Z" fill="currentColor" />
            <path d="M12 18C12 20.2 10.2 22 8 22C7.4 22 6.8 21.8 6.3 21.6C6.7 19.9 7.4 18.3 8.3 16.9C9.7 17.1 11 17.4 12 18Z" fill="currentColor" />
          </svg>
        </div>
        <p className="max-w-[200px] text-sm font-semibold text-neutral-800 leading-snug">
          {description}
        </p>
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
          <span className="text-xs font-semibold text-neutral-800 underline">Reviews</span>
        </div>
      </div>
    </div>
  );
}
