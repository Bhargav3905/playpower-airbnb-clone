import { ChevronRight } from 'lucide-react';

interface PropertyDescriptionProps {
  text: string;
  onShowMore?: () => void;
}

/**
 * Listing description paragraph + "Show more" control.
 *
 * The click handler is presentational only for now — we don't have
 * the full expanded copy from the reference (it's cut off in the
 * screenshot), so we're not fabricating additional text. Wiring the
 * real expand/collapse behavior is a follow-up task.
 */
export function PropertyDescription({ text, onShowMore }: PropertyDescriptionProps) {
  return (
    <div className="py-6">
      <p className="whitespace-pre-line text-base leading-relaxed text-neutral-900">
        {text}
      </p>
      <button
        type="button"
        onClick={onShowMore}
        className="mt-4 flex items-center gap-1 text-base font-semibold text-neutral-900 underline"
      >
        Show more
        <ChevronRight size={16} strokeWidth={2.5} />
      </button>
    </div>
  );
}