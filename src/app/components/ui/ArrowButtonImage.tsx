"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ArrowButtonImageProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  href?: string;
  imageSrc?: string;
}

export default function ArrowButtonImage({
  children,
  onClick,
  className,
  disabled = false,
  href,
  imageSrc = "/images/arrow-right.png", // Default arrow image
}: ArrowButtonImageProps) {
  const baseClasses = cn(
    "inline-flex items-center gap-2",
    "text-[#E58411] text-base font-medium",
    "hover:gap-3 transition-all duration-200",
    "group cursor-pointer",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:gap-2",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <div className="relative w-12 h-6 transition-transform duration-200 group-hover:translate-x-1">
        <Image src={imageSrc} alt="arrow" fill className="object-contain" />
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
}
