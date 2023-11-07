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
} from "../Repository/Api";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../store/authSlice";
import { addToCart } from "../store/DummyCart";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

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
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);

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
    dispatch(addFBP(id, 1));
  };

  useEffect(() => {
    getFrequently(setRelatedProducts);
  }, []);

  useEffect(() => {
    if (isLoggedIn === true) {
      getSingleProductAuth(
        setProduct,
        id,
        setImg,
        setSizes,
        setPrice,
        setSize,
        setPriceId
      );
    } else {
      getSingleProduct(
        setProduct,
        id,
        setImg,
        setSizes,
        setPrice,
        setSize,
        setPriceId
      );
    }
  }, [id, isLoggedIn]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const MyComp = ({ desc, list, listes }) => {
    return (
      <div className="content">
        {desc && <p> {desc} </p>}

        {list && (
          <ul>
            {list?.map((i, index) => (
              <div style={{ marginTop: "10px" }} key={`Step${i.step}${index}`}>
                <span> {i?.step} </span>
                <li> {i?.description} </li>
              </div>
            ))}
          </ul>
        )}
        {listes && (
          <ul>
            {listes?.map((i, index) => (
              <div style={{ marginTop: "10px" }} key={`Benefit${index}`}>
                <li> {i} </li>
              </div>
            ))}
          </ul>
        )}
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
  }, []);

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
              <span className="input">
                <AiOutlineMinus
                  onClick={() => setQuantity(quantity - 1)}
                  style={{ cursor: "pointer" }}
                />
              </span>
              <span className="item"> {quantity} </span>
              <span className="input">
                <AiOutlinePlus
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ cursor: "pointer" }}
                />
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

            <button className="stripe" onClick={() => navigate("/mycart")}>
              BUY WITH STRIPE
            </button>
          </div>

          <div className="tabs-container">
            <Tabs defaultActiveKey="DESCRIPTION1" items={items} />
          </div>
        </div>
      </div>

      {product?.keyIngredients?.length > 0 && (
        <div className="Product_Key_Ingredeints">
          <div className="container">
            <div className="Item">
              <div class="ingredients">
                <h3 class="heading">Key Ingredients</h3>

                <ul class="ingredients-list">
                  {product?.keyIngredients?.map((i, index) => (
                    <li key={`key-ingre${index}`}> {i} </li>
                  ))}
                </ul>
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
          {open && (
            <div className="Review_Form">
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
                  placeholder="Write You'r Comment"
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}

          {reviws?.map((i, index) => (
            <div className="Review-Box" key={`Review${index}`}>
              <div className="profile_Container">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt=""
                />
                <div>
                  <span className="title"> {i.user?._id} </span>
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
            <div className="Item" key={`Related_Product${index}`}>
              <img src="/Image/97.png" alt="" />
              <p className="head">{i.name} </p>
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
