/** @format */

import React from "react";
import { Modal } from "antd";

const MessageModal = ({ open, setOpen, msg }) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal Cancel_Modal"
    >
      <img src="./Image/download-removebg-preview.png" alt="" />
      <h6> {msg} </h6>
    </Modal>
  );
};

export default MessageModal;
