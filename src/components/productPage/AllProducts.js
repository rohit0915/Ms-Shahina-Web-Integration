/** @format */

import React, { useRef, useEffect } from "react";
import ProductCard from "../shop/ProductCard";

const AllProducts = ({ products, setLimit, limit, total }) => {
  const loaderRef = useRef(null);

  const isInView = () => {
    if (!loaderRef.current) return false;
    const rect = loaderRef.current.getBoundingClientRect();
    return rect.top < window.innerHeight;
  };

  const handleLoadMore = () => {
    if (isInView() && products.length < total) {
      setLimit(limit + 10);
    }
  };

  const sortedArr =
    products?.length > 0 &&
    products?.sort((a, b) => {
      const name1 = a?.name?.trim();
      const name2 = b?.name?.trim();
      return name1?.localeCompare(name2);
    });

  return products?.length > 0 ? (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center py-5 product_container cursor-pointer">
        {sortedArr?.map((item) => (
          <ProductCard
            key={item._id}
            id={item._id}
            src={item?.productImages?.[0]?.image}
            title={item.name}
            price={
              item.multipleSize === false
                ? item.price
                : item.sizePrice?.[0]?.price
            }
          />
        ))}
      </div>

      {products.length < total && (
        <div className="text-center py-5">
          <button onClick={handleLoadMore} className="load_more">
            Load More
          </button>
        </div>
      )}

      <div ref={loaderRef}></div>
    </div>
  ) : (
    <div className="Not-Found">
      <img src="/Image/no-results.png" alt="" />
      <h5>Sorry, we couldn't find any matching products.</h5>
    </div>
  );
};

export default AllProducts;
