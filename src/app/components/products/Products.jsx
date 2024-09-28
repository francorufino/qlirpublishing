import React from "react";
// import JustReleasedCarousel from "./JustReleasedCarousel";
import ProductsList from "./ProductsList";

const Products = () => {
  return (
    <section>
      {/* <br />
      <br />
      <h1 className="m-auto px-6 text-mdbrown text-center font-bold text-2xl py-4 bg-mbrown">
        Released in the past 30 days!
      </h1>
      <section className="mt-2 mb-10">
        <JustReleasedCarousel />
      </section>
      <br />
      <br /> */}
      {/* <h1 className="mt-8 px-6 text-mdbrown text-center font-bold text-2xl bg-mbrown py-4">
        Our Products
      </h1> */}
      <section className=" m-auto my-8 ">
        <section className=" pb-12">
          <ul className="flex justify-center gap-4 items-center text-xl">
            {" "}
            <li className="bg-mbrown py-4 px-6 rounded-lg">All</li>
            {/* <li className="border-2 border-mbrown py-2 px-6 rounded-lg">Books</li> */}
            <li className="border-2 border-mbrown py-2 px-6 rounded-lg">
              Childrens Books
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
          <section className=" m-auto pb-8">
            <ProductsList />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Products;
