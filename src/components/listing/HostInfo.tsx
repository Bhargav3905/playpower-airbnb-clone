interface HostInfoProps {
  hostName: string;
  hostingDuration: string;
  avatarInitial?: string;
}

export function HostInfo({ hostName, hostingDuration }: HostInfoProps) {
  return (
    <div className="flex items-center gap-4 py-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1b4332] text-[9px] font-bold tracking-wider text-white select-none">
        MIRASHYA
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
