import React from 'react'
import { useNavigate } from 'react-router-dom';

const GuestCheckout = () => {
    const navigate = useNavigate();

    function BackNavigation() {
      navigate(-1);
    }
  return (
    <div>GuestCheckout</div>
  )
}

export default GuestCheckout