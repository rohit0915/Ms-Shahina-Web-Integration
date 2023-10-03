/** @format */

import React from "react";
import { Modal } from "antd";

const CheckoutModal = ({ open, setOpen }) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className='Checkout_Modal'
    >
    <p className="title">Checkout As</p>

    <div className="img-container">
    <div className="Item">
    <img src='/Image/99.png' alt='' />
    <p></p>

    </div>

    </div>
    </Modal>
  );
};

export default CheckoutModal;
