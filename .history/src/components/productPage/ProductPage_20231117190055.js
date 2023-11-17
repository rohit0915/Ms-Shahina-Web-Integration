/** @format */

import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import AllProducts from "./AllProducts";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllBrands,
  getAllNutrition,
  getAllProducts,
  getProductType,
  getSkinCondition,
  getSkinType,
} from "../../Repository/Api";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [skinType, setSkinType] = useState([]);
  const [productType, setProductType] = useState([]);
  const [brands, setBrands] = useState([]);
  const [skinCondition, setSkinCondition] = useState([]);
  const [nutrition, setNutrition] = useState([]);
  const { type, id, name } = useParams();
  const [img, setImg] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getSkinType(setSkinType);
    getProductType(setProductType);
    getAllBrands(setBrands);
    getSkinCondition(setSkinCondition);
    getAllNutrition(setNutrition);
  }, []);

  const url = `&${type}=${id}`;

  const productHandler = async () => {
    try {
      setLoad(true);
      await getAllProducts(setProducts, search, url);
    } catch (e) {
      console.log(e);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    productHandler();
    window.scrollTo(0, 0);
  }, [search, id]);

  const navigate = useNavigate();

  useEffect(() => {
    if (products) {
      if (type === "skinTypeId") {
        setImg(products?.[0]?.skinTypeId?.image);
      } else if (type === "productTypeId") {
        setImg(products?.[0]?.productTypeId?.image);
      } else if (type === "brandId") {
        setImg(products?.[0]?.brandId?.image);
      } else if (type === "skinConditionId") {
        setImg(products?.[0]?.skinConditionId?.image);
      } else if (type === "nutritionId") {
        setImg(products?.[0]?.nutritionId?.image);
      } else {
        setImg("/Image/39.jpg");
      }
    } else {
      setImg("/Image/39.jpg");
    }
  }, [products, img]);


  const Component = () => {
    return (

    )
  }

  return (
    
  );
};

export default ProductPage;
