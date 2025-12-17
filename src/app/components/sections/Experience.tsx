"use client";

import ArrowButton from "@/app/components/ui/ArrowButton";

export default function Experience() {
  return (
    <section
      id="experiences"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="/images/expricences.png"
                alt="Furniture design experience"
                className="w-full h-auto rounded-2xl shadow-lg"
                loading="lazy"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl lg:max-w-none">
              {/* Subtitle */}
              <h3 className="text-nav text-base sm:text-lg font-semibold text-[#E58411] mb-3 sm:mb-4 uppercase tracking-wide">
                Experiences
              </h3>

              {/* Main Title */}
              <h2 className="text-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 sm:mb-6 leading-tight capitalize">
                We provide you the best experience
              </h2>

              {/* Description */}
              <p className="text-body text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                You don't have to worry about the result because all of these
                interiors are made by people who are professionals in their
                fields with an elegant and luxurious style and with premium
                quality materials.
              </p>

              {/* Button */}
              <div className="inline-block">
                <ArrowButton>More Info</ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
