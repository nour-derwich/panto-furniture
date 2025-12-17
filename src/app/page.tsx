import Navbar from "@/app/components/sections/Navbar";
import Hero from "@/app/components/sections/Hero";
import ChooseUs from "@/app/components/sections/ChooseUs";
import Products from "@/app/components/sections/Products";
import Experience from "@/app/components/sections/Experience";
import Materials from "@/app/components/sections/Materials";
import Testimonials from "@/app/components/sections/Testimonials";
import Footer from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Hero />
        <ChooseUs />
        <Products />
        <Experience />
        <Materials />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
