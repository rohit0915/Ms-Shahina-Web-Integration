/** @format */

import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { updateProfile } from "../../Repository/Api";
import PhoneInput from "react-phone-input-2";

const ProfileModal = ({ open, setOpen, fetchHandler, data }) => {
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

  const DOBFormater = (date) => {
    const slicedDate = date?.slice(0, 10);
    const splittedDate = slicedDate?.split("-");
    const month = splittedDate?.[1];
    const day = splittedDate?.[2];
    const year = splittedDate?.[0];
    const hasAll = month && year && day;
    return hasAll && `${month}/${day}/${year}`;
  };

  useEffect(() => {
    if (open && data) {
      setFirstName(data?.firstName);
      setLastName(data?.lastName);
      setGender(data?.gender);
      if (data?.dob) {
        setDob(DOBFormater(data?.dob));
      }
      setPhone(data?.phone);
      setEmail(data?.email);
    }
  }, [open, data]);

  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal"
    >
      <div className="close_icon_btn">
        <img src="/Image/x.svg" onClick={() => setOpen(false)} alt="" />
      </div>
      <p className="title"> Edit Profile </p>

      <form onSubmit={submitHandler}>
        <div className="thumb-image">
          <img src={data?.image} alt="" />
        </div>
        <div>
          <p>Image</p>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ color: "#fff" }}
          />
        </div>
        <div>
          <p>First Name</p>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <p>Last Name</p>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <p>Gender</p>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div>
          <p>DOB</p>
          <input
            type="text"
            pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
            value={dob}
            placeholder="MM/DD/YYYY"
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <p>Mobile Number</p>
          <PhoneInput country={"us"} onChange={setPhone} value={phone} />
        </div>
        <div>
          <p>Email Address</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;
