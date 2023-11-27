/** @format */

import React, { useState } from "react";
import { shopMenu } from "../../constants/shopConstant";
import { BsChevronDown } from "react-icons/bs";
import {
  Brands,
  Nutrition,
  ProductType,
  SkinConditions,
  SkinType,
} from "./shopHelpingcomponents";

const ShopMenu = () => {
  const [hoveredType, setHoveredType] = useState(null);
  const [isBrand, setBrand] = useState(true);

  const handleHover = (id) => {
    if (id === 2) {
      setBrand(true);
    }
    setHoveredType(id);
  };

  const handleLeave = () => {
    setBrand(false);
    setHoveredType(null);
  };

  console.log(hoveredType);

  const clickHandler = (id) => {
    if(id === handleHover) {
      
      setHoveredType(null)
    }else{
      setHoveredType(id)
    }
  }

  return (
    <div
      className="relative Shop_Menu_Container"
      onMouseLeave={() => handleLeave()}
    >
      <ul className="Item_Name">
        {shopMenu.map((item, id) => (
          <li key={id}>
            <div onClick={() => handleHover(id)}>
              {item}
              <BsChevronDown />
            </div>
          </li>
        ))}
      </ul>
      <div
        className={` Item_Container  ${
          hoveredType !== null ? "fade-entered" : "fade-exiting"
        }`}
      >
        {hoveredType === 0 && <SkinType />}
        {hoveredType === 1 && <ProductType />}
        {hoveredType === 2 && <Brands isBrand={isBrand} />}
        {hoveredType === 3 && <SkinConditions />}
        {hoveredType === 4 && <Nutrition />}
      </div>
    </div>
  );
};

export default ShopMenu;
