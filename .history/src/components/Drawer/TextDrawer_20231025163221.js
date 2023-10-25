/** @format */

import React from "react";
import { Modal } from "antd";

const TextDrawer = ({ open, setOpen }) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal Text"
    >

    </Modal>
  );
};

export default TextDrawer;
