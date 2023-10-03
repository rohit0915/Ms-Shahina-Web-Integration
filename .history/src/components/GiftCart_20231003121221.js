import React from 'react'

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