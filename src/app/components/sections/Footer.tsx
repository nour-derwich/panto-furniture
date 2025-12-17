"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  // Data arrays for dynamic rendering
  const menuItems = [
    {
      title: "Services",
      items: ["Email Marketing", "Campaigns", "Branding"],
    },
    {
      title: "Furniture",
      items: ["Beds", "Chair", "All"],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "#",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "#",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "#",
    },
  ];

  const footerLinks = [
    {
      label: "Terms & Conditions",
      sectionId: "terms",
    },
    {
      label: "Privacy Policy",
      sectionId: "privacy",
    },
  ];

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-white text-black pt-16 pb-8 border-t border-gray-200">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4 md:px-8">
        {/* First Div: Logo and Description (Wider Column) */}
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="text-3xl font-bold mb-4 text-secondary block hover:opacity-80 transition-opacity"
          >
            Panto
          </Link>
          <p className="text-gray-600 max-w-md">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
        </div>

        {/* Menu Sections */}
        {menuItems.map((menu, index) => (
          <div key={index}>
            <h3 className="text-lg DM Sans mb-4 text-[#E58411]">
              {menu.title}
            </h3>
            <ul className="space-y-3">
              {menu.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-gray-600 Gilroy-Medium hover:text-primary transition-colors text-left hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg DM Sans mb-4 text-[#E58411]">Follow Us</h3>
          <div className="space-y-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center Gilroy-Medium space-x-3 text-gray-600 hover:text-primary transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon className="text-gray-600 group-hover:text-primary" />
                  </div>
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 section-container flex flex-col sm:flex-row justify-between items-center gap-4 px-4 md:px-8 border-t border-gray-200 pt-6">
        <p className="text-gray-500 Gilroy-Medium text-sm">
          &copy; {new Date().getFullYear()} Panto. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {footerLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.sectionId)}
              className="text-gray-500 Gilroy-Medium text-sm hover:text-primary transition-colors hover:underline"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
