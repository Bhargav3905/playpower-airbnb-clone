import {
  CheckCircle2,
  KeyRound,
  MapPin,
  MessageCircle,
  Sparkles,
  Tag,
  Star,
} from "lucide-react";

const ratingCategories = [
  { label: "Cleanliness", value: "5.0", icon: Sparkles },
  { label: "Accuracy", value: "5.0", icon: CheckCircle2 },
  { label: "Check-in", value: "5.0", icon: KeyRound },
  { label: "Communication", value: "5.0", icon: MessageCircle },
  { label: "Location", value: "4.8", icon: MapPin },
  { label: "Value", value: "4.8", icon: Tag },
];

const reviewCategories = [
  { emoji: "🛏️", label: "Comfort", count: 6 },
  { emoji: "✓", label: "Accuracy", count: 5, isCheck: true },
  { emoji: "🛁", label: "Hot tub", count: 5 },
  { emoji: "🎂", label: "Condition", count: 4 },
  { emoji: "🎁", label: "Hospitality", count: 8 },
  { emoji: "🧹", label: "Cleanliness", count: 4 },
  { emoji: "🧼", label: "Amenities", count: 2 },
  { emoji: "🖼️", label: "Decor", count: 2 },
  { emoji: "🏠", label: "Indoor spaces", count: 2 },
  { emoji: "📍", label: "Location", count: 2 },
];

const reviews = [
  {
    name: "Amit",
    tenure: "2 months on Airbnb",
    initial: "A",
    avatarBg: "bg-amber-100 text-amber-900",
    date: "1 week ago",
    text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
    showMore: false,
  },
  {
    name: "Aheesh",
    tenure: "3 years on Airbnb",
    initial: "A",
    avatarBg: "bg-emerald-800 text-white",
    date: "2 weeks ago",
    text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
    showMore: true,
  },
  {
    name: "Samiksha",
    tenure: "8 months on Airbnb",
    initial: "S",
    avatarBg: "bg-rose-100 text-rose-900",
    date: "May 2026",
    text: "the host nitish was really great help",
    showMore: false,
  },
  {
    name: "Vedant",
    tenure: "4 years on Airbnb",
    initial: "V",
    avatarBg: "bg-purple-100 text-purple-900",
    date: "May 2026",
    text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....",
    showMore: true,
  },
  {
    name: "Vaibhav S",
    tenure: "3 years on Airbnb",
    initial: "V",
    avatarBg: "bg-blue-100 text-blue-900",
    date: "May 2026",
    text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
    showMore: false,
  },
  {
    name: "Mohd",
    tenure: "5 years on Airbnb",
    initial: "M",
    avatarBg: "bg-stone-700 text-white",
    date: "May 2026",
    text: "Great place. Exactly as described in the listing.",
    showMore: false,
  },
];

function RatingBars() {
  return (
    <div className="w-48 shrink-0 pr-6">
      <h3 className="mb-3 text-sm font-semibold text-neutral-900">Overall rating</h3>
      <div className="space-y-1.5">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center gap-2 text-xs text-neutral-600 font-medium">
            <span className="w-2">{rating}</span>
            <div className="h-1 flex-1 rounded-full bg-neutral-200">
              <div
                className={`h-1 rounded-full bg-neutral-900 ${
                  rating === 5 ? "w-[95%]" : rating === 4 ? "w-[5%]" : "w-0"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="space-y-3">
      <div className="flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold ${review.avatarBg}`}>
          {review.initial}
        </div>
        <div>
          <h3 className="text-base font-semibold text-neutral-900">{review.name}</h3>
          <p className="text-sm text-neutral-500">{review.tenure}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-neutral-900">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <span aria-hidden="true">·</span>
        <span className="font-semibold text-xs text-neutral-800">{review.date}</span>
      </div>
      <p className="text-sm leading-relaxed text-neutral-800">{review.text}</p>
      {review.showMore && (
        <button type="button" className="text-sm font-semibold text-neutral-900 underline cursor-pointer">
          Show more
        </button>
      )}
    </article>
  );
}

export function ReviewsSection() {
  return (
    <section className="border-t border-neutral-200 py-12">
      {/* Laurel and Score Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-6">
          <svg width="44" height="68" viewBox="0 0 44 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-800">
            <path d="M14.5 7C12 9.8 10 13.2 8.6 17C7 20.8 6 25 6 29.4C6 38 9.6 46 15.6 51.6C16.4 52.4 16.6 53.6 15.8 54.4C15 55.2 13.8 55.4 13 54.6C6.2 48.2 2 39.2 2 29.4C2 24.4 3.2 19.6 5 15.4C6.6 11 9.2 7.2 12.2 4C13 3.2 14.2 3.2 15 4C15.8 4.8 15.8 6 15 6.8L14.5 7Z" fill="currentColor"/>
            <path d="M22 12C22 16.4 18.4 20 14 20C12.8 20 11.8 19.6 10.8 19.2C12.6 15.4 15.4 12.2 18.8 9.8C20.8 10.2 22 11 22 12Z" fill="currentColor"/>
            <path d="M24 24C24 28.4 20.4 32 16 32C14.4 32 13 31.6 11.8 30.6C12 27.6 12.8 24.6 14.2 22C17.2 22.2 20.6 22.4 24 24Z" fill="currentColor"/>
            <path d="M24 36C24 40.4 20.4 44 16 44C14.8 44 13.6 43.6 12.6 43.2C13.4 39.8 14.8 36.6 16.6 33.8C19.4 34.2 22 34.8 24 36Z" fill="currentColor"/>
          </svg>
          <span className="text-8xl font-bold tracking-tight text-neutral-900 leading-none">4.95</span>
          <svg width="44" height="68" viewBox="0 0 44 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="-scale-x-100 text-neutral-800">
            <path d="M14.5 7C12 9.8 10 13.2 8.6 17C7 20.8 6 25 6 29.4C6 38 9.6 46 15.6 51.6C16.4 52.4 16.6 53.6 15.8 54.4C15 55.2 13.8 55.4 13 54.6C6.2 48.2 2 39.2 2 29.4C2 24.4 3.2 19.6 5 15.4C6.6 11 9.2 7.2 12.2 4C13 3.2 14.2 3.2 15 4C15.8 4.8 15.8 6 15 6.8L14.5 7Z" fill="currentColor"/>
            <path d="M22 12C22 16.4 18.4 20 14 20C12.8 20 11.8 19.6 10.8 19.2C12.6 15.4 15.4 12.2 18.8 9.8C20.8 10.2 22 11 22 12Z" fill="currentColor"/>
            <path d="M24 24C24 28.4 20.4 32 16 32C14.4 32 13 31.6 11.8 30.6C12 27.6 12.8 24.6 14.2 22C17.2 22.2 20.6 22.4 24 24Z" fill="currentColor"/>
            <path d="M24 36C24 40.4 20.4 44 16 44C14.8 44 13.6 43.6 12.6 43.2C13.4 39.8 14.8 36.6 16.6 33.8C19.4 34.2 22 34.8 24 36Z" fill="currentColor"/>
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-neutral-900">Guest favourite</h2>
        <p className="mx-auto mt-2 max-w-lg text-base text-neutral-600">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button type="button" className="mt-2 text-sm font-semibold text-neutral-900 underline cursor-pointer">
          How reviews work
        </button>
      </div>

      {/* Ratings Breakdown Grid */}
      <div className="mt-10 flex flex-col lg:flex-row gap-6 border-b border-neutral-200 pb-10">
        <RatingBars />
        <div className="grid flex-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
          {ratingCategories.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex flex-col justify-between px-4 py-2 first:pl-0">
              <h3 className="text-sm font-semibold text-neutral-900">{label}</h3>
              <p className="mt-4 text-lg font-semibold text-neutral-900">{value}</p>
              <Icon className="mt-3 text-neutral-700" size={28} strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2.5 border-b border-neutral-200 py-8">
        {reviewCategories.map(({ emoji, label, count, isCheck }) => (
          <button
            key={label}
            type="button"
            className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-xs transition-all hover:border-neutral-400 hover:bg-neutral-50 active:scale-95 cursor-pointer"
          >
            {isCheck ? (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">
                ✓
              </span>
            ) : (
              <span>{emoji}</span>
            )}
            <span>{label}</span>
            <span className="font-normal text-neutral-500">{count}</span>
          </button>
        ))}
      </div>

      {/* Reviews List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 py-10">
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>

      <button
        type="button"
        className="rounded-lg border border-neutral-900 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 active:scale-95 cursor-pointer"
      >
        Show all 19 reviews
      </button>
    </section>
  );
}