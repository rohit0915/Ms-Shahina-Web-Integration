/** @format */

import React from "react";
import { Modal } from "antd";
import { AiOutlineClose } from "react-icons/ai";

const TextDrawer = ({ open, setOpen, title, desc }) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal Text_Drawer"
      width={700}
    >
      <div className="close_button">
        {" "}
        <AiOutlineClose onClick={() => setOpen(false)} />
      </div>
      <p className="title"> {title} </p>
      <p className="desc">{desc}</p>
    </Modal>
  );
};

export default TextDrawer;
