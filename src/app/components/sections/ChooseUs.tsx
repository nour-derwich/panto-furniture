"use client";

import ArrowButton from "@/app/components/ui/ArrowButton";

export default function ChooseUs() {
  const features = [
    {
      title: "Luxury facilities",
      description:
        "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
    },
    {
      title: "Affordable Price",
      description:
        "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
    },
    {
      title: "Many Choices",
      description:
        "We provide many unique work space choices so that you can choose the workspace to your liking.",
    },
  ];

  return (
    <section id ="choose_us" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {/* Title Section */}
          <div className="flex items-start justify-start lg:items-center">
            <h2 className="text-hero text-3xl sm:text-4xl md:text-5xl text-secondary leading-tight font-bold">
              Why
              <br />
              Choosing Us
            </h2>
          </div>

          {/* Feature Cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="space-y-3 sm:space-y-4 lg:space-y-5 p-4 sm:p-0 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-nav text-xl sm:text-2xl md:text-2xl font-semibold text-secondary">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-body text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Arrow Button */}
              <div className="pt-1">
                <ArrowButton>More Info</ArrowButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
