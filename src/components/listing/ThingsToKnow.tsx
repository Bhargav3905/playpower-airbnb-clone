import { CalendarX2, KeyRound, Shield } from "lucide-react";

const columns = [
  {
    title: "Cancellation policy",
    icon: CalendarX2,
    lines: ["Free cancellation before 17 October. Cancel before", "check-in on 18 October for a partial refund.", "Review this host's full policy for details."],
  },
  {
    title: "House rules",
    icon: KeyRound,
    lines: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"],
  },
  {
    title: "Safety & property",
    icon: Shield,
    lines: ["Carbon monoxide alarm not reported", "Smoke alarm not reported", "Exterior security cameras on property"],
  },
];

export function ThingsToKnow() {
  return (
    <section className="border-t border-neutral-200 py-10">
      <h2 className="text-2xl font-semibold">Things to know</h2>
      <div className="mt-6 grid grid-cols-3 gap-12">
        {columns.map(({ title, icon: Icon, lines }) => (
          <div key={title}>
            <Icon size={26} strokeWidth={1.5} />
            <h3 className="mt-5 text-base font-semibold">{title}</h3>
            <div className="mt-4 space-y-2 text-sm leading-relaxed">
              {lines.map((line) => <p key={line}>{line}</p>)}
            </div>
            <button type="button" className="mt-3 text-sm font-semibold underline">Learn more</button>
          </div>
        ))}
      </div>
    </section>
  );
}