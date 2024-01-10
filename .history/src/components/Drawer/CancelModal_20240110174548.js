/** @format */

import React from "react";
import { Modal } from "antd";

const CancelModal = ({ open, setOpen, deleteThis }) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal Cancel_Modal"
    >
      <img src="./Image/download-removebg-preview.png" alt="" />
      <h6>Are you sure ?</h6>
      <p>Do you want to delete previous selected package of this sevice </p>
      <div className="container_but">
        <button className="cancel" onClick={() => setOpen(false)}>
          Cancel
        </button>
        <button className="delete" onClick={() => deleteThis()}>
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default CancelModal;
