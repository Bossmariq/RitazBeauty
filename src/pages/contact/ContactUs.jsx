import React from "react";
import ContactUsForm from "./ContactUsForm";
import ContactUsInfo from "./ContactUsInfo";
import OurStaff from "./OurStaff";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="">
      <div className="row contact-us-container  w-8 m-auto mb-3 ">
        <div className="col l4 s12 contact-us-info-container">
          <ContactUsInfo />
        </div>
        <div className="col l6 s12 right contact-us-form-container w-8 m-auto">
          <ContactUsForm />
        </div>
      </div>
      <OurStaff />
    </section>
  );
};

export default ContactUs;
