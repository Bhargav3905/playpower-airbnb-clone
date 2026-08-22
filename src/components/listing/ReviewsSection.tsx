import { useRef, useState } from "react";
import {
  CheckCircle2,
  KeyRound,
  Map,
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
  { label: "Location", value: "4.8", icon: Map },
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
    avatarBg: "bg-[#fbebe1] text-[#a05423]",
    date: "1 week ago",
    text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
    showMore: false,
  },
  {
    name: "Aheesh",
    tenure: "3 years on Airbnb",
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    initial: "A",
    avatarBg: "bg-emerald-800 text-white",
    date: "2 weeks ago",
    text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
    showMore: true,
  },
  {
    name: "Samiksha",
    tenure: "8 months on Airbnb",
    avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
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
    avatarBg: "bg-[#ede9f6] text-[#6d4cb8]",
    date: "May 2026",
    text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....",
    showMore: true,
  },
  {
    name: "Vaibhav S",
    tenure: "3 years on Airbnb",
    avatarSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
    initial: "V",
    avatarBg: "bg-blue-100 text-blue-900",
    date: "May 2026",
    text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
    showMore: false,
  },
  {
    name: "Mohd",
    tenure: "5 years on Airbnb",
    avatarSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    initial: "M",
    avatarBg: "bg-stone-700 text-white",
    date: "May 2026",
    text: "Great place. Exactly as described in the listing.",
    showMore: false,
  },
];

function RatingBars() {
  return (
    <div className="w-44 shrink-0 pr-4">
      <h3 className="mb-2.5 text-sm font-semibold text-neutral-900">Overall rating</h3>
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

function LaurelBranch({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="56"
      height="84"
      viewBox="0 0 64 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 text-[#222222] ${flip ? "-scale-x-100" : ""}`}
    >
      <defs>
        <linearGradient id="laurelGrad" x1="0" y1="0" x2="64" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#484848" />
          <stop offset="100%" stopColor="#222222" />
        </linearGradient>
      </defs>
      {/* Central Curved Stem */}
      <path
        d="M24 10C18 20 14 36 14 54C14 68 20 80 30 90C31 91 32 90 31.5 89C22 79 17 67 17 54C17 37 21 22 26 12C26.5 11 25 9.5 24 10Z"
        fill="url(#laurelGrad)"
      />
      {/* Top Leaf Pair */}
      <path
        d="M23 10C21 4 25 0 29 0C33 0 35 4 33 9C31 14 26 15 23 10Z"
        fill="url(#laurelGrad)"
      />
      <path
        d="M21 16C16 13 15 8 18 5C21 2 26 4 27 9C28 14 24 18 21 16Z"
        fill="url(#laurelGrad)"
      />
      {/* Upper Leaves */}
      <path
        d="M34 22C38 17 44 18 46 22C48 26 45 31 39 31C33 31 31 26 34 22Z"
        fill="url(#laurelGrad)"
      />
      <path
        d="M16 28C10 26 8 20 12 17C16 14 22 17 23 22C24 27 20 30 16 28Z"
        fill="url(#laurelGrad)"
      />
      {/* Middle Leaves */}
      <path
        d="M38 38C44 34 51 37 53 42C55 47 50 53 44 52C38 51 34 44 38 38Z"
        fill="url(#laurelGrad)"
      />
      <path
        d="M13 46C7 45 4 39 8 35C12 31 19 33 21 39C23 45 18 48 13 46Z"
        fill="url(#laurelGrad)"
      />
      {/* Lower Middle Leaves */}
      <path
        d="M39 56C46 53 53 58 54 64C55 70 49 75 43 73C37 71 34 62 39 56Z"
        fill="url(#laurelGrad)"
      />
      <path
        d="M14 66C8 66 5 60 9 55C13 50 20 52 21 58C22 64 18 67 14 66Z"
        fill="url(#laurelGrad)"
      />
      {/* Bottom Leaves */}
      <path
        d="M36 74C42 73 49 79 48 85C47 91 40 94 35 91C30 88 31 77 36 74Z"
        fill="url(#laurelGrad)"
      />
      <path
        d="M19 82C14 83 10 78 13 72C16 66 23 67 25 73C27 79 23 82 19 82Z"
        fill="url(#laurelGrad)"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="space-y-2.5">
      <div className="flex items-center gap-3">
        {review.avatarSrc ? (
          <img
            src={review.avatarSrc}
            alt={review.name}
            className="h-10 w-10 rounded-full object-cover shrink-0 select-none"
            loading="lazy"
          />
        ) : (
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold select-none ${review.avatarBg}`}
          >
            {review.initial}
          </div>
        )}
        <div>
          <h3 className="text-[15px] font-semibold text-neutral-900 leading-snug">{review.name}</h3>
          <p className="text-[13px] text-neutral-500 font-normal">{review.tenure}</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-neutral-900">
        <div className="flex gap-0.5 text-neutral-900">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <span aria-hidden="true">·</span>
        <span className="font-semibold text-neutral-900">{review.date}</span>
      </div>
      <p className="text-sm leading-relaxed text-neutral-800">{review.text}</p>
      {review.showMore && (
        <button
          type="button"
          className="text-sm font-semibold text-neutral-900 underline underline-offset-2 hover:text-black cursor-pointer"
        >
          Show more
        </button>
      )}
    </article>
  );
}

export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section className="border-t border-neutral-200 py-8">
      {/* Laurel and Score Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-5">
          <LaurelBranch />
          <span className="text-8xl font-bold tracking-tight text-neutral-900 leading-none">
            4.95
          </span>
          <LaurelBranch flip />
        </div>
        <h2 className="mt-3 text-2xl font-semibold text-neutral-900">Guest favourite</h2>
        <p className="mx-auto mt-1.5 max-w-lg text-base text-neutral-600">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button type="button" className="mt-2 text-sm font-semibold text-neutral-900 underline underline-offset-2 hover:text-black cursor-pointer">
          How reviews work
        </button>
      </div>

      {/* Ratings Breakdown Grid */}
      <div className="mt-8 flex flex-col lg:flex-row gap-6 border-b border-neutral-200 pb-8">
        <RatingBars />
        <div className="grid flex-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
          {ratingCategories.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex flex-col justify-between px-4 py-2 first:pl-0">
              <h3 className="text-sm font-semibold text-neutral-900">{label}</h3>
              <p className="mt-3 text-lg font-semibold text-neutral-900">{value}</p>
              <Icon className="mt-2.5 text-neutral-700" size={26} strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>

      {/* Category Pills (Single Horizontal Scrollable Row) */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        className="flex items-center gap-2.5 overflow-x-auto border-b border-neutral-200 py-5 select-none cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {reviewCategories.map(({ emoji, label, count, isCheck }) => (
          <button
            key={label}
            type="button"
            className="shrink-0 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-sm font-semibold text-neutral-900 shadow-2xs transition-all hover:border-neutral-400 hover:bg-neutral-50 active:scale-95 cursor-pointer"
          >
            {isCheck ? (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">
                ✓
              </span>
            ) : (
              <span className="text-sm">{emoji}</span>
            )}
            <span>{label}</span>
            <span className="font-normal text-neutral-500">{count}</span>
          </button>
        ))}
      </div>

      {/* Reviews List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 py-8">
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