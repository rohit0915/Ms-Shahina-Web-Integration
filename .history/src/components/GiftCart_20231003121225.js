import React from 'react'
import { useNavigate } from 'react-router-dom';

const GiftCart = () => {
    const navigate = useNavigate();

    function BackNavigation() {
      navigate(-1);
    }

  return (
    <div>GiftCart</div>
  )
}

export default GiftCart