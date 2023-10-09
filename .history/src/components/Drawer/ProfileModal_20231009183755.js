/** @format */

import React, { useState } from "react";
import { Modal } from "antd";
import { updateProfile } from "../../Repository/Api";

const ProfileModal = ({ open, setOpen, fetchHandler }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const fd = new FormData();
  fd.append("firstName", firstName);
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
      className="Checkout_Modal"
    >
      <p className="title"> Edit Profile </p>

      <form onSubmit={submitHandler}>
        <div>
          <p>First Name</p>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <p>Last Name</p>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <p>Gender</p>
          <input type="text" onChange={(e) => setGender(e.target.value)} />
        </div>
        <div>
          <p>DOB</p>
          <input type="date" onChange={(e) => setDob(e.target.value)} />
        </div>
        <div>
          <p>Mobile Number</p>
          <input
            type="tel"
            pattern="[0-9]{10}"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <p>Email Address</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;
