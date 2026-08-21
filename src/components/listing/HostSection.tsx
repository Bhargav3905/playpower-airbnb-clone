import { BadgeCheck, GraduationCap, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const coHosts = [
  { name: "Sharath", initial: "S", tone: "bg-orange-100" },
  { name: "Aman Dev Pahwa", initial: "A", tone: "bg-orange-200" },
  { name: "Maria Karen Priyanka", initial: "M", tone: "bg-neutral-200" },
  { name: "Simran", initial: "S", tone: "bg-pink-100" },
  { name: "Pallavi", initial: "P", tone: "bg-blue-100" },
  { name: "Sanyukta", initial: "S", tone: "bg-yellow-100" },
  { name: "Shruti", initial: "S", tone: "bg-pink-100" },
  { name: "Amisha", initial: "A", tone: "bg-blue-100" },
];

export function HostSection() {
  return (
    <section className="border-t border-neutral-200 py-10">
      <h2 className="text-2xl font-semibold">Meet your host</h2>
      <div className="mt-6 grid grid-cols-[360px_minmax(0,1fr)] gap-12">
        <div>
          <div className="flex h-[274px] rounded-2xl border border-neutral-200 p-8 shadow-lg">
            <div className="flex flex-1 flex-col items-center justify-center border-r border-neutral-200 pr-7 text-center">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-emerald-900 text-xs font-semibold text-white">
                MIRASHYA
                <BadgeCheck className="absolute -right-1 bottom-0 rounded-full bg-rose-500 text-white" size={25} fill="currentColor" />
              </div>
              <p className="mt-4 text-2xl font-semibold">Mirashya<br />Homes</p>
              <p className="mt-1 text-sm">Host</p>
            </div>
            <div className="flex w-24 flex-col justify-center gap-4 pl-5 text-sm">
              <div><strong className="block text-xl">1,463</strong><span>Reviews</span></div>
              <div className="border-t border-neutral-200 pt-3"><strong className="block text-xl">4.68★</strong><span>Rating</span></div>
              <div className="border-t border-neutral-200 pt-3"><strong className="block text-xl">2</strong><span>Years hosting</span></div>
            </div>
          </div>
          <div className="mt-5 space-y-4 text-sm">
            <p className="flex items-center gap-4"><Sparkles size={24} strokeWidth={1.5} /> Born in the 80s</p>
            <p className="flex items-center gap-4"><GraduationCap size={24} strokeWidth={1.5} /> Where I went to school: NICMAR GOA</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Co-Hosts</h3>
          <div className="mt-5 grid grid-cols-3 gap-x-8 gap-y-5">
            {coHosts.map((host) => (
              <div key={host.name} className="flex items-center gap-3 text-sm">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${host.tone} font-medium`}>{host.initial}</span>
                <span>{host.name}</span>
              </div>
            ))}
          </div>
          <h3 className="mt-8 text-xl font-semibold">Host details</h3>
          <div className="mt-5 space-y-2 text-base">
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
          </div>
          <button type="button" className="mt-5 flex items-center gap-2 rounded-lg bg-neutral-100 px-6 py-4 text-sm font-semibold hover:bg-neutral-200">
            <MessageCircle size={18} /> Message host
          </button>
        </div>
      </div>
      <p className="mt-8 flex items-center gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
        <ShieldCheck size={25} strokeWidth={1.5} /> To help protect your payment, always use Airbnb to send money and communicate with hosts.
      </p>
    </section>
  );
}