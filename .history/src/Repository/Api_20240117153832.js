/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";
import { Login, LOGOUT } from "../store/authSlice";
import { getCartItems } from "../store/cartSlice";

const Baseurl = process.env.React_App_Baseurl;

export const showMsg = (title, message, type) => {
  Store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
};

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
      `${Baseurl}api/v1/Service/all/paginateServiceSearchforWebsite?categoryId=${query}`
    );
    const data = response?.data?.data?.docs;
    setName(data?.[0]?.categoryId?.name);
    setResponse(data);
  } catch {}
};
const getServiceProductAuth = async (setResponse, query, setName) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/getServiceByTokenFormembership?categoryId=${query}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const data = response?.data?.data;
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

export const getSingleNews = async (setResponse, id) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/News/${id}`);
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

const postQuery = async (payload, setMsg, setOpen) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/help/addQuery`,
      payload
    );
    if (response.status === 200) {
      setMsg("We will connect with you shortly !");
      setOpen(true);
    }
  } catch {}
};

const userRegistration = async (payload, navigate) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/user/registration`,
      payload
    );
    const msg = response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
    navigate("/login");
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  }
};

const userLogin = (payload, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/user/signin`,
        payload
      );
      const Token = response.data.accessToken;
      const Details = response.data.data;
      localStorage.setItem("Token", Token);
      dispatch(Login(Details));
      navigate("/my-profile");
      Store.addNotification({
        title: "",
        message: "Welcome",
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const userSendOtp = async (payload) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/user/forgetPassword`,
      payload
    );
    if (response.status === 200) {
      showMsg("success", "Please check your email", "info");
    }
  } catch (e) {
    const msg = e.response.data.msg;
    Store.addNotification({
      title: "",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  }
};

const verifyOtp = async (payload, navigate) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/user/forgotVerifyotp`,
      payload
    );
    const userId = response.data.data.userId;
    localStorage.setItem("changeId", userId);
    navigate("/changePassword");
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  }
};

const userPassword = async (payload, navigate) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/user/changePassword/${localStorage.getItem(
        "changeId"
      )}`,
      payload
    );
    const msg = response.data.message;
    navigate("/password-changed");
    Store.addNotification({
      title: "",
      message: msg,
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  }
};

const getAllProducts = async (setResponse, url, setTotal) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/Product/all/paginateProductSearch?${url}`
    );
    const data = response.data.data.docs;
    const total = response?.data?.data?.totalDocs;
    setTotal(total);
    setResponse(data);
  } catch {}
};

const getSingleProduct = async (
  setResponse,
  query,
  setImg,
  setSizes,
  setPrice,
  setSingleSize,
  setPriceId
) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/Product/${query}`);
    const data = response.data.data;
    const img = response.data.data?.productImages?.[0]?.image;
    setImg(img);
    setResponse(data);
    if (data.multipleSize === true) {
      setSizes(data.sizePrice);
      setPrice(data?.sizePrice?.[0]?.price);
      setSingleSize(data?.sizePrice?.[0]?.size);
      setPriceId(data?.sizePrice?.[0]?._id);
    } else {
      setPrice(data.price);
    }
  } catch {}
};

export const getSingleProductAuth = async (
  setResponse,
  query,
  setImg,
  setSizes,
  setPrice,
  setSingleSize,
  setPriceId,
  setIsWishlist
) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/Product/byToken/${query}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const data = response.data.data;
    const img = response.data.data?.productImages?.[0]?.image;
    setImg(img);
    setResponse(data);
    if (data.multipleSize === true) {
      setSizes(data.sizePrice);
      setPrice(data?.sizePrice?.[0]?.price);
      setSingleSize(data?.sizePrice?.[0]?.size);
      setPriceId(data?.sizePrice?.[0]?._id);
    } else {
      setPrice(data.price);
    }
    setIsWishlist(response?.data?.isWishList);
  } catch {}
};

const getFrequently = async (setResponse, id) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/FrequentlyBuyProduct/byProduct/${id}`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const AddItemCart = (productId, payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/add-to-cart/product/${productId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.status === 200) {
        showMsg("", "Product added to cart", "success");
      }

      dispatch(getCart());
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const addFBP = (id, payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/addToCartFrequentlyByProduct/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.status === 200) {
        showMsg("", "Cart Updated", "success");
        dispatch(getCart());
      }
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const getCart = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${Baseurl}api/v1/cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      });
      const data = response.data.cart;
      dispatch(getCartItems(data));
    } catch {}
  };
};

const updateDeliveyOpt = () => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${Baseurl}api/v1/updatePickupFromStore`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      dispatch(getCart());
    } catch {}
  };
};

const getGiftCard = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/GiftCards/allgiftCard`
    );
    const data = response?.data?.data;
    setResponse(data);
  } catch {}
};

const updateQuan = (productId, payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/add-to-cart/product/${productId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      dispatch(getCart());
      Store.addNotification({
        title: "",
        message: "Quanity Updated ",
        type: "info",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const deleteGift = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${Baseurl}api/cart/delete/giftPrice/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      Store.addNotification({
        title: "",
        message: "Removed !",
        type: "info",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      dispatch(getCart());
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const deleteFBP = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${Baseurl}api/cart/delete/frequentlyBuyProduct/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      Store.addNotification({
        title: "",
        message: "Removed !",
        type: "info",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      dispatch(getCart());
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const deleteItemCart = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${Baseurl}api/cart/delete/product/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      Store.addNotification({
        title: "",
        message: "Removed !",
        type: "info",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      dispatch(getCart());
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const addGiftItem = (payload, payload, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/add-to-cart/giftPrice/${payload}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if(res.status === 200) {
        
      }
      Store.addNotification({
        title: "",
        message: "Gift Added In Cart",
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      dispatch(getCart());
      navigate("/mycart");
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const getSingleService = async (id, setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/Service/${id}`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getAboutUs = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/static/getAboutUs`);
    const data = response.data.data?.[0];
    setResponse(data);
  } catch {}
};

const getQuiz = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/AcneQuiz`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const ReviewQuiz = async (answer1, answer2, answer3, answer4, navigate) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/AcneQuizSuggession/getAcneQuizSuggessionByAnswer?answer1=${answer1}&answer2=${answer2}&answer3=${answer3}&answer4=${answer4}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    let product;
    if (response?.data?.data?.productId) {
      const id = response?.data?.data?.productId?._id;
      navigate(`/product/${id}`);
    } else if (response?.data?.data?.frequentlyBuyProductId) {
      product = JSON.stringify(response?.data?.data?.frequentlyBuyProductId);
      localStorage.setItem("QuizBundeledProduct", product);
      localStorage.removeItem("QuizSingleProduct");
      navigate("/acnequiz/recomended");
    }
  } catch {}
};

const getIngredeints = async (type, setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/Ingredient/allIngredientbyType/${type}`
    );
    const data = response.data.data;
    console.log(data);
    if (Array.isArray(data) && data?.length > 0) {
      setResponse(data);
    } else {
      setResponse([]);
    }
  } catch {}
};

const checkIngredients = async (name, setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/Ingredient/checkIngredient/${name}`
    );
    const data = response.data.message;
    setResponse(data);
  } catch {}
};

const getProfile = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/user/getProfile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getAddress = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/user/getAddress`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const addServiceInCart = (payload, formDetail, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/add-to-cart/service/${payload}`,
        formDetail,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      Store.addNotification({
        title: "",
        message: "Service Added In Cart",
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      dispatch(getCart());
      navigate("/schedule1");
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const getServiceforCart = async (setResponse, setId) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/Category/allCategory`
    );
    const data = response.data.data;
    setResponse(data);
    setId(data?.[0]?._id);
  } catch {}
};

const deleteServiceCart = (payload, priceId) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${Baseurl}api/cart/delete/service/${payload}`,
        {
          priceId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      Store.addNotification({
        title: "",
        message: "Removed !",
        type: "info",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      dispatch(getCart());
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const addAdOnInCart = (payload, quantity) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/add-to-cart/addOnservices/${payload}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      Store.addNotification({
        title: "",
        message: "Added In Cart",
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      dispatch(getCart());
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const getOnService = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/AddOnServices/allAddOnServices`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const deleteAdOn = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${Baseurl}api/cart/delete/addOnservices/${payload}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      Store.addNotification({
        title: "",
        message: "Removed !",
        type: "info",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      dispatch(getCart());
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const TimeandSlot = async (formData, navigate) => {
  try {
    const response = await axios.put(
      `${Baseurl}api/v1/cart/addDateAndtimetoServiceCart`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    navigate("/mycart");
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  }
};

const updateServiceQuan = (payload, formDetail) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/add-to-cart/service/${payload}`,
        formDetail,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      Store.addNotification({
        title: "",
        message: "Quantity Updated",
        type: "info",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      dispatch(getCart());
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const updateAdOnQuantity = (payload, quantity) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/add-to-cart/addOnservices/${payload}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      Store.addNotification({
        title: "",
        message: "Quantity Updated",
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      dispatch(getCart());
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const placeOrder = async (orderId) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/placeOrder/${orderId} `,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const url = response.data?.session?.url;

    window.location.href = url;
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  }
};
export const placeOrderwithIntent = async (orderId, setKey) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/placeOrderWebsite/${orderId} `,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const intentKey = response?.data?.paymentIntent?.client_secret;
    // setKey = intentKey;
    setKey(intentKey);
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  }
};

const checkout = async (setKey, setOrderId) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/checkout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const id = response.data?.data?.orderId;
    // setOrderId = id;
    console.log("id", id);
    setOrderId(id);
    placeOrderwithIntent(id, setKey);
  } catch (e) {
    console.log(e);
    const msg = e?.response?.data?.message;
    Store.addNotification({
      title: "",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  }
};

const orderSuccess = (payload, navigate, setLoading) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${Baseurl}api/v1/successOrder/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      setLoading(false);
      if (response.status === 200) {
        dispatch(getCart());
        navigate("/thanks/success");
      }
    } catch {
      setLoading(false);
      navigate("/thanks/failed");
    }
  };
};

const orderFailed = async (payload) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/cancelOrder/${payload}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    console.log(response);
  } catch {}
};

const updateAddress = async (payload) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/user/address/new`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
  } catch {}
};

const updateProfile = async (payload) => {
  try {
    const response = await axios.put(
      `${Baseurl}api/v1/user/updateProfile`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
  } catch {}
};

const removeAddress = async (payload) => {
  try {
    const response = await axios.delete(
      `${Baseurl}api/v1/user/address/${payload}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
  } catch {}
};

const takeVerification = async (id) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/takeSubscriptionFromWebsite/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const url = response?.data?.session?.url;
    window.location.href = url;
  } catch {}
};

const verifySubscription = async (id, setResponse) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/verifySubscription/${id}`,
      {
        Status: "Paid",
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    setResponse(true);
  } catch {}
};

const cancelSubscription = async (payload) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/cancelMemberShips`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
  } catch {}
};

const getHomePage = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/Banner/getBanner/HomePage`
    );

    const data = response.data.data?.[0];
    setResponse(data);
  } catch {}
};

const getReviews = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/clientReview`);
    const data = response?.data?.data;
    setResponse(data);
  } catch {}
};

const userLogin2 = (payload, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/user/signin`,
        payload
      );
      const Token = response.data.accessToken;
      const Details = response.data.data;
      localStorage.setItem("Token", Token);
      dispatch(Login(Details));
      navigate("/schedule1");
      Store.addNotification({
        title: "",
        message: "Welcome",
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const AddToCartInBulk = (productId, payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/add-to-cart/product/${productId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const AddServiceBulk = (payload, form) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/add-to-cart/service/${payload}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };
};

const getProductReviews = async (payload, setResponse) => {
  try {
    const response = await axios.get(
      `https://shahina-backend.vercel.app/api/v1/product/getProductReviews/${payload}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    setResponse(response.data.reviews);
  } catch {}
};

const giveReview = async (formData) => {
  try {
    const response = await axios.post(
      `https://shahina-backend.vercel.app/api/v1/product/createProductReview`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
  } catch {}
};

const getRelatedProduct = async (setResponse) => {
  try {
    const response = await axios.get(
      `https://shahina-backend.vercel.app/api/v1/getRecentlyProductView`,

      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const data = response?.data?.cart?.reverse()?.slice(0, 4);
    setResponse(data);
  } catch {}
};

const getProductOrder = async (setResponse) => {
  try {
    const response = await axios.get(
      `https://shahina-backend.vercel.app/api/v1/productOrders`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const data = response?.data?.data?.reverse();
    setResponse(data);
  } catch {}
};

const trackOrder = async (id) => {
  try {
    const response = await axios.get(
      `https://shahina-backend.vercel.app/api/v1/getShipmentBy/productOrderId/${id}`
    );
    const url = response?.data?.data?.tracking_url;
    window.location.href = url;
  } catch (e) {
    console.log(e);
  }
};

const getServiceOrder = async (query, setResponse) => {
  try {
    const response = await axios.get(
      `https://shahina-backend.vercel.app/api/v1/serviceOrders?serviceStatus=${query}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const data = response?.data?.data?.reverse();
    setResponse(data);
  } catch {}
};

const RenewMembership = async () => {
  try {
    const response = await axios.post(
      `https://shahina-backend.vercel.app/api/v1/takeSubscriptionFromWebsiteforRecurring`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  }
};

const getAllSlot = async (setResponse, date) => {
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/admin/Slot/allSlot?date=${date}`
    );
    const data = res?.data?.data;
    if (Array.isArray(data)) {
      setResponse(data);
    } else {
      setResponse([]);
    }
  } catch (e) {
    const msg = e?.response?.data?.message;
    if (msg === "Slots not Found") {
      setResponse([]);
    }
  }
};

const getShippingPrivacy = async (setResponse) => {
  try {
    const res = await axios.get(`${Baseurl}api/v1/static/getShippingPrivacy`);
    const data = res.data.data?.[0]?.privacy;
    setResponse(data);
  } catch {}
};

const getReturnPolicy = async (setResponse) => {
  try {
    const res = await axios.get(`${Baseurl}api/v1/static/getReturnPrivacy`);
    const data = res.data.data?.[0]?.privacy;
    setResponse(data);
  } catch {}
};
const filterProduct = async (payload, setResponse) => {
  try {
    const res = await axios.get(
      `https://shahina-backend.vercel.app/api/v1/Product/all/paginateProductSearch?search=${payload}`
    );
    const data = res.data.data?.docs;
    setResponse(data);
  } catch {}
};

export const getMembership_terms = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/static/getMembershipTerm`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

export const getCrossedSlot = async (setResponse, month, year) => {
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/admin/Slot/getAvailableSlotOnwhichDate?year=${year}&month=${month}`
    );
    const data = res.data.allSlot;
    setResponse(data);
  } catch {}
};

export const getSession = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${Baseurl}api/v1/user/checkSession`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      });
      const isLoggedIn = res.data.data;
      if (isLoggedIn === false) {
        dispatch(LOGOUT());
      }
    } catch {}
  };
};

export const createWishlist = async (id, fetchHandler) => {
  try {
    const res = await axios.post(
      `${Baseurl}api/v1/user/createWishlist/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    if (res.status === 200) {
      fetchHandler();
      showMsg("Success", "Added to favourites", "success");
    }
  } catch {}
};

export const getWishlist = async (setResponse) => {
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/user/myWishlist`,

      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    const data = res?.data?.wishlist?.products;
    if (res.status === 200) {
      setResponse(data);
    }
  } catch {}
};

export const removeWishlist = async (id, fetchHandler) => {
  try {
    const res = await axios.post(
      `${Baseurl}api/v1/user/removeFromWishlist/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    if (res.status === 200) {
      fetchHandler();
      showMsg("Success", "Remove to favourites", "success");
    }
  } catch {}
};

export const serviceCheckout = (setStatus) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${Baseurl}api/v1/checkoutService`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch(getCart());
      }
    } catch (e) {
      const msg = e.response.data.msg;
      setStatus(msg);
      showMsg("Error !", msg, "danger");
    }
  };
};

export const MembershipFaq = async (setResponse) => {
  try {
    const res = await axios.get(
      `${Baseurl}api/v1/static/faq/AllMembershipFaqs`
    );
    if ((res.status = 200)) {
      setResponse(res.data.data);
    }
  } catch {}
};

export const guestCheckout = async (payload) => {
  try {
    const res = await axios.post(
      `${Baseurl}api/v1/placeOrderForGuest`,
      payload
    );
    const url = res.data.session.url;
    window.location.href = url;
  } catch {}
};

export const getServiceCount = async (setShow) => {
  try {
    const res = await axios.get(`${Baseurl}api/v1/getServiceOrdersCount`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    if (res.status === 200) {
      const count = res.data.data;
      if (count === 0) {
        setShow(true);
      }
    }
  } catch {}
};

export {
  filterProduct,
  getReturnPolicy,
  getShippingPrivacy,
  getAllSlot,
  RenewMembership,
  getServiceOrder,
  trackOrder,
  getProductOrder,
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
  getContactDetails,
  postQuery,
  userRegistration,
  userLogin,
  userSendOtp,
  verifyOtp,
  userPassword,
  getAllProducts,
  getSingleProduct,
  getFrequently,
  AddItemCart,
  addFBP,
  getCart,
  updateDeliveyOpt,
  getGiftCard,
  updateQuan,
  deleteGift,
  deleteFBP,
  deleteItemCart,
  addGiftItem,
  getSingleService,
  getAboutUs,
  getQuiz,
  ReviewQuiz,
  getIngredeints,
  checkIngredients,
  getProfile,
  getAddress,
  addServiceInCart,
  getServiceforCart,
  deleteServiceCart,
  addAdOnInCart,
  getOnService,
  deleteAdOn,
  TimeandSlot,
  updateServiceQuan,
  updateAdOnQuantity,
  checkout,
  placeOrder,
  orderSuccess,
  orderFailed,
  updateAddress,
  updateProfile,
  removeAddress,
  takeVerification,
  verifySubscription,
  cancelSubscription,
  getHomePage,
  getReviews,
  userLogin2,
  AddToCartInBulk,
  AddServiceBulk,
  getServiceProductAuth,
  getProductReviews,
  giveReview,
  getRelatedProduct,
};
