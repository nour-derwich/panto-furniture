"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Rating from "@/app/components/Rating";
import { testimonials } from "@/data/reviews";
import type { Testimonial } from "@/data/reviews";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Array of background images
  const backgroundImages = [
    "/images/testimonial1.png",
    "/images/testimonial2.png",
    "/images/testimonial3.png",
  ];

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section
      id="testimonials"
      className="section-container px-4 md:px-8 py-12 md:py-16 lg:py-20"
    >
      {/* Subheading and Heading */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[#E58411] Gilroy-SemiBold uppercase tracking-wide text-sm md:text-base mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl Gilroy-Bold lg:text-4xl  text-gray-900">
          What Our Clients Say
        </h2>
      </div>

      {/* Swiper Container */}
      <div className="relative max-w-7xl mx-auto">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerView={1}
          spaceBetween={16}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          navigation={false}
          modules={[Pagination, Autoplay, Navigation]}
          className="pb-12"
        >
          {testimonials.map((testimonial: Testimonial, index: number) => {
            const bgImage = backgroundImages[index % backgroundImages.length];

            return (
              <SwiperSlide key={testimonial.id}>
                <div className="relative h-[500px] md:h-[567px] rounded-xl overflow-hidden group">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={bgImage}
                      alt={`Testimonial background ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Testimonial Card */}
                  <div className="md:h-[547px] flex  justify-center items-center mb-4">
                    <div className="mt-36 mb-5 bg-white  rounded-xl md:w-4/5 w-full p-4 relative">
                      {/* Reviewer Image */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="relative  w-16 h-16 md:w-15 md:h-15">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="rounded-full  object-cover border-4 border-white shadow-lg"
                            sizes="50px"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-10 md:pt-12 text-center">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500 text-sm  Gilroy-Regular md:text-base mb-4">
                          {testimonial.role}
                        </p>

                        {/* Review Text */}
                        <div className="mb-6">
                          <p className="text-gray-600 Gilroy-Regular italic t mb-4 leading-relaxed">
                            &ldquo;{testimonial.content}&rdquo;
                          </p>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-center mb-2">
                          <Rating rating={testimonial.rating} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Desktop Navigation Buttons */}
        <div className="hidden lg:flex">
          <button
            onClick={handlePrev}
            disabled={isBeginning}
            className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed absolute left-0 top-1/2 -translate-y-1/2 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={isEnd}
            className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed absolute right-0 top-1/2 -translate-y-1/2 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={isBeginning}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={isEnd}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Add custom CSS for Swiper navigation */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
        }
        .swiper-pagination-bullet-active {
          background: #e58411 !important;
          width: 30px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
