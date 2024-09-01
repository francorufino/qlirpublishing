"use client";
import Image from "next/image";
import products from "../../../data/products.json";

const JustReleasedCarousel = () => {
  const today = new Date();
  const releasedWithin30Days = products.product.filter((product) => {
    const releaseDate = new Date(product.release_date);
    const timeDiff = today - releaseDate;
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    return daysDiff <= 30;
  });

  return (
    <section>
      <h1 className="max-w-screen-xl m-auto">Just Released!</h1>
      <section className="flex space-x-4">
        {releasedWithin30Days.map((product) => (
          <div key={product.asin} className="text-center">
            <Image
              className="flex shrink-0 h-32 w-24 object-cover shadow-lg shadow-zinc-700 transition duration-500 hover:shadow-none"
              src={`/${product.product_images.cover}`}
              alt={product.title}
              width={150}
              height={150}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default JustReleasedCarousel;
