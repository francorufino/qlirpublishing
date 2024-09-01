import React from "react";
import ProductCard from "../cards/ProductCard";
import products from "../../../data/products.json";

const ProductsList = () => {
  return (
    <section>
      <h1>All Products</h1>
      <section
        id="Products"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.product.map((product) => (
          <ProductCard
            key={product.asin}
            frontCoverUrl={product.product_images.cover}
            author={product.author}
            title={product.title}
            price={product.original_price}
            salePrice={product.sale_price}
          />
        ))}
      </section>
    </section>
  );
};

export default ProductsList;
