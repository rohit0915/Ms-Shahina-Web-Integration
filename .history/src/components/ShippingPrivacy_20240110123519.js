import React, { useEffect } from 'react'

const ShippingPrivacy = () => {
    const [shippingPrivacy, setShippingPrivacy] = useState();

    useEffect(() => {
         getShippingPrivacy(setShippingPrivacy);
    })
  return (
    <div>ShippingPrivacy</div>
  )
}

export default ShippingPrivacy