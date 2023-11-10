/** @format */

import React from "react";
import { mo}

const SearchHeader = () => {
  return (
    <motion.div
      initial={{
        height: 0,
        opacity: 0,
        display: "none",
        zIndex: -100,
      }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        zIndex: 200,
      }}
      transition={{ duration: 0.3 }}
      exit={{
        height: 0,
        opacity: 0,
        display: "none",
        zIndex: -100,
      }}
      className="cart_block "
    >
      <motion.div
        className="cart-block-content"
        initial={{
          height: 0,
          opacity: 0,
          display: "none",
          zIndex: -100,
        }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          zIndex: 200,
        }}
        transition={{ duration: 0.3 }}
        exit={{
          height: 0,
          opacity: 0,
          display: "none",
          zIndex: -100,
        }}
      >
        {Items?.products?.length === 0 || !Items?.products ? (
          <ul>
            <li>No Product Added Yet ! </li>
          </ul>
        ) : (
          <>
            <ul>
              {Items?.products?.map((i, index) => (
                <li key={index}>
                  <div className="media">
                    <img
                      className=" product-image"
                      src={getImageLink(i)}
                      alt=""
                    />

                    <a className="remove-from-cart">
                      <i
                        className="fa fa-trash-o"
                        onClick={() => deleteHandler(i._id)}
                      ></i>
                    </a>

                    <div className="media-body">
                      <div className="product-name">
                        <Link to={`/product/${i?.productId?._id}`}>
                          {" "}
                          {i?.productId?.name}{" "}
                        </Link>
                      </div>
                      <div>
                        <span className="product-price">
                          £{i?.productPrice}
                        </span>
                        <span className="quantity"> x {i?.quantity} </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-total">
              <span className="label">SubTotal:</span>
              <span className="value">£{Items?.totalAmount}</span>
            </div>

            <div className="cart-buttons">
              <Link className="btn-checkout " to="/cart">
                <i className="fa fa-check-square-o"></i> Go To Cart
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SearchHeader;
