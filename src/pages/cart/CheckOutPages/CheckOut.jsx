import React from "react";
import ShippingDetails from "./ShippingDetails";
import SubCheckout from "../SubCheckout";
import "./CheckOut.css";

const CheckOut = () => {
  return (
    <main>
      <div className="checkout-heading center">
        <h3>Checkout</h3>
      </div>
      <div className="w-8 m-auto row">
        <div className="col l8">
          <ShippingDetails />
        </div>
        <div className="col l4">
          <SubCheckout disabled={true} message={"Continue to payment"} />
        </div>
      </div>
    </main>
  );
};

export default CheckOut;
