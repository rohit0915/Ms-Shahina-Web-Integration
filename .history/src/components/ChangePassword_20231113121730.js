/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userPassword } from "../Repository/Api";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()
  const payload = { newPassword, confirmPassword };

  const handleSubmit = (e) => {
    e.preventDefault();
    userPassword(payload , navigate);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <p>Change Password</p>
      </div>

      <div className="forget-password">
        <p className="title">
          Please Enter the details to Change your Password{" "}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <p>New Password</p>
            <input
              type="password"
              placeholder="Enter your New Password"
              required
              onChange={(e) => setNewPassword(e.target.value)}
            />
              <div
            className="Indivisual-Appointment"
            style={{ maxWidth: "100%", margin: "0", padding: 0 }}
          >
            <PhoneInput country={"us"} onChange={setPhone} />
          </div>
          </div>

          <div className="mt-5">
            <p>Re-Enter Password</p>
            <input
              type="password"
              placeholder="Enter your New Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="verify" type="submit">
            SAVE PASSWORD
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
