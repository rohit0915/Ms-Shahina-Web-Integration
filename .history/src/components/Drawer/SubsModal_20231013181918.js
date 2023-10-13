/** @format */

import React, { useState } from "react";
import { Modal } from "antd";

const SubsModal = ({ open, setOpen, fetchHandler }) => {
    const [ reason , setReason ] = useState("")
    const [ type , setType ] = useState("")

  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Sub_Modal"
      width={700}
    >
      <div className="heading">
        <p>
          Please Provide the Reason for Cancelling your Current Membership Plan
        </p>
        <img src="/Image/14.png" alt="" />
      </div>

      <form>
        <select>
          <option>Select Your Reason</option>
          <option>Overpriced</option>
          <option>Not Worth it</option>
          <option>Less Validity</option>
          <option>Other Reason</option>
        </select>

        <textarea />

        <div className="two_btn">
          <button>CANCEL PLAN</button>
          <button onClick={() => setOpen(false)}>GO BACK</button>
        </div>
      </form>
    </Modal>
  );
};

export default SubsModal;
