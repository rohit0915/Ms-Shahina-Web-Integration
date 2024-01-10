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
      <h6>Are you sure ?</h6>
      <p>Do you want to delete previous selected package of this sevice </p>
      <div>
        <button>Cancel</button>
        <button>Delete</button>
      </div>
    </Modal>
  );
};

export default CancelModal;
