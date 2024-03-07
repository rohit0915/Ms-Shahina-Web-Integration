/** @format */

import React, { useState } from "react";
import { Modal } from "antd";
import { cancelSubscription } from "../../Repository/Api";

const SubsModal = ({ open, setOpen, fetchHandler, terms }) => {
  const [reason, setReason] = useState("");
  const [type, setType] = useState("");

  const payload = { type, reason };

  const cancelHandler = async (e) => {
    e.preventDefault();
    await cancelSubscription(payload);
    fetchHandler();
    setOpen(false);
  };

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
        <img src="/Image/14.png" onClick={() => setOpen(false)} alt="" />
      </div>

      <form onSubmit={cancelHandler}>
        <select onChange={(e) => setType(e.target.value)} required>
          <option>Select Your Reason</option>
          <option value="Overpriced">Overpriced</option>
          <option value="Other Reason">Other Reason</option>
        </select>

        <textarea
          required
          onChange={(e) => setReason(e.target.value)}
          placeholder="Please fill out this field"
        />
        <div className="input_check">
          <input aria-describedby="checkHint" type="checkbox" required />

          <span>
            <a href={terms} target="_blank" rel="">
              {" "}
              I Agree to Membership Terms and Policies
            </a>{" "}
          </span>
        </div>

        
    
        <div className="two_btn">
          <button type="submit" className="first">
            CANCEL MEMBERSHIP
          </button>
          <button type="button" onClick={() => setOpen(false)}>
            GO BACK
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default SubsModal;
