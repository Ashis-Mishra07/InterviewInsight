import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import { FaRupeeSign } from "react-icons/fa6";

function CheckoutForm({ amount }) {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-6">
      <h2 className="m-5 font-bold flex items-center">
        Amount to Pay :&nbsp;
        <FaRupeeSign className="text-sm" /> {amount}
      </h2>
      <form className="max-w-md">
        <PaymentElement />
        <button className="w-full bg-primary text-white p-2 rounded-lg mt-2">
          Pay
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
