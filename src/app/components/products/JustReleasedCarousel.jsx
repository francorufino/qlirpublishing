"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import products from "../../../data/products.json";
import { useEffect } from "react";

const JustReleasedCarousel = () => {
  const today = new Date();
  const releasedWithin30Days = products.product.filter((product) => {
    const releaseDate = new Date(product.release_date);
    const timeDiff = today - releaseDate;
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    return daysDiff <= 30;
  });

  const images = releasedWithin30Days.map((product) => (
    <div
      key={product.asin}
      className="text-center relative overflow-hidden h-[200px] min-w-[100px] flex justify-center items-center"
    >
      <Image
        className="flex shrink-0 h-32 w-24 object-cover shadow-md shadow-zinc-700 transition duration-500 hover:shadow-none"
        src={`/${product.product_images.cover}`}
        alt={product.title}
        width={150}
        height={150}
      />
    </div>
  ));

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: -3000,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 70 // normal speed
      }
    });
  }, [controls]);

  return (
    <section className="overflow-hidden">
      <motion.section
        className="flex space-x-2"
        animate={controls}
        onHoverStart={() => {
          controls.start({
            x: -3000,
            transition: {
              repeat: Infinity,
              ease: "linear",
              duration: 200 // Slow down on hover
            }
          });
        }}
        onHoverEnd={() => {
          controls.start({
            x: -3000,
            transition: {
              repeat: Infinity,
              ease: "linear",
              duration: 70 // resume normal speed
            }
          });
        }}
      >
        {images}
        {images}
        {images}
        {images}
        {images}
      </motion.section>
    </section>
  );
};

export default JustReleasedCarousel;
