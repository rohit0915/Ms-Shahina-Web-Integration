import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { showMsg } from "../../Repository/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutIntent = () => {
  return (
    <div>CheckoutIntent</div>
  )
}

export default CheckoutIntent