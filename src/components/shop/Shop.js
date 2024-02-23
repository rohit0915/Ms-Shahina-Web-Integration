/** @format */

import React, { useState, useEffect } from "react";
import {
  Brands,
  Nutrition,
  ProductType,
  Products,
  SkinConditions,
  SkinType,
} from "./shopHelpingcomponents";
import ShopMenu from "./ShopMenu";
import { useNavigate } from "react-router-dom";
import { getLimitedOffer, getWishlist } from "../../Repository/Api";
import LatestNews from "../home/LatestNews";

const Shop = () => {
  const [response, setResponse] = useState([]);
  const [fav, setFav] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    getLimitedOffer(setResponse, "shopPage");
    getWishlist(setFav);
  }, []);

  return (
    <section>
      <ShopMenu />
      {response && (
        <div className="relative_product_container">
          <img
            className="full_Image"
            src={response?.[0]?.shopImage?.[0]}
            alt=""
          />
          <div className="content">
            <h1 className="text-6xl text-white text-center  z-50 font-light">
              Shop
            </h1>
          </div>
          <div className="Image">
            <img
              src="/asessts/back-button.svg"
              alt=""
              className="cursor-pointer"
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      )}

      <h2
        className="text-4xl font-medium  text-primary text-center my-14"
        style={{ textTransform: "uppercase" }}
      >
        Shop by skin type
      </h2>

      <SkinType />
      <h2
        className="text-4xl font-medium  text-primary text-center my-14"
        style={{ textTransform: "uppercase" }}
      >
        Shop by product type
      </h2>
      <ProductType />
      <h2
        className="text-4xl font-medium  text-primary text-center my-14"
        style={{ textTransform: "uppercase" }}
      >
        Shop by brands
      </h2>
      <Brands />
      <h2
        className="text-4xl font-medium  text-primary text-center my-14"
        style={{ textTransform: "uppercase" }}
      >
        Shop by skin conditions
      </h2>
      <SkinConditions />
      <h2
        className="text-4xl font-medium  text-primary text-center my-14"
        style={{ textTransform: "uppercase" }}
      >
        Shop  nutritions
      </h2>
      <Nutrition />
      {fav?.length > 0 && (
        <>
          <h2
            className="text-4xl font-medium  text-primary text-center my-14"
            id="FAVOURITES"
          >
            CUSTOMER’S FAVOURITES
          </h2>
          <Products data={fav} />
        </>
      )}

      <LatestNews />
    </section>
  );
};

export default Shop;
