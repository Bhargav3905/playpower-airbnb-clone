import { useState, useEffect } from "react";

interface StickyNavProps {
  price?: string;
  rating?: number;
  reviewsCount?: number;
  onReserve?: () => void;
}

export function StickyNav({
  price = "₹28,499",
  rating = 4.95,
  reviewsCount = 19,
  onReserve,
}: StickyNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<"photos" | "amenities" | "reviews" | "location">("photos");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show sticky nav once scrolled past the hero gallery (around 500px)
      setIsVisible(scrollPosition > 520);

      // Determine active section based on scroll offsets
      const amenitiesEl = document.getElementById("amenities");
      const reviewsEl = document.getElementById("reviews");
      const locationEl = document.getElementById("location");

      const locationTop = locationEl ? locationEl.offsetTop - 120 : Infinity;
      const reviewsTop = reviewsEl ? reviewsEl.offsetTop - 120 : Infinity;
      const amenitiesTop = amenitiesEl ? amenitiesEl.offsetTop - 120 : Infinity;

      if (scrollPosition >= locationTop) {
        setActiveSection("location");
      } else if (scrollPosition >= reviewsTop) {
        setActiveSection("reviews");
      } else if (scrollPosition >= amenitiesTop) {
        setActiveSection("amenities");
      } else {
        setActiveSection("photos");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "photos") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      aria-label="In-page navigation"
      className="fixed top-0 left-0 z-40 w-full border-b border-neutral-200 bg-white shadow-xs transition-all duration-200"
    >
      <div className="mx-auto flex h-20 max-w-[1120px] items-center justify-between px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex h-full items-center gap-6 text-sm font-semibold text-neutral-800">
          <button
            type="button"
            onClick={() => scrollTo("photos")}
            className={`relative flex h-full items-center transition-colors hover:text-black ${
              activeSection === "photos" ? "text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black" : ""
            }`}
          >
            Photos
          </button>
          <button
            type="button"
            onClick={() => scrollTo("amenities")}
            className={`relative flex h-full items-center transition-colors hover:text-black ${
              activeSection === "amenities" ? "text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black" : ""
            }`}
          >
            Amenities
          </button>
          <button
            type="button"
            onClick={() => scrollTo("reviews")}
            className={`relative flex h-full items-center transition-colors hover:text-black ${
              activeSection === "reviews" ? "text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black" : ""
            }`}
          >
            Reviews
          </button>
          <button
            type="button"
            onClick={() => scrollTo("location")}
            className={`relative flex h-full items-center transition-colors hover:text-black ${
              activeSection === "location" ? "text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black" : ""
            }`}
          >
            Location
          </button>
        </div>

        {/* Right Sticky Reserve summary pill */}
        <div className="flex items-center gap-4">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-neutral-900">
              {price} <span className="font-normal text-neutral-500">for 5 nights</span>
            </p>
            <p className="text-xs text-neutral-800">
              <span className="font-semibold">★ {rating.toFixed(2)}</span>
              <span className="text-neutral-500"> · {reviewsCount} reviews</span>
            </p>
          </div>
          <button
            type="button"
            onClick={onReserve}
            className="rounded-full bg-[#E00B5E] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#D70466] active:scale-95 cursor-pointer shadow-xs"
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
}
