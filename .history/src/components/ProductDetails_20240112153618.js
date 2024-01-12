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
  getSingleProductAuth,
  getProductReviews,
  giveReview,
  getRelatedProduct,
  createWishlist,
  removeWishlist,
  guestCheckout,
} from "../Repository/Api";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../store/authSlice";
import { addToCart } from "../store/DummyCart";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { View_description } from "../Helper/Herlper";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [img, setImg] = useState("");
  const [relatedProducts, setRelatedProducts] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [sizes, setSizes] = useState([]);
  const [price, setPrice] = useState(0);
  const isLoggedIn = useSelector(isAuthenticated);
  const [priceId, setPriceId] = useState("");
  const [size, setSize] = useState("");
  const [reviws, setReviews] = useState([]);
  const [rating, setRating] = useState(1);
  const [open, setOpen] = useState(false);
  const [recentProduct, setRecentProduct] = useState([]);
  const [isWishlist, setIsWishlist] = useState(null);
  const [comment, setComment] = useState("");
  const [FBarr, setFBArr] = useState([]);

  const giveRating = async (e) => {
    e.preventDefault();
    const payload = { rating, comment, productId: id };
    await giveReview(payload);
    getReviews();
    setOpen(false);
  };

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

  function buyWithStripe() {
    let payload;
    if (priceId) {
      payload = {
        productId: id,
        priceId,
        quantity,
      };
    } else {
      payload = {
        productId: id,
        quantity,
      };
    }
    guestCheckout(payload);
  }

  function addToFav() {
    createWishlist(id, fetchProduct);
  }
  function removeFromFav() {
    removeWishlist(id, fetchProduct);
  }

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cartHandler = () => {
    if (isLoggedIn === true) {
      dispatch(AddItemCart(id, payload));
    } else {
      let payload;
      if (size) {
        payload = {
          _id: priceId,
          quantity,
          product: {
            _id: product._id,
            name: product.name,
            images: product.productImages,
          },
          priceId,
          size,
          sizePrice: price,
        };
      } else {
        payload = {
          _id: product._id,
          quantity,
          product: {
            _id: product._id,
            name: product.name,
            images: product.productImages,
          },
          quantity,
          sizePrice: price,
        };
      }
      dispatch(addToCart(payload));
    }
  };

  const FBHandler = (id) => {
    const ids = FBarr?.map((i) => i._id);
    const payload = {
      quantity: 1,
      productId: ids,
    };
    dispatch(addFBP(id, payload));
  };

  useEffect(() => {
    getFrequently(setRelatedProducts, id);
  }, [id]);

  console.log(relatedProducts);

  const fetchProduct = async () => {
    try {
      if (isLoggedIn === true) {
        await getSingleProductAuth(
          setProduct,
          id,
          setImg,
          setSizes,
          setPrice,
          setSize,
          setPriceId,
          setIsWishlist
        );
      } else {
        await getSingleProduct(
          setProduct,
          id,
          setImg,
          setSizes,
          setPrice,
          setSize,
          setPriceId
        );
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id, isLoggedIn]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const MyComp = ({ desc, list, listes }) => {
    return (
      <div className="content">
        {desc && <View_description description={desc} />}

        {list && (
          <ul>
            {list?.map((i, index) => (
              <div style={{ marginTop: "10px" }} key={`Step${i.step}${index}`}>
                <span> {i?.step} </span>
                <View_description description={i?.description} />
              </div>
            ))}
          </ul>
        )}
        {listes && <View_description description={listes?.[0]} />}
      </div>
    );
  };

  const items = [
    product?.description && {
      key: " DESCRIPTION1",
      label: "DESCRIPTION",
      children: <MyComp desc={product?.description} />,
    },
    product?.ingredients && {
      key: "INGREDIENTS2",
      label: "INGREDIENTS",
      children: <MyComp desc={product?.ingredients} />,
    },
    product?.howTouse && {
      key: "HOWTOUSE3",
      label: "HOW TO USE",
      children: <MyComp list={product?.howTouse} />,
    },
    product?.benfit && {
      key: "BENEFITS4",
      label: "BENEFITS",
      children: <MyComp listes={product?.benfit} />,
    },
    product?.returnPolicy && {
      key: "ReturnPolicy5",
      label: "RETURN POLICY",
      children: <MyComp desc={product?.returnPolicy} />,
    },
  ].filter(Boolean);

  const getReviews = () => {
    getProductReviews(id, setReviews);
  };

  useEffect(() => {
    getReviews();
  }, [id]);

  const relatedProduct = () => {
    getRelatedProduct(setRecentProduct);
  };

  useEffect(() => {
    relatedProduct();
  }, []);

  useEffect(() => {
    if (relatedProducts) {
      setFBArr(relatedProducts?.products);
    }
  }, [relatedProducts]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const handleCheck = (i) => {
    if (isItemInCart(i._id)) {
      removeFromFBarr(i._id);
    } else {
      setFBArr((prev) => [...prev, i]);
    }
  };

  const isItemInCart = (itemId) => {
    return FBarr?.some((i) => i?._id === itemId);
  };

  const fbpTotal = FBarr?.reduce(
    (total, item) => total + parseFloat(item.price || 0),
    0
  );

  const removeFromFBarr = (itemId) => {
    setFBArr((prevItems) => prevItems.filter((item) => item._id !== itemId));
  };

  return (
    <>
      <div className="indivisual-product">
        <div className="left">
          <div className="upperImage">
            <img src={img} alt="" />
            {isWishlist === true && (
              <FaHeart onClick={removeFromFav} className="heart" />
            )}
            {isWishlist === false && (
              <FaRegHeart className="heart" onClick={() => addToFav()} />
            )}
          </div>
          <div className="multi-Images">
            {product?.productImages?.map((i, index) => (
              <img
                src={i.image}
                className="cursor-pointer"
                alt=""
                key={`Product-Image${index}`}
                onClick={() => setImg(i.image)}
              />
            ))}
          </div>
        </div>

        <div className="right">
          <p className="title"> {product?.name} </p>

          <div className="price-container">
            <span className="price">${price}</span>
          </div>

          {product?.membshipPrice > 0 && (
            <div className="Membership_discount">
              <div>
                <span className="title"> Membership Discount Percentage :</span>
                <span className="desc"> {product?.membershipDiscountPer} </span>
              </div>
              <div>
                <span className="title"> Membership Discount :</span>
                <span className="desc"> {product?.membershipDiscount} </span>
              </div>
            </div>
          )}

          <p className="quantity">QUANTITY</p>

          <div style={{ width: "40%" }} className="Quantity_Container">
            <div className="qty">
              <span
                className="input cursor-pointer"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                <AiOutlineMinus />
              </span>
              <span className="item"> {quantity} </span>
              <span
                className="input cursor-pointer"
                onClick={() => setQuantity(quantity + 1)}
              >
                <AiOutlinePlus />
              </span>
            </div>
          </div>

          {sizes?.length > 0 && (
            <div className="multiple-sizes">
              <p> Select Size </p>
              <div className="Main">
                {sizes?.map((i, index) => (
                  <div
                    key={`multiple-sizes${index}`}
                    className={`box ${size === i.size ? "active" : ""} `}
                    onClick={() => {
                      setSize(i.size);
                      setPrice(i.price);
                      setPriceId(i._id);
                    }}
                  >
                    {i.size}
                  </div>
                ))}
              </div>
            </div>
          )}

          {product?.acneType || product?.considerAcne ? (
            <div className="multiple-sizes">
              <p>
                Categories : {product?.acneType} , {product?.considerAcne}
              </p>
            </div>
          ) : (
            ""
          )}

          <div className="buttons">
            <button className="cart" onClick={() => cartHandler()}>
              ADD TO CART
            </button>

            <button className="stripe" onClick={() => buyWithStripe()}>
              BUY WITH STRIPE
            </button>
          </div>

          <div className="tabs-container">
            <Tabs defaultActiveKey="DESCRIPTION1" items={items} />
          </div>
        </div>
      </div>
      {product?.keyIngredients?.[0]?.length > 0 && (
        <div className="Product_Key_Ingredeints">
          <div className="container">
            <div className="Item">
              <div class="ingredients">
                <h3 class="heading">Key Ingredients</h3>

                <View_description description={product?.keyIngredients?.[0]} />
              </div>
              <div className="Image_Container">
                <img alt="" src={img} />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="product-reviews">
        <div className="container">
          <h3 className="product-reviews__suptitle">Product Reviews</h3>
          <div className="giveReview">
            <button onClick={() => setOpen(!open)}>Write a Review</button>
          </div>
          <div className="product-reviews">
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: open ? "auto" : 0,
                opacity: open ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              exit={{
                height: 0,
                opacity: 0,
              }}
            >
              <div className={`Review_Form`}>
                <p>Write a Review</p>

                <div className="Rat">
                  {rating >= 1 ? (
                    <AiFillStar
                      onClick={() => setRating(1)}
                      className="fill_star"
                    />
                  ) : (
                    <AiOutlineStar
                      className="hollow_star"
                      onClick={() => setRating(1)}
                    />
                  )}
                  {rating >= 2 ? (
                    <AiFillStar
                      onClick={() => setRating(2)}
                      className="fill_star"
                    />
                  ) : (
                    <AiOutlineStar
                      className="hollow_star"
                      onClick={() => setRating(2)}
                    />
                  )}
                  {rating >= 3 ? (
                    <AiFillStar
                      onClick={() => setRating(3)}
                      className="fill_star"
                    />
                  ) : (
                    <AiOutlineStar
                      className="hollow_star"
                      onClick={() => setRating(3)}
                    />
                  )}
                  {rating >= 4 ? (
                    <AiFillStar
                      onClick={() => setRating(4)}
                      className="fill_star"
                    />
                  ) : (
                    <AiOutlineStar
                      className="hollow_star"
                      onClick={() => setRating(4)}
                    />
                  )}
                  {rating >= 5 ? (
                    <AiFillStar
                      onClick={() => setRating(5)}
                      className="fill_star"
                    />
                  ) : (
                    <AiOutlineStar
                      className="hollow_star"
                      onClick={() => setRating(5)}
                    />
                  )}
                </div>
                <form onSubmit={giveRating}>
                  <textarea
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment"
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </motion.div>

            {reviws?.map((i, index) => (
              <div className="Review-Box" key={`Review${index}`}>
                <div className="profile_Container">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt=""
                  />
                  <div>
                    <span className="title">
                      {" "}
                      {i.user?.firstName} {i.user?.lastName}
                    </span>
                    <div className="rating">
                      {[...Array(i.rating)]?.map((_, index) => (
                        <AiFillStar key={`Star${index}`} />
                      ))}
                    </div>
                    <p className="comment">{i.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {relatedProducts && (
        <div className="frequently-bought">
          <p className="title">Frequently Bought Together</p>

          <div className="container">
            <div className="left">
              {FBarr?.map((i, index) => (
                <>
                  <img
                    src={i.productImages?.[0]?.image}
                    className="Image"
                    alt=""
                    key={`Product_Image_Carousel_Images${index}`}
                  />
                  <img
                    src="/Image/96.png"
                    key={`Product_Image_Carousel_Images_Img${index}`}
                    className="plus"
                    alt=""
                  />
                </>
              ))}
            </div>
            {FBarr?.length > 0 && (
              <div className="right">
                <p className="heading">TOTAL PRICE</p>
                <p className="price">${fbpTotal} </p>
                <button onClick={() => FBHandler(relatedProducts?._id)}>
                  ADD SELECTED TO CART
                </button>
              </div>
            )}
          </div>

          <div className="list">
            {relatedProducts?.products?.map((i, index) => (
              <div className="Item" key={`Related_Product${index}`}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isItemInCart(i._id)}
                    onChange={() => handleCheck(i)}
                  />

                  <p className="head">{i.name} </p>
                </div>
                <p className="price">
                  $
                  {i.multipleSize === true ? i?.sizePrice?.[0]?.price : i.price}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}


{recentProduct && }
      <h2 className="text-4xl font-medium  text-primary text-center my-14">
        You May Also Like
      </h2>

      <div className="multi-product">
        {recentProduct?.map((i, index) => (
          <div
            className="Item"
            key={`related-product${index}`}
            onClick={() => navigate(`/product/${i.products?._id}`)}
          >
            <img src={i.products?.productImages?.[0]?.image} alt="" />
            <p className="title">{i.products?.name}</p>
            <p className="price">
              $
              {i.products?.sizePrice?.[0]?.price
                ? i.products?.sizePrice?.[0]?.price
                : i.products?.price}{" "}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
