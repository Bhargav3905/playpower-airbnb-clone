import { ChevronLeft, ChevronRight, Keyboard } from "lucide-react";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

function monthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, index) => index + 1)];
}

function Month({
  year,
  month,
  name,
  showLeftArrow,
  showRightArrow,
}: {
  year: number;
  month: number;
  name: string;
  showLeftArrow?: boolean;
  showRightArrow?: boolean;
}) {
  const days = monthDays(year, month);

  return (
    <div className="min-w-0 flex-1">
      <div className="flex items-center justify-between px-1">
        {showLeftArrow ? (
          <button
            type="button"
            aria-label="Previous month"
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-800"
          >
            <ChevronLeft size={18} />
          </button>
        ) : (
          <div className="w-8" />
        )}
        <h3 className="text-center text-sm font-semibold text-neutral-900">
          {name} {year}
        </h3>
        {showRightArrow ? (
          <button
            type="button"
            aria-label="Next month"
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-800"
          >
            <ChevronRight size={18} />
          </button>
        ) : (
          <div className="w-8" />
        )}
      </div>

      <div className="mt-4 grid grid-cols-7 text-center text-xs font-semibold text-neutral-500">
        {weekDays.map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 text-center text-sm">
        {days.map((day, index) => {
          if (day === null) {
            return <span key={`blank-${index}`} className="h-10 w-full" />;
          }

          const isStart = year === 2026 && month === 9 && day === 18;
          const isEnd = year === 2026 && month === 9 && day === 23;
          const inRange = year === 2026 && month === 9 && day > 18 && day < 23;
          const isMuted = year === 2026 && month === 10 && day >= 15;

          return (
            <div
              key={`${name}-${day}`}
              className={`flex h-10 items-center justify-center ${
                inRange
                  ? "bg-neutral-100"
                  : isStart
                  ? "rounded-l-full bg-neutral-100"
                  : isEnd
                  ? "rounded-r-full bg-neutral-100"
                  : ""
              }`}
            >
              <button
                type="button"
                disabled={isMuted}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors ${
                  isStart || isEnd
                    ? "bg-neutral-900 text-white font-bold select-none"
                    : inRange
                    ? "text-neutral-900 font-semibold select-none"
                    : isMuted
                    ? "text-neutral-300 font-normal cursor-default select-none"
                    : "text-neutral-900 font-medium hover:border hover:border-neutral-900 select-none cursor-pointer"
                }`}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AvailabilityCalendar() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold text-neutral-900">5 nights in Candolim</h2>
      <p className="mt-1 text-sm text-neutral-500">18 Oct 2026 - 23 Oct 2026</p>

      <div className="mt-6 flex flex-col sm:flex-row gap-8">
        <Month year={2026} month={9} name="October" showLeftArrow />
        <Month year={2026} month={10} name="November" showRightArrow />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          aria-label="Keyboard shortcuts"
          className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <Keyboard size={18} />
        </button>
        <button
          type="button"
          className="text-sm font-semibold text-neutral-900 underline hover:text-black cursor-pointer"
        >
          Clear dates
        </button>
      </div>
    </section>
  );
}