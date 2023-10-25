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
    <div className="close_button">
        <img src='/Image/14.png' alt='' onClick={() => set} />
    </div>
    <p className="title" >Title</p>
    <p className="desc"></p>
    </Modal>
  );
};

export default TextDrawer;
