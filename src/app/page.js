import React from "react";
import HeroSection from "./components/herosection/HeroSection";

export default function Home() {
  return (
    <main className=" bg-[url('/images/art/bg_products.png')]">
      <section className="max-w-screen-xl m-auto">
        <HeroSection />
      </section>
    </main>
  );
}
