/** @format */

import React from "react";
import ProductCard from "../shop/ProductCard";

const AllProducts = ({ products }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-10 justify-items-center py-5  w-full product_container ">
      {products?.map((item) => (
        <ProductCard
          key={item._id}
          id={item._id}
          src={item?.productImages?.[0]?.image}
          title={item.name}
          quantity={item.quantity}
          price={item.discountAllow === false ? item.price : item.discount}
        />
      ))}
    </div>
  );
};

export default AllProducts;
