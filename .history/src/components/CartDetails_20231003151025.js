import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillInstagram, AiFillClockCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";

const CartDetails = () => {
    const navigate = useNavigate();

    function BackNavigation() {
      navigate(-1);
    }
  return (
    <div>CartDetails</div>
  )
}

export default CartDetails