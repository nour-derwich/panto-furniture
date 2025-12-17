"use client";

import { Search } from "lucide-react";
import TooltipButton from "@/app/components/ui/TooltipButton";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner.png"
          alt="Modern interior background"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient Overlay - Plus sombre sur mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent sm:from-black/40 sm:via-black/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl mx-auto w-full space-y-6 sm:space-y-8">
            {/* Title - Typography responsive */}
            <h1 className="text-hero text-white leading-tight">
              <span className="block gilroy-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
                Make Your Interior More
              </span>
              <span className="block gilroy-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                Minimalistic & Modern
              </span>
            </h1>

            {/* Description */}
            <p className="Gilroy-Regular text-white/90 sm:text-lg md:text-xl max-w-md sm:max-w-xl md:max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Turn your room with panto into a lot more minimalist and modern
              with ease and speed
            </p>

            {/* Search Bar - Responsive */}
            <div className="mt-8 sm:mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search furniture"
                  className="w-full px-5 sm:px-6 py-3 sm:py-3.5  Gilroy-Regular bg-white/25 backdrop-blur-sm rounded-full border border-gray-300 text-white placeholder:text-white focus:outline-none focus:border-primary transition-all text-sm sm:text-base"
                  aria-label="Search for furniture"
                />
                <button
                  type="button"
                  className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#E58411] rounded-full hover:bg-[#d1760f] transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Scroll indicator - Mobile uniquement */}
            <div className="block sm:hidden pt-6">
              <div className="animate-bounce text-white/60">
                <svg
                  className="w-6 h-6 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip Buttons - Responsive Grid */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Mobile: 2 boutons simples */}
        <div className="block lg:hidden absolute bottom-24 left-4 sm:left-8 pointer-events-auto">
          <TooltipButton position="bottom" />
        </div>
        <div className="block lg:hidden absolute bottom-36 right-4 sm:right-8 pointer-events-auto">
          <TooltipButton position="bottom" />
        </div>

        {/* Desktop: 6 boutons en grille */}
        <div className="hidden lg:block pointer-events-auto">
          {/* Gauche */}
          <div className="absolute bottom-40 left-24 xl:left-32">
            <TooltipButton position="bottom" />
          </div>
          {/* Centre gauche */}
          <div className="absolute bottom-52 left-96 xl:left-[28rem]">
            <TooltipButton position="bottom" />
          </div>
          {/* Centre */}
          <div className="absolute bottom-24 right-96 xl:right-[43rem]">
            <TooltipButton position="bottom" />
          </div>
          {/* Centre droite */}
          <div className="absolute bottom-48 right-96 xl:right-[28rem]">
            <TooltipButton position="bottom" />
          </div>
          {/* Droite */}
          <div className="absolute bottom-28 right-24 xl:right-32">
            <TooltipButton position="bottom" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-10" />
    </section>
  );
}
