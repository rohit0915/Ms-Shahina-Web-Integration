import React from 'react'

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