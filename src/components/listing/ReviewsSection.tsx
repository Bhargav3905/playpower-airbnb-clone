import {
  Check,
  CheckCircle2,
  KeyRound,
  Leaf,
  Map,
  MessageCircle,
  Sparkles,
  Tag,
} from "lucide-react";

const ratingCategories = [
  { label: "Cleanliness", value: "5.0", icon: Sparkles },
  { label: "Accuracy", value: "5.0", icon: CheckCircle2 },
  { label: "Check-in", value: "5.0", icon: KeyRound },
  { label: "Communication", value: "5.0", icon: MessageCircle },
  { label: "Location", value: "4.8", icon: Map },
  { label: "Value", value: "4.8", icon: Tag },
];

const reviewCategories = [
  ["Comfort", 6],
  ["Accuracy", 5],
  ["Hot tub", 5],
  ["Condition", 4],
  ["Hospitality", 8],
  ["Cleanliness", 4],
  ["Amenities", 2],
  ["Decor", 2],
  ["Indoor spaces", 2],
  ["Location", 2],
];

const reviews = [
  {
    name: "Amit",
    tenure: "2 months on Airbnb",
    initial: "A",
    date: "October 2025",
    text: "A comfortable place to stay with everything needed for a relaxing visit.",
    showMore: true,
  },
  {
    name: "Aheesh",
    tenure: "3 years on Airbnb",
    initial: "A",
    date: "September 2025",
    text: "A lovely home in a convenient location. The stay was comfortable and easy.",
    showMore: false,
  },
];

function RatingBars() {
  return (
    <div className="w-48 shrink-0">
      <h3 className="mb-4 text-sm font-semibold">Overall rating</h3>
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center gap-2 text-xs">
            <span className="w-3">{rating}</span>
            <div className="h-1 flex-1 rounded-full bg-neutral-200">
              <div className={`h-1 rounded-full bg-neutral-800 ${rating === 5 ? "w-[95%]" : "w-[4%]"}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-lg font-medium text-orange-700">
          {review.initial}
        </div>
        <div>
          <h3 className="text-base font-semibold">{review.name}</h3>
          <p className="text-sm text-neutral-500">{review.tenure}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm">
        <span className="flex items-center gap-1 font-semibold">
          <Check size={14} strokeWidth={3} /> 5
        </span>
        <span aria-hidden="true">·</span>
        <span>{review.date}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-800">{review.text}</p>
      {review.showMore && (
        <button type="button" className="mt-2 text-sm font-semibold underline">Show more</button>
      )}
    </article>
  );
}

export function ReviewsSection() {
  return (
    <section className="border-t border-neutral-200 py-10">
      <div className="text-center">
        <div className="flex items-center justify-center gap-5">
          <div className="flex -scale-x-100 flex-col gap-1 text-neutral-700">
            <Leaf size={32} fill="currentColor" strokeWidth={1.5} />
            <Leaf className="-mt-3 ml-3" size={27} fill="currentColor" strokeWidth={1.5} />
            <Leaf className="-mt-3 ml-5" size={22} fill="currentColor" strokeWidth={1.5} />
          </div>
          <span className="text-7xl font-semibold tracking-tight">4.95</span>
          <div className="flex flex-col gap-1 text-neutral-700">
            <Leaf size={32} fill="currentColor" strokeWidth={1.5} />
            <Leaf className="-mt-3 ml-3" size={27} fill="currentColor" strokeWidth={1.5} />
            <Leaf className="-mt-3 ml-5" size={22} fill="currentColor" strokeWidth={1.5} />
          </div>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Guest favourite</h2>
        <p className="mx-auto mt-2 max-w-xl text-base leading-relaxed">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button type="button" className="mt-3 text-base font-semibold underline">How reviews work</button>
      </div>

      <div className="mt-12 flex gap-6 border-b border-neutral-200 pb-10">
        <RatingBars />
        <div className="grid flex-1 grid-cols-3">
          {ratingCategories.map(({ label, value, icon: Icon }, index) => (
            <div
              key={label}
              className={`min-h-28 px-6 ${index > 0 ? "border-l border-neutral-200" : ""}`}
            >
              <h3 className="text-sm font-semibold">{label}</h3>
              <p className="mt-4 text-lg">{value}</p>
              <Icon className="mt-2" size={31} strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 border-b border-neutral-200 py-10">
        {reviewCategories.map(([label, count]) => (
          <button
            key={label}
            type="button"
            className="rounded-full border border-neutral-200 px-4 py-3 text-sm font-semibold shadow-sm hover:border-neutral-400"
          >
            <span className="mr-2">{label === "Comfort" ? "🛏️" : label === "Hot tub" ? "🛁" : "✓"}</span>
            {label} <span className="font-normal text-neutral-500">{count}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-16 gap-y-12 py-10">
        {reviews.map((review) => <ReviewCard key={review.name} review={review} />)}
      </div>

      <button type="button" className="rounded-lg border border-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-neutral-50">
        Show all 19 reviews
      </button>
    </section>
  );
}