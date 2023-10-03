/** @format */

import React from "react";
import { Modal } from "antd";

const CheckoutModal = ({ open, setOpen }) => {
  return (
    <Modal
      title="Vertically centered modal dialog"
      centered
      open={open}
      onCancel={() => setOpen(false)}
    >
    </Modal>
  );
};

export default CheckoutModal;
