import type { Photo } from '../../types';
import { RoomCard } from './RoomCard';

interface SleepingRoom {
  photo: Photo;
  label: string;
  description: string;
}

interface SleepingArrangementsProps {
  rooms: SleepingRoom[];
}

/**
 * "Where you'll sleep" heading + a grid of room cards.
 */
export function SleepingArrangements({ rooms }: SleepingArrangementsProps) {
  return (
    <div className="py-6">
      <h2 className="mb-4 text-xl font-semibold text-neutral-900">
        Where you&apos;ll sleep
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {rooms.map((room) => (
          <RoomCard
            key={room.photo.id}
            photo={room.photo}
            label={room.label}
            description={room.description}
          />
        ))}
      </div>
    </div>
  );
}