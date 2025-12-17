"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, X } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { navLinks } from "@/data/content";
import { cn } from "@/lib/utils";
import { useCart } from "@/app/context/CartContext";

// Types
interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

// Furniture dropdown items
const furnitureSubItems: NavItem[] = [
  { label: "Living Room", href: "#living-room" },
  { label: "Bedroom", href: "#bedroom" },
  { label: "Dining Room", href: "#dining-room" },
  { label: "Office", href: "#office" },
  { label: "Outdoor", href: "#outdoor" },
];

// Enhanced navLinks with dropdown for first item
const enhancedNavLinks: NavItem[] = navLinks.map((item, index) => ({
  ...item,
  subItems: index === 0 ? furnitureSubItems : undefined,
}));

// Dropdown Component for Furniture
const FurnitureDropdown = ({
  isMobile = false,
  toggleMenu,
}: {
  isMobile?: boolean;
  toggleMenu: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleItemClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    toggleMenu();
  };

  if (isMobile) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-full py-2 text-lg font-medium hover:text-primary transition-colors"
        >
          <span>Furniture</span>
          <IoIosArrowDown
            className={cn(
              "ml-2 transition-transform duration-200",
              isOpen ? "rotate-180" : "rotate-0"
            )}
          />
        </button>

        {isOpen && (
          <div className="ml-4 mt-2 space-y-2 border-l border-white/20 pl-4">
            {furnitureSubItems.map((subItem) => (
              <button
                key={subItem.href}
                onClick={() => handleItemClick(subItem.href)}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors py-1"
              >
                {subItem.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative group">
      <button
        className="flex items-center hover:text-primary transition-colors duration-200"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>Furniture</span>
        <IoIosArrowDown
          className={cn(
            "ml-1 transition-transform duration-200",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>

      {/* Desktop Dropdown */}
      <div
        className={cn(
          "absolute top-full left-1/2 transform -translate-x-1/2 mt-2",
          "w-48 bg-white shadow-lg rounded-lg overflow-hidden",
          "transition-all duration-200 origin-top",
          "invisible opacity-0 scale-95",
          "group-hover:visible group-hover:opacity-100 group-hover:scale-100",
          isOpen ? "visible opacity-100 scale-100" : ""
        )}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {furnitureSubItems.map((subItem) => (
          <button
            key={subItem.href}
            onClick={() => handleItemClick(subItem.href)}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
          >
            {subItem.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// Navigation Items Component
const NavigationItems = ({
  toggleMenu,
  isMobile = false,
}: {
  toggleMenu: () => void;
  isMobile?: boolean;
}) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        isMobile ? "flex flex-col items-center space-y-8" : "flex items-center"
      )}
    >
      <ul
        className={cn(
          "flex items-center",
          isMobile ? "flex-col space-y-8" : "space-x-8"
        )}
      >
        {enhancedNavLinks.map((item, index) => (
          <li key={item.href} className="relative">
            {index === 0 ? (
              // First item with dropdown
              <FurnitureDropdown isMobile={isMobile} toggleMenu={toggleMenu} />
            ) : item.href.startsWith("#") ? (
              // Hash links
              <button
                onClick={() => {
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({ behavior: "smooth" });
                  toggleMenu();
                }}
                className={cn(
                  "transition-colors duration-200 hover:text-primary",
                  pathname === item.href
                    ? "text-primary font-bold"
                    : "hover:text-primary"
                )}
              >
                {item.label}
              </button>
            ) : (
              // Regular links
              <Link
                href={item.href}
                className={cn(
                  "transition-colors duration-200 hover:text-primary",
                  pathname === item.href
                    ? "text-primary font-bold"
                    : "hover:text-primary"
                )}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Main Navbar Component
export default function Navbar() {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg text-gray-900"
          : "bg-transparent text-white"
      )}
    >
      <nav className="max-w-screen-2xl container mx-auto py-4 px-4 flex justify-between items-center">
        {/* Logo - Left side */}
        <Link
          href="/"
          className="font-bold text-2xl hover:opacity-80 transition-opacity"
        >
          Panto
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <NavigationItems toggleMenu={() => {}} />
        </div>

        {/* Right side: Cart + Mobile menu button */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <div className="relative">
            <Link
              href="/cart"
              className="relative flex items-center p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label={`Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E58411] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-all duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
            "md:hidden"
          )}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Mobile Navigation - Centered */}
          <div className="flex flex-col items-center space-y-8 w-full px-4">
            <NavigationItems toggleMenu={toggleMenu} isMobile />

            {/* Cart in Mobile Menu */}
            <div className="pt-8 border-t border-white/20 w-full max-w-xs text-center">
              <Link
                href="/cart"
                className="flex items-center justify-center space-x-3 text-lg font-medium text-white hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Shopping Cart</span>
                {cartCount > 0 && (
                  <span className="bg-[#E58411] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
