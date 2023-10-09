/** @format */

import React from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const AddressModal = ({ open, setOpen, title }) => {
  const navigate = useNavigate();
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal"
    >
      <p className="title"> {title} </p>

        <form>
            <p></p>
        </form>

    </Modal>
  );
};

export default AddressModal;
