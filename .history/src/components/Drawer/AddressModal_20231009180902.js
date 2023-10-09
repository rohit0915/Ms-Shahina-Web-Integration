/** @format */

import React from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const AddressModal = ({ open, setOpen, title }) => {
  const navigate = useNavigate();
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal"
    >
      <p className="title"> {title} </p>

      <form>
        <div>
          <p>Address</p>
          <input type="text" />
        </div>
        <div>
          <p>Appartment</p>
          <input type="text" />
        </div>
        <div>
          <p>City</p>
          <input type="text" />
        </div>
        <div>
          <p>Address</p>
          <input type="text" />
        </div>
      </form>
    </Modal>
  );
};

export default AddressModal;
