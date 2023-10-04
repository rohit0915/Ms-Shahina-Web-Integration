/** @format */

import React from "react";
import { BiSearch } from "react-icons/bi";
import AllProducts from "./AllProducts";
import Options from "./Options";
import { useNavigate } from "react-router-dom";

const skintype = [
  "All Skin Types",
  "Aging",
  "Dry",
  "Normal",
  "Oily",
  "Sensitive",
];
const productType = ["Moisturizer", "Cleanser", "Toner"];
const skinConditions = ["Aging", "Pigmentation", "Rosacea", "Sensitive"];

const ProductPage = () => {
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

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

      <section style={{ maxWidth: "1400px", margin: "auto" }} className='Category_Product_Container' >
        <div className="relative">
          <h1 className="text-4xl text-center font-medium text-primary my-20">
            ALL PRODUCTS
          </h1>
          <div className="absolute top-0 right-12 flex gap-5 items-center text-xl border-b-2 pb-2   w-80 border-b-primary text-primary">
            <BiSearch className="text-3xl" />
            <input
              className="px-2"
              type="text"
              placeholder="Search Products...."
            />
          </div>
        </div>




        <div className="flex flex-shrink-0 justify-between items-start">
          <div className=" w-[30%] px-12 py-4">
            <Options type={"SKIN TYPE"} options={skintype} />
            <Options type={"PRODUCT TYPE"} options={productType} />
            <Options type={"SKIN CONDITION"} options={skinConditions} />
          </div>
          <div className="w-full border-l-2 border-l-primary mb-20">
            <AllProducts />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductPage;
