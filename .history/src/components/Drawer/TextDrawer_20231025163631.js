/** @format */

import React from "react";
import { Modal } from "antd";
import { AiOutlineClose } from 'react-icons/ai'

const TextDrawer = ({ open, setOpen }) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal Text_Drawer"
      width={700}
    >
      <div className="close_button">
        <img src="/Image/14.png" alt=""  />
        <AiOutlineClose />
      </div>
      <p className="title">Title</p>
      <p className="desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </Modal>
  );
};

export default TextDrawer;
