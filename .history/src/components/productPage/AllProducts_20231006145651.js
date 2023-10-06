import React from "react";
import ProductCard from "../shop/ProductCard";
import { Allproducts } from "../../constants/products";

const AllProducts = ({products}) => {
  console.log(products)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-10 justify-items-center py-5  w-full product_container">
      {products?.map((item, id) => (
        <ProductCard
          key={id}
          src={item.src}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default AllProducts;
