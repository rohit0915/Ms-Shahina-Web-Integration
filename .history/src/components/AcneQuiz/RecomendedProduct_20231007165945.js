import React from "react";
import { Header } from "../../utils/helpingComponent";
import { Link } from "react-router-dom";

const RecomendedProduct = () => {

  const product = localStorage.getItem("QuizProduct")

  console.log(product)

  return (
    <div>
      {" "}
      <Header heading={"Acne Quiz"} />
      <div className="w-[59rem] h-[75rem] bg-secondary text-white flex flex-col  items-center mx-auto mb-20  px-24 py-40">
        <h1 className="text-4xl font-medium text-center">
          Recommended Product
        </h1>
        <div className="flex items-center my-20 -ml-24">
          <div className="w-[26rem]  h-[30rem]">
            <img
              className="w-full h-full object-contain"
              src="/Image/69.png"
              alt="product"
            />
          </div>
          <div className="flex  flex-col gap-14">
            <h1 className="text-4xl font-normal">EXODERMA PEEL</h1>
            <p className="w-[29rem] text-xl ">
              A natural exfoliating formula from the sea that helps remove dead,
              dry skin cells. Exoderma Peel provides a quick pick-up and
              skin-tightening treatment suitable for mature, sensitive skin. Mix
              with Foamy Lift Tightening Facial Mask for a deeper exfoliating
              treatment. Size: 60ml (2oz)
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 text-center w-[45rem] text-2xl font-bold">
          <Link className="bg-primary py-6" to='/product/dmk' >VIEW PRODUCT</Link>
          <Link to={"/"} className="border-2 py-6 text-primary border-primary">
            GO BACK TO HOME PAGE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecomendedProduct;
