/** @format */

import React, { useState } from "react";
import { Modal } from "antd";

const SubsModal = ({ open, setOpen, fetchHandler }) => {
  const [reason, setReason] = useState("");
  const [type, setType] = useState("");

  const payload ={ type , reason}

  const cancelHandler = async () => {
    await cancelSubscription();
    fechProfile();
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
        <img src="/Image/14.png" alt="" />
      </div>

      <form>
        <select onChange={(e) => setType(e.target.value)} required>
          <option>Select Your Reason</option>
          <option value="Overpriced">Overpriced</option>
          <option value="Not Worth it">Not Worth it</option>
          <option valu="Less Validity">Less Validity</option>
          <option value="Other Reason">Other Reason</option>
        </select>

        <textarea
          required
          onChange={(e) => setReason(e.target.value)}
          placeholder="Explain your Reason here......"
        />

        <div className="two_btn">
          <button type="submit" className="first">
            CANCEL PLAN
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
