import type { Amenity } from './types';
import { AmenityItem } from './AmenityItem';

interface AmenitiesSectionProps {
  amenities: Amenity[];
  totalCount: number;
  onShowAll?: () => void;
}

/**
 * "What this place offers" heading, a 2-column amenity grid, and the
 * "Show all N amenities" button. Only the visible subset of amenities
 * is rendered here — the full list lives behind the button, which is
 * a presentational placeholder for now.
 */
export function AmenitiesSection({
  amenities,
  totalCount,
  onShowAll,
}: AmenitiesSectionProps) {
  return (
    <div className="py-6">
      <h2 className="mb-4 text-xl font-semibold text-neutral-900">
        What this place offers
      </h2>

      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {amenities.map((amenity) => (
          <AmenityItem
            key={amenity.label}
            icon={amenity.icon}
            label={amenity.label}
            available={amenity.available}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onShowAll}
        className="mt-6 rounded-lg border border-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors"
      >
        Show all {totalCount} amenities
      </button>
    </div>
  );
}