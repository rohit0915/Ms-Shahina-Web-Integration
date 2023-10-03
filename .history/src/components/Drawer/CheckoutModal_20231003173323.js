/** @format */

import React from "react";
import { Modal } from "antd";

const CheckoutModal = ({ open, setOpen }) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className=''
    >
    <p>dsadasd</p>
    </Modal>
  );
};

export default CheckoutModal;
