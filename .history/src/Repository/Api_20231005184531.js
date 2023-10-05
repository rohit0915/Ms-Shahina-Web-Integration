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

const getSkinCondition = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/SkinCondition/allSkinCondition`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getAllNutrition = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/Nutrition/allNutrition`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getGallery = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/Gallary/getGallary`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getFaq = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/static/faq/All`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getPrivacyPolicy = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/static/getPrivacy`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getTerms = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/static/getTerms`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getSubscription = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/getSubscription`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getContactDetails = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/ContactDetails/viewContactDetails`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const postQuer


export {
  getServiceMenu,
  getServiceProduct,
  getLimitedOffer,
  getNews,
  getOfferService,
  getSkinType,
  getProductType,
  getAllBrands,
  getSkinCondition,
  getAllNutrition,
  getGallery,
  getFaq,
  getPrivacyPolicy,
  getTerms,
  getSubscription,
  getContactDetails
};
