import { Home, Minus, Plus, Search } from "lucide-react";

function StaticMap() {
  return (
    <div className="relative mt-6 h-[505px] overflow-hidden rounded-xl bg-[#e8f0e3]">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(#c8d6c3_1px,transparent_1px),linear-gradient(90deg,#c8d6c3_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -left-[13%] top-[-10%] h-[125%] w-[48%] rotate-[25deg] bg-[#a9d4e7]" />
      <div className="absolute left-[24%] top-[30%] h-28 w-28 rounded-full bg-[#cce3bd] opacity-90" />
      <div className="absolute left-[67%] top-[47%] h-36 w-36 rounded-full bg-[#cce3bd] opacity-90" />

      <button
        type="button"
        aria-label="Search map"
        className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md hover:bg-neutral-50"
      >
        <Search size={20} />
      </button>
      <div className="absolute right-4 top-4 overflow-hidden rounded-lg bg-white shadow-md">
        <button type="button" aria-label="Zoom in" className="flex h-11 w-11 items-center justify-center hover:bg-neutral-50">
          <Plus size={20} />
        </button>
        <button type="button" aria-label="Zoom out" className="flex h-11 w-11 items-center justify-center border-t border-neutral-200 hover:bg-neutral-50">
          <Minus size={20} />
        </button>
      </div>

      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg">
        <Home size={31} strokeWidth={1.7} />
      </div>
    </div>
  );
}

export function LocationSection() {
  return (
    <section className="border-t border-neutral-200 py-10">
      <h2 className="text-2xl font-semibold text-neutral-900">Where you&apos;ll be</h2>
      <p className="mt-5 text-base">Candolim, Goa, India</p>
      <StaticMap />
      <p className="mt-4 text-sm text-neutral-800">Exact location will be provided after booking.</p>

      <div className="mt-10 border-t border-neutral-200 pt-8">
        <h2 className="text-2xl font-semibold text-neutral-900">Neighbourhood highlights</h2>
        <p className="mt-5 text-base leading-relaxed text-neutral-800">
          Candolim is a lively coastal neighbourhood with beaches, restaurants and local cafés nearby.
        </p>
        <button type="button" className="mt-3 text-base font-semibold underline">Show more</button>
      </div>
    </section>
  );
}