import { ShareSaveActions } from './ShareSaveActions';

interface ListingHeaderProps {
  title: string;
  onShare?: () => void;
  onSave?: () => void;
}

/**
 * Title + Share/Save row that sits directly above the hero gallery.
 */
export function ListingHeader({ title, onShare, onSave }: ListingHeaderProps) {
  return (
    <div className="flex items-center justify-between pb-4">
      <h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>
      <ShareSaveActions onShare={onShare} onSave={onSave} />
    </div>
  );
}
