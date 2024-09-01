import React from "react";

const ProductCard = ({ frontCoverUrl, author, title, price, salePrice }) => {
  return (
    <div className="w-72 shadow-xl  bg-white  duration-500  hover:shadow-2xl hover:shadow-gray-950">
      <a href="#">
        <img
          src={frontCoverUrl}
          alt={title}
          className="h-96 w-72 object-cover shadow-lg shadow-zinc-700 transition duration-500 hover:shadow-none hover:blur-sm"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{author}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {title}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              {salePrice || price} {/* If on sale, show sale price */}
            </p>
            {salePrice && (
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  ${price}
                </p>
              </del>
            )}
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
