/** @format */

import React from "react";
import { Modal } from "antd";

const TextDrawer = ({ open, setOpen }) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal Text_Drawer"
    >
    <div className="close_button"></div>
    <p className="title" >Title</p>
    <p className="desc"></p>
    </Modal>
  );
};

export default TextDrawer;
