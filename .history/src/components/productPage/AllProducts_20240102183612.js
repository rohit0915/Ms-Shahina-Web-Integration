/** @format */

import React from "react";
import ProductCard from "../shop/ProductCard";

const AllProducts = ({ products, setLimit, limit }) => {
  console.log(15 >= products?.length < limit)
  return products?.length > 0 ? (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-10 justify-items-center py-5  w-full product_container cursor-pointer ">
        {products?.map((item) => (
          <ProductCard
            key={item._id}
            id={item._id}
            src={item?.productImages?.[0]?.image}
            title={item.name}
            quantity={item.quantity}
            price={
              item.multipleSize === false
                ? item.price
                : item.sizePrice?.[0]?.price
            }
          />
        ))}
      </div>
      {15 <= products?.length < limit && (
        <button onClick={() => setLimit(limit + 10)} className="load_more">
          Load More
        </button>
      )}
    </>
  ) : (
    <div className="Not-Found">
      <img src="/Image/no-results.png" alt="" />
      <h5>Sorry, we couldn't find any matching products.</h5>
    </div>
  );
};

export default AllProducts;
