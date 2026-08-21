interface PropertySummaryProps {
  subtitle: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

/**
 * "Entire serviced apartment in Candolim, India"
 * "3 guests · 1 bedroom · 1 bed · 1 bathroom"
 */
export function PropertySummary({
  subtitle,
  guests,
  bedrooms,
  beds,
  bathrooms,
}: PropertySummaryProps) {
  const details = [
    `${guests} guest${guests === 1 ? '' : 's'}`,
    `${bedrooms} bedroom${bedrooms === 1 ? '' : 's'}`,
    `${beds} bed${beds === 1 ? '' : 's'}`,
    `${bathrooms} bathroom${bathrooms === 1 ? '' : 's'}`,
  ].join(' · ');

  return (
    <div className="pb-6">
      <h2 className="text-xl font-semibold text-neutral-900">{subtitle}</h2>
      <p className="mt-1 text-base text-neutral-900">{details}</p>
    </div>
  );
}
