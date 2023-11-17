/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addFBP, AddItemCart } from "../../Repository/Api";

const RecomendedProduct = () => {
  const [size, setSize] = useState("");
  const [priceId, setPriceId] = useState("");
  const quantity = 1;
  const [price, setPrice] = useState(0);

  const singleProduct = JSON.parse(localStorage.getItem("QuizSingleProduct"));
  const bundeledProduct = JSON.parse(
    localStorage.getItem("QuizBundeledProduct")
  );

  useEffect(() => {
    if (singleProduct) {
      setPrice(singleProduct?.sizePrice?.[0]?.price);
      setSize(singleProduct?.sizePrice?.[0]?.size);
      setPriceId(singleProduct?.sizePrice?.[0]?._id);
    }
  }, [singleProduct]);

  let payload;

  if (size) {
    payload = {
      priceId,
      quantity,
      size,
      sizePrice: price,
    };
  } else {
    payload = {
      quantity,
      sizePrice: price,
    };
  }

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const FBHandler = (id) => {
    dispatch(addFBP(id, 1));
  };

  const cartHandler = (id) => {
    dispatch(AddItemCart(id, payload));
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
          <a
            href="#"
            className="bg-primary py-6"
            onClick={() => cartHandler(singleProduct?._id)}
          >
            ADD TO CART
          </a>
        </div>

        {bundeledProduct && }
       
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
