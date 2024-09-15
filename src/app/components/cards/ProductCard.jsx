"use client";
import Link from "next/link";

const ProductCard = ({
  frontCoverUrl,
  author,
  title,
  price,
  salePrice,
  asin
}) => {
  return (
    <div className="w-72 shadow-xl  bg-white  duration-500  hover:shadow-2xl hover:shadow-gray-950">
      <div className="relative h-96 w-72 shadow-lg shadow-zinc-700 transition duration-500 hover:shadow-none group">
        <img
          src={frontCoverUrl}
          alt={title}
          className="h-full w-full object-cover shadow-lg transition duration-500 group-hover:blur-sm"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {/* Link only around the "Details" button */}
          <Link href={`/products/${asin}`}>
            <button className="bg-myellow text-mdbrown px-4 py-2 rounded-lg shadow-lg">
              Details
            </button>
          </Link>
        </div>
      </div>

      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">{author}</span>
        <p className="text-lg font-bold text-black truncate block capitalize">
          {title}
        </p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">
            {salePrice || price}
          </p>
          {salePrice && (
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">${price}</p>
            </del>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
