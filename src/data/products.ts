export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}
export const productImages = {
  chairs: {
    sakarias: "/images/products/chair-1.png",
    baltsar: "/images/products/chair-2.png",
    anjay: "/images/products/chair-3.png",
    nyantuy: "/images/products/chair-4.png",
    
  },
} as const;

export const products: Product[] = [
  {
    id: "1",
    name: "Sakarias Armchair",
    category: "Chair",
    price: 392,
    rating: 5,
    image: productImages.chairs.sakarias
  },
  {
    id: "2",
    name: "Baltsar Chair",
    category: "Chair",
    price: 299,
    rating: 5,
    image: productImages.chairs.baltsar
  },
  {
    id: "3",
    name: "Anjay Chair",
    category: "Chair",
    price: 519,
    rating: 5,
    image: productImages.chairs.anjay
  },
  {
    id: "4",
    name: "Nyantuy Chair",
    category: "Chair",
    price: 921,
    rating: 5,
    image:productImages.chairs.nyantuy
  },
  {
    id: "5",
    name: "Sakarias Armchair",
    category: "Chair",
    price: 392,
    rating: 5,
    image: productImages.chairs.sakarias
  }
];