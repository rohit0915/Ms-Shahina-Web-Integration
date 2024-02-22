/** @format */

import React from "react";
import { Spin } from "antd";
import { Call, Mail } from "../../Helping/Mail";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { Link } from "react-router-dom";
import MainStripe from "../../Stripe/MainStripe";

const PriceDetails = ({
  isSubscriptionActive,
  subTotal,
  offerDiscount,
  membershipDiscount,
  hasProducts,
  deliveryLoader,
  handleDeliveyOption,
  pickUpFromStore,
  contact,
  addressFetcher,
  hasService,
  appointmentTimeGetter,
  appointmentSlotChanger,
  shipping,
  total,
  setModalOpen2,
  setDesc,
  shippingPrivacy,
  returnPolicy,
  isMobile,
  showProductCheckout,
}) => {
  return (
    <section className="right_container">
      <div>
        <section className="py-6 px-8 border-2 border-black price_section_cart">
          <h3 className="font-bold text-primary text-xl ">PRICE DETAILS</h3>
          <hr className="w-full h-0.5 my-6 bg-black" />

          <div className="flex flex-col gap-5 text-lg my-8">
            {isSubscriptionActive && (
              <>
                <p className="flex justify-between items-center ">
                  Sub Total
                  <span className="font-semibold ">${subTotal} </span>
                </p>

                {offerDiscount > 0 && (
                  <p className="flex justify-between items-center ">
                    Offer Discount
                    <span className="font-semibold ">${offerDiscount} </span>
                  </p>
                )}

                {membershipDiscount > 0 && (
                  <p className="flex justify-between items-center">
                    Membership Discount{" "}
                    <span className="text-green font-semibold">
                      ${membershipDiscount}{" "}
                    </span>
                  </p>
                )}
              </>
            )}
          </div>

          {hasProducts && (
            <>
              {deliveryLoader ? (
                <div className="loader">
                  <Spin size="medium" />
                </div>
              ) : (
                <>
                  <h4 className="text-xl my-2 font-bold">
                    Select Delivery Option for Product
                  </h4>
                  <div
                    className="flex justify-between gap-2  my-5 delivery_container"
                    id="delivery_option"
                  >
                    <div
                      className="relative flex gap-1 px-3 py-2 border-2 cursor-pointer"
                      onClick={handleDeliveyOption}
                    >
                      <input
                        className="absolute top-2 w-6  checked:accent-green h-6 left-2"
                        type="radio"
                        name="option"
                        checked={!pickUpFromStore}
                      />
                      <label htmlFor="doorstep">
                        <div className="flex flex-col items-center">
                          <img
                            className="w-24 h-12 stroke-green fill-green"
                            src="/asessts/truck.svg"
                            alt="truck"
                          />
                          <span className="text bold  text-xl font-bold">
                            Doorstep Delivery
                          </span>
                          <p className="text-sm">*Includes Shipping Charges</p>
                        </div>
                      </label>
                    </div>

                    <div
                      className="relative flex gap-1 px-3 py-2 border-2 cursor-pointer"
                      onClick={handleDeliveyOption}
                    >
                      <input
                        className="absolute top-2 w-6  checked:accent-green h-6 left-2"
                        type="radio"
                        name="option"
                        checked={pickUpFromStore}
                      />
                      <label htmlFor="store">
                        <div className="flex flex-col items-center">
                          <img
                            className="w-24 h-12 stroke-green fill-green"
                            src="/asessts/store location.svg"
                            alt="store"
                          />
                          <span className="text bold text-xl font-bold">
                            Pickup from Store
                          </span>
                          <p className="text-sm">*No Shipping Charges</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </>
              )}

              {pickUpFromStore ? (
                <>
                  <h3 className="text-xl font-medium">Store Location:</h3>{" "}
                  {contact?.address}
                </>
              ) : (
                <>
                  <h3 className="text-xl font-medium">Delivery Location:</h3>{" "}
                  {addressFetcher()}
                </>
              )}
            </>
          )}
          <div id="time"></div>

          {hasService && (
            <>
              <h4 className="text-xl my-2 font-bold">Service Location</h4>

              <div className="Box">
                <div className="two-sec">
                  <img src={contact?.image} alt="" />
                  <div>
                    <p className="title"> {contact?.name} </p>

                    <div className="contact-info">
                      <BsFillTelephoneFill />
                      <p onClick={() => Call()}> {contact?.phone} </p>
                    </div>
                    <div
                      className="contact-info cursor-pointer "
                      onClick={() => Mail(contact?.email)}
                    >
                      <GrMail />
                      <p> {contact?.email} </p>
                    </div>
                    <a href={contact?.instagram}>
                      <div className="contact-info">
                        <AiFillInstagram />
                        <p>nurse.shahina </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="two-sec mt-3">
                  <BiCurrentLocation style={{ fontSize: "20px" }} />
                  <div>
                    <p className="title" style={{ fontSize: "16px" }}>
                      {contact?.address}
                    </p>
                  </div>
                </div>
                <a href={contact?.mapLink} target="_blank">
                  <button className="locate_btn">LOCATE ON GOOGLE MAPS</button>
                </a>
              </div>
              <div className="schedule_1">
                <div className="right_div" style={{ width: "100%" }}>
                  {appointmentTimeGetter()}
                </div>
              </div>
            </>
          )}

          {appointmentSlotChanger()}

          <div className="font-semibold text-l flex justify-between border-black border-t-2 mt-4 pt-3">
            <span>Shipping Fee </span>
            <span className="text-green font-semibold">
              {shipping === 0 ? "Free" : `$${shipping}`}
            </span>
          </div>
          <div className="font-semibold text-2xl flex justify-between border-black border-t-2 py-8 border-b-2 my-8">
            <span className="">Total Amount</span>
            <span>${total} </span>
          </div>

          {!isSubscriptionActive && (
            <div className="memeber_notification">
              <Link to="/membership">
                Become a Member & Save upto <br />
                20% off on Products & Services
              </Link>
            </div>
          )}

          {hasProducts && (
            <div className="policy-sem-container">
              <p
                onClick={() => {
                  setDesc(shippingPrivacy);
                  setModalOpen2(true);
                }}
              >
                {" "}
                Shipping Policy
              </p>
              <p
                onClick={() => {
                  setDesc(returnPolicy);
                  setModalOpen2(true);
                }}
              >
                Return Policy
              </p>
            </div>
          )}
        </section>
      </div>
      {isMobile && (
        <>
          <div id="mobilecart">
            {hasService && (
              <div className="schedule_1 appointment_box">
                <div className="left_div" style={{ width: "100%" }}>
                  <div className="review_box">
                    <p className="title">Confirm Appointment</p>
                    <p
                      className="title"
                      style={{
                        fontSize: "20px",
                        marginTop: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      Payment Method
                    </p>
                    <span style={{ marginTop: "20px" }} className="mob">
                      You won't be charged now , payment will be collected in
                      store after your appointment.
                    </span>
                    <MainStripe />
                  </div>
                </div>
              </div>
            )}
            {showProductCheckout()}
          </div>
        </>
      )}
    </section>
  );
};

export default PriceDetails;
