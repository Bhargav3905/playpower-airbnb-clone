import type { Photo } from "../../types";

interface RoomCardProps {
  photo: Photo;
  label: string;
  description: string;
}

export function RoomCard({ photo, label, description }: RoomCardProps) {
  return (
    <div>
      <div className="aspect-[1.45/1] overflow-hidden rounded-2xl bg-neutral-100">
        <img
          src={photo.src}
          alt={label}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="mt-3 text-base font-semibold text-neutral-900">{label}</p>
      <p className="mt-0.5 text-sm text-neutral-600 font-normal">{description}</p>
    </div>
  );
}