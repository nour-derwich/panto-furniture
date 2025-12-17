import React from "react";

interface RatingProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
}

const Rating = ({ rating, maxStars = 5, size = "lg" }: RatingProps) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  };

  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {/* Filled stars */}
      {[...Array(filledStars)].map((_, index) => (
        <span key={`filled-${index}`} className="text-yellow-500 text-xl">
          ★
        </span>
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <span className="text-yellow-500 relative">
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: "50%" }}
          >
            ★
          </span>
          <span className="text-gray-300 text-xl">★</span>
        </span>
      )}

      {/* Empty stars */}
      {[...Array(maxStars - filledStars - (hasHalfStar ? 1 : 0))].map(
        (_, index) => (
          <span key={`empty-${index}`} className="text-gray-300 text-xl">
            ★
          </span>
        )
      )}
    </div>
  );
};

export default Rating;
