import React from 'react'
import { Button } from 'antd';

const CheckoutModal = ({ open , setOpen }) => {
  return (
    <Modal
    title="Vertically centered modal dialog"
    centered
    open={modal2Open}
    onOk={() => setModal2Open(false)}
    onCancel={() => setModal2Open(false)}
  >
    <p>some contents...</p>
    <p>some contents...</p>
    <p>some contents...</p>
  </Modal>
  )
}

export default CheckoutModal