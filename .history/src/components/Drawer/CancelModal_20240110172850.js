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
    </Modal>
  );
};

export default CancelModal;
