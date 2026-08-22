import { CalendarX2, Key, Shield } from "lucide-react";

const columns = [
  {
    title: "Cancellation policy",
    icon: CalendarX2,
    lines: [
      "Free cancellation before 17 October.",
      "Cancel before check-in on 18 October for a partial refund.",
      "Review this host's full policy for details.",
    ],
  },
  {
    title: "House rules",
    icon: Key,
    lines: [
      "Check-in after 2:00 pm",
      "Checkout before 11:00 am",
      "3 guests maximum",
    ],
  },
  {
    title: "Safety & property",
    icon: Shield,
    lines: [
      "Carbon monoxide alarm not reported",
      "Smoke alarm not reported",
      "Exterior security cameras on property",
    ],
  },
];

export function ThingsToKnow() {
  return (
    <section className="border-t border-neutral-200 py-12">
      <h2 className="text-2xl font-semibold text-neutral-900">Things to know</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {columns.map(({ title, icon: Icon, lines }) => (
          <div key={title} className="flex flex-col justify-between">
            <div>
              <Icon size={24} className="text-neutral-800" strokeWidth={1.5} />
              <h3 className="mt-3 text-[15px] font-semibold text-neutral-900">{title}</h3>
              <div className="mt-2 space-y-1 text-sm text-neutral-600 leading-relaxed">
                {lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="mt-3.5 self-start text-sm font-semibold text-neutral-900 underline underline-offset-2 hover:text-black cursor-pointer"
            >
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}