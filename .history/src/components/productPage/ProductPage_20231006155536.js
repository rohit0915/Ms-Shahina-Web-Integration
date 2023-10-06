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
  const [brandId, setBrandId] = useState("");
  const [nutritionId, setNutritionId] = useState("");
  const [productTypeId, setProductTypeId] = useState("");
  const [skinConditionId, setSkinConditionId] = useState("");
  const [skinTypeId, setSkinTypeId] = useState("");

  useEffect(() => {
    getSkinType(setSkinType);
    getProductType(setProductType);
    getAllBrands(setBrands);
    getSkinCondition(setSkinCondition);
    getAllNutrition(setNutrition);
  }, []);

  const url = `&brandId=${brandId}&nutritionId=${nutritionId}&productTypeId=${productTypeId}&skinConditionId=${skinConditionId}&skinTypeId=${skinTypeId}`;

  const productHandler = () => {
    getAllProducts(setProducts, search, url);
  };

  useEffect(() => {
    productHandler();
  }, [
    search,
    brandId,
    nutritionId,
    productTypeId,
    skinConditionId,
    skinTypeId,
  ]);

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
            <div>
              <h3 className="text-2xl font-bold text-primary"> SKIN TYPE </h3>
              <div className="grid grid-flow-row gap-5 my-10">
                {skinType?.map((item, index) => (
                  <label
                    key={`option${index}`}
                    className="flex items-center gap-4 text-xl break break-keep"
                    htmlFor={item?.name}
                  >
                    <input
                      className="w-7 h-7 accent-primary"
                      type="checkbox"
                      id={item?.name}
                      onClick={() => {
                        if (id) {
                          id("");
                        } else {
                          id(item._id);
                        }
                      }}
                    />
                    {item?.name}
                  </label>
                ))}
                <hr className="bg-black h-1 my-5" />
              </div>
            </div>
            <Options type={"SKIN TYPE"} options={skinType} id={setSkinTypeId} />
            <Options
              type={"PRODUCT TYPE"}
              options={productType}
              id={setProductTypeId}
            />
            <Options type={"BRANDS"} options={brands} id={setBrandId} />
            <Options
              type={"SKIN CONDITIONS"}
              options={skinCondition}
              id={setSkinConditionId}
            />
            <Options
              type={"NUTRITION"}
              options={nutrition}
              id={setNutritionId}
            />
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
