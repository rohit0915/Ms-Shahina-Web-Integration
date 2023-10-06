/** @format */

import React from "react";

const ChangePassword = () => {

  const [ newPassword]

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

        <form>
          <div className="mt-5">
            <p>New Password</p>
            <input type="text" placeholder="Enter your New Password" />
          </div>

          <div className="mt-5">
            <p>Re-Enter Password</p>
            <input type="text" placeholder="Enter your New Password" />
          </div>

          <button className="verify">SAVE PASSWORD</button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
