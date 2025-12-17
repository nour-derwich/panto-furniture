import type { Metadata } from "next";
import { CartProvider } from "@/app/context/CartContext";
import "./globals.css";
import Navbar from "@/app/components/sections/Navbar";

export const metadata: Metadata = {
  title: "Panto - Furniture",
  description: "Modern furniture shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
