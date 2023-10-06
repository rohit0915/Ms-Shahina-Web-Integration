/** @format */

import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import AllProducts from "./AllProducts";
import Options from "./Options";
import { useNavigate } from "react-router-dom";
import {
  getAllBrands,
  getAllNutrition,
  getAllProducts,
  getProductType,
  getSkinCondition,
  getSkinType,
} from "../../Repository/Api";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [skinType, setSkinType] = useState([]);
  const [productType, setProductType] = useState([]);
  const [brands, setBrands] = useState([]);
  const [skinCondition, setSkinCondition] = useState([]);
  const [nutrition, setNutrition] = useState([]);
  const [ brandId , setBrandId ] = useState("")
  const [ nutritionId , setNu]

  useEffect(() => {
    getSkinType(setSkinType);
    getProductType(setProductType);
    getAllBrands(setBrands);
    getSkinCondition(setSkinCondition);
    getAllNutrition(setNutrition);
  }, []);

  const productHandler = () => {
    getAllProducts(setProducts, search);
  };

  useEffect(() => {
    productHandler();
  }, [search]);

  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="relative_product_container">
        <img className="full_Image" src="/Image/39.jpg" alt="" />
        <div className="content">
          <h1 className="text-6xl text-white text-center  z-50 font-light">
            DMK Products
          </h1>
        </div>
        <div className="Image">
          <img
            src="/asessts/back-button.svg"
            alt=""
            onClick={() => navigate(-1)}
          />
        </div>
      </div>

      <section className="Category_Product_Container">
        <div className="Main ">
          <h1 className="text-4xl text-center font-medium text-primary">
            ALL PRODUCTS
          </h1>
          <div className=" flex gap-5 items-center text-xl border-b-2 pb-2   w-80 border-b-primary text-primary">
            <BiSearch className="text-3xl" />
            <input
              className="px-2"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Products...."
            />
          </div>
        </div>

        <div className="flex flex-shrink-0 justify-between items-start Item_Container ">
          <div className=" w-[30%] px-12 py-4 left_container">
            <Options type={"SKIN TYPE"} options={skinType} />
            <Options type={"PRODUCT TYPE"} options={productType} />
            <Options type={"BRANDS"} options={brands} />
            <Options type={"SKIN CONDITIONS"} options={skinCondition} />
            <Options type={"NUTRITION"} options={nutrition} />
          </div>
          <div className="w-full border-l-2 border-l-primary mb-20">
            <AllProducts products={products} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductPage;
