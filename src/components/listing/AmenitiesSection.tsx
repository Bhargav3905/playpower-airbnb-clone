import type { Amenity } from './types';
import { AmenityItem } from './AmenityItem';

interface AmenitiesSectionProps {
  amenities: Amenity[];
  totalCount: number;
  onShowAll?: () => void;
}

export function AmenitiesSection({
  amenities,
  totalCount,
  onShowAll,
}: AmenitiesSectionProps) {
  return (
    <section className="py-8">
      <h2 className="mb-6 text-2xl font-semibold text-neutral-900">
        What this place offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
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
        className="mt-8 inline-flex items-center justify-center rounded-lg border border-neutral-900 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 active:scale-95 cursor-pointer"
      >
        Show all {totalCount} amenities
      </button>
    </section>
  );
}