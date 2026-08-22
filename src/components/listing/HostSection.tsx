import { BadgeCheck, GraduationCap, Lightbulb, Shield } from "lucide-react";

const coHosts = [
  {
    name: "Sharath",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    initial: "S",
    tone: "bg-orange-100 text-orange-900",
  },
  {
    name: "Aman Dev Pahwa",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
    initial: "A",
    tone: "bg-amber-100 text-amber-900",
  },
  {
    name: "Maria Karen Priyanka",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=100&auto=format&fit=crop&q=80",
    initial: "M",
    tone: "bg-neutral-200 text-neutral-900",
  },
  {
    name: "Simran",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    initial: "S",
    tone: "bg-pink-100 text-pink-900",
  },
  {
    name: "Pallavi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    initial: "P",
    tone: "bg-blue-100 text-blue-900",
  },
  {
    name: "Sanyukta",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    initial: "S",
    tone: "bg-yellow-100 text-yellow-900",
  },
  {
    name: "Shruti",
    initial: "S",
    tone: "bg-pink-100 text-pink-900",
  },
  {
    name: "Amisha",
    initial: "A",
    tone: "bg-blue-100 text-blue-900",
  },
];

export function HostSection() {
  return (
    <section className="border-t border-neutral-200 py-10">
      <h2 className="text-2xl font-semibold text-neutral-900">Meet your host</h2>

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-[350px_minmax(0,1fr)]">
        {/* Left Column: Host Badge Card & Facts */}
        <div>
          <div className="flex h-[240px] rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-xl shadow-neutral-100">
            <div className="flex flex-1 flex-col items-center justify-center border-r border-neutral-200 pr-5 text-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#1b4332] text-[11px] font-bold tracking-wider text-white shadow-sm select-none">
                MIRASHYA
                <BadgeCheck
                  className="absolute -right-0.5 bottom-0 rounded-full bg-[#E00B41] text-white p-0.5"
                  size={24}
                  fill="currentColor"
                />
              </div>
              <p className="mt-3 text-xl font-bold text-neutral-900 leading-tight">
                Mirashya<br />Homes
              </p>
              <p className="mt-0.5 text-xs text-neutral-500 font-medium">Host</p>
            </div>

            <div className="flex w-24 flex-col justify-center gap-2.5 pl-5 text-sm">
              <div>
                <strong className="block text-lg font-bold text-neutral-900">1,463</strong>
                <span className="text-xs text-neutral-500 font-medium">Reviews</span>
              </div>
              <div className="border-t border-neutral-200 pt-2">
                <strong className="block text-lg font-bold text-neutral-900">4.68★</strong>
                <span className="text-xs text-neutral-500 font-medium">Rating</span>
              </div>
              <div className="border-t border-neutral-200 pt-2">
                <strong className="block text-lg font-bold text-neutral-900">2</strong>
                <span className="text-xs text-neutral-500 font-medium">Years hosting</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3.5 text-sm text-neutral-800">
            <p className="flex items-center gap-3.5">
              <Lightbulb size={20} className="text-neutral-800 shrink-0" strokeWidth={1.5} />
              <span>Born in the 80s</span>
            </p>
            <p className="flex items-center gap-3.5">
              <GraduationCap size={20} className="text-neutral-800 shrink-0" strokeWidth={1.5} />
              <span>Where I went to school: NICMAR GOA</span>
            </p>
          </div>
        </div>

        {/* Right Column: Co-hosts, Details & Message Host */}
        <div>
          <h3 className="text-base font-semibold text-neutral-900">Co-Hosts</h3>
          <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3.5">
            {coHosts.map((host) => (
              <div key={host.name} className="flex items-center gap-3 text-sm">
                {host.image ? (
                  <img
                    src={host.image}
                    alt={host.name}
                    className="h-10 w-10 rounded-full object-cover shrink-0 select-none"
                    loading="lazy"
                  />
                ) : (
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${host.tone} text-sm font-semibold select-none`}
                  >
                    {host.initial}
                  </span>
                )}
                <span className="font-medium text-neutral-900 truncate">{host.name}</span>
              </div>
            ))}
          </div>

          <h3 className="mt-7 text-base font-semibold text-neutral-900">Host details</h3>
          <div className="mt-2.5 space-y-0.5 text-sm text-neutral-800">
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
          </div>

          <button
            type="button"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-neutral-100 border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200 active:scale-95 cursor-pointer"
          >
            Message host
          </button>

          <div className="mt-7 flex items-center gap-3 text-xs text-neutral-500">
            <Shield size={18} className="shrink-0 text-neutral-700" strokeWidth={1.5} />
            <p>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}