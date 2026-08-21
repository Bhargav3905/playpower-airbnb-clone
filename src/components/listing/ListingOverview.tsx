import { GuestFavouriteBadge } from './GuestFacouriteBadge';
import { HostInfo } from './HostInfo';
import { ListingHighlights } from './ListingHighlights';
import { PropertySummary } from './PropertySummary';
import { TranslationNotice } from './TranslationNotice';
import type { ListingHighlight } from './types';

interface ListingOverviewProps {
  subtitle: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  guestFavouriteDescription: string;
  rating: number;
  reviewCount: number;
  hostName: string;
  hostingDuration: string;
  highlights: ListingHighlight[];
  onShowOriginal?: () => void;
}

/**
 * The block that sits directly under the hero gallery: property
 * summary, the guest-favourite badge, host info, the highlight
 * list, and the auto-translation notice.
 */
export function ListingOverview({
  subtitle,
  guests,
  bedrooms,
  beds,
  bathrooms,
  guestFavouriteDescription,
  rating,
  reviewCount,
  hostName,
  hostingDuration,
  highlights,
  onShowOriginal,
}: ListingOverviewProps) {
  return (
    <div>
      <PropertySummary
        subtitle={subtitle}
        guests={guests}
        bedrooms={bedrooms}
        beds={beds}
        bathrooms={bathrooms}
      />

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
        <TranslationNotice onShowOriginal={onShowOriginal} />
      </div>
    </div>
  );
}
