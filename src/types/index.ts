export type PhotoCategory =
  | 'Living Room 1'
  | 'Living Room 2'
  | 'Full Kitchen'
  | 'Bedroom'
  | 'Full Bathroom'
  | 'Gym'
  | 'Exterior'
  | 'Pool'
  | 'Additional Photos';

export interface Photo {
  id: string;
  src: string;
  category: PhotoCategory;
  categoryIndex: number;
  globalIndex: number;
}