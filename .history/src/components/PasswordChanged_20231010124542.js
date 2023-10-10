import React from 'react'

const PasswordChanged = () => {
  return (
    <div className="forget-password">
    <p className="title">Please Enter the following Details to Verify </p>

    <form onSubmit={handleSubmit}>
      <div className="otp">
        <div>
          <p>Email Address</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <button
          className="sendOtp"
          type="button"
          onClick={() => submitHandler()}
        >
          SEND OTP
        </button>
      </div>

      <div className="mt-4">
        <p>Enter 6 Digit OTP</p>
        <input
          type="tel"
          pattern="[0-9]{4}"
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>

      <button className="verify" type="submit">
        VERIFY
      </button>
    </form>
  </div>
  )
}

export default PasswordChanged