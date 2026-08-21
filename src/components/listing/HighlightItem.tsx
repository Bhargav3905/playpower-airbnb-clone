import type { LucideIcon } from 'lucide-react';

interface HighlightItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function HighlightItem({ icon: Icon, title, description }: HighlightItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Icon size={26} className="mt-0.5 shrink-0 text-neutral-800" strokeWidth={1.5} />
      <div>
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
    </div>
  );
}
