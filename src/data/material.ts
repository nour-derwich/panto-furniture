export interface Material {
  id: number;
  image: string;
  alt: string;
  isLarge?: boolean;
}

export const materials: Material[] = [
  {
    id: 1,
    image: "/images/material1.png",
    alt: "Premium furniture material 1",
  },
  {
    id: 2,
    image: "/images/material2.png",
    alt: "Premium furniture material 2",
  },
  {
    id: 3,
    image: "/images/material3.png",
    alt: "Premium furniture material 3",
    isLarge: true,
  },
];