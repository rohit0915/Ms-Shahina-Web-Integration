/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addFBP } from "../../Repository/Api";

const RecomendedProduct = () => {
  const [size, setSize] = useState("");
  const [priceId, setPriceId] = useState("");
  const quantity = 1;
  const [price, setPrice] = useState(0);


  useEffect(() => {
    
  })

  setSizes(data.sizePrice);
  setPrice(data?.sizePrice?.[0]?.price);
  setSingleSize(data?.sizePrice?.[0]?.size);
  setPriceId(data?.sizePrice?.[0]?._id);
  const navigate = useNavigate();

  const singleProduct = JSON.parse(localStorage.getItem("QuizSingleProduct"));
  const bundeledProduct = JSON.parse(
    localStorage.getItem("QuizBundeledProduct")
  );

  console.group("single", singleProduct);

  const dispatch = useDispatch();
  const FBHandler = (id) => {
    dispatch(addFBP(id, 1));
  };

  return (
    <div>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
        </div>
        <p className="title">Acne Quiz</p>
      </div>{" "}
      <div className="Recommended_Product">
        <h1 className="text-4xl font-medium text-center">
          Recommended Product
        </h1>{" "}
        <div className="two_sec">
          <div className="w-[26rem] h-[30rem]">
            <img
              className="w-full h-full object-contain"
              src={singleProduct?.productImages?.[0]?.image}
              alt=""
            />
          </div>
          <div className="flex  flex-col gap-14" style={{ padding: "20px" }}>
            <h1 className="text-4xl font-normal title">
              {" "}
              {singleProduct?.name}{" "}
            </h1>
            <p className="w-[29rem] text-xl content ">
              {singleProduct?.description}
            </p>
          </div>
        </div>{" "}
        <div className="tow_links">
          <Link
            className="bg-primary py-6"
            to={`/product/${singleProduct?._id}`}
          >
            VIEW PRODUCT
          </Link>
        </div>
        <div className="frequently-bought">
          <div className="container">
            <div className="left">
              {bundeledProduct?.products?.map((i, index) => (
                <>
                  <img
                    src={i.productImages?.[0]?.image}
                    className="Image"
                    alt=""
                    key={`Product_Image_Carousel_Images${index}`}
                  />
                  <img
                    src="/Image/96.png"
                    key={`Product_Image_Carousel_Images_Img${index}`}
                    className="plus"
                    alt=""
                  />
                </>
              ))}
            </div>
            <div className="right">
              <p className="heading">TOTAL PRICE</p>
              <p className="price">${bundeledProduct?.price} </p>
              <button onClick={() => FBHandler(bundeledProduct?._id)}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="tow_links">
          <Link
            style={{ color: "#042B26" }}
            to={"/"}
            className="border-2 py-6 text-primary border-primary"
          >
            GO BACK TO HOME PAGE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecomendedProduct;
