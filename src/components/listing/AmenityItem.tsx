import type { LucideIcon } from 'lucide-react';

interface AmenityItemProps {
  icon: LucideIcon;
  label: string;
  available: boolean;
}

/**
 * Single amenity row. Unavailable amenities get a muted icon with a
 * diagonal strike-through plus strikethrough label text, matching
 * the reference's "Carbon monoxide alarm" / "Smoke alarm" treatment.
 */
export function AmenityItem({ icon: Icon, label, available }: AmenityItemProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
        <Icon
          size={22}
          strokeWidth={1.5}
          className={available ? 'text-neutral-800' : 'text-neutral-400'}
        />
        {!available && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="h-px w-7 rotate-45 bg-neutral-400" />
          </span>
        )}
      </span>
      <span
        className={
          available
            ? 'text-base text-neutral-900'
            : 'text-base text-neutral-400 line-through'
        }
      >
        {label}
      </span>
    </div>
  );
}