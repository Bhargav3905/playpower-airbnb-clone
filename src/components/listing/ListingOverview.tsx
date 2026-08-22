import { GuestFavouriteBadge } from './GuestFacouriteBadge';
import { HostInfo } from './HostInfo';
import { ListingHighlights } from './ListingHighlights';
import { TranslationNotice } from './TranslationNotice';
import type { ListingHighlight } from './types';

interface ListingOverviewProps {
  subtitle?: string;
  guests?: number;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  guestFavouriteDescription: string;
  rating: number;
  reviewCount: number;
  hostName: string;
  hostingDuration: string;
  highlights: ListingHighlight[];
  isOriginal?: boolean;
  onToggleOriginal?: () => void;
  onShowOriginal?: () => void;
}

export function ListingOverview({
  guestFavouriteDescription,
  rating,
  reviewCount,
  hostName,
  hostingDuration,
  highlights,
  isOriginal,
  onToggleOriginal,
  onShowOriginal,
}: ListingOverviewProps) {
  return (
    <div>
      <GuestFavouriteBadge
        description={guestFavouriteDescription}
        rating={rating}
        reviewCount={reviewCount}
      />

      <HostInfo hostName={hostName} hostingDuration={hostingDuration} />

      <div className="border-t border-neutral-200" />

      <ListingHighlights highlights={highlights} />

      <div className="border-t border-neutral-200" />

      <div className="pt-6">
        <TranslationNotice
          isOriginal={isOriginal}
          onToggleOriginal={onToggleOriginal}
          onShowOriginal={onShowOriginal}
        />
      </div>
    </div>
  );
}
