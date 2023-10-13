/** @format */

import React, { useState } from "react";
import { Modal } from "antd";
import { updateProfile } from "../../Repository/Api";

const SubsModal = ({ open, setOpen, fetchHandler }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const fd = new FormData();
  fd.append("firstName", firstName);
  fd.append("image", image);
  fd.append("lastName", lastName);
  fd.append("gender", gender);
  fd.append("dob", dob);
  fd.append("phone", phone);
  fd.append("email", email);

  const submitHandler = async (e) => {
    e.preventDefault();
    await updateProfile(fd);
    setOpen(false);
    fetchHandler();
  };

  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Sub_Modal"
    >
      <div className="heading">
        <p>
          Please Provide the Reason for Cancelling your Current Membership Plan
        </p>
        <img src="/Image/14.png" alt="" />
      </div>

        <form>
        <select>
            <option>Overpriced</option>
            <option>O</option>
        </select>
        </form>
    
    </Modal>
  );
};

export default SubsModal;
