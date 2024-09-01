import React from "react";
import JustReleasedCarousel from "./JustReleasedCarousel";
import ProductsList from "./ProductsList";

const Products = () => {
  return (
    <section className=" bg-[url('/images/art/bg_products.png')]">
      <section className="max-w-screen-xl m-auto mt-8">
        <ul className="flex justify-center gap-4 items-center">
          {" "}
          <li className="bg-mbrown py-4 px-6 rounded-lg">All</li>
          <li className="border-2 border-mbrown py-2 px-6 rounded-lg">Books</li>
          <li className="border-2 border-mbrown py-2 px-6 rounded-lg">
            Children's Books
          </li>
          <li className="border-2 border-mbrown py-2 px-6 rounded-lg">
            Notebooks
          </li>
          <li className="border-2 border-mbrown py-2 px-6 rounded-lg">
            Activity Books
          </li>
          <li className="border-2 border-mbrown py-2 px-6 rounded-lg">
            Jornals
          </li>
          <li className="border-2 border-mbrown py-2 px-6 rounded-lg">
            Audiobooks
          </li>
        </ul>
      </section>
      <br />
      <br />
      <section>
        <JustReleasedCarousel />
      </section>
      <br />
      <br />
      <section c>
        <section className="max-w-screen-xl m-auto">
          <ProductsList />
        </section>
      </section>
    </section>
  );
};

export default Products;
