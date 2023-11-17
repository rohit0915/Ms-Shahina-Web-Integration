/** @format */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { getProductReviews, giveReview } from "../../Repository/Api";

const ProductReviews = ({ setOpen, open, id }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [reviws, setReviews] = useState([]);

  const getReviews = () => {
    getProductReviews(id, setReviews);
  };

  useEffect(() => {
    getReviews();
  }, [id]);

  const giveRating = async (e) => {
    e.preventDefault();
    const payload = { rating, comment, productId: id };
    await giveReview(payload);
    getReviews();
    setOpen(false);
  };

  return (
    <div className="product-reviews">
      <div className="container">
        <h3 className="product-reviews__suptitle">Product Reviews</h3>
        <div className="giveReview">
          <button onClick={() => setOpen(!open)}>Write a Review</button>
        </div>
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
                placeholder="Write You'r Comment"
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
  );
};

export default ProductReviews;
