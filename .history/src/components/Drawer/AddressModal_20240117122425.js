/** @format */

import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { updateAddress } from "../../Repository/Api";

const AddressModal = ({
  open,
  setOpen,
  title,
  addressType,
  fetchHandler,
  data,
}) => {
  const [address, setAddress] = useState("");
  const [appartment, setAppartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [sameAs, setSameAs] = useState("");

  const payload = {
    address,
    appartment,
    city,
    state,
    zipCode,
    addressType,
    sameAs,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await updateAddress(payload);
    setOpen(false);
    fetchHandler();
  };

  const checkHandler = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setSameAs("No");
    } else {
      setSameAs("Yes");
    }
  };

  useEffect(() => {
    if (open && data) {
      setAddress(data?.[0]?.address);
      setAppartment(data?.[0]?.appartment);
      setCity(data?.[0]?.city);
      setState(data?.[0]?.state);
      setZipCode(data?.[0]?.zipCode);
    }
  }, [open, data]);

  useEffect(() => {
    if(!open){
      set
    }
  },[open])

  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal"
    >
      <p className="title"> {title} </p>

      <form onSubmit={submitHandler}>
        <div>
          <p>Address</p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <p>Appartment</p>
          <input
            type="text"
            value={appartment}
            onChange={(e) => setAppartment(e.target.value)}
          />
        </div>
        <div>
          <p>City</p>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <p>State</p>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div>
          <p>Postal Code</p>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        {addressType === "Shipping" && (
          <div className="checkbox_container">
            <input
              type="checkbox"
              className="checkbox"
              onChange={checkHandler}
              checked={isChecked}
            />
            <p>Billing address same as shipping address</p>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default AddressModal;
