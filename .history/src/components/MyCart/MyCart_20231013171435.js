/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillApple, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CheckoutModal from "../Drawer/CheckoutModal";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  addFBP,
  addGiftItem,
  checkout,
  deleteAdOn,
  deleteFBP,
  deleteGift,
  deleteItemCart,
  deleteServiceCart,
  getCart,
  getContactDetails,
  updateAdOnQuantity,
  updateDeliveyOpt,
  updateQuan,
  updateServiceQuan,
} from "../../Repository/Api";
import { Alert } from "antd";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { CartItems } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load your Stripe public key
const stripePromise = loadStripe('YOUR_PUBLIC_KEY'); 



const MyCart = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cart, setCart] = useState({});
  const [contact, setContact] = useState({});
  const dispatch = useDispatch();
  const myCart = useSelector(CartItems);

  const navigate = useNavigate();

  const fetchHandler = () => {
    dispatch(getCart(setCart));
  };

  const handleDeliveyOption = async () => {
    await updateDeliveyOpt();
    fetchHandler();
  };

  useEffect(() => {
    fetchHandler();
    setCart(myCart);
  }, [myCart]);

  useEffect(() => {
    getContactDetails(setContact);
  }, []);

  const updatedItemQuan = async (id, quantity) => {
    await updateQuan(id, quantity);
    fetchHandler();
  };

  const DeleteGiftItem = async (id) => {
    await deleteGift(id);
    fetchHandler();
  };
  const DeleteFBPItem = async (id) => {
    await deleteFBP(id);
    fetchHandler();
  };
  const deleteItem = async (id) => {
    await deleteItemCart(id);
    fetchHandler();
  };

  const updateFBPItem = async (id, quantity) => {
    await addFBP(id, quantity);
    fetchHandler();
  };

  const updateGiftQuan = async (id, quantity) => {
    await addGiftItem(id, quantity, navigate);
    fetchHandler();
  };

  const isEmpty = Object.keys(cart).length === 0;

  const DeleteServiceItem = async (id) => {
    await deleteServiceCart(id);
    fetchHandler();
  };

  const updateServiceQuantity = async (id, quantity) => {
    await updateServiceQuan(id, quantity);
    fetchHandler();
  };

  const deleteAdOnService = async (id) => {
    await deleteAdOn(id);
    fetchHandler();
  };

  const updateOnQuan = async (id, quantity) => {
    await updateAdOnQuantity(id, quantity);
    fetchHandler();
  };

  const checkoutHandler = () => {
    checkout(navigate);
  };

  const totalDiscount =
    parseFloat(cart?.membershipDiscount) + parseFloat(cart?.discount);

  const totalAmount = totalDiscount.toFixed(2);


  // Apple Payment Gateway Integration
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Fetch client secret from your server
    // This should be an endpoint that creates a PaymentIntent
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({items: []}), // Replace with actual items
    })
    .then(res => res.json())
    .then(data => {
      setClientSecret(data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen', // Replace with actual name
        },
      },
    });

    if (payload.error) {
      console.error('Payment failed:', payload.error);
    } else {
      console.log('Payment successful!');
    }
  };

  return (
    <>
    <Elements stripe={stripePromise}></Elements>
   
    </>
  );
};

export default MyCart;
