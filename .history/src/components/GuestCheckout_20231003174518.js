import React from 'react'
import { useNavigate } from 'react-router-dom';

const GuestCheckout = () => {
    const navigate = useNavigate();

    function BackNavigation() {
      navigate(-1);
    }
  return (
    <>
          <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
      
        </div>
        <p className="title">Confirm</p>
      </div>

    </>
  )
}

export default GuestCheckout