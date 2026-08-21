import type { Photo } from "../../types";

interface RoomCardProps {
  photo: Photo;
  label: string;
  description: string;
}

/**
 * Single room tile for the "Where you'll sleep" grid.
 */
export function RoomCard({ photo, label, description }: RoomCardProps) {
  return (
    <div>
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
        <img
          src={photo.src}
          alt={label}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="mt-3 text-base font-medium text-neutral-900">{label}</p>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  );
}