/** @format */

import React from "react";
import { Modal } from "antd";

const MessageModal = ({ open, setOpen, msg }) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal"
    >
      <div className="close_icon_btn">
        <img src="/Image/14.png" alt="" />
      </div>
      <h6 className="title"> {msg} </h6>
    </Modal>
  );
};

export default MessageModal;
