/** @format */

import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import AllProducts from "./AllProducts";
import { useNavigate, useParams } from "react-router-dom";
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
  const { type, id, name } = useParams();

  useEffect(() => {
    getSkinType(setSkinType);
    getProductType(setProductType);
    getAllBrands(setBrands);
    getSkinCondition(setSkinCondition);
    getAllNutrition(setNutrition);
  }, []);

  const url = `&${type}=${id}`;

  const productHandler = () => {
    getAllProducts(setProducts, search, url);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    productHandler();
    window.scrollTo(0, 0);
  }, [search, id]);

  const navigate = useNavigate();

  return (
    <section>
      <div className="relative_product_container">
        <img className="full_Image" src="/Image/39.jpg" alt="" />
        <div className="content">
          <h1 className="text-6xl text-white text-center  z-50 font-light">
            {name}
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
                    className="flex items-center gap-4 text-xl break break-keep cursor-pointer"
                    htmlFor={item?.name}
                    onClick={() =>
                      navigate(
                        `/allproducts/skinTypeId/${item._id}/${item.name}`
                      )
                    }
                  >
                    {item?.name}
                  </label>
                ))}
                <hr className="bg-black h-1 my-5" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">
                {" "}
                PRODUCT TYPE{" "}
              </h3>
              <div className="grid grid-flow-row gap-5 my-10">
                {productType?.map((item, index) => (
                  <label
                    key={`option${index}`}
                    className="flex items-center gap-4 text-xl break break-keep cursor-pointer"
                    htmlFor={item?.name}
                    onClick={() =>
                      navigate(
                        `/allproducts/productTypeId/${item._id}/${item.name}`
                      )
                    }
                  >
                    {item?.name}
                  </label>
                ))}
                <hr className="bg-black h-1 my-5" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">BRANDS</h3>
              <div className="grid grid-flow-row gap-5 my-10">
                {brands?.map((item, index) => (
                  <label
                    key={`option${index}`}
                    className="flex items-center gap-4 text-xl break break-keep"
                    htmlFor={item?.name}
                    onClick={() =>
                      navigate(`/allproducts/brandId/${item._id}/${item.name}`)
                    }
                  >
                    {item?.name}
                  </label>
                ))}
                <hr className="bg-black h-1 my-5" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">
                SKIN CONDITIONS
              </h3>
              <div className="grid grid-flow-row gap-5 my-10">
                {skinCondition?.map((item, index) => (
                  <label
                    key={`option${index}`}
                    className="flex items-center gap-4 text-xl break break-keep"
                    htmlFor={item?.name}
                    onClick={() =>
                      navigate(
                        `/allproducts/skinConditionId/${item._id}/${item.name}`
                      )
                    }
                  >
                    {item?.name}
                  </label>
                ))}
                <hr className="bg-black h-1 my-5" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">NUTRITION</h3>
              <div className="grid grid-flow-row gap-5 my-10">
                {nutrition?.map((item, index) => (
                  <label
                    key={`option${index}`}
                    className="flex items-center gap-4 text-xl break break-keep"
                    htmlFor={item?.name}
                    onClick={() =>
                      navigate(
                        `/allproducts/nutritionId/${item._id}/${item.name}`
                      )
                    }
                  >
                    {item?.name}
                  </label>
                ))}
                <hr className="bg-black h-1 my-5" />
              </div>
            </div>
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
