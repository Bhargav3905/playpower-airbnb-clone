interface TranslationNoticeProps {
  isOriginal?: boolean;
  onToggleOriginal?: () => void;
  onShowOriginal?: () => void;
}

export function TranslationNotice({
  isOriginal = false,
  onToggleOriginal,
  onShowOriginal,
}: TranslationNoticeProps) {
  const handleClick = () => {
    if (onToggleOriginal) {
      onToggleOriginal();
    } else if (onShowOriginal) {
      onShowOriginal();
    }
  };

  return (
    <div className="rounded-xl bg-neutral-100 px-4 py-3.5 text-sm text-neutral-900">
      {isOriginal ? (
        <>
          Showing original description.{' '}
          <button
            type="button"
            onClick={handleClick}
            className="font-semibold underline hover:text-black cursor-pointer"
          >
            Show translation
          </button>
        </>
      ) : (
        <>
          Some info has been automatically translated.{' '}
          <button
            type="button"
            onClick={handleClick}
            className="font-semibold underline hover:text-black cursor-pointer"
          >
            Show original
          </button>
        </>
      )}
    </div>
  );
}
