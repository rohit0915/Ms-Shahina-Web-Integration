/** @format */

import React, { useEffect, useState } from "react";
import {
  brands,
  nutrition,
  productType,
  skinConditions,
  skinType,
} from "../../constants/shopConstant";
import ItemCard from "./ItemCard";
import { products } from "../../constants/products";
import ProductCard from "./ProductCard";
import {
  getAllBrands,
  getAllNutrition,
  getProductType,
  getSkinCondition,
  getSkinType,
} from "../../Repository/Api";

export const SkinType = () => {
  const [response, setResponse] = useState([]);
  function fetchHandler() {
    getSkinType(setResponse);
  }
  useEffect(() => {
    fetchHandler();
  }, []);
  return (
    response && (
      <div className="grid grid-flow-col col-span-4  justify-center gap-10">
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            styles={"w-80 h-80 text-4xl"}
            type={item.name}
          />
        ))}
      </div>
    )
  );
};

export const ProductType = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getProductType(setResponse);
  }, []);

  return (
    response && (
      <div className="grid grid-flow-col col-span-5  justify-center  gap-10">
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            styles={"w-60 h-60"}
            baseType={item.name}
          />
        ))}
      </div>
    )
  );
};

export const Brands = ({ isBrand }) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getAllBrands(setResponse);
  }, []);

  return (
    response && (
      <div
        className={`${
          isBrand
            ? "flex flex-shrink-0 justify-center px-10  gap-10"
            : "flex-wrap  gap-9 flex flex-shrink-0 justify-center"
        }`}
      >
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            isBrand={isBrand}
            styles={`${
              isBrand
                ? "w-52 h-64 text-2xl text-center"
                : "w-[43rem] h-[28rem] text-4xl"
            }`}
            largeCardType={item.name}
          />
        ))}
      </div>
    )
  );
};

export const SkinConditions = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getSkinCondition(setResponse);
  }, []);

  return (
    response && (
      <div className="grid grid-flow-col col-span-5  justify-center gap-10">
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            styles={"w-60 h-60"}
            baseType={item.name}
          />
        ))}
      </div>
    )
  );
};

export const Nutrition = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getAllNutrition(setResponse);
  }, []);

  return (
    response && (
      <div className="grid grid-flow-col col-span-5 gap-10  justify-center ">
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            styles={"w-80 h-80"}
            nutritionType={item.name}
          />
        ))}
      </div>
    )
  );
};

export const Products = () => {
  return (
    <div className="grid grid-flow-col col-span-5 justify-center gap-10 flex-wrap">
      {products.map((item, id) => (
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
