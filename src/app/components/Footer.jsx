import React from "react";
import { Poiret_One } from "next/font/google";

const gpoi = Poiret_One({
  subsets: ["latin"],
  weight: ["400"]
  // variable: "--font-gpoi"
});

const Footer = () => {
  return (
    <section className={`w-full  bg-white ${gpoi.className}`}>
      <section className="max-w-screen-xl p-8 m-auto ">Footer</section>
    </section>
  );
};

export default Footer;
