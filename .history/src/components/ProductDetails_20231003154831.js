/** @format */

import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Tabs } from "antd";

const ProductDetails = () => {
  const items = [
    {
      key: "1",
      label: "DESCRIPTION",
      children: (
        <MyComp desc="A natural exfoliating formula from the sea that helps remove dead, dry skin cells. Exoderma Peel provides a quick pick-up and skin-tightening treatment suitable for mature, sensitive skin. Mix with Foamy Lift Tightening Facial Mask for a deeper exfoliating treatment. Size: 60ml (2oz)" />
      ),
    },
    {
      key: "2",
      label: "INGREDIENTS",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "HOW TO USE",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "BENEFITS",
      children: "Content of Tab Pane 3",
    },
  ];

  const MyComp = ({ desc, list }) => {
    return (
      <div className="content">
        {desc && <p> {desc} </p>}

        {list && (
          <ul>
            {list?.map((i, index) => (
              <li key={index}> {i} </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="indivisual-product">
      <div className="left">
        <div className="upperImage">
          <img src="/Image/91.png" alt="" />
        </div>
        <div className="multi-Images">
          <img src="/Image/92.png" alt="" />
          <img src="/Image/92.png" alt="" />
          <img src="/Image/92.png" alt="" />
          <img src="/Image/92.png" alt="" />
        </div>
      </div>

      <div className="right">
        <p className="title">EXODERMA PEEL</p>

        <div className="price-container">
          <span className="price">$125.00</span>
          <span className="mrp">$125.00</span>
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
          <button className="cart">ADD TO CART</button>
          <button className="stripe">BUY WITH STRIPE</button>
        </div>

        <div className="tabs-container">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
