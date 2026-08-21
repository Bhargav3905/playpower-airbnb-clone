import { ChevronDown, Flag, Tag } from "lucide-react";

const inputClassName =
  "border-neutral-300 bg-white px-3 py-3 text-left text-sm text-neutral-900";

export function BookingSidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      {/* 10% promo card */}
      <div className="mb-6 flex items-center gap-4 rounded-xl border border-neutral-200 bg-white px-5 py-4 shadow-xs">
        <Tag className="shrink-0 text-emerald-600" size={24} strokeWidth={1.5} />
        <div className="min-w-0 flex-1 text-sm text-neutral-900">
          <p>Get 10% off your next stay.</p>
          <button type="button" className="font-semibold text-neutral-900 underline cursor-pointer">
            Terms apply
          </button>
        </div>
        <button
          type="button"
          className="rounded-lg bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200 transition-colors cursor-pointer"
        >
          Claim
        </button>
      </div>

      {/* Main Reservation Card */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl">
        <p className="text-lg text-neutral-900">
          <span className="text-2xl font-bold underline decoration-1 underline-offset-4">
            ₹28,499
          </span>{" "}
          <span className="text-neutral-500 font-normal">for 5 nights</span>
        </p>

        <div className="mt-5 overflow-hidden rounded-xl border border-neutral-300">
          <div className="grid grid-cols-2 divide-x divide-neutral-300">
            <div className={inputClassName}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-800">Check-in</p>
              <p className="mt-0.5 text-sm font-normal text-neutral-900">10/18/2026</p>
            </div>
            <div className={inputClassName}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-800">Checkout</p>
              <p className="mt-0.5 text-sm font-normal text-neutral-900">10/23/2026</p>
            </div>
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-between border-t border-neutral-300 px-3 py-3 text-left hover:bg-neutral-50 transition-colors cursor-pointer"
          >
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-800">Guests</span>
              <span className="mt-0.5 block text-sm font-normal text-neutral-900">2 guests</span>
            </span>
            <ChevronDown size={20} strokeWidth={1.5} className="text-neutral-600" />
          </button>
        </div>

        <div className="mt-4 rounded-lg bg-neutral-100 px-3 py-2.5 text-center text-xs text-neutral-700">
          Free cancellation before <span className="font-semibold text-neutral-900">17 October</span>
        </div>

        <button
          type="button"
          className="mt-4 w-full rounded-lg bg-[#E00B41] py-3.5 text-base font-semibold text-white transition-all hover:bg-[#D90B3E] active:scale-[0.98] cursor-pointer shadow-sm"
        >
          Reserve
        </button>
        <p className="mt-3 text-center text-xs text-neutral-500">You won&apos;t be charged yet</p>
      </div>

      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer underline"
      >
        <Flag size={14} fill="currentColor" />
        Report this listing
      </button>
    </aside>
  );
}