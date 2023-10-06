/** @format */

import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  getSingleProduct,
  getFrequently,
  AddItemCart,
  addFBP,
} from "../Repository/Api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [img, setImg] = useState("");
  const [relatedProducts, setRelatedProducts] = useState({});
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const cartHandler = () => {
    AddItemCart(id);
  };

  const FBHandler = (id) => {
    addFBP(id);
  };

  useEffect(() => {
    getSingleProduct(setProduct, id, setImg);
    getFrequently(setRelatedProducts);
  }, []);

  const MyComp = ({ desc, list }) => {
    return (
      <div className="content">
        {desc && <p> {desc} </p>}

        {list && (
          <ul>
            {list?.map((i, index) => (
              <div style={{ marginTop: "10px" }}>
                <span> {i?.step} </span>
                <li key={index}> {i?.description} </li>
              </div>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const items = [
    {
      key: "1",
      label: "DESCRIPTION",
      children: <MyComp desc={product?.description} />,
    },
    {
      key: "2",
      label: "INGREDIENTS",
      children: <MyComp desc={product?.ingredients} />,
    },
    {
      key: "3",
      label: "HOW TO USE",
      children: <MyComp list={product?.howTouse} />,
    },
    {
      key: "4",
      label: "BENEFITS",
      children: (
        <MyComp list={["Exfoliates", "Antiaxidant rich", "Sulfate Free"]} />
      ),
    },
  ];

  return (
    <>
      <div className="indivisual-product">
        <div className="left">
          <div className="upperImage">
            <img src={img} alt="" />
          </div>
          <div className="multi-Images">
            {product?.productImages?.map((i, index) => (
              <img
                src={i.image}
                className="cursor-pointer"
                alt=""
                onClick={() => setImg(i.image)}
              />
            ))}
          </div>
        </div>

        <div className="right">
          <p className="title"> {product?.name} </p>

          <div className="price-container">
            <span className="price">
              $
              {product?.discountAllow === false
                ? product?.price
                : product?.discount}{" "}
            </span>
            <span className="mrp">
              {product?.discountAllow === true && `$${product?.discount}`}{" "}
            </span>
          </div>

          <p className="quantity">QUANTITY</p>

          <div style={{ width: "40%" }}>
            <div className="qty">
              <span className="input">
                <AiOutlineMinus />
              </span>
              <span className="item">1</span>
              <span className="input">
                <AiOutlinePlus />
              </span>
            </div>
          </div>

          <div className="buttons">
            <button className="cart" onClick={() => cartHandler()}>
              ADD TO CART
            </button>
            <button className="stripe" onClick={() => navigate("/mycart")}>
              BUY WITH STRIPE
            </button>
          </div>

          <div className="tabs-container">
            <Tabs defaultActiveKey="1" items={items} />
          </div>
        </div>
      </div>

      <div className="frequently-bought">
        <p className="title">Frequently Bought Together</p>
        <div className="container">
          <div className="left">
            {relatedProducts?.products?.map((i, index) => (
              <>
                <img
                  src={i.productImages?.[0]?.image}
                  className="Image"
                  alt=""
                  key={index}
                />
                <img src="/Image/96.png" key={index} className="plus" alt="" />
              </>
            ))}
          </div>
          <div className="right">
            <p className="heading">TOTAL PRICE</p>
            <p className="price">${relatedProducts?.price} </p>
            <button onClick={() => FBHandler(relatedProducts?._id)}>
              ADD SELECTED TO CART
            </button>
          </div>
        </div>

        <div className="list">
          {relatedProducts?.products?.map((i, index) => (
            <div className="Item" key={index}>
              <img src="/Image/97.png" alt="" />
              <p className="head">THIS ITEM : {i.name} </p>
              <p className="price">
                ${i.discountAllow === true ? i.discount : i.price}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        You May Also Like
      </h2>

      <div className="multi-product">
        <div className="Item">
          <img src="/Image/98.png" alt="" />
          <p className="title">ACNE-SAFE KIT FOR NORMAL OR COMBINATION SKIN</p>
          <p className="price">$125.00</p>
        </div>
        <div className="Item">
          <img src="/Image/93.png" alt="" />
          <p className="title">PORE REDUCTION PLUS</p>
          <p className="size"> Size : 30 ml ( 1 fl oz) </p>
          <p className="price">$125.00</p>
        </div>
        <div className="Item">
          <img src="/Image/95.png" alt="" />
          <p className="title">REVESKIN RETINOL ESSENTIAL 1.0</p>
          <p className="size"> Size : 30 ml ( 1 fl oz) </p>
          <p className="price">$125.00</p>
        </div>
        <div className="Item">
          <img src="/Image/91.png" alt="" />
          <p className="title">PORE REDUCTION PLUS</p>
          <p className="size"> Size : 30 ml ( 1 fl oz) </p>
          <p className="price">$125.00</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
