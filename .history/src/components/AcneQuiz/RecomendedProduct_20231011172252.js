/** @format */

import React from "react";
import { Header } from "../../utils/helpingComponent";
import { Link, useNavigate } from "react-router-dom";

const RecomendedProduct = () => {
  const product = JSON.parse(localStorage.getItem("QuizProduct"));
const navigate = useNavigate()

  return (
    <div>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
        
        </div>
        <p className="title">Acne Quiz</p>
      </div>
      {" "}


      <div className="Recommended_Product">
        <h1 className="text-4xl font-medium text-center">
          Recommended Product
        </h1>
        <div className="two_sec ">
          <div className="w-[26rem]  h-[30rem] left_container">
            <img
              className="w-full h-full object-contain"
              src={product?.productImages?.[0]?.image}
              alt=""
            />
          </div>
          <div className="flex  flex-col gap-14" style={{padding : '20px'}} >
            <h1 className="text-4xl font-normal"> {product?.name} </h1>
            <p className="w-[29rem] text-xl ">{product?.description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-12 text-center w-[45rem] text-2xl font-bold">
          <Link className="bg-primary py-6" to={`/product/${product?._id}`}>
            VIEW PRODUCT
          </Link>
          <Link to={"/"} className="border-2 py-6 text-primary border-primary">
            GO BACK TO HOME PAGE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecomendedProduct;
