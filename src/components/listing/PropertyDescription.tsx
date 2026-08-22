import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface PropertyDescriptionProps {
  text: string;
  onShowMore?: () => void;
}

export function PropertyDescription({ text, onShowMore }: PropertyDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    if (onShowMore) {
      onShowMore();
    }
  };

  return (
    <div className="py-6">
      <div className={`relative overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-none' : 'max-h-[92px]'}`}>
        <p className="whitespace-pre-line text-base leading-relaxed text-neutral-900">
          {text}
        </p>
        {!isExpanded && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent"
          />
        )}
      </div>
      <button
        type="button"
        onClick={handleToggle}
        className="mt-3 flex items-center gap-1 text-base font-semibold text-neutral-900 underline hover:text-black cursor-pointer"
      >
        {isExpanded ? (
          <>
            Show less
            <ChevronRight size={16} strokeWidth={2.5} />
          </>
        ) : (
          <>
            Show more
            <ChevronRight size={16} strokeWidth={2.5} />
          </>
        )}
      </button>
    </div>
  );
}