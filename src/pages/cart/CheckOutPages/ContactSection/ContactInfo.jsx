import React from "react";
import { Link } from "react-router-dom";
import { useCheckOutContext } from "../../../../context/CheckOutContext";

const ContactInfo = () => {
  const { openContactForm, contactInfo } = useCheckOutContext();
  return (
    <main className="checkout-contact-info">
      <i className="material-icons">check_circle</i>
      <div>
        <h4>Contact Information</h4>
        <p>{contactInfo}</p>
        <Link onClick={() => openContactForm()}>Edit</Link>
      </div>
    </main>
  );
};

export default ContactInfo;
