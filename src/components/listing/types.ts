import type { LucideIcon } from 'lucide-react';

export interface ListingHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Amenity {
  icon: LucideIcon;
  label: string;
  available: boolean;
}