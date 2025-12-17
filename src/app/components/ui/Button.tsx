// components/ui/Button.tsx
"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  text,
  className,
  onClick,
  type = "button",
  disabled = false,
  isLoading = false,
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !isLoading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center gap-2",
        "text-primary text-sm font-medium",
        "transition-all duration-200",

        // Hover and active states
        "hover:opacity-80 hover:gap-3",
        "active:scale-95",

        // Disabled state
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:gap-2 disabled:active:scale-100",

        // Focus state
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",

        // Group for hover effects
        "group",

        className
      )}
      onClick={handleClick}
      aria-label={text}
      type={type}
      disabled={disabled || isLoading}
    >
      <span>{text}</span>
      <Image
        src="/images/button-icon.png"
        alt="arrow icon"
        width={16}
        height={16}
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
        priority={false}
      />
    </button>
  );
};

export default Button;
