import { HighlightItem } from './HighlightItem';
import type { ListingHighlight } from './types';

interface ListingHighlightsProps {
  highlights: ListingHighlight[];
}

export function ListingHighlights({ highlights }: ListingHighlightsProps) {
  return (
    <div className="flex flex-col gap-6 py-6">
      {highlights.map((highlight) => (
        <HighlightItem
          key={highlight.title}
          icon={highlight.icon}
          title={highlight.title}
          description={highlight.description}
        />
      ))}
    </div>
  );
}
