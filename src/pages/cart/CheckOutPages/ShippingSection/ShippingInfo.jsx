import React from "react";
import { Link } from "react-router-dom";
import { useCheckOutContext } from "../../../../context/CheckOutContext";
import { useGlobalContext } from "../../../../context/HairShopContext";

const ShippingInfo = () => {
  const { userDetails, setShowIGModal, openShippingForm } =
    useCheckOutContext();
  const { setPreLoading } = useGlobalContext();
  const {
    address,
    apartment,
    city,
    first_name,
    last_name,
    phone_number,
    state,
  } = userDetails;
  const openIGModal = () => {
    setPreLoading(true);
    setTimeout(() => {
      setPreLoading(false);
      setShowIGModal(true);
    }, 3000);
  };
  return (
    <main className="checkout-contact-info">
      <i className="material-icons">check_circle</i>
      <div>
        <h3>Shipping Information</h3>
        <p>
          <strong>Name: </strong>
          {first_name} {last_name}
        </p>
        <p>
          <strong>Address: </strong>
          {apartment && apartment} {address} {city} {state} State
        </p>
        <p>
          <strong>Phone Number: </strong>
          {phone_number}
        </p>
        <Link onClick={() => openShippingForm()}>Edit</Link>
        <div className="mt-2 mb-1">
          <h4>Delivery Method</h4>
          <p>God Is Good Logistics</p>
          <p className="sm-text">3 - 5 Business Days</p>
        </div>
        <button
          onClick={() => openIGModal()}
          className={`card-button waves-effect waves-light btn-large`}
        >
          Continue To Payment
        </button>
      </div>
    </main>
  );
};

export default ShippingInfo;
