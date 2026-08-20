import type { Photo, PhotoCategory } from "../types/index.ts";

import img1 from "../assets/photos/livingroom1_1_1.avif";
import img2 from "../assets/photos/livingroom1_2_2.avif";
import img3 from "../assets/photos/livingroom1_3_3.avif";
import img4 from "../assets/photos/livingroom2_1_4.avif";
import img5 from "../assets/photos/livingroom2_2_5.avif";
import img6 from "../assets/photos/livingroom2_3_6.avif";
import img7 from "../assets/photos/livingroom2_4_7.avif";
import img8 from "../assets/photos/livingroom2_5_8.avif";
import img9 from "../assets/photos/livingroom2_6_9.avif";
import img10 from "../assets/photos/livingroom2_7_10.avif";
import img11 from "../assets/photos/fullkitchen_1_11.avif";
import img12 from "../assets/photos/fullkitchen_2_12.avif";
import img13 from "../assets/photos/bedroom_1_13.avif";
import img14 from "../assets/photos/bedroom_2_14.avif";
import img15 from "../assets/photos/bedroom_3_15.avif";
import img16 from "../assets/photos/bedroom_4_16.avif";
import img17 from "../assets/photos/bedroom_5_17.avif";
import img18 from "../assets/photos/bedroom_6_18.avif";
import img19 from "../assets/photos/fullbathroom_1_19.avif";
import img20 from "../assets/photos/gym_1_20.avif";
import img21 from "../assets/photos/gym_2_21.avif";
import img22 from "../assets/photos/gym_3_22.avif";
import img23 from "../assets/photos/gym_4_23.avif";
import img24 from "../assets/photos/gym_5_24.avif";
import img25 from "../assets/photos/exterior_1_25.avif";
import img26 from "../assets/photos/exterior_2_26.avif";
import img27 from "../assets/photos/exterior_3_27.avif";
import img28 from "../assets/photos/exterior_4_28.avif";
import img29 from "../assets/photos/exterior_5_29.avif";
import img30 from "../assets/photos/exterior_6_30.avif";
import img31 from "../assets/photos/pool_1_31.avif";
import img32 from "../assets/photos/pool_2_32.avif";
import img33 from "../assets/photos/pool_3_33.avif";
import img34 from "../assets/photos/additional_photos_1_34.avif";
import img35 from "../assets/photos/additional_photos_2_35.avif";
import img36 from "../assets/photos/additional_photos_3_36.avif";
import img37 from "../assets/photos/additional_photos_4_37.avif";
import img38 from "../assets/photos/additional_photos_5_38.avif";
import img39 from "../assets/photos/additional_photos_6_39.avif";
import img40 from "../assets/photos/additional_photos_7_40.avif";
import img41 from "../assets/photos/additional_photos_8_41.avif";
import img42 from "../assets/photos/additional_photos_9_42.avif";
import img43 from "../assets/photos/additional_photos_10_43.avif";

// Single ordered source of truth for all 43 property photos.
// Order is fixed by design (see globalIndex) and mirrors the
// category ranges: 1-3 Living Room 1, 4-10 Living Room 2,
// 11-12 Full Kitchen, 13-18 Bedroom, 19 Full Bathroom,
// 20-24 Gym, 25-30 Exterior, 31-33 Pool, 34-43 Additional Photos.
export const photos: Photo[] = [
  {
    id: "livingroom1-1",
    src: img1,
    category: "Living Room 1",
    categoryIndex: 1,
    globalIndex: 1,
  },
  {
    id: "livingroom1-2",
    src: img2,
    category: "Living Room 1",
    categoryIndex: 2,
    globalIndex: 2,
  },
  {
    id: "livingroom1-3",
    src: img3,
    category: "Living Room 1",
    categoryIndex: 3,
    globalIndex: 3,
  },
  {
    id: "livingroom2-1",
    src: img4,
    category: "Living Room 2",
    categoryIndex: 1,
    globalIndex: 4,
  },
  {
    id: "livingroom2-2",
    src: img5,
    category: "Living Room 2",
    categoryIndex: 2,
    globalIndex: 5,
  },
  {
    id: "livingroom2-3",
    src: img6,
    category: "Living Room 2",
    categoryIndex: 3,
    globalIndex: 6,
  },
  {
    id: "livingroom2-4",
    src: img7,
    category: "Living Room 2",
    categoryIndex: 4,
    globalIndex: 7,
  },
  {
    id: "livingroom2-5",
    src: img8,
    category: "Living Room 2",
    categoryIndex: 5,
    globalIndex: 8,
  },
  {
    id: "livingroom2-6",
    src: img9,
    category: "Living Room 2",
    categoryIndex: 6,
    globalIndex: 9,
  },
  {
    id: "livingroom2-7",
    src: img10,
    category: "Living Room 2",
    categoryIndex: 7,
    globalIndex: 10,
  },
  {
    id: "fullkitchen-1",
    src: img11,
    category: "Full Kitchen",
    categoryIndex: 1,
    globalIndex: 11,
  },
  {
    id: "fullkitchen-2",
    src: img12,
    category: "Full Kitchen",
    categoryIndex: 2,
    globalIndex: 12,
  },
  {
    id: "bedroom-1",
    src: img13,
    category: "Bedroom",
    categoryIndex: 1,
    globalIndex: 13,
  },
  {
    id: "bedroom-2",
    src: img14,
    category: "Bedroom",
    categoryIndex: 2,
    globalIndex: 14,
  },
  {
    id: "bedroom-3",
    src: img15,
    category: "Bedroom",
    categoryIndex: 3,
    globalIndex: 15,
  },
  {
    id: "bedroom-4",
    src: img16,
    category: "Bedroom",
    categoryIndex: 4,
    globalIndex: 16,
  },
  {
    id: "bedroom-5",
    src: img17,
    category: "Bedroom",
    categoryIndex: 5,
    globalIndex: 17,
  },
  {
    id: "bedroom-6",
    src: img18,
    category: "Bedroom",
    categoryIndex: 6,
    globalIndex: 18,
  },
  {
    id: "fullbathroom-1",
    src: img19,
    category: "Full Bathroom",
    categoryIndex: 1,
    globalIndex: 19,
  },
  {
    id: "gym-1",
    src: img20,
    category: "Gym",
    categoryIndex: 1,
    globalIndex: 20,
  },
  {
    id: "gym-2",
    src: img21,
    category: "Gym",
    categoryIndex: 2,
    globalIndex: 21,
  },
  {
    id: "gym-3",
    src: img22,
    category: "Gym",
    categoryIndex: 3,
    globalIndex: 22,
  },
  {
    id: "gym-4",
    src: img23,
    category: "Gym",
    categoryIndex: 4,
    globalIndex: 23,
  },
  {
    id: "gym-5",
    src: img24,
    category: "Gym",
    categoryIndex: 5,
    globalIndex: 24,
  },
  {
    id: "exterior-1",
    src: img25,
    category: "Exterior",
    categoryIndex: 1,
    globalIndex: 25,
  },
  {
    id: "exterior-2",
    src: img26,
    category: "Exterior",
    categoryIndex: 2,
    globalIndex: 26,
  },
  {
    id: "exterior-3",
    src: img27,
    category: "Exterior",
    categoryIndex: 3,
    globalIndex: 27,
  },
  {
    id: "exterior-4",
    src: img28,
    category: "Exterior",
    categoryIndex: 4,
    globalIndex: 28,
  },
  {
    id: "exterior-5",
    src: img29,
    category: "Exterior",
    categoryIndex: 5,
    globalIndex: 29,
  },
  {
    id: "exterior-6",
    src: img30,
    category: "Exterior",
    categoryIndex: 6,
    globalIndex: 30,
  },
  {
    id: "pool-1",
    src: img31,
    category: "Pool",
    categoryIndex: 1,
    globalIndex: 31,
  },
  {
    id: "pool-2",
    src: img32,
    category: "Pool",
    categoryIndex: 2,
    globalIndex: 32,
  },
  {
    id: "pool-3",
    src: img33,
    category: "Pool",
    categoryIndex: 3,
    globalIndex: 33,
  },
  {
    id: "additional_photos-1",
    src: img34,
    category: "Additional Photos",
    categoryIndex: 1,
    globalIndex: 34,
  },
  {
    id: "additional_photos-2",
    src: img35,
    category: "Additional Photos",
    categoryIndex: 2,
    globalIndex: 35,
  },
  {
    id: "additional_photos-3",
    src: img36,
    category: "Additional Photos",
    categoryIndex: 3,
    globalIndex: 36,
  },
  {
    id: "additional_photos-4",
    src: img37,
    category: "Additional Photos",
    categoryIndex: 4,
    globalIndex: 37,
  },
  {
    id: "additional_photos-5",
    src: img38,
    category: "Additional Photos",
    categoryIndex: 5,
    globalIndex: 38,
  },
  {
    id: "additional_photos-6",
    src: img39,
    category: "Additional Photos",
    categoryIndex: 6,
    globalIndex: 39,
  },
  {
    id: "additional_photos-7",
    src: img40,
    category: "Additional Photos",
    categoryIndex: 7,
    globalIndex: 40,
  },
  {
    id: "additional_photos-8",
    src: img41,
    category: "Additional Photos",
    categoryIndex: 8,
    globalIndex: 41,
  },
  {
    id: "additional_photos-9",
    src: img42,
    category: "Additional Photos",
    categoryIndex: 9,
    globalIndex: 42,
  },
  {
    id: "additional_photos-10",
    src: img43,
    category: "Additional Photos",
    categoryIndex: 10,
    globalIndex: 43,
  },
];

// ---- Derived helpers ----

export const totalPhotos: number = photos.length;

export const photosByCategory: Record<PhotoCategory, Photo[]> = photos.reduce(
  (acc, photo) => {
    (acc[photo.category] ??= []).push(photo);
    return acc;
  },
  {} as Record<PhotoCategory, Photo[]>,
);

export const categoryOrder: PhotoCategory[] = [
  "Living Room 1",
  "Living Room 2",
  "Full Kitchen",
  "Bedroom",
  "Full Bathroom",
  "Gym",
  "Exterior",
  "Pool",
  "Additional Photos",
];

export function getPhotoByGlobalIndex(globalIndex: number): Photo | undefined {
  return photos.find((p) => p.globalIndex === globalIndex);
}

export function getPhotosForCategory(category: PhotoCategory): Photo[] {
  return photosByCategory[category] ?? [];
}
