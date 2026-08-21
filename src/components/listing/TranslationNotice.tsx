interface TranslationNoticeProps {
  onShowOriginal?: () => void;
}

/**
 * "Some info has been automatically translated. Show original"
 * Static notice banner — no real translation logic behind it yet.
 */
export function TranslationNotice({ onShowOriginal }: TranslationNoticeProps) {
  return (
    <div className="rounded-xl bg-neutral-100 px-6 py-4 text-sm text-neutral-900">
      Some info has been automatically translated.{' '}
      <button
        type="button"
        onClick={onShowOriginal}
        className="font-medium underline"
      >
        Show original
      </button>
    </div>
  );
}
