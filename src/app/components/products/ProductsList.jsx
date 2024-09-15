import React from "react";
import ProductCard from "../cards/ProductCard";
import products from "../../../data/products.json";

const ProductsList = () => {
  return (
    <section>
      <section
        id="Products"
        className="w-fit mx-auto grid grid-cols-1  2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 justify-items-center justify-center gap-y-12 gap-x-12 mt-10 mb-5"
      >
        {products.product.map((product) => (
          <ProductCard
            key={product.asin}
            frontCoverUrl={product.product_images.cover}
            author={product.author}
            title={product.title}
            price={product.original_price}
            salePrice={product.sale_price}
            asin={product.asin}
          />
        ))}
      </section>
    </section>
  );
};

export default ProductsList;
