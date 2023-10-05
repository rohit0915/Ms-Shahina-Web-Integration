/** @format */

import axios from "axios";

const Baseurl = "https://shahina-backend.vercel.app/";

// API Integration

const getServiceMenu = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/Category/allCategory`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getServiceProduct = async (setResponse, query, setName) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/Service/all/paginateServiceSearch?categoryId=${query}`
    );
    const data = response?.data?.data?.docs;
    setName(data?.[0]?.categoryId?.name);
    setResponse(data);
  } catch {}
};

const getLimitedOffer = async (setResponse, query) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/Banner/getBanner/${query}`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getNews = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/News/getNews`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getOfferService = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/Service/getOnSale/Service`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getSkinType = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/SkinType/allSkinType`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getProductType = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/ProductType/allProductType`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getAllBrands = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/admin/Brand/allBrand`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};


const getAllBrands = async (setResponse) => {
    try {
      const response = await axios.get(`${Baseurl}api/v1/admin/Brand/allBrand`);
      const data = response.data.data;
      setResponse(data);
    } catch {}
  };
  

export {
  getServiceMenu,
  getServiceProduct,
  getLimitedOffer,
  getNews,
  getOfferService,
  getSkinType,
  getProductType,
  getAllBrands,
};
