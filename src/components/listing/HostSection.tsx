import { BadgeCheck, GraduationCap, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const coHosts = [
  { name: "Sharath", initial: "S", tone: "bg-orange-100 text-orange-900" },
  { name: "Aman Dev Pahwa", initial: "A", tone: "bg-amber-100 text-amber-900" },
  { name: "Maria Karen Priyanka", initial: "M", tone: "bg-neutral-200 text-neutral-900" },
  { name: "Simran", initial: "S", tone: "bg-pink-100 text-pink-900" },
  { name: "Pallavi", initial: "P", tone: "bg-blue-100 text-blue-900" },
  { name: "Sanyukta", initial: "S", tone: "bg-yellow-100 text-yellow-900" },
  { name: "Shruti", initial: "S", tone: "bg-pink-100 text-pink-900" },
  { name: "Amisha", initial: "A", tone: "bg-blue-100 text-blue-900" },
];

export function HostSection() {
  return (
    <section className="border-t border-neutral-200 py-12">
      <h2 className="text-2xl font-semibold text-neutral-900">Meet your host</h2>

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[380px_minmax(0,1fr)]">
        {/* Left Column: Host Badge Card & Facts */}
        <div>
          <div className="flex h-[260px] rounded-3xl border border-neutral-200 bg-white p-7 shadow-xl">
            <div className="flex flex-1 flex-col items-center justify-center border-r border-neutral-200 pr-6 text-center">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#1b4332] text-xs font-bold tracking-wider text-white shadow-md select-none">
                MIRASHYA
                <BadgeCheck
                  className="absolute -right-1 bottom-0 rounded-full bg-[#E00B41] text-white p-0.5"
                  size={26}
                  fill="currentColor"
                />
              </div>
              <p className="mt-3 text-xl font-bold text-neutral-900 leading-tight">
                Mirashya<br />Homes
              </p>
              <p className="mt-1 text-xs text-neutral-500 font-medium">Host</p>
            </div>

            <div className="flex w-28 flex-col justify-center gap-3.5 pl-6 text-sm">
              <div>
                <strong className="block text-xl font-bold text-neutral-900">1,463</strong>
                <span className="text-xs text-neutral-500 font-medium">Reviews</span>
              </div>
              <div className="border-t border-neutral-200 pt-2.5">
                <strong className="block text-xl font-bold text-neutral-900">4.68★</strong>
                <span className="text-xs text-neutral-500 font-medium">Rating</span>
              </div>
              <div className="border-t border-neutral-200 pt-2.5">
                <strong className="block text-xl font-bold text-neutral-900">2</strong>
                <span className="text-xs text-neutral-500 font-medium">Years hosting</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-sm text-neutral-800">
            <p className="flex items-center gap-4">
              <Sparkles size={22} className="text-neutral-700 shrink-0" strokeWidth={1.5} />
              <span>Born in the 80s</span>
            </p>
            <p className="flex items-center gap-4">
              <GraduationCap size={22} className="text-neutral-700 shrink-0" strokeWidth={1.5} />
              <span>Where I went to school: NICMAR GOA</span>
            </p>
          </div>
        </div>

        {/* Right Column: Co-hosts & Details */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900">Co-Hosts</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
            {coHosts.map((host) => (
              <div key={host.name} className="flex items-center gap-3 text-sm">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${host.tone} text-sm font-semibold select-none`}
                >
                  {host.initial}
                </span>
                <span className="font-medium text-neutral-900 truncate">{host.name}</span>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-semibold text-neutral-900">Host details</h3>
          <div className="mt-4 space-y-1 text-base text-neutral-800">
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
          </div>

          <button
            type="button"
            className="mt-6 flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black active:scale-95 cursor-pointer"
          >
            <MessageCircle size={18} />
            Message host
          </button>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
        <ShieldCheck size={28} className="shrink-0 text-rose-600" strokeWidth={1.5} />
        <p>
          To help protect your payment, always use Airbnb to send money and communicate with hosts.
        </p>
      </div>
    </section>
  );
}