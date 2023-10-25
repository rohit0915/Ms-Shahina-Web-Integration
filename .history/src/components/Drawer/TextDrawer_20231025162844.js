import React from 'react'
import { Modal } from "antd";

const TextDrawer = () => {
  return (
    <Modal
    centered
    open={open}
    onCancel={() => setOpen(false)}
    className="Checkout_Modal"
  >
    <p className="title"> {title} </p>

    <form onSubmit={submitHandler}>
      <div>
        <p>Address</p>
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <p>Appartment</p>
        <input type="text" onChange={(e) => setAppartment(e.target.value)} />
      </div>
      <div>
        <p>City</p>
        <input type="text" onChange={(e) => setCity(e.target.value)} />
      </div>
      <div>
        <p>State</p>
        <input type="text" onChange={(e) => setState(e.target.value)} />
      </div>
      <div>
        <p>Zip Code</p>
        <input type="text" onChange={(e) => setZipCode(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  </Modal>
  )
}

export default TextDrawer