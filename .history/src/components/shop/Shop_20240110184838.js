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
import Description from "./Description";
import { useNavigate } from "react-router-dom";
import { getLimitedOffer, getWishlist } from "../../Repository/Api";

const Shop = () => {
  const [desc, setDesc] = useState(0);
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
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      )}

      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        SHOP SKIN TYPE
      </h2>

      <SkinType />
      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        SHOP PRODUCT TYPE
      </h2>
      <ProductType />
      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        SHOP BRANDS
      </h2>
      <Brands />
      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        SHOP SKIN CONDITIONS
      </h2>
      <SkinConditions />
      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        SHOP NUTRITON
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

      <div>
        {response?.[0]?.shopDetails?.map(
          (item, index) =>
            desc === index && (
              <Description
                key={index}
                id={index}
                setDesc={setDesc}
                src={item.image}
                response={response?.[0]?.shopDetails}
                title={item.title}
                desc={item.desc}
              />
            )
        )}
      </div>
    </section>
  );
};

export default Shop;
