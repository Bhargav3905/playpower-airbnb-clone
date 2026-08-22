import { Heart, Share } from 'lucide-react';

interface ShareSaveActionsProps {
  onShare?: () => void;
  onSave?: () => void;
  isSaved?: boolean;
}

export function ShareSaveActions({ onShare, onSave, isSaved = false }: ShareSaveActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onShare}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-neutral-900 underline underline-offset-2 hover:bg-neutral-100 transition-colors cursor-pointer"
      >
        <Share size={16} />
        <span>Share</span>
      </button>

      <button
        type="button"
        onClick={onSave}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-neutral-900 underline underline-offset-2 hover:bg-neutral-100 transition-all cursor-pointer select-none"
      >
        <Heart
          size={16}
          className={`transition-colors duration-200 ${
            isSaved ? "fill-[#E00B41] text-[#E00B41]" : "text-neutral-900"
          }`}
        />
        <span>{isSaved ? "Saved" : "Save"}</span>
      </button>
    </div>
  );
}
