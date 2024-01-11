/** @format */
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { orderFailed, orderSuccess } from "../../Repository/Api";
import { useDispatch } from "react-redux";

const CheckoutIntent = ({ url, orderId }) => {
  const [processing, setProcessing] = useState("");
  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();

  const clientSecret = url;

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      orderFailed(orderId);
      setProcessing(false);
    } else {
      setProcessing(false);
      dispatch(orderSuccess(orderId));
    }
  };

  const options = {
    style: {
      base: {
        fontSize: "16px",
        fontFamily: "Arial, sans-serif",
        color: "#32325d",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  const btnStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #000",
    width: "200px",
    display: "block",
    marginTop: "15px",
  };

  return (
    <div className="schedule_1">
      <div className="left_div" style={{ width: "100%" }}>
        <div className="review_box">
          <p className="title">Confirm Payment for Product</p>
          <form className="guestCheckout">
            <div className="upper">
              <p className="title">
                Please Enter the Details to Checkout as the Guest
              </p>

              <div className="two-sec">
                <div>
                  <p>First Name</p>
                  <input type="text" placeholder="Enter First Name" />
                </div>
                <div>
                  <p>Last Name</p>
                  <input type="text" placeholder="Enter Last Name" />
                </div>
              </div>

              <div>
                <p>Email ID</p>
                <input type="email" placeholder="Enter your Email ID" />
              </div>

              <div>
                <p>Contact Number</p>
                <input type="text" placeholder="Enter your Contact Number" />
              </div>

              <p className="title mt-5">ADD DELIVERY ADDRESS</p>

              <div>
                <p>Address</p>
                <input type="text" placeholder="Enter your Address" />
              </div>

              <div className="two-sec">
                <div>
                  <p>Apartment , Suite , etc. ( OPTIONAL )</p>
                  <input
                    type="text"
                    placeholder="Enter Apartment , Suite, etc........ "
                  />
                </div>
                <div>
                  <p>City</p>
                  <input type="text" placeholder="Enter City" />
                </div>
              </div>

              <div className="two-sec">
                <div>
                  <p>State</p>
                  <input type="text" placeholder="Enter House Number" />
                </div>
                <div>
                  <p>ZIP Code</p>
                  <input type="text" placeholder="Enter Zip Code" />
                </div>
              </div>
            </div>

            <div className="two-sec chekbox">
              <div>
                <input
                  type="checkbox"
                  className="check"
                  onClick={() => setChecked(!checked)}
                />
                <p>Save My Information :</p>
                {checked ? (
                  <>
                    <input
                      type="text"
                      className="password"
                      placeholder="Create & Enter New Password"
                    />
                    <button>SAVE PASSWORD</button>
                  </>
                ) : (
                  <p>
                    {" "}
                    Mark the Checkbox to Save your Information for easy Checkout
                    Next time!
                  </p>
                )}
              </div>
            </div>

            <button
              className="submit_btn"
              onClick={() => navigate("/guestCheckout/card-details")}
            >
              CONTINUE
            </button>
          </form>
          <form id="payment-form" onSubmit={handleSubmit}>
            <CardElement id="card-element" options={options} />
            <button disabled={processing} style={btnStyle} id="submit">
              <span id="button-text">Pay now</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutIntent;
