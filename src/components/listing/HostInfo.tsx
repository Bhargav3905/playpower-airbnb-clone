interface HostInfoProps {
  hostName: string;
  hostingDuration: string;
  avatarInitial?: string;
}

/**
 * "Hosted by Mirashya Homes" row with a simple circular avatar.
 * No real host photo asset is available, so we render an initial
 * on a solid background rather than inventing an image.
 */
export function HostInfo({ hostName, hostingDuration, avatarInitial }: HostInfoProps) {
  const initial = avatarInitial ?? hostName.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-4 py-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900 text-lg font-semibold text-white">
        {initial}
      </div>
      <div>
        <p className="text-base font-semibold text-neutral-900">
          Hosted by {hostName}
        </p>
        <p className="text-sm text-neutral-500">{hostingDuration}</p>
      </div>
    </div>
  );
}
