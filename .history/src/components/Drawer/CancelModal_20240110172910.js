/** @format */

import React from "react";
import { Modal } from "antd";

const CancelModal = ({ open, setOpen }) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal Cancel_Modal"
    >
    <h6>Are you sure ? 
    </h6>
    <p></p>
    </Modal>
  );
};

export default CancelModal;
