import { ChevronRight, Home, Minus, Plus, Search } from "lucide-react";

function StaticMap() {
  return (
    <div className="relative mt-6 h-[480px] w-full overflow-hidden rounded-2xl bg-[#e8f0e3] select-none">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(#c8d6c3_1px,transparent_1px),linear-gradient(90deg,#c8d6c3_1px,transparent_1px)] [background-size:64px_64px]" />
      
      {/* Sea / Coastline */}
      <div className="absolute -left-[18%] top-[-15%] h-[135%] w-[52%] rotate-[22deg] bg-[#a9d4e7]" />
      
      {/* Location radius blobs */}
      <div className="absolute left-[26%] top-[32%] h-32 w-32 rounded-full bg-[#cce3bd] opacity-80" />
      <div className="absolute left-[64%] top-[45%] h-40 w-40 rounded-full bg-[#cce3bd] opacity-80" />

      {/* Map Controls */}
      <button
        type="button"
        aria-label="Search map"
        className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-800 shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        <Search size={18} />
      </button>

      <div className="absolute right-5 top-5 overflow-hidden rounded-lg bg-white shadow-md divide-y divide-neutral-200">
        <button
          type="button"
          aria-label="Zoom in"
          className="flex h-10 w-10 items-center justify-center text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer"
        >
          <Plus size={18} />
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          className="flex h-10 w-10 items-center justify-center text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer"
        >
          <Minus size={18} />
        </button>
      </div>

      {/* Center Home Marker Pin */}
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-900 text-white shadow-xl">
        <div className="flex flex-col items-center justify-center">
          <Home size={26} strokeWidth={2} />
          <div className="h-0.5 w-6 bg-white rounded-full -mt-0.5" />
        </div>
      </div>
    </div>
  );
}

export function LocationSection() {
  return (
    <section className="border-t border-neutral-200 py-12">
      <h2 className="text-2xl font-semibold text-neutral-900">Where you&apos;ll be</h2>
      <p className="mt-4 text-base text-neutral-800">Candolim, Goa, India</p>

      <StaticMap />

      <p className="mt-4 text-sm text-neutral-800 font-medium">Exact location will be provided after booking.</p>

      <div className="mt-10 border-t border-neutral-200 pt-8">
        <h3 className="text-base font-semibold text-neutral-900">Neighbourhood highlights</h3>
        <p className="mt-2 text-sm leading-normal text-neutral-800 max-w-3xl">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button
          type="button"
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 underline underline-offset-2 hover:text-black cursor-pointer"
        >
          Show more
          <ChevronRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}