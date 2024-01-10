import React from 'react'

const CheckoutModal = ({ open, setOpen }) => {
    const navigate = useNavigate();
    return (
      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        className="Checkout_Modal"
      >
        <p className="title">Checkout As</p>
  
        <div className="img-container">
          <div className="Item" onClick={() => navigate("/login")}>
            <img src="/Image/99.png" alt="" />
            <p>Member</p>
          </div>
          <div className="Item" onClick={() => navigate("/guestCheckout")}>
            <img src="/Image/100.png" alt="" />
            <p>Guest</p>
          </div>
        </div>
      </Modal>
    );
  };

export default CancelModal