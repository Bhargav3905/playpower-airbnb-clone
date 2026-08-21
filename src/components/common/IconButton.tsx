import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label?: string;
  underline?: boolean;
}

/**
 * Generic icon (+ optional label) button.
 * Used for things like Share / Save on the listing page and the
 * globe / menu controls in the navbar.
 */
export function IconButton({
  icon,
  label,
  underline = false,
  className = '',
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors ${className}`}
      {...rest}
    >
      {icon}
      {label && (
        <span className={underline ? 'underline' : undefined}>{label}</span>
      )}
    </button>
  );
}
