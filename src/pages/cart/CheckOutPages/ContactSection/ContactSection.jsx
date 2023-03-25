import React from "react";
import ContactForm from "./ContactForm";
import Loading from "../Loading";
import ContactInfo from "./ContactInfo";
import { useCheckOutContext } from "../../../../context/CheckOutContext";

const ContactSection = () => {
  const { showContactForm, showContactInfo, loading } = useCheckOutContext();
  return (
    <main
      className="checkout-contact-section"
      style={showContactInfo ? { height: "12rem" } : { height: "20rem" }}
    >
      <div className="center">
        {showContactForm && <ContactForm />}
        {loading && <Loading />}
      </div>
      {showContactInfo && <ContactInfo />}
    </main>
  );
};

export default ContactSection;
