import React from "react";
import HeroSection from "./components/herosection/HeroSection";
import JustReleasedCarousel from "./components/products/JustReleasedCarousel";

export default function Home() {
  return (
    <main className=" bg-[url('/images/art/bg_products.png')]">
      <section className="max-w-screen-xl m-auto">
        <HeroSection />
      </section>{" "}
      <br />
      <br />
      <section className="max-w-screen-xl m-auto">
        <h1 className="max-w-screen-xl m-auto text-lg font-bold p-8">
          Check out what we have released in the past 30 days, just for you!
        </h1>
        <JustReleasedCarousel />
      </section>
    </main>
  );
}
