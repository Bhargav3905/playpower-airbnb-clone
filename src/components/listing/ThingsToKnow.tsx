import { CalendarX2, ChevronRight, Clock, Shield } from "lucide-react";

const columns = [
  {
    title: "Cancellation policy",
    icon: CalendarX2,
    lines: [
      "Free cancellation before 17 October.",
      "Cancel before check-in on 18 October for a partial refund.",
      "Review this host's full policy for details.",
    ],
    action: "Show more",
  },
  {
    title: "House rules",
    icon: Clock,
    lines: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"],
    action: "Show more",
  },
  {
    title: "Safety & property",
    icon: Shield,
    lines: [
      "Carbon monoxide alarm not reported",
      "Smoke alarm not reported",
      "Exterior security cameras on property",
    ],
    action: "Show more",
  },
];

export function ThingsToKnow() {
  return (
    <section className="border-t border-neutral-200 py-12">
      <h2 className="text-2xl font-semibold text-neutral-900">Things to know</h2>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {columns.map(({ title, icon: Icon, lines, action }) => (
          <div key={title} className="flex flex-col justify-between">
            <div>
              <Icon size={24} className="text-neutral-800" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-semibold text-neutral-900">{title}</h3>
              <div className="mt-3 space-y-1.5 text-sm text-neutral-600 leading-relaxed">
                {lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="mt-4 flex items-center gap-1 text-sm font-semibold text-neutral-900 underline hover:text-black cursor-pointer"
            >
              {action}
              <ChevronRight size={14} strokeWidth={2.5} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}