/** @format */

import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const renderImage = (img) => {
  if (img) {
    return <img src={img?.giftPriceId?.giftId?.image} alt="" />;
  }
};

const GiftCardActions = ({ hasGiftCard, Items, deleteAction }) => {
  return (
    <>
      {hasGiftCard && <p className="Title">All Gift : </p>}
      {Items?.map((i, index) => (
        <div className="Item" key={index}>
          <div className="item-container">
            <div className="img-container">{renderImage(i)}</div>
            <div className="content">
              <p className="title"> {i.giftPriceId?.giftId?.name} </p>

              <button onClick={() => deleteAction(i.giftPriceId?._id)}>
                {" "}
                <RiDeleteBin6Fill /> DELETE ITEM
              </button>
            </div>

            <div className="price_div">
              <p className="sellingPrice">${i?.subTotal}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GiftCardActions;
