"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipButtonProps {
  position?: "top" | "bottom" | "left" | "right";
  colors?: string[];
}

export default function TooltipButton({
  position = "bottom",
  colors = ["#E58411", "#22D3EE", "#FFFFFF"],
}: TooltipButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Position classes pour le tooltip
  const positionClasses = {
    bottom: {
      tooltip: "bottom-full left-1/2 transform -translate-x-1/2 mb-3",
      arrow: "left-1/2 transform -translate-x-1/2 -bottom-2",
    },
    top: {
      tooltip: "top-full left-1/2 transform -translate-x-1/2 mt-3",
      arrow: "left-1/2 transform -translate-x-1/2 -top-2",
    },
    left: {
      tooltip: "left-full top-1/2 transform -translate-y-1/2 ml-3",
      arrow: "top-1/2 transform -translate-y-1/2 -left-2",
    },
    right: {
      tooltip: "right-full top-1/2 transform -translate-y-1/2 mr-3",
      arrow: "top-1/2 transform -translate-y-1/2 -right-2",
    },
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Button avec point central */}
      <button className="relative p-4 bg-white/25 border border-white text-white rounded-full hover:scale-110 transition-transform duration-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </button>

      {/* Tooltip avec couleurs */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${positionClasses[position].tooltip} z-50`}
          >
            <div className="relative p-2 space-x-1 rounded-lg bg-white/25 backdrop-blur-sm border border-white shadow-lg flex">
              {/* Colored dots */}
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border border-white cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                />
              ))}

              {/* Tooltip arrow */}
              <div
                className={`absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/25 ${positionClasses[position].arrow}`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
