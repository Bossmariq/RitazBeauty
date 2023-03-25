import React from "react";
import ShippingForm from "./ShippingForm";
import ShippingInfo from "./ShippingInfo";
import Loading from "../Loading";
import { useCheckOutContext } from "../../../../context/CheckOutContext";

const ShippingSection = () => {
  const { showShippingForm, showShippingInfo, loading } = useCheckOutContext();

  return (
    <main
      className="checkout-shipping-section mt-2"
      style={showShippingForm ? { height: "60rem" } : { height: "35rem" }}
    >
      {showShippingForm && <ShippingForm />}
      {loading && (
        <div className="loading-div-shipping">
          <Loading />
        </div>
      )}
      {showShippingInfo && <ShippingInfo />}
    </main>
  );
};

export default ShippingSection;
