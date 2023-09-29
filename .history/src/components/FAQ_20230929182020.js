import React from 'react'
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
    const navigate = useNavigate();

    function BackNavigation() {
      navigate(-1);
    }
  return (
    <div className='FAQ-Container'>

    </div>
  )
}

export default FAQ