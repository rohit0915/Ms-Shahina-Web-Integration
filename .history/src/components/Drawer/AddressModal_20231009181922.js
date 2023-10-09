/** @format */

import React, { useState } from "react";
import { Modal } from "antd";

const AddressModal = ({ open, setOpen, title  ,addressType}) => {

    const [address , setAddress ] = useState('')
    const [appartment  ,setAppartment  ] = useState('')
    const [city , setCity  ] = useState('')
    const [ state , setState ] = useState('')
    const [ zipCode , setZipCode ] = useState('')


    const submitHandler =async () => {
        await 
        
    }

  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal"
    >
      <p className="title"> {title} </p>

      <form>
        <div>
          <p>Address</p>
          <input type="text" />
        </div>
        <div>
          <p>Appartment</p>
          <input type="text" />
        </div>
        <div>
          <p>City</p>
          <input type="text" />
        </div>
        <div>
          <p>State</p>
          <input type="text" />
        </div>
        <div>
          <p>Zip Code</p>
          <input type="text" />
        </div>
        <button>Submit</button>
      </form>
    </Modal>
  );
};

export default AddressModal;
