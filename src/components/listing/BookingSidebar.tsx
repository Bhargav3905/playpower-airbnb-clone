import { ChevronDown, Flag, Tag } from "lucide-react";

const inputClassName =
  "border-neutral-300 bg-white px-3 py-3 text-left text-sm text-neutral-900";

export function BookingSidebar() {
  return (
    <aside className="lg:sticky lg:top-6 lg:self-start">
      <div className="mb-6 flex items-center gap-4 rounded-xl border border-neutral-200 px-5 py-4 shadow-sm">
        <Tag className="shrink-0 text-emerald-600" size={24} strokeWidth={1.5} />
        <div className="min-w-0 flex-1 text-sm">
          <p>Get 10% off your next stay.</p>
          <button type="button" className="font-semibold underline">
            Terms apply
          </button>
        </div>
        <button
          type="button"
          className="rounded-lg bg-neutral-100 px-4 py-3 text-sm font-semibold hover:bg-neutral-200"
        >
          Claim
        </button>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg">
        <p className="text-lg text-neutral-900">
          <span className="text-2xl font-semibold underline decoration-1 underline-offset-4">
            ₹28,499
          </span>{" "}
          for 5 nights
        </p>

        <div className="mt-5 overflow-hidden rounded-lg border border-neutral-300">
          <div className="grid grid-cols-2">
            <div className={`${inputClassName} border-r`}>
              <p className="text-[11px] font-bold uppercase">Check-in</p>
              <p className="mt-1">10/18/2026</p>
            </div>
            <div className={inputClassName}>
              <p className="text-[11px] font-bold uppercase">Checkout</p>
              <p className="mt-1">10/23/2026</p>
            </div>
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-between border-t border-neutral-300 px-3 py-3 text-left"
          >
            <span>
              <span className="block text-[11px] font-bold uppercase">Guests</span>
              <span className="mt-1 block text-sm">2 guests</span>
            </span>
            <ChevronDown size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="mt-4 rounded-lg bg-neutral-100 px-3 py-2 text-center text-sm text-neutral-600">
          Free cancellation before <span className="font-semibold text-neutral-900">17 October</span>
        </div>

        <button
          type="button"
          className="mt-4 w-full rounded-full bg-rose-600 py-4 text-base font-semibold text-white hover:bg-rose-700"
        >
          Reserve
        </button>
        <p className="mt-4 text-center text-sm text-neutral-500">You won&apos;t be charged yet</p>
      </div>

      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2 text-sm text-neutral-500 underline"
      >
        <Flag size={15} fill="currentColor" />
        Report this listing
      </button>
    </aside>
  );
}