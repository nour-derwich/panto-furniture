"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/app/components/ui/ProductCard";
import ArrowButton from "@/app/components/ui/ArrowButton";
import { cn } from "@/lib/utils";

// Categories with icons
const CATEGORIES = [
  { id: "chair", name: "Chair" },
  { id: "beds", name: "Beds" },
  { id: "sofa", name: "Sofa" },
  { id: "lamp", name: "Lamp" },
];

interface ProductsProps {
  showCategories?: boolean;
}

export default function Products({ showCategories = true }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("chair");
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter products based on category
  const filteredProducts =
    selectedCategory === "chair"
      ? products
      : products.filter(
          (product) => product.category.toLowerCase() === selectedCategory
        );

  // Calculate slides
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(filteredProducts.length / itemsPerSlide);
  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < totalSlides - 1;

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentSlide(0); // Reset slide when category changes
  };

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return (
    <section
      id="products"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-hero text-3xl sm:text-4xl md:text-5xl text-secondary font-bold mb-6 sm:mb-8">
            Best Selling Product
          </h2>

          {/* Category Filter Tabs */}
          {showCategories && (
            <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
              <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={cn(
                      "group relative py-1.5 sm:px-5 px-8 rounded-full transition-colors",
                      selectedCategory === category.id
                        ? "bg-white text-primary font-semibold"
                        : "text-secondary hover:bg-primary hover:text-white"
                    )}
                    aria-label={`View ${category.name} category`}
                  >
                    <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Products Slider */}
        <div className="relative">
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 disabled:hover:scale-100"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 disabled:hover:scale-100"
            aria-label="Next products"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Products Container */}
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {/* Slides */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2">
                    {filteredProducts
                      .slice(
                        slideIndex * itemsPerSlide,
                        (slideIndex + 1) * itemsPerSlide
                      )
                      .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 sm:mt-12">
          <ArrowButton>View All</ArrowButton>
        </div>
      </div>
    </section>
  );
}
