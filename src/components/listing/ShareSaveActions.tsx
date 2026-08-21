import { Heart, Share } from 'lucide-react';
import { IconButton } from '../common/IconButton';

interface ShareSaveActionsProps {
  onShare?: () => void;
  onSave?: () => void;
}

export function ShareSaveActions({ onShare, onSave }: ShareSaveActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <IconButton
        icon={<Share size={16} />}
        label="Share"
        underline
        onClick={onShare}
      />
      <IconButton
        icon={<Heart size={16} />}
        label="Save"
        underline
        onClick={onSave}
      />
    </div>
  );
}
