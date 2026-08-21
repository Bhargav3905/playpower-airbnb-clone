import { ChevronLeft, ChevronRight } from "lucide-react";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

function monthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, index) => index + 1)];
}

function Month({ year, month, name }: { year: number; month: number; name: string }) {
  const days = monthDays(year, month);

  return (
    <div className="min-w-0 flex-1">
      <h3 className="text-center text-base font-semibold">{name} {year}</h3>
      <div className="mt-5 grid grid-cols-7 text-center text-xs font-medium">
        {weekDays.map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}
      </div>
      <div className="mt-3 grid grid-cols-7 gap-y-1 text-center text-sm">
        {days.map((day, index) => {
          const selected = year === 2026 && month === 9 && (day === 18 || day === 23);
          const inRange = year === 2026 && month === 9 && typeof day === "number" && day > 18 && day < 23;
          const disabled = year === 2026 && month === 10 && typeof day === "number" && day >= 18 && day <= 24;

          return (
            <span
              key={`${name}-${day ?? "blank"}-${index}`}
              className={`relative flex h-9 items-center justify-center ${
                inRange ? "bg-neutral-100" : ""
              } ${disabled ? "text-neutral-300 line-through" : ""}`}
            >
              {selected ? (
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-white">
                  {day}
                </span>
              ) : day}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function AvailabilityCalendar() {
  return (
    <section className="border-t border-neutral-200 py-8">
      <h2 className="text-2xl font-semibold text-neutral-900">5 nights in Candolim</h2>
      <p className="mt-1 text-sm text-neutral-500">18 Oct 2026 - 23 Oct 2026</p>

      <div className="mt-6 flex items-center gap-4">
        <button type="button" aria-label="Previous month" className="rounded-full p-2 hover:bg-neutral-100">
          <ChevronLeft size={20} />
        </button>
        <div className="flex min-w-0 flex-1 gap-8">
          <Month year={2026} month={9} name="October" />
          <Month year={2026} month={10} name="November" />
        </div>
        <button type="button" aria-label="Next month" className="rounded-full p-2 hover:bg-neutral-100">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-5 flex justify-end">
        <button type="button" className="text-sm font-semibold underline">Clear dates</button>
      </div>
    </section>
  );
}