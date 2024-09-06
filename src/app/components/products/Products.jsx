import React from "react";
import JustReleasedCarousel from "./JustReleasedCarousel";
import ProductsList from "./ProductsList";

const Products = () => {
  return (
    <section className=" bg-[url('/images/art/bg_products.png')]">
      <br />
      <br />
      <section>
        <JustReleasedCarousel />
      </section>
      <br />
      <br />
      <section className="max-w-screen-xl m-auto my-8 border-4 border-mbrown pt-12">
        <section>
          <ul className="flex justify-center gap-4 items-center text-xl">
            {" "}
            <li className="bg-mbrown py-4 px-6 rounded-lg">All</li>
            {/* <li className="border-2 border-mbrown py-2 px-6 rounded-lg">Books</li> */}
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
            {/* <li className="border-2 border-mbrown py-2 px-6 rounded-lg">
            Audiobooks
          </li> */}
          </ul>
        </section>
        <br />
        <br />

        <section>
          <section className="max-w-screen-xl m-auto pb-8">
            <ProductsList />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Products;
