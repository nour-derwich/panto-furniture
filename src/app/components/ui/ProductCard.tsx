"use client";

import { Plus } from "lucide-react";
import { formatPrice, generateStars } from "@/lib/utils";
import { useCart } from "@/app/context/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 flex flex-col h-full">
      {/* Image Container - Fixed Height */}
      <div className="relative bg-[#FAFAFA] flex-grow-0">
        <div className="aspect-square flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Product Info - Flex column with space between */}
      <div className="p-6 bg-white flex flex-col flex-grow">
        {/* Category */}
        <p className="text-base text-gray-600 mb-1 line-clamp-1">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="font-semibold text-xl mb-2 text-secondary line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        {/* Rating - Fixed Height */}
        <div className="mb-4 min-h-[1.5rem]">
          <span className="text-[#E58411] text-lg">
            {generateStars(product.rating)}
          </span>
        </div>

        {/* Price and Add to Cart Button - Pushed to bottom */}
        <div className="flex justify-between items-center mt-auto pt-4">
          {/* Price */}
          <div className="flex flex-col">
            <p className="text-secondary font-bold text-2xl">
              <sup className="text-lg">$</sup>
              <span>{product.price}</span>
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="rounded-full w-12 h-12 flex items-center justify-center bg-[#1E2A44] text-white hover:bg-[#1E2A44]/90 transition-colors shadow-md flex-shrink-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
